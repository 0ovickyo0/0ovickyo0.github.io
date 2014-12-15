---
layout: post
title: 如何切得一手好图？
description: "新手理解切图，切图工具介绍，切图实战"
modified: 2014-12-15
tags: [切图, css, photoshop]
image:
  feature: abstract-10.jpg
  credit: dargadgetz
  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---

这是一篇有关于我与切图的故事。


# 理解需求：
在切图之前，首先要看一下我们正在处理的是什么类型的页面。大体上分为三种类型吧，图片型（EDM或者活动登陆页等）、图文型（门户网站或电商网站等）、界面型（Web App等）。

<!--more-->

* 图片型：这种页面往往是一次性的，交互功能也较少，但对产出速度往往要求较高。因此，通常用dw分分钟就可以打发了。至于用什么工具，我通常会用 Photoshop 的切片功能直接导出 HTML 表格和图片，再用文本编辑器和 Dreamweaver 稍做加工。

* 图文界面型：通常具有很长的生存期，对质量要求很高——语义化、性能、可维护性等等。因此，通常需要手写 HTML 和 CSS 代码，并精确裁剪、优化图片——标尺硬量，手敲代码用div+css布局。这种做法跟浏览器兼容性没什么关系（如果真要谈兼容，表格布局的兼容性往往更好），只是这样做出来的页面质量更高。虽然也有一些自动化的 “PSD → HTML + CSS + 图片” 的工具存在，但并未成为主流，主要原因还是代码质量无法达到期望的程度。

# 切图之前
1. 拿到图会先审一下,把图对应的场景里会出现的所有业务功能的需求都过一下,看是不是图里都有体现,有不明确或遗漏了的地方找UI一一核实。

2. 跟项目负责人确定项目的浏览器支持要求。一般会问需不需要支持IE 8及IE 8之前的版本，如果不需要，那就果断使用HTML5+CSS3了，省事。

3. 确认不同屏幕宽度下,界面的各个地方是什么样子，有的设计师会用设计平面图的思维去设计网页，往往忽略屏幕分辨率、浏览窗口变化等因素对网页结构的影响。发现这样的问题要及时跟设计师沟通。如果他（她）不理解你在说什么，那就自己决定怎么处理好了。

4. 确认在某部分数据缺失、异常、过多、过少的情况下是什么个展示

5. 确认下所有页面间的跳转关系、哪些地方可以过来，点去哪里。

6. 确定可复用的组件（或者叫模块）。对于一个项目，不同的页面通常具有相同的风格和相似的结构，这些相同之处在切图时就可以制作成可复用的组件，使用统一的HTML结构和CSS类名。所以拿到设计稿时，就把那些可以复用的地方识别出来。当你把可复用的组件构建好后，剩下的切图工作会轻松很多，Ctrl+C/Ctrl+V会帮你节省很多时间和精力。有时会遇到设计师临时增加几个页面的情况，但由于新页面中的大部分组件跟原有页面是一样的，所以也不会太埋怨设计师。遇到过页面比较多的项目，在接到切图任务时，设计师还没有把所有页面的设计稿弄好，只提交了部分页面的设计稿，其他页面还都处于草稿阶段。仍然需要把所有草稿要过来，然后确定整个项目中可复用的组件。

7. 终于可以开工了，先看所有页面间的关系，找出各个（界面css/交互逻辑js）一样的地方做成共用的，看看文件目录怎么规划下，想想之后上线时要怎么部署.

8. 开始做单个页面了的时候，先写好整个界面的布局，这儿是上下结构，那儿是左右结构，里边再是什么结构的，不用写具体的内容，先把所有块的box写好

9. 然后就是枯燥地往box里填空了，写的时候记得时常注意下，这个地方的代码是该写在box里，还是页面里，还是大模块里,还是整个项目里，就好了.....

# 什么是真正的切图？
1. 能把所有设计稿里出现的图形元素按照基础要求切出来交给前段工程师。

2. 对所有切图进行优化，有针对图片输出体积的优化、有利用 CSS Sprite 减少请求的优化、也有针对减少自己后期网站改版升级时候工作量的优化。这部分已经需要很多前段方面的知识了。要让切图也[语义化]必须得和前段配合得很好。

