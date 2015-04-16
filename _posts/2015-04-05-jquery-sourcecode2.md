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

（21,94） 定义了一些变量和函数，重要函数：jQuery = function( selector, context ){}


| 分析  | 代码 |
|:--------|:-------:|
|          | /*!     |
|          |  * jQuery JavaScript Library v2.0.3     |
|          |  * http: //jquery.com/     |
|          |  *     |
|          |  * Includes Sizzle.js     |
|          |  * http: //sizzlejs.com/     |
|          |  *     |
|          |  * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors     |
|          |  * Released under the MIT license     |
|          |  * http: //jquery.org/license     |
|          |  *     |
|          |  * Date: 2013-07-03T13:30Z     |
|          |  */     |
|----
|（14）为什么使用window？         | (function( window, undefined ) {      |
|	(function(){         |     |
|		window         |     |
|	})(window);         |     |
|	1.使用局部变量查找速度快 2.传参可以进行压缩         |     |
|	为什么传参undefined？         |     |
|    防止undefined被修改         |     |
|----
| 单元格1  | 单元格2   |
| 单元格4  | 单元格5   |
|----
| 单元格1  | 单元格2   |
| 单元格4  | 单元格5   |
|=====
| Foot1   | Foot2   | Foot3
{: rules="groups"}

