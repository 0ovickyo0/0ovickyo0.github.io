---
layout: post
title: "一片包含图片的文章"
description: "用于显示图片的示例文章。"
tags: [sample post, images, test]
---

这里是一篇关于在文章中如何使用图片的示例。如果你想并排显示2、3张图片，你需要使用 `class` 属性的 `figure` 。每一个 `figure` 的实例都将自动编号并在标题中显示。

## Figures (图片或视频)

### 一张图片

<figure>
	<a href="http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_b.jpg"><img src="http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_c.jpg" alt=""></a>
	<figcaption><a href="http://www.flickr.com/photos/80901381@N04/7758832526/" title="Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr">晨雾中的树，作者是Flickr上的一个人。这是一段包含了连接的文字</a>.</figcaption>
</figure>

### 两张图片

使用 `half` 类来让两张图片并排显示。可以由自适应效果。
Apply the  class like so to display two images side by side that share the same caption.

{% highlight html %}
<figure class="half">
	<img src="/images/image-filename-1.jpg" alt="">
	<img src="/images/image-filename-2.jpg" alt="">
	<figcaption>描述2张图片的标题.</figcaption>
</figure>
{% endhighlight %}

你可以看到效果是这样的，前面两张图片是有连接的，具有动态效果，后面两张图片是没有连接的:

<figure class="half">
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt=""></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt=""></a>
	<img src="http://placehold.it/600x300.jpg" alt="">
	<img src="http://placehold.it/600x300.jpg" alt="">
	<figcaption>用于描述2张图片的标题。</figcaption>
</figure>

### 3张图片

使用 `third` 类来显示3张图片，并排显示。

{% highlight html %}
<figure class="third">
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt=""></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt=""></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt=""></a>
	<figcaption>用于描述3张图片的标题。</figcaption>
</figure>
{% endhighlight %}

然后你就能看到下面这种效果:

<figure class="third">
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt=""></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt=""></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt=""></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt=""></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt=""></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt=""></a>
	<figcaption>3张图片.</figcaption>
</figure>