3. 从超出[图片]的角度思考并且实现更高阶的效果，比如现在做网页经常需要考虑桌面和移动平台的不同分辨率，使用 Responsive 的布局的话切图应该怎么切，是不是需要切两套；遇到 iPad 或者 rMBP 的高清屏怎么处理网页中的图片以及背景；是否可以应用一些新的技术比如 Web Font、Font Icon、CSS 3 里的新特性来减少网页里的图片等等。

# 要素：
1. 精准：最好理解，看到某产品图片突然被截断，天狗吃了？最闹心！所以不出错，切得准，没切着自己的手，也没切到别人的手是最重要的。

2. 快速：面对庞大的适配工作，和堆积如山的项目支持，如何快速搞定切图工作显得格外重要，当然除非你太爱切图了，你愿意将更多的设计时间用在切图上，嗯！请坚持！

3. 易用：这需要让你的合作者明白图片的含义，辅助图标少不了，也需要有清晰的实现逻辑，考虑好是否易用泛用常规的分辨率。当然，合理的命名规则也是需要的。

# 关于工具：
切图工具大致有两类：
一类是一个窗口的形式放在PS里，点击上面的选项，按钮，配合一些简单的命名规则，导出想要导出的切图。
另一类是没有固定的窗口，但有一套复杂的规则，根据规则编辑图层后，会再后台默默的自动为你切好图。（佳）

第一类较有名的：
Cut&Slice me（http://www.cutandslice.me/）
PNG EXPRESS | Automated Design Delivery for Photoshop（http://www.pngexpress.com/）
Assistor PS Product（http://www.assistor.net/en/assistor/product）
国人做的那个Cutterman因为它要再微博上问作者求邀请码所以我也没能体验。但从介绍能看出跟上述三款功能重合度非常高。这类工具将UI设计师从[切片工具]时代拯救了出来，但现在有了更好的工具，建议题主远离这类工具。

第二类：
MacRabbit - Slicy（http://macrabbit.com/slicy），这是一款业界良心产品，它的省心省力在于:它能不打扰你的创作，只要你命名好了，它就回在后台默默帮你切出来，而且只要PSD文件发生了改变，它就能发现并且把改变的图更新。还有个小细节就是。即使你电脑上没有PS。它也能切图。

自从有了photoshop CC 2014 后，便有了[生成图片资源:从图层生成图像资源](http://helpx.adobe.com/content/help/cn/photoshop/using/generate-assets-layers.html )的功能。
它的体验非常接近MacRabbit - Slicy，但相比Slicy主要区别在于:
优点:
PS内置功能，可以少打开一个App (是不是感觉优雅了一些? 省力了一些?)
由Adobe自己开发维护 (是不是感觉大气了一些?)
指定切图面积的时候可以使用图层蒙版+剪切蒙版，而非必须添加一个名为@bounds的形状图层。( 简直太省心省力了! 从未有过如此清新脱俗的感觉! ! ! )
导出不同尺寸的图层可以不限于两倍,而可以自定百分比或固定多个尺寸，甚至格式。( 比如你做了一个纯矢量的icon，需要导出几十个尺寸。这时你只需把名称改一下即可，其他工具的话对不起你只有复制多个出来缩放+命名了。)
不局限于Mac平台，PC也一样能用。

缺点:
无法多级文件夹的存放切图,例如我可以再PS里给一个图层命名为:[主页/按钮们/按钮1.png]，MacRabbit - Slicy 便会创建一个[主页]文件夹里放一个[按钮们]文件夹,并把这个图层导出来命名为[按钮1.png]不过这功能随着PS链接智能对象的推出，一个PSD不用再嵌套那么多东西了，所以不太必要。
速度感觉上比MacRabbit - Slicy略慢，不过还可以接受。因为他们再处理文件上的逻辑有差异。MacRabbit - Slicy碰到其他不认识的图片会保留,而PS是会自动生成专用的文件夹,所以它会把不认识的图片删掉，而且每次你保存PSD，它貌似都会重新遍历图层并重新生成切图以保证无误。这点Adobe有待提高 (北京时间6月19号 即下周四凌晨1点 Adobe将发布CC系列的一次较大更新，PS的更新肯定没跑，期待它针对UI设计方面的更新吧! Adobe Creative Cloud Launch June 18, 2014 )

<span class="highlight-pink">综上：建议你选择Photoshop CC2014，然后用自带的 [文件>生成>图像资源] 功能来切图。</span>

补充说明：还有2个实用插件：
Renamy 3.0（http://klaia.com/Renamy/）：图层重命名不能更好
cutterman：http://www.cutterman.cn/cutterman/feature：切ios，安卓快到没朋友


# 关于命名：
1. 切都要建立在iOS和Android自身规律的前提下(比如iOS的@2X 和Android中各dpi文件夹下的同名文件)，如果两个平台使用的是同一套设计和资源，一定要搞好对应，尤其是在批量替换图片的时候，写个自动化工具吧。

2. 切图分层级命名＋分文件夹管理：命名尽量不要太多，一般是 [定位＋类型＋一级属性＋二级属性]，例如一个切图文件的命名是[tabbar_btn_title_n.png],tabbar 导航栏，btn 按钮，n normal 状态。更好的命名：[一级属性＋二级属性+定位＋类型]。后来，跟开发沟通后有必要增加以文件夹分类，因为切图量大了之后对于开发来说仍然不好定位切图，实际操作中，定位这个层级我会在相应文件夹中用其他更加细节（例如 home 页面专门用到的就加上home）来代替；

3. 不管是图片资源，还是开发自己用XML/代码写的背景/selector，文件名字只应该表明[这是干什么用的]，而不应该描述[这是长什么样的]。tabbar_btn_red_n.png]，相信我，如果你的产品有多个分支，每个分支都是不同皮肤，出现[red]字样的图片资源真的很不合适，用[text_title]真的要比[text_black]科学得多。这不仅应该贯穿在图片命名中，也应体现在代码的编写中。

