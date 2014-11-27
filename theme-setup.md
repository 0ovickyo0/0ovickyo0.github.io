---
layout: page
title: Theme Setup
description: "Instructions on how to install and customize the modern Jekyll theme HPSTR."
image:
  feature: abstract-11.jpg
  credit: dargadgetz
  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
share: true
---

一些用于配置 **HRPST** 的建议。

## 构建一个新的Jekyll站点的基本步骤

（中为我的说明）

1. [安装 Bundler](http://bundler.io) `gem install bundler` 然后安装 [Jekyll](http://jekyllrb.com)，接着使用命令 `bundle install` 安装所有的依赖。（请不要使用jekyll 2.5+哟，使用了之后这酸爽简直不敢相信，我使用的是jekyll 2.4.0）
2. 从这个项目进行分支 [HPSTR Jekyll Theme repo](https://github.com/mmistakes/hpstr-jekyll-theme/fork)。
3. Clone the repo you just forked and rename it.
4. 编辑 `_config.yml` 用于个性化你的网站.
5. 查看 `_posts` 文件夹中的样本blog来看如何使用大的图片，加上标签，进行分类，或是其他一些YAML特性。
6. 继续查看下面的文件来进行更高大上的个性化配置哟。

<div markdown="0"><a href="https://github.com/mmistakes/hpstr-jekyll-theme/archive/master.zip" class="btn">下载主题</a></div>

**Pro-tip:** 在cloning之后删除 `gh-pages` branch 并使用 `master` 进行开发。因为在 `gh-pages` 中有一些样例代码，我想你在你的站点里面肯定不会想看到。
{: .notice}

---

## 从一个已有的Jekyll站点进行构建的基本步骤

1. Clone 以下目录: `_includes`, `_layouts`, '_sass', `assets`, and `images`.
2. Clone 以下目录/文件，并进行个性化设置: `about/`, `posts/`, `tags/`, `feed.xml`. and 'index.html'.
3. 在你的 `config.yml` 文件中添加以下变量:

{% highlight yaml %}
title:            Site Title
description:      Describe your website here.
disqus_shortname: shortname
# Your site's domain goes here (eg: //mmistakes.github.io, http://mademistakes.com, etc)
# When testing locally leave blank or use http://localhost:4000
url:              //mmistakes.github.io

# Owner/author information
owner:
  name:           Your Name
  avatar:         avatar.jpg
  bio:            "Your bio goes here. It shouldn't be super long but a good two sentences or two should suffice."
  email:          you@email.com
  # Social networking links used in footer. Update and remove as you like.
  twitter:        
  facebook:       
  github:         
  stackexchange:  
  linkedin:       
  instagram:      
  flickr:         
  tumblr:         
  # For Google Authorship https://plus.google.com/authorship
  # google plus id, include the '+', eg +mmistakes
  google_plus:    +yourid

# Analytics and webmaster tools stuff goes here
google_analytics:   
google_verify:      
# https://ssl.bing.com/webmaster/configure/verify/ownership Option 2 content= goes here
bing_verify:         

# http://en.wikipedia.org/wiki/List_of_tz_database_time_zones
timezone:    America/New_York
future:      true
pygments:    true
markdown:    kramdown

# Amount of posts to show on home page
paginate: 5
{% endhighlight %}

---

## 运行 Jekyll

If `jekyll build` and `jekyll serve` throw errors you may have to run Jekyll with `bundled exec` instead.

> In some cases, running executables without bundle exec may work, if the executable happens to be installed in your system and does not pull in any gems that conflict with your bundle.
>
>However, this is unreliable and is the source of considerable pain. Even if it looks like it works, it may not work in the future or on another machine.

{% highlight text %}
bundle exec jekyll build

bundle exec jekyll serve
{% endhighlight %}

---

## 文件目录

{% highlight bash %}
hpstr-jekyll-theme/
├── _includes
|    ├── browser-upgrade.html       # 当使用的浏览器低于 IE8 时，提示用户升级浏览器
|    ├── footer.html                # site footer
|    ├── head.html                  # site head
|    ├── navigation.html            # site navigation
|    └── scripts.html               # jQuery, plugins, GA, etc
├── _layouts
|    ├── page.html                  # page layout
|    ├── page.html                  # post-index layout used on home page
|    └── post.html                  # post layout
├── _posts
├── _sass                           # Sass partials
├── assets
|    ├── css                        # compiled stylesheets
|    ├── js
|    |   ├── _main.js               # plugin options
|    |   ├── scripts.min.js         # concatenated and minifed site scripts
|    |   ├── plugins                # plugin scripts
|    └── └── vendor                 # jQuery and Modernizr scripts
├── images                          # images for posts and pages
├── _config.yml                     # Jekyll options
├── about/                          # about页面
├── posts/                          # 所有文章列表
├── tags/                           # 使用tag分类的所有文章列表
└── index.html                      # 使用了分页插件的主页
{% endhighlight %}

---

## 个性化设置

如果你想添加或删除一些东西，所有的变量都能在 `_include` 的 .html文件中找到。你可以先从一个简单的变量开始尝试，比如给你的站点添加 `title`, `description`, and `url` 变量。所有的links都是绝对路径，在很多`_includes` and `_layouts` 文件中都是使用前缀 `{{ "{{ site.url " }}}}` 来指定，所以在本地调试的时候一定一定要将 `_config_yml` 中的 `url`[^1] 设置成 `http://localhost:4000` 。

### Disqus 评论

创建 [Disqus](http://disqus.com) 账户并修改 `_config.yml` 中的 `disqus_shortname` 为你的 Disqus *shortname* 。如果你设置了一个shortname，所有文章的默认评论都将使用它。如果不想使用评论功能，可以进行下面的设置。

{% highlight yaml %}
comments: false
{% endhighlight %}

### 社交分享链接

To enable Facebook, Twitter, and Google+ share links on a post or page, add the following to its front matter:

{% highlight yaml %}
share: false
{% endhighlight %}

### Owner/Author Information

Change your name, and avatar photo (200x200 pixels or larger), email, and social networking URLs. 如果你需要使用外部的链接图片，你会需要修改 `head.html`中的一些代码，默认情况下，所有图片位于 `/images`.

Including a link to your Google+ profile has the added benefit of displaying [Google Authorship](https://plus.google.com/authorship) in Google search results if you've went ahead and applied for it.

### Google Analytics and Webmaster Tools

Your Google Analytics ID goes here along with meta tags for [Google Webmaster Tools](http://support.google.com/webmasters/bin/answer.py?hl=en&answer=35179) and [Bing Webmaster Tools](https://ssl.bing.com/webmaster/configure/verify/ownershi) site verification.

### 导航链接

如果你想改变导航链接，你需要修改 `_data/navigation.yml`。使用下面的格式来设置URL和title。可以设置任意多的外部链接。 *External links will open in a new window.*

{% highlight yaml %}
- title: Portfolio
  url: /portfolio/

- title: Made Mistakes
  url: http://mademistakes.com  
{% endhighlight %}

---

## 使用 Octopress 添加新内容

While completely optional, I've included Octopress and some starter templates to automate the creation of new posts and pages. To take advantage of it start by installing the [Octopress](https://github.com/octopress/octopress) gem if it isn't already.

{% highlight bash %}
$ gem install octopress --pre
{% endhighlight %}

### 发表新文章

Default command

{% highlight bash %}
$ octopress new post "Post Title"
{% endhighlight %}


Default works great if you want all your posts in one directory, but if you're like me and want to group them into subfolders like `/posts`, `/portfolio`, etc. Then this is the command for you. By specifying the DIR it will create a new post in that folder and populate the `categories:` YAML with the same value.

{% highlight bash %}
$ octopress new post "New Post Title" --dir posts
{% endhighlight %}

### 创建一个新页面

使用下面的命令来创建一个新的页面。

{% highlight bash %}
$ octopress new page new-page/
{% endhighlight %}

---

### Jekyll _includes

For the most part you can leave these as is since the author/owner details are pulled from `_config.yml`. That said you'll probably want to customize the copyright stuff in `footer.html` to your liking.

### 阅读时间的设置

默认是开启的，如果你想关闭，可以在 `_config.yml` 中去掉变量 `reading_time` 。默认一分钟阅读200字，你也可以在 `_config.yml` 中的 `words_per_minute` 进行设置。

### Feature Images

A good rule of thumb is to keep feature images nice and wide so you don't push the body text too far down. An image cropped around around 1024 x 256 pixels will keep file size down with an acceptable resolution for most devices. If you want to serve these images responsively I'd suggest looking at the [Jekyll Picture Tag](https://github.com/scottjehl/picturefill)[^2] plugin.

The two layouts make the assumption that the feature images live in the *images* folder. To add a feature image to a post or page just include the filename in the front matter like so. 

{% highlight yaml %}
image:
  feature: feature-image-filename.jpg
  thumb: thumbnail-image.jpg #keep it square 200x200 px is good
{% endhighlight %}

If you want to apply attribution to a feature image use the following YAML front matter on posts or pages. Image credits appear directly below the feature image with a link back to the original source.

{% highlight yaml %}
image:
  feature: feature-image-filename.jpg
  credit: Michael Rose #name of the person or site you want to credit
  creditlink: http://mademistakes.com #url to their site or licensing
{% endhighlight %}

#### Post/Page Thumbnails(缩略图) for OG and Twitter Cards

Post and page thumbnails work the same way. These are used by [Open Graph](https://developers.facebook.com/docs/opengraph/) and [Twitter Cards](https://dev.twitter.com/docs/cards) meta tags found in `head.html`. If you don't assign a thumbnail the image you assigned to `site.owner.avatar` in `_config.yml` will be used.

Here's an example of what a tweet to your site could look like if you activate Twitter Cards and include all the metas in your post's YAML.

![Twitter Card summary large image screenshot]({{ site.url }}/images/twitter-card-summary-large-image.jpg)

### Videos

Video embeds are responsive and scale with the width of the main content block with the help of [FitVids](http://fitvidsjs.com/).

Not sure if this only effects Kramdown or if it's an issue with Markdown in general. But adding YouTube video embeds causes errors when building your Jekyll site. To fix add a space between the `<iframe>` tags and remove `allowfullscreen`. Example below:

{% highlight html %}
<iframe width="560" height="315" src="http://www.youtube.com/embed/PWf4WUoMXwg" frameborder="0"> </iframe>
{% endhighlight %}

### Twitter Cards

Twitter cards make it possible to attach images and post summaries to Tweets that link to your content. Summary Card meta tags have been added to `head.html` to support this, you just need to [validate and apply your domain](https://dev.twitter.com/docs/cards) to turn it on.

### Link Post Type

Link blog like a champ by adding `link: http://url-you-want-linked` to a post's YAML front matter. Arrow glyph links to the post's permalink and the the `post-title` links to the source URL. Here's an [example of a link post]({{ site.url }}/sample-link-post/) if you need a visual.

---

## Further Customization

Jekyll 2.x added support for Sass files making it much easier to modify a theme's fonts and colors. By editing values found in `_sass/variables.scss` you can fine tune the site's colors and typography.

For example if you wanted a red background instead of white you'd change `$bodycolor: #fff;` to `$bodycolor: $cc0033;`.

To modify the site's JavaScript files I setup a Grunt build script to lint/concatenate/minify all scripts into `scripts.min.js`. [Install Node.js](http://nodejs.org/), then [install Grunt](http://gruntjs.com/getting-started), and then finally install the dependencies for the theme contained in `package.json`:

{% highlight bash %}
npm install
{% endhighlight %}

From the theme's root, use `grunt` concatenate JavaScript files, and optimize .jpg, .png, and .svg files in the `images/` folder. You can also use `grunt dev` in combination with `jekyll build --watch` to watch for updates JS files that Grunt will then automatically re-build as you write your code which will in turn auto-generate your Jekyll site when developing locally.

---

## Questions?

Having a problem getting something to work or want to know why I setup something in a certain way? Ping me on Twitter [@mmistakes](http://twitter.com/mmistakes) or [file a GitHub Issue](https://github.com/mmistakes/hpstr-jekyll-theme/issues/new). And if you make something cool with this theme feel free to let me know.

---

## License

This theme is free and open source software, distributed under the [MIT License]({{ site.url }}/LICENSE) version 2 or later. So feel free to to modify this theme to suit your needs.

---

[^1]: Used to generate absolute URLs in `feed.xml`, and for canonical URLs in `head.html`. Don't include a trailing `/` in your base url ie: http://mademistakes.com. When developing locally I suggest using http://localhost:4000 or whatever localhost you're using to properly load all theme stylesheets, scripts, and image assets. If you leave this variable blank all links will resolve correctly except those pointing to home.

[^2]: If you're using GitHub Pages to host your site be aware that plugins are disabled. So you'll need to build your site locally and then manually deploy if you want to use this sweet plugin.