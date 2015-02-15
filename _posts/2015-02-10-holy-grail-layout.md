---
layout: post
title: 圣杯布局
description: "圣杯布局的原理结构以及从0开始写一个圣杯布局"
modified: 2015-02-10
tags: [html, css]
image:
  feature: abstract-11.jpg
  background: bg-11.png
---

今天第一次听说这个词--圣杯布局，据说是面试官特别喜欢问的一个问题。后来查了下相关资料，发现这个圣杯布局还是蛮有意思的。

圣杯布局的目标是左右两栏定宽，中间那一行流式。

<!--more-->

以我单细胞的思考方式，最简单的实现应该是下面这个样子的：
{% highlight html %}
<!DOCTYPE html>
<html>
    <header>
        <meta charset="utf-8"/>
        <title>test</title>
        <style>
            body{margin: 0}
            .center{height: 600px;background: #f60;}
            .left{width: 200px;background: #fc0; height: 600px;position: absolute;left: 0;top:0;}
            .right{width: 200px; background: #fcc; height:600px;position: absolute;right: 0;top: 0; }
        </style>
    </header>
    <body>
        <div class="center"></div>
        <div class="left"></div>
        <div class="right"></div>
    </body>
</html>
{% endhighlight %}

效果图：
<figure>
	<a href="/images/post/2015-02-10-1.gif"><img src="/images/post/2015-02-10-1.gif" alt=""></a>
</figure>
每次看到圣杯布局都离不开一篇文章，那就是a list apart里面的 [In search of the Holy Grail](http://alistapart.com/article/holygrail).

# 圣杯布局步骤

## STEP1.构建结构
首先建立页头页脚和中间区域：
{% highlight html %}
<div id="header"></div>
<div id="container"></div>
<div id="footer"></div>
{% endhighlight %}

接下来，给container添加左右padding，padding的大小是我们想要左边和右边栏的宽度大小，在这里左侧为200px，右侧为150px，LC和RC分别代表左右侧：

{% highlight css %}
#container{
    padding-left: 200px; /*LC width*/
    padding-right: 150px; /*RC width*/
}
{% endhighlight %}

操作到这里，我们的整个页面结构应该如下图所示：
<figure>
	<a href="/images/post/2015-02-10-2.gif"><img src="/images/post/2015-02-10-2.gif" alt="Step 1: Create the frame"></a>
</figure>
Step 1: Create the frame

## STEP.2 添加左中右三列

现在我们有了最基本的结构，现在我们来添加中间三列：

{% highlight html %}
<div id="header"></div>
<div id="container">
    <div class="center" class="column"></div>
    <div class="left" class="column"></div>
    <div class="right" class="column"></div>
</div>
<div id="footer"></div>
{% endhighlight %}

在这里，根据优先加载原则，中间栏是写在最前边的。

接下来，我们为它们添加正确的宽度和浮动，页脚需要清浮动，以使其显示在所有内容的下方，我给不同区域添加了不同的颜色，以便区分。

添加代码（只有必须样式，非必须的诸如颜色、内容等，可以自行添加）：
{% highlight css %}
#container .column{
    float: left;
}
#center {
    width: 100%;
}
#left{
    width: 200px;/*LC width*/
}
#right{
    width: 150px; /*RC width*/
}
#footer{
    clear: both;
}
{% endhighlight %}
效果：
<figure>
	<a href="/images/post/2015-02-10-3.gif"><img src="/images/post/2015-02-10-3.gif" alt=""></a>
</figure>

注意：中间栏给的100% width，指代的是container div的宽度，是不包含两侧的padding值的。当我们将所有的层级都写完的时候，我们还会再次用到100% width，它同样也指代的是中间的container div的宽度，是不包含padding值的。

现在的整个页面的结构应该如下所示：
<figure>
	<a href="/images/post/2015-02-10-4.gif"><img src="/images/post/2015-02-10-4.gif" alt="Step 2: Add the columns"></a>
</figure>
Step 2: Add the columns

## STEP3.让左边部分到达指定位置
这一步要做的事情就是让左边的块填充到container的padding部分。中间部分已经处于了它应该到达的位置，所以我们这里只关注左边部分。

需要2步将左边栏放到它合适的位置。首先，将他拉到距离中间栏-100% margin 的地方。注意，这个地方的100%仍然代表的是中间栏的宽度，即container div的宽度。

添加代码：

{% highlight css %}
#left{
    width: 200px;/*LC width*/
    margin-left: -100%;
}
{% endhighlight %}