4. 命名时，第一个单词最重要，因为它决定了顺序和检索效率。个人不推荐[btn_home_add_pressed.png]这样的写法，这种看起来很科学，但是使用起来尤其不方便，我说的是，工程师在代码中引用图片名称的时候，输入四个字符[btn_]后，会有很长一列搜索结果，如果你把跟详细的描述放在首位[add_pressed_btn_home.png]，效果会好很多，工程师们会感激你的~

5. 如果版本分支复杂到一定程度，图片资源也使用VCS吧。

<span class="highlight-pink">综上：命名建议遵循[一级属性＋二级属性+定位＋类型]方式，例如：[delete_n_btn_header.png]。</span>

# 我的实战
鉴于我从来都是只写代码，不切图，因此对于切图来说，我就是个萌新。
下面，让我们从头开始来实践如何将一份设计师给的PSD文件转换为网页可显示的文稿吧！
使用工具，PhotoShopCC2014，下载地址请找photoshop百度贴吧，里面各种不同的photoshop都有。

第一步，搜索 psd web，下载一个你喜欢的用于实践用的psd文稿：
<figure>
	<a href="/images/post/2014-12-15-1.png"><img src="/images/post/2014-12-15-1.png" alt=""></a>
</figure>
下载打开之后是这样子的，发现中间有很多蓝绿色的竖线条，如何把它去掉呢？
这种蓝绿色的竖线是贯穿整个屏幕的，专业名字叫做参考线，可以通过 视图->显示额外内容（ctrl + H）来决定是否要显示。

去掉参考线之后，整个网页的内容就显示出来了。
<figure>
	<a href="/images/post/2014-12-15-2.png"><img src="/images/post/2014-12-15-2.png" alt=""></a>
</figure>
第二步，生成图片文件：
首先打开首选项（ctrl+k），勾选 增效工具->启用生成器
<figure>
	<a href="/images/post/2014-12-15-3.png"><img src="/images/post/2014-12-15-3.png" alt=""></a>
</figure>
点击菜单中 文件->生成->图像资源：
<figure>
	<a href="/images/post/2014-12-15-4.png"><img src="/images/post/2014-12-15-4.png" alt=""></a>
</figure>
出现了错误：
[Fri Dec 12 2014 13:00:07 GMT+0800 (中国标准时间)] Layer "+": Expected Either a default asset specification or a layer asset specification but "+" found.
重新启动，补全了缺失的字体，发现没用。
<figure>
	<a href="/images/post/2014-12-15-5.png"><img src="/images/post/2014-12-15-5.png" alt=""></a>
</figure>
看来不是字体缺失的原因，我们找到名称为”+“的图层：
<figure>
	<a href="/images/post/2014-12-15-6.png"><img src="/images/post/2014-12-15-6.png" alt=""></a>
