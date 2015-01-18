---
layout: post
title: CSS编码规范
description: "CSS编码规范参考"
modified: 2014-12-23
tags: [css, standards]
image:
  feature: abstract-10.jpg
  credit: dargadgetz
  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---

# 命名规范
1. （必须）使用英文命名原则，（禁止）拼音、数字

2. （尽量）不加缩写，除非已约定的缩写方式，如：nav

3. Class命名中（禁止）出现大写字母，（必须）采用” - “对class中的字母分隔
采用该板块的英文单词或组合命名，以减号“-”分割，如：nav-tabs（导航标签/nav+tabs）

<!--more-->

# 书写规范
**<span class="highlight-pink">1.tab键用（必须）四个空格代替</span>**

因为在不同系统的编辑工具对tab解析不一样，windows下的tab键是占四个空格的位置，而在linux下会变成占八个空格的位置（除非你自己设定了tab键所占的位置长度）。建议设置Tab为4个空格的宽度。

**<span class="highlight-pink">2.属性与“{}”之间，属性名和值之间（必须）有空格，属性（必须）换行，“{}”（必须）换行显示(即使只有一个属性)</span>**

单行显示不好注释，不好备注，如：
{% highlight css %}
.nav-tabs {
    border-bottom: 1px solid #ddd;
}
{% endhighlight %}

**<span class="highlight-pink">3.属性值后面必须加分号“;”，即使只有一个</span>**

方便压缩工具"断句"。

**<span class="highlight-pink">4.关于空格：</span>**

**<span class="highlight-pink">选择器与 { 之前（必须）要有空格</span>**

**<span class="highlight-pink">属性名的 : 后（必须）要有空格</span>**

**<span class="highlight-pink">属性名的 : 前（禁止）加空格</span>**

一个原因是美观，其次IE 6存在一个bug：
{% highlight html %}
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "//www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="//www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <style type="text/css">
        <!--
        p{font-size:12px;}
        p:first-letter{font-size:300%}
        -->
    </style>
</head>

<body>
<p>对于世界而言，你是一个人；但是对于某个人，你是他的整个世界。纵然伤心，也不要愁眉不展，因为你不知是谁会爱上你的笑容。</p>
</body>
</html>
{% endhighlight %}

这段代码对<p>的首字符样式定义在IE6上看是没有效果的,而在p:first-letter和{font-size:300%}加上空格，也就是p:first-letter {font-size:300%}后，显示就正常了。 

这个问题主要是出现在IE6浏览器中，而且这位朋友也说明了一些必要的触发条件：

a.IE6浏览器 

b.选择符是带有伪类的 

c.伪类中必须是有连接符“-”的，例如:first-letter 

d.是否有空格的存在

**<span class="highlight-pink">5.针对特殊浏览器的属性，应写在标准属性之前，并让属性垂直方向对齐</span>**

这样便于多行编辑，如：
{% highlight css %}
-webkit-border-radius: 3px;
   -moz-border-radius: 3px;
        border-radius: 3px;
{% endhighlight %}

**<span class="highlight-pink">6.按照元素模型由外及内，由整体到细节的书写顺序</span>**

属性值大致分为五组：

a.位置：position,top,right,bottom,left,float

b.盒模型属性：display,margin,padding,width,height

c.边框与背景：border,background

d.段落与文本：line-height,text-indent,font,color,text-decoration,text-align…

e.其他属性：overflow,cursor,visibility,…

标准的元素属性值顺序如：
{% highlight css %}
.carousel-control {
    /*定位*/
    position: absolute;
    top: 40%;
    left: 15px;
    float: left;
    display: inline-block;
    /*盒模型*/
    margin-top: 20px;
    padding: 5px;
    width: 40px;
    height: 40px;
    border: 3px solid #fff;
    /*其他*/
    -webkit-border-radius: 23px;
    -moz-border-radius: 23px;
    border-radius: 23px;
    background: #222;
    line-height: 30px;
    font-size: 60px;
    font-weight: 100;
    color: #fff;
    text-align: center;
    opacity: 0.5;
    filter: alpha(opacity=50);
}
{% endhighlight %}

按照这样的顺序书写可见提升浏览器渲染dom的性能
	
简单举个例子，网页中的图片，如果没有设置width和height，在图片载入之前，他所占的空间为0，但是当他加载完毕之后，那块为0的空间突然被撑开了，这样会导致，他下面的元素重新排列和渲染，造成重绘（repaint）和回流（reflow）。我们在写css的时候，把元素的定位放在前头，首先让浏览器知道该元素是在文本流内还是外，具体在页面的哪个部位，接着让浏览器知道他们的宽度和高度，border等这些占用空间的属性，其他的属性都是在这个固定的区域内渲染的，差不多就是这个意思吧~
	

**<span class="highlight-pink">7. 多选择器规则之间（必须）换行</span>**

如：
当样式针对多个选择器时每个选择器占一行
{% highlight css %}
/* 推荐的写法 */
a.btn,
input.btn,
input[type="button"] {
    ......
}
{% endhighlight %}

**<span class="highlight-pink">8. （禁止）使用冗余低效的CSS写法</span>**

{% highlight css %}
ul li a span {
}
{% endhighlight %}
	

**<span class="highlight-pink">9.（禁止）使用css原生import</span>**

使用css原生import有很多弊端，与 <link> 标签相比，@import 指令要慢很多，不光增加了额外的请求次数，还会导致不可预料的问题。替代办法有以下几种：

a.使用多个 <link> 元素

b.通过 Sass 或 Less 类似的 CSS 预处理器将多个 CSS 文件编译为一个文件

c.通过 Rails、Jekyll 或其他系统中提供过 CSS 文件合并功能

推荐文章：[Don't use @import](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/)

**<span class="highlight-pink">10. 小图片（必须）sprite 合并</span>**

推荐文章：NodeJs智能合并CSS精灵图工具[iSpriter](http://www.alloyteam.com/2012/09/update-ispriter-smart-merging-css-sprite/)

**<span class="highlight-pink">11. （不推荐）ie使用filter,（ 禁止）使用expression</span>**

这里主要是效率问题。 

**<span class="highlight-pink">12. （禁止）使用行内（inline）样式</span>**

**<span class="highlight-pink">13. （推荐）reset.css样式</span>**

[reset.css](http://www.cssreset.com/)

CSS样式重置，因为浏览器总是带有一些默认的样式。

**<span class="highlight-pink">14. 链接的样式，（务必）按照这个顺序来书写</span>**

{% highlight css %}
a:link -> a:visited -> a:hover -> a:active
{% endhighlight %}
	
	

# 注释规范
**<span class="highlight-pink">1.文件头部注释</span>**

主要用来阐述此文件的名称，版本，作者。按照以下形式书写：
{% highlight css %}
/*!
* family.css
* Version 2014122614
* Designed by @vicky <vicky@163.com>
*/
{% endhighlight %}
	
其中版本号的格式为：yyyyMMDDHH
	
**<span class="highlight-pink">2.行内注释</span>**

行内注释主要说明本段代码所在的模块，如：
{% highlight css %}
/*家谱主页*/
{% endhighlight %}
	
	

参考资料：

http://yuwenhui.github.io/2013/09/13/css-syntax/

http://www.cnblogs.com/hustskyking/p/css-spec.html

http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/

http://codeguide.bootcss.com/#css

http://coderlmn.github.io/code-standards/

https://github.com/ecomfe/spec/blob/master/css-style-guide.md



