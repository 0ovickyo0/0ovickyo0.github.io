---
layout: post
title: 样本文章
description: "有关你日志中想要变换样式的一切东西： headings, paragraphs, blockquotes, tables, code blocks, 等等。"
modified: 2014-11-29
tags: [sample post]
image:
  feature: abstract-12.jpg
  credit: dargadgetz
  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---

下面是一些你想在主题中使用的一些样式，通过查看源代码来查看一些段落的内联样式。段落文字来源于《红高粱》。

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

### Body text

Lorem ipsum dolor sit amet, test link adipiscing elit. **粗体**. Nullam dignissim convallis est. Quisque aliquam.

![图片：Smithsonian]({{ site.url }}/images/3953273590_704e3899d5_m.jpg)
{: .pull-right}

*这是强调*. 有人说这个放羊的男孩就是我，我不知道是不是我。我曾经对高密东北乡极端热爱，曾经对高密东北乡极端仇恨，长大后努力学习马克思主义，我终于悟到：高密东北乡无疑是地球上最美丽最丑陋、最超脱最世俗、最圣洁最龌龊、最英雄好汉最王八蛋、最能喝酒最能爱的地方。生存在这块土地上的我的父老乡亲们，喜食高粱，每年都大量种植。水是 H<sub>2</sub>O。八月深秋，无边无际的高粱红成洸洋的血海。高粱高密辉煌，高粱凄婉可人，高粱爱情激荡。秋风苍凉，阳光很旺，瓦蓝的天上游荡着一朵朵丰满的白云，高粱上滑动着一朵朵丰满的白云的紫红色影子。一队队暗红色的人在高粱棵子里穿梭拉网，几十年如一日。他们杀人越货，精忠报国，他们演出过一幕幕英勇悲壮的舞剧，使我们这些活着的不肖子孙相形见绌，在进步的同时，我真切感到种的退化。<cite>(这是一个引文)</cite>. <u>加下划线的哟</u>. 出村之后，队伍在一条狭窄的土路上行进，人的脚步声中夹杂着路边碎草的窸窣声响。雾奇浓，活泼多变。我父亲的脸上，无数密集的小水点凝成大颗粒的水珠，他的一撮头发，粘在头皮上，从路两边高粱地里飘来的幽淡的薄荷气息和成熟高粱苦涩微甘的气味，我父亲早已闻惯，不新不奇。

HTML and <abbr title="cascading stylesheets">CSS<abbr> 是我们的工具。 在这次雾中行军里，我父亲闻到了那种新奇的、黄红相间的腥甜气息。那味道从薄荷和高粱的味道中隐隐约约地透过来，唤起父亲心灵深处一种非常遥远的回忆。七天之后，八月十五日，中秋节。一轮明月冉冉升起，遍地高粱肃然默立，高粱穗子浸在月光里，像蘸过水银，汩汩生辉。我父亲在剪破的月影下，闻到了比现在强烈无数倍的腥甜气息。那时候，余司令牵着他的手在高粱地里行走，三百多个乡亲叠股枕臂、陈尸狼藉，流出的鲜血灌溉了一大片高粱，把高粱下的黑土浸泡成稀泥，使他们拔脚迟缓。腥甜的气味令人窒息，一群前来吃人肉的狗，坐在高粱地里，目光炯炯地盯着父亲和余司令。


### 引用

> 高粱的茎叶在雾中滋滋乱叫，雾中缓慢地流淌着在这块低洼平原上穿行的墨河水明亮的喧哗，一阵强一阵弱，一阵远一阵近。

## 列表的样式

### 有序列表

1. Item one
   1. sub item one
   2. sub item two
   3. sub item three
2. Item two

### 无序列表

* Item one
* Item two
* Item three

## 表格

| 标题一 | 标题二| 标题三 |
|:--------|:-------:|--------:|
| 单元格1  | 单元格2   | 单元格3   |
| 单元格4  | 单元格5   | 单元格6   |
|----
| 单元格1  | 单元格2   | 单元格3   |
| 单元格4  | 单元格5   | 单元格6   |
|=====
| Foot1   | Foot2   | Foot3
{: rules="groups"}

## 代码高亮

通过 Pygments 进行语法高亮

{% highlight css %}
#container {
  float: left;
  margin: 0 -240px 0 0;
  width: 100%;
}
{% endhighlight %}

这是一段没有使用Pygments的例子：

    <div id="awesome">
        <p>这很棒不是么?</p>
    </div>

## 按钮

任何应用了 `.btn` 样式的都被突出显示了，像按钮一样。

{% highlight html %}
<a href="#" class="btn btn-success">成功按钮</a>
{% endhighlight %}

<div markdown="0"><a href="#" class="btn">基本按钮</a></div>
<div markdown="0"><a href="#" class="btn btn-success">成功按钮</a></div>
<div markdown="0"><a href="#" class="btn btn-warning">警告按钮</a></div>
<div markdown="0"><a href="#" class="btn btn-danger">危险按钮</a></div>
<div markdown="0"><a href="#" class="btn btn-info">咨询按钮</a></div>
