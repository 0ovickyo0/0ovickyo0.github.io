---
layout: post
title: 我的整站制作之路(二)
description: "整站制作步骤，实战，例程"
modified: 2014-12-25
tags: [css, html. javascript]
image:
  feature: abstract-6.jpg
  background: bg-6.png
---

打开psd文件，确定需求，确定可重用组件后，阅读(CSS编码规范)[]后，开始动手写代码。


一般是从上到下，从左到右的顺序来进行编码。

分析整个设计图可分为<span class="highlight-pink">Header,Silder,Services,Portfolio,About,Contact,Footer </span>7个部分。

STEP1.构造这七个部分的div块

STEP2.写header部分，首先看head部分包含logo和nav，以及header-bottom。写好它们的包裹关系。

STEP3.进行样式重置，注意，样式重置仅重置你所写的样式。禁止使用*选择符进行样式重置。推荐代码：[reset.css](http://www.cssreset.com/)。

STEP4.反复对设计稿进行测量、取色工作，编写css，直到工作完成。

在这一部分中，可能会用到的PS快捷键如下：
I 拾色器

F8 显示/隐藏“信息”面板
 
PS单位设置为像素：编辑/首选项，找到单位与标尺，直接修改

遇到问题：

A.header-wrap高度测量为89px（= =！！简直不能忍，我这里不打算支持IE6，因此89px就89px把。有兴趣的戳[IE6 1px bug](http://www.yuzi.me/Share/ie6qishubug.html)）。

B.当屏幕宽度小于某值时，在chrome下，会使得导航栏被挤到下一行。导致样式错乱。解决方法：给body一个min-width值，这样，总能够使得页面容纳下导航的宽度。

STEP5.滚动栏。需求是要能够左右滑动，因此你需要水平布置两个看不见的div来确定鼠标位置和点击事件，具体写法请戳代码。这里设计栏中只给了一屏的显示，不过还好是2个手机，因而我将2个手机看成是独立的部分，点左右滑动能让手机滚动。

不过，这样设计可能有违设计师意图把，应该点击左右滚动的时候整屏的变换。那么好吧，我在这里再加上一些自己搜索的图片，若何设计稿主题不搭，还望大家见谅。

遇到问题：

A.silder中的左右箭头以白色为底切的图，格式为png-8，放到html中出现锯齿现象。解决方法：放在底色上切图，或者保存图片时保存.gif或png-24格式。



参考资料：妙味整站制作/google
声明：Demo中PSD源文件来自互联网，若有不慎侵犯您权益的地方，请来信或留言告知，我会在第一时间内进行处理以维护您的正当权益。

相关文章：

[我的整站制作之路(一) --- 构建项目结构，打算运用到的知识]({{ site.url }}/make-a-total-site-1/)

[我的整站制作之路(二) --- 网站静态html+css布局](#)

[我的整站制作之路(三) --- 涉及到的javascript编写及注意事项]({{ site.url }}/make-a-total-site-3/)

[我的整站制作之路(四) --- 兼容性测试]({{ site.url }}/make-a-total-site-4/)

[我的整站制作之路(五) --- 优化及发布]({{ site.url }}/make-a-total-site-5/)