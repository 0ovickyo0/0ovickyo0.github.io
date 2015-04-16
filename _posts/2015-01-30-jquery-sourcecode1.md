---
layout: post
title: jQuery源码阅读（一）
description: "开始zuo jQuery的源码了！新挖坑，欢迎入坑~"
modified: 2015-01-30
tags: [jQuery, javascript]
image:
  feature: abstract-3.jpg
  background: bg-3.png
---

# 什么是JQ？

一个优秀的JS库，大型开发必备

# JQ好处？
1. 简化JS的复杂操作
2. 不需要关心兼容性
3. 提供大量实用方法

（最前面的（）中数字代表源码中的行数）

阅读源码第一步，必须是理清整个源码框架的实现：
	版本2.0.3
	结构：

---

(function(){
    （21,94） 定义了一些变量和函数，重要函数：jQuery = function( selector, context ){}
    （96, 280）给jq对象添加方法和属性
    （285, 347） extend：JQ的继承方法
    （349, 817） jQuery.extend()：扩展工具方法，比如$.trim();工具方法既可以给jquery对象用，也可以给原生js用
    （877, 2856）  sizzle 复杂元素选择器的实现
    （2880, 3042） Callbacks：回调对象：作用是函数的统一管理
    （3043, 3183） Deffered：延迟对象：作用是对异步的统一管理
    （3184, 3295） support：功能检测
    （3308, 3652） data()：数据缓存，避免大数据添加到元素身上 造成内存泄露
    （3653, 3797） queue()：队列管理
    （3803, 4299） attr() prop() val() addClass()等，对元素属性的操作
    （4300, 5128） on() trigger()：事件操作的相关方法
    （5140, 6057） DOM操作方法：添加 删除 获取 包装 DOM筛选
    （6058, 6620） css()：样式的操作
    （6621, 7854） 提交的数据和ajax()：ajax() load() getJson()
    （7855, 8584） animate()： 运动的方法
    （8585, 8792） offset()：位置和尺寸的方法
    （8804, 8821） JQ支持模块化的模式
    （8826） window.jQuery = window.$ = jQuery; 通过外面找到jQuery，对外提供的接口
})();

---