</figure>
将其删除，重新生成。重新生成的时候点击好几遍都不生成。也没有报错。
经检查发现，需要将其图层全部命名为xxx.jpg或xxx.png才可以。我这一套模板里面有几十上百个图层，一个个修改简直不人道。。于是找到可以批量修改的方法，使用photoshop的脚本处理。
代码如下：
{% highlight javascript %}
#target photoshop
app.bringToFront();
if (documents.length == 0) { 
    alert("no file to execute");
}else {
    var visibility = false;
    var docRef = activeDocument;
    var layers = docRef.layers;
    
    if (layers.length == 1 && 
        docRef.activeLayer.isBackgroundLayer == 1) { 
        alert("The Background layer can not be hidden when it is the only layer in a document.");
    }else {
        for (var i = 0; i < layers.length; i++) {
            layers[i].name = layers[i].name + ".png";
        }
    }
}
{% endhighlight %}
折腾半天修改发现只能修改最外层的文件名，里面的半点效果都没有。。
<figure>
	<a href="/images/post/2014-12-15-7.png"><img src="/images/post/2014-12-15-7.png" alt=""></a>
</figure>
哎，偷懒果然不靠谱儿，那只好手动更改啦。。顺便熟悉下图层结构等等。虽然文件中图层是分了文件夹的，但是导出的时候，是没有文件夹包含的，所有的文件都会被放在一个文件夹里，因此，最好还是自己看看每个图层对应的是什么。

在这里我们只做head部分的文件导出。
观察head部分，可以分为三大部分：文字，图标及背景。以下是我对各个部分的处理：
文字，先导出png，实现时还是使用文本来实现。
图标，底色、图标、文字要分离，鼠标移上去要变换颜色，具体看下面这样：

<figure>
	<a href="/images/post/2014-12-15-8.png"><img src="/images/post/2014-12-15-8.png" alt=""></a>
</figure>
背景，整个儿一张大图。
现在，按照分类将文件进行合并，并生成png资源。
因为目录实在是太太长了，这里仅截取其中的一部分，把你想要导出的图层重命名为xxx.png，其他的不变就好。

<figure>
	<a href="/images/post/2014-12-15-9.png"><img src="/images/post/2014-12-15-9.png" alt=""></a>
</figure>
这时候，不用做任何操作，在该psd文件存放文件夹下可以看到：
<figure>
	<a href="/images/post/2014-12-15-10.png"><img src="/images/post/2014-12-15-10.png" alt=""></a>
</figure>
自动生成了一个文件夹，文件夹里面即是你需要的切图文件：
<figure>
	<a href="/images/post/2014-12-15-11.png"><img src="/images/post/2014-12-15-11.png" alt=""></a>
</figure>
这些命名有点难找，让我们按照前面说的命名规范对其重命名吧！

因为很多icon和图片都只有一种状态，仅一个六边形的背景图有两种状态，因而，在我命名的时候，将只有一种状态的图片的名字中去掉了状态描述属性，仅使用三种属性对其命名。
<figure>
	<a href="/images/post/2014-12-15-12.png"><img src="/images/post/2014-12-15-12.png" alt=""></a>
</figure>
考虑到图标大小的变化，我们试着让其中一资源 photo_icon_header.png变成原来的两倍和0.5倍大小：
具体操作方法是复制图层并将其重命名：
<figure>
	<a href="/images/post/2014-12-15-13.png"><img src="/images/post/2014-12-15-13.png" alt=""></a>
</figure>
直接这样，会出现错误：
[Sat Dec 13 2014 09:46:53 GMT+0800 (中国标准时间)] Layer "50%photo_icon_header.png": Duplicate file name: photo_icon_header.png
[Sat Dec 13 2014 09:46:53 GMT+0800 (中国标准时间)] Layer "200%photo_icon_header.png": Duplicate file name: photo_icon_header.png
一定一定要修改成不一样的名字才可以生成呢！

<figure>
	<a href="/images/post/2014-12-15-14.png"><img src="/images/post/2014-12-15-14.png" alt=""></a>
</figure>
生成出来的图片比较：

<figure>
	<a href="/images/post/2014-12-15-15.png"><img src="/images/post/2014-12-15-15.png" alt=""></a>
</figure>
（尺寸有单像素，且不是完美正方形，会比较奇怪，据说遇到apple产品会渲染模糊。。建议大家在获取设计师底稿的时候要求全部图标都是偶数像素的会好点。）

<span class="highlight-pink">综上：得到标准图层（设计师的完整稿件），修改图层后缀名，勾选图像资源生成即可。</span>

# 参考
知乎，微信，谷歌搜索，百度贴吧