效果：
<figure>
	<a href="/images/post/2015-02-10-5.gif"><img src="/images/post/2015-02-10-5.gif" alt=""></a>
</figure>


现在，左边部分将会覆盖中间部分，左边界（左边的边）是对齐的。右边部分是左浮动的，同时和中间部分共有一条右边界（右边的边）。看起来结构应该如下所示：
<figure>
	<a href="/images/post/2015-02-10-6.gif"><img src="/images/post/2015-02-10-6.gif" alt="Step 3: Pull the left column into place—halfway there"></a>
</figure>
Step 3: Pull the left column into place—halfway there

为了让左侧到达正确的地方，我们使用相对定位，定位的距离就是左边部分的宽度。

添加代码：

{% highlight css %}
#container .columns {
  float: left;
  position: relative;
}
#left {
  width: 200px;        /* LC width */
  margin-left: -100%;
  right: 200px;        /* LC width */
}
{% endhighlight %}

效果（浏览器宽度减小时，左侧部分被挤到下面，并从左边往中间挤）：
<figure>
    <a href="/images/post/2015-02-10-7.gif"><img src="/images/post/2015-02-10-7.gif" alt=""></a>
</figure>

right属性让左边部分距离其右边边框200px，那就是把左边部分移到左边去了。现在左边部分能够恰好占据container的padding部分。
<figure>
    <a href="/images/post/2015-02-10-8.gif"><img src="/images/post/2015-02-10-8.gif" alt="Step 3: Left column pulled into place"></a>
</figure>
Step 3: Left column pulled into place

## STEP4.将右侧部分放到合适的地方
现在唯一要做的事就是将右边部分放到合适的地方。我们使用了一个负的margin值：
添加代码：
{% highlight css %}
#right {
  width: 150px;          /* RC width */
  margin-right: -150px;  /* RC width */
}
{% endhighlight %}

效果（当浏览器宽度足够小的时候，一样也会出现奇怪的问题）：
<figure>
    <a href="/images/post/2015-02-10-9.gif"><img src="/images/post/2015-02-10-9.gif" alt=""></a>
</figure>

结构如下：
<figure>
    <a href="/images/post/2015-02-10-10.gif"><img src="/images/post/2015-02-10-10.gif" alt="Step 4: Pull the right column into place"></a>
</figure>
Step 4: Pull the right column into place
## STEP5.完善代码

当浏览器的宽度变小的时候，显示结构就会发生变化，所以需要给body设置min-width。但是在IE6下min-width并不管用。
增加代码：
{% highlight html %}
body {
  min-width: 550px;  /* 2x LC width + RC width */
}
{% endhighlight %}

效果：
<figure>
    <a href="/images/post/2015-02-10-11.gif"><img src="/images/post/2015-02-10-11.gif" alt=""></a>
</figure>

在IE6下，负的margin值会让左边部分到达浏览器左边很远的地方。我们需要把它拉回来放到正确的地方，使用的是 star-html hack。

增加代码（注意，代码中使用的是右边的宽度）：

{% highlight html %}
* html #left {
  left: 150px;  /* RC width */
}
{% endhighlight %}

问题效果：
<figure>
    <a href="/images/post/2015-02-10-12.gif"><img src="/images/post/2015-02-10-12.gif" alt=""></a>
</figure>
修正后效果：
<figure>
    <a href="/images/post/2015-02-10-13.gif"><img src="/images/post/2015-02-10-13.gif" alt=""></a>
</figure>

## 如果加上了padding
padding可以直接加载左边部分和右边部分上。假设现在给左边部分增加10px的padding，并且使左边部分的总宽度（padding+width）为200px，那么左边部分的样式如下：
{% highlight html %}
#left {
  width: 180px;        /* LC fullwidth - padding */
  padding: 0 10px;
  right: 200px;        /* LC fullwidth */
  margin-left: -100%;
}
{% endhighlight %}

效果（左边有padding，右边没有padding，中间不是等高的，所以会是空白的）：
<figure>
    <a href="/images/post/2015-02-10-14.gif"><img src="/images/post/2015-02-10-14.gif" alt=""></a>
</figure>
当padding增加到100%时会导致中间部分超出了container的non-padded width（请原谅我的渣翻译...）。为了让它回到正确的地方，我们需要在总的padding上增加right margin的大小。这就确保了中间只有我们想要的那么大。

同时，因为中间的宽度变宽了，所以左边部分应该再往左移动一些以到达正确的位置，增加的值应该能够抵消掉中间部分的padding。

