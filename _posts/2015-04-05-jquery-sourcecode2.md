---
layout: post
title: jQuery源码阅读（二）
description: "jQquery源码解析--定义的重要变量和函数"
modified: 2015-04-05
tags: [jQuery, javascript]
image:
  feature: abstract-6.jpg
  background: bg-6.png
---


接上次jQuery源码阅读（一）之后的。

本篇主要解读了源码2.0.3版本中的第21~94行内容，希望能够对大家有帮助！

<!--more-->

md的表格排版简直了！不能直视啊！！T^T  伐开心。。这让我怎么把做好的笔记放上来呢！

博文内只提供简略的参考版，pdf下载版<a href="/images/post/jQuerySourceCodeRead.pdf" download="jQquery源码分析">请戳这里</a>！我知道，没图你们是不会戳的：

<figure>
	<a href="/images/post/2015-04-05-1.png"><img src="/images/post/2015-04-05-1.png" alt=""></a>
</figure>


（21,94） 定义了一些变量和函数，重要函数：jQuery = function( selector, context ){}

---

（14）为什么使用window？
	(function(){
		window
	})(window);
	1.使用局部变量查找速度快 2.传参可以进行压缩
	为什么传参undefined？
	防止undefined被修改
---
（20）"use strict"：不建议去掉注释，去掉会造成假死状态等。目前此bug已修复
---
（23）rootjQuery：
	1.方便压缩；2.定义一个变量方便后期可维护
---
（26）readyList：
	跟DOM加载有关
---
（30）core_strundefined：得到的是字符串形式的undefined
	window.a == undefined;
	typeof window.a == 'undefined';
	一般情况下，以上两种方式判断是ok的。
	但是在老版本浏览器下IE9，当判断的是一个xmlNode时，判断不出来。所以最好采用typeof的方法进行判断。
---
（33）对window下的一些变量进行存储，方便压缩
---
（38，41）防冲突，如果在引入jquery库之前已经定义了jQuery或者$就先暂存起来
---
（44）使用$.type()时用到的，它里面可能会存成这样的
	class2type = {
		'[Object String]' : 'string'
	}
---
（47）没有什么实际用处了，老版本中是和数据缓存有关的
---
（49）版本号
---
（52,58）存一些方法名
---

（61）jQuery方法，fn就是prototype， jQuery.fn.init是一个构造函数
	function Aaa(){}
	Aaa.prototype.init = function(){};
	Aaa.prototype.css = function(){};
	var a1 = new Aaa();
	a1.init();
	a1.css();
	下面的与上面的不同，可以一目了然的找到css，不用做烦琐的初始化工作
	function jQuery(){
		return new jQuery.prototype.init();
	}
	jQuery.prototype.init = function(){};
	jQuery.prototype.css = function(){};
	jQuery.prototype.init.prototype = jQuery.prototype;
	jQuery().css();
	283行有：jQuery.fn.init.prototype = jQuery.prototype;
	故在 jQuery.prototype下添加的任何方法，可以通过jQuery.prototype.init new出来的对象使用
---
（67）一些正则，在css方法时使用
	core_pnum 匹配数字
	core_rnotwhite 匹配单词
	rquickExpr 匹配标签和id，通过location.hash防止XSS注入
		<p>aaa</a> 或 #id
	rsingleTag 匹配独立的空标签
		<p></p> <div></div>
	rmsPrefix 匹配前缀
		margin-left ： marginLeft
		-webkit-margin-left : webkitMarginLeft
		-ms-margin-left : MsMarginLeft   和其他的不一样，M要大写
	rdashAlpha 找到-和字符，转大小写
		-left : Left
		-2d : 2d
---
（85）转驼峰的回调函数
---
（90）DOM加载成功之后会触发的。819行相关。
先取消两个事件的绑定，然后调用工具方法jQquery.ready()。
最终只会走一次jQuery.ready()，这个ready相关代码在382行。
---


