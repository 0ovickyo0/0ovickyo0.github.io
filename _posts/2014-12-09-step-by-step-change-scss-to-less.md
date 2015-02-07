---
layout: post
title: 一步一步，将scss源文件修改成less源文件
description: "一步一步，将scss源文件修改成less源文件"
modified: 2014-12-09
tags: [css, sass, less]
image:
  feature: abstract-2.jpg
  background: bg-2.png
---

这是一篇有关于我将本主题的Scss样式文件修改成LESS样式文件的故事。

在这个工程还未被我改变的时候，在配置文件`_config.yml`中指定scss文件和main.css文件的关系。
{% highlight css %}
sass:
    sass_dir: _sass
    style: compressed
{% endhighlight %}

# Step1. 观察
在做更改之前，我们需要先观察项目结构以及了解我们需要做哪些修改。

<!--more-->

最后的样式文件_site/asset中应该是这样的结构：
<figure>
	<a href="/images/post/2014-12-09-1.png"><img src="/images/post/2014-12-09-1.png" alt=""></a>
</figure>


观察文件 assets/css/main.scss发现其引入的都是_scss下的样式。
_scss的目录结构如下：
<figure>
	<a href="/images/post/2014-12-09-2.png"><img src="/images/post/2014-12-09-2.png" alt=""></a>
</figure>

# Step2 改写_scss为less
将_scss下文件全改写为less，并让这些less文件能够被 assets/css/main.less引入（最后构建一个grunt任务，最后编译成main.css和main.min.css并放在assets/css/目录下应该就ok）。

新建目录：assets/less。（因为在配置_config.yml中已经将less文件exculd了，所以此处新写的less文件并不会加大你站点的占用空间）。

在assets/less目录下新建与_sass目录相同的目录树，并将_xxx.scss文件名修改为xxx.less，还要在其中增加main.less（对应assets/css/main.scss），如下：

<figure>
	<a href="/images/post/2014-12-09-3.png"><img src="/images/post/2014-12-09-3.png" alt=""></a>
</figure>

在这个操作中，具体需要做的替换有：
具体做的替换有：

* 将$变量定义符换成@
* 将 @mixin xxx替换为.xxx
* @media #{$large} ---> @media @media
* @include rounded(4px);--->.rounded(4px);
* .#{$fa-css-prefix} ---> .@{fa-css-prefix}
* @import "variables"; ---> @import "variables.less";
* .#{$fa-css-prefix}-glass ---> .@{fa-css-prefix}-glass
* @fa-border-color:     #eee !default; ---> @fa-border-color:     #eee;
* @extend .btn; ---> .btn;
* color: rgba(@white,0.9);--->color: fade(@white,0.9); (里面有数字的不用变化rgba到fade)

# Step3 构建grunt任务
创建assets/Gruntfile.js和assets/package.json（具体编码内容可参看我的github项目，这里就不列出来了）。

安装完依赖包以后，进行编译，magnific-popup/magnific-popup.less总是不通过，其主要问题是@if语句不知道如何转换为when语句，试了好几次都没能成功，只好直接上其插件网上下载编译好的css文件。

改完错误，编译成功之后发现样式全都变了：
<figure>
	<a href="/images/post/2014-12-09-4.png"><img src="/images/post/2014-12-09-4.png" alt=""></a>
</figure>


这意味着第一次的尝试还是有些许的问题。

接下来，我们进一步检查less文件的正确性。发现如下地方未能更改正确：

### 1.dl-menu.less文件中：
{% highlight css %}
    .dl-menu {
        ….
        box-shadow: 0 12px 24px fade(@black,0.4); ---> box-shadow: 0 12px 24px fade(@black,35);
        ….
{% endhighlight %}
fade是less中的一个颜色函数，其作用是设置淡出颜色的透明度，第一个参数是一个颜色参数，第二个参数是一个量值，取值范围为0~100%。例如：fade(hsl(90, 90%, 50%), 10%)  Output: rgba(128, 242, 13, 0.1)。（啊，遇到颜色有点晕晕的。）
box-shadow 向框添加一个或多个阴影。该属性是由逗号分隔的阴影列表，每个阴影由 2-4 个长度值、可选的颜色值以及可选的 inset 关键词来规定。省略长度的值是 0。

### 2.dl-menu.less文件中
{% highlight css %}
    .dl-submenu {
        …
        box-shadow: 0 12px 24px fade(@black,0.4); --->box-shadow: 0 12px 24px fade(@black,35);
    }
{% endhighlight %}

### 3.mixins.less文件中：
	增加了
{% highlight css %}
	// .opacity(VALUE);
	.opacity(@opacity : .5) {
	-webkit-opacity : @opacity;
	-moz-opacity : @opacity;
	opacity : @opacity; }
{% endhighlight %}

### 4.page.less文件中：
{% highlight css %}
text-shadow: 1px 1px 4px fade(@base-color,0.6); --->text-shadow: 1px 1px 4px fade(@base-color,60);

background-color: fade(@base-color,0.3); --->background-color: fade(@base-color,30);

background-color: fade(@base-color,0.5); ---> background-color: fade(@base-color,50);

.box-shadow(0 0 1px fade(@base-color,0.2)) --->.box-shadow(0 0 1px fade(@base-color,20))

box-shadow: 0 0 0 0, 0 6px 12px fade(@black,0.1); --->box-shadow: 0 0 0 0, 0 6px 12px fade(@black,10);

box-shadow: 0 0 0 1px fade(@border-color,0.1), 0 6px 12px fade(@black,0.1); ---> box-shadow: 0 0 0 1px fade(@border-color,10), 0 6px 12px fade(@black,10);

box-shadow: 0 0 0 1px fade(@border-color,0.1), 0 6px 12px fade(@black,0.1); --->box-shadow: 0 0 0 1px fade(@border-color,10), 0 6px 12px fade(@black,10);

.clearfix; --->.clearfix();

.btn; ---> .btn();

box-shadow: 0 0 0 0, 0 6px 12px fade(@base-color,0.1); --->box-shadow: 0 0 0 0, 0 6px 12px fade(@base-color,10);

.btn; ---> .btn();
{% endhighlight %}
	
### 5.variables.less
	
{% highlight css %}
@comp-color : complement(@base-color); --->@comp-color : spin(@base-color, 180); 
{% endhighlight %}

### 6.将以下代码添加到variables.less的末尾，并覆盖原有的设置
{% highlight css %}
@small:       ~"only screen and (min-width: 30em)";
@medium:      ~"only screen and (min-width: 48em)";
@large:       ~"only screen and (min-width: 62.5em)";
@highdensity: ~"only screen and (-webkit-min-device-pixel-ratio: 1.5)",
              ~"only screen and (-o-min-device-pixel-ratio: 3/2)",
              ~"only screen and (min-resolution: 144dpi)",
              ~"only screen and (min-resolution: 1.5dppx)";
{% endhighlight %}


做完以上修改后，再次编译运行。
<figure>
	<a href="/images/post/2014-12-09-5.png"><img src="/images/post/2014-12-09-5.png" alt=""></a>
</figure>
样式恢复了正常：
<figure>
	<a href="/images/post/2014-12-09-6.png"><img src="/images/post/2014-12-09-6.png" alt=""></a>
</figure>

压缩完文件后，记得修改_includes/head.html中的样式引入哟！
{% highlight html %}
<link rel="stylesheet" href="{{ site.url }}/assets/css/main.min.css">
{% endhighlight %}
全部做完之后，需要清理不需要的文件
* /assets/node_modules
* assets/npm-debug.log
* assets/css/main.scss
* _sass