假设我们给左边部分和右边部分各10px的padding（总的就是20px），给中间部分20px的padding（总的就是40px），新的css样式如下：
{% highlight css %}
body {
  min-width: 630px;      /* 2x (LC fullwidth +
                            CC padding) + RC fullwidth : 2*(200 + 40) + 150*/
}
#container {
  padding-left: 200px;   /* LC fullwidth */
  padding-right: 190px;  /* RC fullwidth + CC padding  : 150 + 20*2*/
}
#container .column {
  position: relative;
  float: left;
}
#center {
  padding: 10px 20px;    /* CC padding */
  width: 100%;
}
#left {
  width: 180px;          /* LC width */
  padding: 0 10px;       /* LC padding */
  right: 240px;          /* LC fullwidth + CC padding : 200+20*2*/
  margin-left: -100%;
}
#right {
  width: 130px;          /* RC width */
  padding: 0 10px;       /* RC padding */
  margin-right: -190px;  /* RC fullwidth + CC padding : 150+20*2*/
}
#footer {
  clear: both;
}/*** IE Fix ***/
* html #left {
  left: 150px;           /* RC fullwidth */
}
{% endhighlight %}

效果：
<figure>
    <a href="/images/post/2015-02-10-15.gif"><img src="/images/post/2015-02-10-15.gif" alt=""></a>
</figure>
top和bottom的padding加起来一点问题都没有。

# 等高布局
原理参考(equalheight)[http://www.positioniseverything.net/articles/onetruelayout/equalheight].

添加样式：

{% highlight css %}
#container {
  overflow: hidden;
}
#container .column {
  padding-bottom: 20010px;  /* X + padding-bottom */
  margin-bottom: -20000px;  /* X */
}
#footer {
  position: relative;
}
{% endhighlight %}

效果：
<figure>
    <a href="/images/post/2015-02-10-16.gif"><img src="/images/post/2015-02-10-16.gif" alt=""></a>
</figure>
以上的代码，在左右中部分的最下面是增加了10px的padding的。

以上代码已经能满足大部分需求了，但仍然存在一些问题：Opera在处理overflow:hidden的时候会把所有的列变大，目前没有好的解决方案。IE6下问题多多。

# 完整代码
{% highlight html %}
<!DOCTYPE html>
<html>
    <header>
        <meta charset="utf-8"/>
        <title>test</title>
        <style>
            /*非必须样式*/
            body{
                color: #fff;
                text-align: center;
            }
            #header{
                background: #102040;
            }
            #center{
                background: #F2E96D;
            }
            #left{
                background: #F2C063;
            }
            #right{
                background: #F3935C;
            }
            #footer{
                background: #F26849;
            }
            /*必须样式*/
            body {
              min-width: 630px;      /* 2x (LC fullwidth +
                                        CC padding) + RC fullwidth : 2*(200 + 40) + 150*/
            }
            #container {
              padding-left: 200px;   /* LC fullwidth */
              padding-right: 190px;  /* RC fullwidth + CC padding  : 150 + 20*2*/
              overflow: hidden;
            }
            #container .column {
              position: relative;
              float: left;
              padding-bottom: 20010px; /*X + padding-bottom*/
              margin-bottom: -20000px; /*X*/
            }
            #center {
              padding: 10px 20px;    /* CC padding */
              width: 100%;
            }
            #left {
              width: 180px;          /* LC width */
              padding: 0 10px;       /* LC padding */
              right: 240px;          /* LC fullwidth + CC padding : 200+20*2*/
              margin-left: -100%;
            }
            #right {
              width: 130px;          /* RC width */
              padding: 0 10px;       /* RC padding */
              margin-right: -190px;  /* RC fullwidth + CC padding : 150+20*2*/
            }
            #footer {
              clear: both;
              position: relative;
            }/*** IE Fix ***/
            * html #left {
              left: 150px;           /* RC fullwidth */
            }
        </style>
    </header>
    <body>
        <div id="header">头部</div>
        <div id="container">
            <div id="center" class="column">中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分中间部分</div>
            <div id="left" class="column">左侧部分左侧部分左侧部分</div>
            <div id="right" class="column">右侧部分右侧部分右侧部分右侧部分</div>
        </div>
        <div id="footer">底部部分底部部分</div>
    </body>
</html>
{% endhighlight %}

效果：
<figure>
    <a href="/images/post/2015-02-10-17.gif"><img src="/images/post/2015-02-10-17.gif" alt=""></a>
</figure>


