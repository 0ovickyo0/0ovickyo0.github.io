---
layout: post
title: 在sublime下搭建java编译环境
description: "在sublime下搭建java编译环境，既可以写代码，又可以编译代码了哟！"
modified: 2015-02-04
tags: [sublime, java]
image:
    feature: abstract-5.jpg
    background: bg-5.png
---

因为不想安装idea，eclipse，netbeans，萌生的用sublime写编译java程序。

本文详细介绍了如何配置java编译环境以及如何在sublime下进行java程序的编译。

<!--more-->

# STEP1.设置环境变量
新建系统变量JAVA_HOME 和CLASSPATH
变量名：JAVA_HOME
变量值：C:\Program Files\Java\jdk1.8.0_31
变量名：CLASSPATH
变量值：.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;

选择“系统变量”中变量名为“Path”的环境变量，双击该变量，把JDK安装路径中bin目录的绝对路径，添加到Path变量的值中，并使用半角的分号和已有的路径进行分隔。
变量名：Path
变量值：%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;
检查是否配置成功：在cmd中输入 java 看是否出现版本信息

# 2.创建批处理或Bash Shell脚本文件

打开任意的文本编辑器，输入下面的内容，并保存为runJava.bat文件。
{% highlight xml %}
@ECHO OFF
cd %~dp1
ECHO Compiling %~nx1.......
IF EXIST %~n1.class (
DEL %~n1.class
)
javac %~nx1
IF EXIST %~n1.class (
ECHO -----------OUTPUT-----------
java %~n1
)
{% endhighlight %}
然后把runJava.bat批处理文件移动到JDK的bin目录（C:\Program Files\Java\jdk1.8.0_31\bin）。

# 3. 在Sublime Text 2编辑器中配置相应的Java构建环境

即添加刚才创建的批处理脚本。
(1) 打开Sublime的包目录，使用菜单Perferences->Browse Packages
(2) 选择Java目录
(3) 打开JavaC.sublime-build，并替换下面的行
原：
{% highlight xml %}
{
    "cmd": ["javac", "$file"],
    "file_regex": "^(...*?):([0-9]*):?([0-9]*)",
    "selector": "source.java"
}
{% endhighlight %}
修改后：
{% highlight xml %}
{
    "cmd": ["runJava.bat", "$file"],
    "file_regex": "^(...*?):([0-9]*):?([0-9]*)",
    "selector": "source.java"
}
{% endhighlight %}

# 4. 写一个Java程序测试一下

编写一个名为Demo.java的程序，内容如下：
{% highlight xml %}
public class Demo{
    public static void main(String[] args){
        System.out.println("This is my test program.");
        int a = 10;
        int b = 20;
        int c = a + b;
        System.out.println("Result : " + c);
    }
}
{% endhighlight %}
编译和运行Java程序，使用Ctrl+B。
结果输出如图所示：
<figure>
	<a href="/images/post/2015-02-04-1.png"><img src="/images/post/2015-02-04-1.png" alt=""></a>
</figure>