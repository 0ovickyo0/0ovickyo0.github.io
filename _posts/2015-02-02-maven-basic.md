---
layout: post
title: maven 基础
description: "maven基础, 从零开始学maven"
modified: 2015-02-02
tags: [maven, java]
image:
  feature: abstract-10.jpg
  credit: dargadgetz
  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---

万恶的打包，万恶的maven，看我来收了你！

本文主要介绍了一个从来没有使用过maven的人使用maven的经历。只要你有一点点的java基础就可以！
<!--more-->

# 背景
某服务器用到ssh框架，idea自带打包工具会导致spring版本冲突，spring2.5之后包都是分开的，每个包都有两个重复的文件，打包的时候，后面的会覆盖前面的，导致文件丢失。
解决办法有2：

<span class="highlight-pink">1.换回spring2.0</span>

项目中使用的是spring4.0，换回去会导致很多特性不支持，比如@Component。简直坑。此路不通。

<span class="highlight-pink">2.项目转成maven项目，使用maven打包工具，maven-shade-plugin</span>

相关项目难题请戳[JAVA RMI SSH 实践]({{ site.url }}/java-rmi-practice)

# maven 介绍
概述Maven是一个构建工具，服务与构建。使用Maven配置好项目后，输入简单的命令，如:mvn clean install，Maven会帮我们处理那些繁琐的任务。

Maven是跨平台的。

Maven最大化的消除了构建的重复。

Maven可以帮助我们标准化构建过程.所有的项目都是简单一致的,简化了学习成本。

总之，Maven作为一个构建工具，不仅帮我们自动化构建，还能抽象构建过程，提供构建任务实现。他跨平台，对外提供一致的操作接口，这一切足以使他成为优秀的，流行的构建工具。

但是Maven不仅是构建工具，他还是一个依赖管理工具和项目信息管理工具。他还提供了中央仓库，能帮我们自动下载构件。

使用Maven还能享受一个额外的好处，即Maven对于项目目录结构、测试用例命名方式等内容都有既定的规则，只要遵循了这些成熟的规则，用户在项目间切换的时候就免去了额外的学习成本，可以说是约定优于配置（Convention Over Configuration）。

....(此处省略10000字)

最后说一句：<span class="highlight-pink">我学习maven最大的动力是我需要打包！！打包！！</span>

# 环境

IDEA 13，Win7-32bit，Maven3.2.3，Jdk1.6

# maven环境搭建

<span class="highlight-pink">STEP1.下载：</span>

http://maven.apache.org/download.cgi

<span class="highlight-pink">STEP2.解压缩：</span>

<figure>
	<a href="/images/post/2015-02-02-1.png"><img src="/images/post/2015-02-02-1.png" alt=""></a>
</figure>

<span class="highlight-pink">STEP3.配置环境变量：</span>

新建：M2_HOME：C:\maven (此处路径要换成自己的解压缩的那个路径)

在Path中加入：;%M2_HOME%\bin

(注：此处没有截图，对此有疑问者可参考java环境变量配置，是一样一样的。)

一路确定之后，打开cmd窗口，输入mvn -v
<figure>
	<a href="/images/post/2015-02-02-2.png"><img src="/images/post/2015-02-02-2.png" alt=""></a>
</figure>

现在，你就可以在你的系统中使用maven啦！

# 使用idea创建maven管理的Java Web项目
STEP1. 新建项目，选择Maven，点击Next继续。

注意这里的Module就是项目的意思，等同于MyEclipse中的Project。

<figure>
	<a href="/images/post/2015-02-02-3.png"><img src="/images/post/2015-02-02-3.png" alt=""></a>
</figure>

STEP2.GroupID是项目组织唯一的标识符，实际对应JAVA的包的结构，是main目录里java的目录结构。

ArtifactID就是项目的唯一的标识符，实际对应项目的名称，就是项目根目录的名称。

一般GroupID就是填com.leafive.test这样子。

填写完成后next。

<figure>
	<a href="/images/post/2015-02-02-4.png"><img src="/images/post/2015-02-02-4.png" alt=""></a>
</figure>

STEP3.填写项目名称，点Finish

<figure>
	<a href="/images/post/2015-02-02-5.png"><img src="/images/post/2015-02-02-5.png" alt=""></a>
</figure>

STEP4.下图就是创建完毕后的Maven项目，双击pom.xml查看POM文件内容，可以自行添加Maven的依赖。

但是发现，没有Web目录，怎么办？看后面。

<figure>
	<a href="/images/post/2015-02-02-6.png"><img src="/images/post/2015-02-02-6.png" alt=""></a>
</figure>

STEP5.在项目名称上右击，选择Add Framework Support…

<figure>
	<a href="/images/post/2015-02-02-7.png"><img src="/images/post/2015-02-02-7.png" alt=""></a>
</figure>

STEP6.在Add Framework Support对话框中勾选Web Application，版本选择3.0并勾选Create web.xml。

<figure>
	<a href="/images/post/2015-02-02-8.png"><img src="/images/post/2015-02-02-8.png" alt=""></a>
</figure>

STEP7.点击OK后，看到如下界面，项目中出现了web文件件，是不是很熟悉了，和MyEclipse中的项目结构类似。

