---
layout: post
title: JAVA RMI SSH 实践
description: "项目中遇到的部署RMI的一些个问题及我的解决方案，希望能给大家带来帮助"
modified: 2015-01-11
tags: [java, rmi, ssh]
image:
  feature: abstract-10.jpg
  credit: dargadgetz
  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---

本文章主要总结了在调试RMI过程中遇到的问题。如果您想了解关于新手学RMI问题。请戳[RMI 基础 入门](({{ site.url }}/rmi-basic/))

# 背景

在项目中用到了某DX公司的接口，由于这个接口不能良好的支持并发以及查询的受限，所以在我们的项目中，需要把项目中相关服务单独抽取出来，作为一个独立的应用单独部署，以达到将并发集中在本地服务器，与DX的接口实现非并发的通信。

<!--more-->

# 解决方案

从主服务器中独立DX业务，将其单独作为一个应用，主服务器和DX应用之间通过RMI实现调用。

DX应用中，使用队列进行缓存排队。

# RMI 基础

[RMI 基础 入门](({{ site.url }}/rmi-basic/))

# 遇到问题
注：以下问题是在调试项目过程中遇到的，并不仅限于RMI部分，提供的解决参考方案，若有错误或不详部分，可以在评论中注明。

<span class="highlight-pink">1.将代码使用 run application 的方式运行，没有任何错误。但是部署在tomcat中，则发生服务器端拒绝访问，连接超时的现象（connect timeout，refuse connect）</span>

tomcat有访问限制，需要修改其policy文件才能让访问成功，但我测试的时候，修改catalina.policy为
{% highlight bash%}
grant { 
  permission java.util.PropertyPermission "catalina.base", "read"; 
  permission java.util.PropertyPermission "catalina.home", "read"; 
  permission java.net.SocketPermission  "*:3355-9999", "accept, connect, listen,resolve"; 
}; 
{% endhighlight %}
也不能使得它正常工作，遂放弃在tomcat中运行。以java application方式运行。

<span class="highlight-pink">2.使用局域网A早上测试正常，下午出现拒绝访问，下午换用局域网B，测试正常，晚上又出现拒绝访问，晚上换用局域网C，测试正常，晚上换回局域网A也测试正常。</span>

这个问题比较诡异，我仅在第一天测试的时候遇到这样的问题，后面几天未遇到，猜测是由于客户端缓存引起的。

<span class="highlight-pink">3.打包jar后，运行出现xml文件无法找到</span>

使用URL定位方式可解决

<span class="highlight-pink">4.传输数据有自定义的类</span>

所有的传输的类和接口均应该事先Serializable接口

<span class="highlight-pink">5.客户端出现classNotFoundException</span>

服务端和客户端的接口文件的存储目录应该完全一致。
即：在服务端接口是com.ly.rmi.serv.IMsgSrv,那么接口文件IMsgSrv在客户端的位置应该也是com.ly.rmi.serv.IMsgSrv。

<span class="highlight-pink">6.加载两个配置文件xml</span>

不能够直接new 两个 ClassPathXmlApplicationContext，必须在一个配置文件中使用<import>方式引入另外一个，在程序中只能有一个ClassPathXmlApplicationContext。
例如某java类中使用到：
{% highlight java%}
new ClassPathXmlApplicationContext("file:D:/MsgServerV1.0//WebContent/WEB-INF/applicationContext.xml");
{% endhighlight %}
但是我想同时使用applicationContext.xml和rmi.xml，那么，需要在applicationContext.xml中添加：
{% highlight xml%}
<import resource="rmi.xml"/>
{% endhighlight %}

<span class="highlight-pink">7.事务执行时间过长</span>

分解事务，假设我执行时需要向数据库中写入2000条数据，那么，可能由于网络原因、服务器较远等，导致写2k条数据需要几十分钟（时机是否需要这么长时间没有考证过。。这里只是一个比喻），但是呢，mysql数据库一次又不能连接这么长的时间，那么就会导致数据库连接断开，事务执行不成功。
错误代码：
{% highlight bash%}
    could not roll back Hibernate transaction: nested exception is org.hibernate.TransactionException: JDBC rollback failed 
    .....
    Caused by ... : No operations allowed after connection closed.
{% endhighlight %}

解决办法是：将2000条数据分批插入，一次插入50条，保证一次数据库连接时间肯定能够完成这50条数据的插入，注意，我这里的50条是实际测出来的，MySQL的允许连接时间是3分钟。

有了拆分事务的想法，那么应该如何把事务分开呢？

尝试方法一：将service的事务移至dao中，失败，系统仍然认为是一个事务

尝试方法二：在service外再包裹一层controller，controller独立于事务管理之外，在controller中条用service的方法进行数据保存，可行，测试保存2w条数据都没有出过问题！就是时间太长了！好几个小时！

<span class="highlight-pink">8.下标越界</span>

这个问题和上一个问题事务执行时间过长关系很大。

因为需要分割对象，在程序中做对象副本的时候直接使用了"="，导致数组下标越界。截取对象一定要用new！

<span class="highlight-pink">9.默认并发数太少 </span>

在进行并发测试的时候，一次最多只能执行25条，远达不到要求。

解决方法使用静态list存储，并使用线程池来执行任务。在client端调用的时候，将请求对象加入list等待，然后后续使用线程池方式取出对象并执行对应任务。

<span class="highlight-pink">10.打包jar的时候出现大坑</span>
{% highlight bash%}
unable to locate SpringNamespaceHandler for XML...
{% endhighlight %}
出这个错误的原因是：spring版本不统一、缺少对应的spring依赖。[请戳](http://chenzhou123520.iteye.com/blog/1971322)

那么如何解决呢？有两种方法：

方法一：换回Spring2.0

不支持annotation，宣告失败

方法二：使用maven-shade-plugin进行打包

不得已使用了方法二，但是确实是可行的！详细的maven学习及打包请戳[maven 初探]({{ site.url }}/maven-basic)。

