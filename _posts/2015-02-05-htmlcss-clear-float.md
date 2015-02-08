---
layout: post
title: html css 清浮动(float)技巧
description: "各种清浮动的方法及问题"
modified: 2015-02-05
tags: [html, css]
image:
  feature: abstract-6.jpg
  background: bg-6.png
---

本篇文章总结了一些在写前端界面的时候清浮动遇到的一些问题，以及清浮动的7种方法。

# 浮动原理
元素加了浮动会脱离文档流，按照指定的方向(left/right)移动，直到碰到父级的边界或者另外一个浮动元素停止。

<!--more-->

# 清浮动的方法

总的来说，清浮动有以下7种方法。以下代码均写于页面中，可以通过查看源码查看代码。

## 1.给浮动元素的父级加浮动，子元素可以撑开父级高度
问题：父级太多的话加的没完没了了，margin失效

<div style="border:1px solid black;">
    <div style="width:50px; height:50px; background-color:#7c1; float:left;">
    </div>
</div>


## 2.给浮动元素的父级加display:inline-block
问题：显示和上面那个一样，但是不用给父级的父级加浮动，margin仍然失效

<div style="border:1px solid black;">
    <div style="width:50px; height:50px; background-color:#7c1; float:left;">
    </div>
</div>


## 3.在浮动元素下方加一个清浮动样式的div:
{% highlight css %}
.clear{
    height: 0px; clear: both; font-size: 0;
}
{% endhighlight %}
<div style="border:1px solid black;">
    <div style="width:50px; height:50px; background-color:#7c1; float:left;">
    </div>
    <div style="height: 0px; clear: both; font-size: 0;"></div>
</div>

问题：
IE6下有最小高度问题： 19px
在IE6下高度小鱼19px的元素会被当做19px来处理

解决方法：
font-size:0; 只能处理到最小高度2px，仍然无法完全去掉

## 4.在浮动元素下边加上：
{% highlight html %}
<br clear="all"/>
{% endhighlight %}
使用起来快准好，但是不符合W3C标准，将结构和样式分离

<div style="border:1px solid black;">
    <div style="width:50px; height:50px; background-color:#7c1; float:left;">
    </div>
    <br clear="all"/>
</div>

## 5.通过after伪类及给浮动元素父级加上zoom:1;<span class="highlight-pink">（最常用的，最推荐的方法）</span>：
浮动元素父元素添加clear样式，样式：
{% highlight html %}
<div class="box clear">
    <div class="div"></div>
</div>
{% endhighlight %}

{% highlight css %}
.clear {
    zoom:1; /*IE67兼容*/
}
.clear:after{
    content: "";
    display: block;
    clear: both;
}
{% endhighlight %}

<style>
.clear {
    zoom:1; /*IE67兼容*/
}
.clear:after{
    content: "";
    display: block;
    clear: both;
}
.box {
    border:1px solid black;
}
</style>

<div class="box clear">
    <div style="width:50px; height:50px; background-color:#7c1; float:left;">
    </div>
    <br clear="all"/>
</div>

问题：
IE67下不支持。
IE67下浮动元素的父级有宽度就不用清浮动，

## 6.给浮动元素父级加overflow:hidden or auto; 同时父级元素不要给高度
首先看下overflow是干嘛的：

overflow:auto; 溢出显示滚动条，不溢出不显示滚动条

scroll 溢出不溢出都显示滚动条

hidden 溢出隐藏

检测浮动元素的溢出，overflow:auto; 可以检测出浮动元素的溢出

<div style="border:1px solid black;overflow:hidden;">
    <div style="width:50px; height:50px; background-color:#7c1; float:left;">
    </div>
    <br clear="all"/>
</div>

overflow问题：IE6下不行，包不住浮动元素，解决办法：配合zoom:1;

## 7.定位清浮动
给父级加上：position:absolute, position:fixed

<div style="border:1px solid black;position:absolute;">
    <div style="width:50px; height:50px; background-color:#7c1; float:left;">
    </div>
    <br clear="all"/>
</div>