<figure>
	<a href="/images/post/2015-02-02-9.png"><img src="/images/post/2015-02-02-9.png" alt=""></a>
</figure>

STEP8.打开pom.xml文件，添加必须的Maven依赖。也叫Maven坐标，由groupId、artifactId和version唯一确定一组jar依赖文件。

原始的pom.xml:
<figure>
	<a href="/images/post/2015-02-02-10.png"><img src="/images/post/2015-02-02-10.png" alt=""></a>
</figure>

更改后的pom.xml（这个包有些依赖版本低了，且没有再运行的时候下载下来，但是貌似并没有对整个项目产生影响，后来测试发现，即使将下面文件中的依赖包全部删除，程序也是可以正常运行的，既然没有用到这些依赖，那么我们还是不要添加好了。）：
<figure>
	<a href="/images/post/2015-02-02-11.png"><img src="/images/post/2015-02-02-11.png" alt=""></a>
</figure>

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>SpringMvcDemo</groupId>
    <artifactId>SpringMvcDemo</artifactId>
    <version>1.0-SNAPSHOT</version>

    <dependencies>
        <dependency> <!-- junit 4.7 -->
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.11</version>
            <type>jar</type>
            <scope>test</scope>
        </dependency>

        <dependency> <!-- spring 3.2 -->
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>3.2.1.RELEASE</version>
            <type>jar</type>
        </dependency>

        <dependency>
            <groupId>log4j</groupId>
            <artifactId>log4j</artifactId>
            <version>1.2.17</version>
            <type>jar</type>
        </dependency>

        <dependency> <!--Jackson核心包-->
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-core</artifactId>
            <version>2.1.3</version>
        </dependency>
        <dependency> <!--Jackson数据绑定包-->
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.1.3</version>
        </dependency>
        <dependency> <!--Jackson注解包-->
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-annotations</artifactId>
            <version>2.1.2</version>
        </dependency>

    </dependencies>

</project>
{% endhighlight %}
STEP9.然后在index.jsp文件中随便加点内容
<figure>
	<a href="/images/post/2015-02-02-12.png"><img src="/images/post/2015-02-02-12.png" alt=""></a>
</figure>
STEP10.下面配置Tomcat服务器，本例使用Tomcat6
<figure>
	<a href="/images/post/2015-02-02-13.png"><img src="/images/post/2015-02-02-13.png" alt=""></a>
</figure>
<figure>
	<a href="/images/post/2015-02-02-14.png"><img src="/images/post/2015-02-02-14.png" alt=""></a>
</figure>
<figure>
	<a href="/images/post/2015-02-02-15.png"><img src="/images/post/2015-02-02-15.png" alt=""></a>
</figure>
<figure>
	<a href="/images/post/2015-02-02-16.png"><img src="/images/post/2015-02-02-16.png" alt=""></a>
</figure>
输入的是/工程名
<figure>
	<a href="/images/post/2015-02-02-17.png"><img src="/images/post/2015-02-02-17.png" alt=""></a>
</figure>

点完ok之后，直接run：
<figure>
	<a href="/images/post/2015-02-02-18.png"><img src="/images/post/2015-02-02-18.png" alt=""></a>
</figure>
打开浏览器：
<figure>
	<a href="/images/post/2015-02-02-19.png"><img src="/images/post/2015-02-02-19.png" alt=""></a>
</figure>

# 使用idea创建maven管理的Java Web SSH项目


# 使用idea将一个已有的java web项目转换成maven管理的项目


# maven中如何把本地jar打包到仓库/在maven中使用本地仓库


# 不得不说的构建依赖的技巧
<span class="highlight-pink">1.到哪里去找jar包？</span>

推荐[grepcode](http://grepcode.com/)，输入类名包名，字段名啥都行，都能给你找到。

<span class="highlight-pink">2.我找到了jar包，但是不知道依赖怎么写，怎么办？</span>

依赖的格式都是相当固定的，如果你找到了你想要的包，那么可以直接在google中搜索：

<artifactId>spring-jdbc</artifactId> <version>3.0.5</version>

spring-jdbc就是你的包名，3.0.5是版本。可以参看别人依赖是怎么写的。一般都能搜到。

<span class="highlight-pink">3.我找到了jar包，但是不知道使用哪个版本？</span>

这个问题不好解决。我主要采用如下方法：

看官方文档，看别人评价，看别人使用包的版本搭配。

因为项目中使用SSH等好多包，经常发生不兼容的问题，只能通过google和自己一个个搭配包版本来解决。

如果你知道更好的办法，欢迎留言告知:)

# maven实践中遇到的坑
<span class="highlight-pink">1.jar包版本不兼容</span>

如果真的无法从maven网络大仓库上下载下来你需要的包，我认为如果这个项目是你新建的，那一定是你构建项目或编码有问题；如果这个项目是由一个已有的项目转化而来（已有的项目能够正常运行），那么最坏的打算就是maven项目中的包全部使用你的本地包。使用本地包的缺点在于违背了使用maven的最大优势。

# 相关阅读
[JAVA RMI SSH 实践]({{ site.url }}/java-rmi-practice)

# 参考文章
[eclipse maven 基础](http://blog.csdn.net/yuguiyang1990/article/details/8775046)