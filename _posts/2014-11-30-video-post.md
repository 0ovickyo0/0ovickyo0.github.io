---
layout: post
title: "包含视频的文章"
description: "这是一篇样本文章，包含了视频"
tags: [sample post, video]
---

<iframe width="560" height="315" src="//www.youtube.com/embed/SU3kYxJmWuQ" frameborder="0"> </iframe>

文章中嵌入的影片主要用到了[FitVids](http://fitvidsjs.com/)。主要支持youtube。其它的没有国内的。

不知道是Kramdown的原因还是所有的Markdown都有这种原因。但是如果你是构建的Jekyll站点，你需要使用 `<iframe>` 标签并移除`allowfullscreen`，例子如下：

{% highlight html %}
<iframe width="560" height="315" src="//www.youtube.com/embed/SU3kYxJmWuQ" frameborder="0"> </iframe>
{% endhighlight %}