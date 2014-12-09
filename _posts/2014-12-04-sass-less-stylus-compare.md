---
layout: post
title: Sass vs. LESS vs. Stylus
description: "最热门的CSS预处理编译器Sass，LESS和Stylus的比较"
modified: 2014-12-04
tags: [css, sass, less, stylus, 预处理编译器]
image:
  feature: abstract-10.jpg
  credit: dargadgetz
  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---


这是一篇有关于预处理器的故事。猪脚为Sass，LESS和Stylus。

# 对比总结

* 三者都是开源项目
* Sass诞生是最早也是最成熟的CSS预处理器，有Ruby社区和Compass支持；Stylus早期服务于Node JS项目，在该社区得到一定支持者；LESS出现于2009年，支持者远超于Ruby和Node JS社区
* Sass和LESS语法较为严谨、严密，而Stylus语法相对散漫，其中LESS学习起来更快一些，因为他更像CSS的标准
* Sass和LESS相互影响较大，其中Sass受LESS影响，已经进化到全面兼容CSS的SCSS
* Sass和LESS都有第三方工具提供转译，特别是Sass和Compass是绝配
* Sass整体比LESS更严谨、严密，功能也更强大一些
* LESS相对灵活一些，而且引入一个JS文件就能立刻开始使用（LESS.js在Chrome的常规模式下无法工作，Chrome要--allow-file-access-from-files才行）
* Sass和LESS和Stylus都具有变量、作用域、混合、嵌套、继承、运算符、颜色函数、导入和注释等基本特性，而且以“变量”、“混合”、“嵌套”、“继承”和“颜色函数”称为五大基本特性，各自特性实现功能基本相似，只是使用规则上有所不同
* Sass和Stylus具有类似于语言处理的能力，比如说条件语句、循环语句等，而LESS需要通过When等关键词模拟这些功能，在这一方面略逊一筹
* 我对Stylus有偏见，因为不喜欢语法自由散漫毫无下限的语言。

简单来说CSS预处理器语言较CSS玩法变得更高级了，但同时降低了自己对最终代码的控制力。更致命的是提高了门槛，首先是上手门槛，其次是维护门槛，再来是团队整体水平和规范的门槛。这也造成了初学学习成本的昂贵。

# 前言

CSS预处理技术已经非常的成熟，而且也涌现出了越来越多的CSS的预处理器框架，比如说：Sass（SCSS）、LESS、Stylus、Turbine、SwitchCSS、CSS Cacheer、DTCSS等。

首先我们来简单介绍下什么是CSS预处理器。

<p class="highlight-pink">CSS预处理器是一种语言，用来为CSS增加一些编程的特性，无需考虑浏览器的兼容性问题，例如你可以在CSS中使用变量、简单的程序逻辑、函数等等在编程语言中的一些基本技巧，可以让你的css更加简洁，适应性更强，代码更直观，可读性更加，更易于维护等诸多好处。</p>

# 背景

Sass是对CSS（层叠样式表）的语法的一种扩充，诞生于2007年，最早也是最成熟的一款CSS预处理器语言，它可以使用<span class="highlight-pink">变量、常量、嵌套、混入、函数</span>等功能，可以更有效有弹性的写出CSS。Sass最后还是会编译出合法的CSS让浏览器使用，也就是说它本身的语法并不太容易让浏览器识别，因为它不是标准的CSS格式，在它的语法内部可以使用动态变量等，所以它更像一种极简单的动态语言。
	
其实现在的Sass已经有了两套语法规则：一个依旧是用缩进作为分隔符来区分代码块的；另一套规则和CSS一样采用了大括号（｛｝）作为分隔符。后一种语法规则又名SCSS，在Sass3之后的版本都支持这种语法规则。

---
LESS是2009年开源的一个项目，受Sass的影响较大，但又使用CSS的语法，让大部分开发者和设计师更容易上手。LESS提供了多种方式能平滑的将写好的代码转化成标准的CSS代码，在很多流行的框架和工具中已经能经常看到LESS的身影了（例如Twitter的Bootstrap框架就使用了LESS）。
	
根据维基百科上的介绍，其实LESS是Alexis Sellier受Sass的影响创建的一个开源项目。当时SASS采用了缩进作为分隔符来区分代码块，而不是CSS中广为使用的大括号（｛｝）。为了让CSS现有的用户使用起来更佳方便，Alexis开发了LESS并提供了类似CSS的书写功能。

---
Stylus，2010年产生，来自于Node.js社区，主要用来给Node项目进行CSS预处理支持，在此社区之内有一定支持者，在广泛的意义上人气还完全不如Sass和LESS。
	
Stylus被称为是一种革命性的新语言，提供一个高效、动态、和使用表达方式来生成CSS，以供浏览器使用。Stylus同时支持缩进和CSS常规样式书写规则。


# 安装方法

## Sass install
Sass是Ruby语言写的，但是两者的语法没有关系。不懂Ruby，照样可以正常使用Sass。只是必须先安装Ruby，然后再安装Sass。
首先安装Ruby，如果你使用的是IOS系统，那么你的系统已经安装好了Ruby。如果你使用的是Windows，那么安装就有些许的麻烦。安装步骤如下。

[下载Ruby安装文件](http://rubyinstaller.org/downloads)

我这里安装的是Ruby2.1.5。在安装过程中，建议安装在C盘下，在安装过程中必选第二个选项，建议都选上。
	
在控制台使用如下命令安装sass：

~~~ bash
$ gem install sass
~~~	
在我的安装中一直出现了这个错误：
		Unable to download data from https://rubygems.org/ - SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed (https://api
		.rubygems.org/latest_specs.4.8.gz)
使用了下面这个解决办法：

~~~ bash
D:\0ovickyo0.github.io>gem install sass --source http://rubygems.org
		Successfully installed sass-3.4.9
		Parsing documentation for sass-3.4.9
		Done installing documentation for sass after 7 seconds
		WARNING:  Unable to pull data from 'https://rubygems.org/': SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed (https://api.ru
		bygems.org/latest_specs.4.8.gz)
		1 gem installed
~~~
成功安装了，据说是因为网络的原因timeout了，但是此种方法并不安全，不可长期使用。另还可尝试[解决方法](https://gist.github.com/fnichol/867550)。
	
使用sass -v 查看sass的版本

## LESS install 
LESS的安装和Sass安装有所不同，他不需要依赖于Ruby环境，就能直接安装使用。不过LESS安装分为两种：客户端和服务器端安装。
	
a）客户端安装：
我们可以直接在客户端（浏览器）使用“.less”（LESS源文件），只需要在官网下载一个Javascript脚本文件“less.js”，然后在我们需要引入LESS源文件的HTML的<head>中加入如下代码：

~~~ html
<link rel="stylesheet/less" type="text/css" href="文件路径/styles.less">
<script src="文件路径/less.js" type="text/javascript"></script> 
~~~		
需要注意的是：在引入“.less”文件中，“link”的“rel”属性要设置为“stylesheet/less”。还有更重要的一点需要注意的是：LESS源文件一定要在“less.js”引入之前引入，这样才能保证LESS源文件正确编译解析。

b）服务器端安装
LESS在服务器端的使用主要是借助于LESS的编译器，将LESS源文件编译生成最终的CSS文件，目前最常用的方式是利用node的包管理器（npm）安装LESS，安装成功后就可以在Node环境中对LESS文件进行编译。如此一来，LESS在服务器的安装和Sass的安装有点相似，不同之处是他们需依赖的环境不一样，LESS需要的是Node JS环境，而Sass需要的是Ruby环境。下面是Win7下的安装方法。
		
在控制台输入下面命令：

~~~ bash
$ npm install less
~~~
这样就安装完LESS的编译命令，可以在本地正常编译LESS源文件。如果想下载最新稳定版本的LESS，还可以尝试下面的命令：

~~~ bash
$ npm install less@latest
~~~

## Stylus install 
Stylus 的安装和LESS在服务器端的安装很相似，同样依赖于Node JS环境，也就是说要先安装Node JS。然后在终端输入如下命令：

~~~ bash
$ npm install stylus    
~~~
然后就会自动下载安装最新的stylus库。这样就算是安装完Stylus了，也可以正常使用Stylus了。

# 将源文件编译为CSS
Sass、LESS和Stylus源文件（除了LESS源文件在客户端下运行之外）都不能直接被浏览器直接识别，这样一来，要正常的使用这些源文件，就需要将其转换成浏览器可以识别的CSS样式文件，这也是使用CSS预处理器很关键的一步，如果这一步不知道如何操作，那么意味着写出来的代码不可用。接下来按同样的方式，分别来看看三者之间是如何将其源文件转译成所需要的CSS样式文件。

## Sass编译CSS
Sass文件就是普通的文本文件，不过其文件后缀名有两种，一种为“.sass”；另一种为“.scss”。我们一般用“.scss”就好，至于这两种文件扩展名的区别在于“.sass”是Sass语言文件的扩展后缀名，而“.scss”是SCSS语言文件的扩展后缀名，至于Sass和SCSS的详细区别这里不做介绍。你可以简单的理解为他们都是CSS预处理器语言，而且两者功能特性都一样，只是书写规则不同而已。
	
要转译Sass文件的前提是有文件可转，因此先在项目中创建一个Sass文件，此例中将其命名为“style.scss”，并且将其放在对应的项目样式中，如F盘目录下。
	
在“style.scss”的目录下（F盘），输入命令：

~~~ bash
sass style.scss style.css
~~~
这样在当前目录下会生成“style.css”文件，同时还可能会产生其他文件：

~~~ bash
F:/
|──.sass-cache
|──style.css
|──style.css.map
└──style.scss
~~~
其中“style.css”文件是转译出来的样式文件，可以被调用。
	
单文件的监听，只需要在刚才的命令行中输入：

~~~ bash
sass --watch style.scss:style.css
~~~
就会看到下面的提示信息：

~~~ bash
F:\>sass --watch style.scss:style.css
>>>Sass is watching for changes. Press Ctrl-C to stop.
~~~
看到上面所提示的信息就表示监听成功，这样一来，只要你修改了“style.scss”文件，“style.css”文件就会随着更新变化。

~~~ bash
>>> change detected to:style.scss
    write style.css
    write style.css.map
~~~
对于一个项目而言，不太可能只有一个CSS样式文件，如果有多个Sass文件需要监听时，就很有必要的组织一下。默认情况下，我们喜欢将所有的Sass文件放在“/css/sass”目录中，而生成的CSS文件则直接放在“/css”目录下。现在我们修改一下项目文件目录结构：

~~~ bash
F:/
└──css
    └──scss
        └──style.scss
~~~
使用下面的命令进行批量的监听：

~~~ bash
sass --watch css/sass:css
~~~
注意，上面的命令对应的命令格式为：

~~~ bash
sass --watch sassFileDirectory:cssFileDirectory
~~~
执行后是这样子的：

~~~ bash
F:\>sass --watch css/sass:css
>>> Sass is watching for changes. Press Ctrl-C to stop.
    write css/style.css
    write css/style.css.mao
~~~
最后生成的目录是下面这样的：

~~~ bash
F:/
└──css
|   |──scss
|   |   └──style.scss
|   |──style.css 
|   └──style.css.map
└──.sass-cache
~~~
除了使用cmd控制台转译Sass之外还可以考虑第三方工具，比如说有名的Compass.app和fire.app。

## LESS编译CSS

LESS文件的转译和Sass文件的转译可以说是大同小异，不同之处是LESS在安装的Node JS环境下通过其自己的命令来进行转译。

~~~ bash
lessc style.less
~~~
上面的命令会将编译的CSS传递给stdout，如下：

~~~ bash
F:\less>lessc style.less
body{
  background-color: #666;
}
F:\less>
~~~
你可以将它保存到一个文件中：

~~~ bash
lessc style.less > style.css
~~~
除了上面的命令转译LESS源文件之外，现在还有很多第三方开发的工具，比较常见的有：SimpleLess、Less.app、LESS编译辅助脚本-LESS2CSS、WinLess和CodeKit.app等，win下推荐WinLess工具，简单易用，不过在IOS系统下LESS.app和CodeKit.app很好用。

## Stylus编译CSS
Stylus具有可执行性，因此Stylus能将自身转换成CSS。Stylus可以读取自”stdin“输出到”stdout“，因此Stylus可以像下面转译源文件：

~~~ bash
stylus –-compress  <some.styl> some.css
~~~
出现问题：包是安装成功的，但是不可执行？
需要使用如下命令进行安装：

~~~ bash
npm install stylus -g
~~~
运行后出现如下错误（Error：ENOENT，stat 'F:\style\-compress）。
		
查询官方文档后，发现命令有误，正确的命令应该是（注意compress前有两个--）：

~~~ bash
stylus –-compress  style.styl style.css
~~~
运行后依然有错误（Error：ENOENT，stat 'F:\stylus\style.css）。

手动新建文件style.css后再次运行：

~~~ bash
F:\stylus>stylus --compress style.styl styl.css
    compiled style.css
    compiled style.css
~~~
<span class="highlight-pink">总结来说，1）命令不要敲错，要有两个减号；2）执行的文件css和styl都要存在（太不科学了！）</span>
	
Stylus也像Sass一样，同时接受单个文件和整个目录的转译。例如，一个目录名为”css“将在同一个目录编译并输出”.css“文件。

~~~ bash
F:\>stylus stylus
    compiled stylus\style.css
~~~
下面的命令将输出到”./public/stylesheets“：

~~~ bash
stylus css –-out public/stylesheets
~~~
执行后，找不到stylesheets了：

~~~ bash
F:\>stylus css --out public/stylesheets
~~~
发现是文件名不对，更正后命令为：

~~~ bash
stylus stylus --out public/stylesheets
~~~
执行后报错（Error：ENOENT，open ‘F：\public\stylesheets\style.css）。

按照上面路径新建文件style.css，运行成功：

~~~ bash
F:\>stylus stylus --out public/stylesheets
    compiled public\stylesheets\style.css
~~~

<span class="highlight-pink">综上，1）命令要敲对，2）源文件和目的文件都要存在，3）stylus真矫情</span>

还可以同时转译多个文件：

~~~ bash
F:\>stylus>stylus style.styl style1.styl
  compiled style.css
  compiled style1.css
~~~
生成的 style.css 和 style1.css 会与 style.styl , style1.styl在同一个目录下面。
		
如果你的浏览器安装了Firebug，那么可以使用[FireStylus扩展](https://github.com/LearnBoost/stylus/blob/master/docs/firebug.md)。

# 语法

在使用CSS预处理器之前最重要的是理解语法，幸运的是基本上大多数预处理器的语法跟CSS都差不多。
首先Sass和Less都使用的是标准的CSS语法，因此你可以很方便的将已有的CSS代码转为预处理器代码，默认Sass使用.sass扩展名，而LESS使用.less扩展名。

## Sass LESS语法
下面是sass和LESS的语法：

~~~ css
/* style.scss or style.less */
h1 {
    color:#0982C1;
}
~~~
你注意到了，这是一个在普通不过的，不过Sass同时也支持老的语法，就是不包含花括号和分号的方式，老的语法和常规的CSS语法略有不同，他需要更严格的语法，任何缩进和字符的错误都会造成样式的编译错误。Sass可以省略大括号（{}）和分号（；），完全依靠严格的缩进和格式化代码，而且文件使用”.sass“扩展名，他的语法类似于：

~~~ css
/* style.sass */
h1 
    color:#0982C1;
~~~

## Stylus语法

而Stylus支持的语法要更多样性一点，它默认使用.styl的文件扩展名，下面是Stylus支持的语法：

~~~ css
/* style.styl */
h1 {
  color: #0982C1;
}
  
/* omit brackets */
h1
  color: #0982C1;
  
/* omit colons and semi-colons */
h1
  color #0982C1
~~~
在Stylus 和 Sass中，你可以在一份样式表单中使用不同的变量，例如下面的写法不会报错：

~~~ css
h1 {
  color #0982c1
}
h2
  font-size: 1.2em
~~~

# 变量

你可以在CSS预处理器中声明变量，并在整个样式文件中使用，支持任何类型的变量，例如颜色、数值（不管是否包括单位）、文本。然后你可以任意引用该变量。

## Sass
Sass的变量必须是$开始，然后变量名和值使用冒号隔开，跟CSS的属性一致：

~~~ css
$mainColor: #0982c1;
$siteWidth: 1024px;
$borderStyle: dotted;

body {
    color: $mainColor;
    border: 1px $borderStyle $mainColor;
    max-width: $siteWidth;
}
~~~

## Less
而Less的变量名使用@符号开始：

~~~ css
@mainColor: #0982c1;
@siteWidth: 1024px;
@borderStyle: dotted;

body {
    color: @mainColor;
    border: 1px @borderStyle @mainColor;
    max-width: @siteWidth;
}
~~~

## Stylus
Stylus对变量名没有任何限定，你可以是$开始，也可以是任意字符，而且与变量值之间可以用冒号、空格隔开，需要注意的是Stylus(0.22.4)将会编译@开始的变量，但其对应的值并不会赋予该变量，换句话说，在Stylus的变量名不要用@开头。

~~~ css
mainColor = #0982c1
siteWidth = 1024px
$borderStyle = dotted
  
body
  color mainColor
  border 1px $borderStyle mainColor
  max-width siteWidth
~~~
上面三种不同的CSS预处理器的写法，最终都将产生相同的结果：

~~~ css
body {
  color: #0982c1;
  border: 1px dotted #0982c1;
  max-width: 1024px;
}
~~~
Stylus还有一个独特的功能，不需要分配值给变量就可以定义引用属性：

~~~ css
#logo                             
  position  absolute              
  top  50%                        
  left  50%                       
  width  w = 150px                
  height  h = 80px                
  margin-left  -(w / 2)           
  margin-top  -(h / 2)   
~~~

编译出来的样式：

~~~ css
#logo {
  position:absolute;
  top:50%;
  left:50%;
  width:150px;
  height:80px;
  margin-left:-75px;
  margin-top:-40px;
} 
~~~
		
从上面的代码中我们可以看出，CSS预处理器语言中的变量是值级别的重复使用，可以将相同的值定义成变量统一管理起来。
你可以想象，加入你的CSS中使用了某个颜色的地方多达数十次，那么要修改颜色时你必须找到这数十次的地方并意已修改，而有了CSS预处理器，修改一个地方就够了！

# 作用域

CSS预处理器语言中的变量和其它程序语言一样，可以实现值的复用，同样它也存在生命周期，也就是Scope（变量范围，作用域），简单来讲就是局部变量还是全局变量的概念，查找变量的顺序是先在局部定义中找，如果找不到，则查找上级定义，甚至全局。下面我们通过一个简单的例子来解释这三款CSS预处理器的作用域使用。

## Sass的作用域
Sass中作用域在这三款预处理器中是最差的，可以说在Sass中是不存在什么全局变量。具体来看下面的代码：

~~~ css
/*Sass样式*/
$color: black;
.scoped {
  $bg: blue;
  $color: white;
  color: $color;
  background-color:$bg;
}
.unscoped {
  color:$color;
}  
~~~
转译出来的CSS样式：

~~~ css
.scoped {
  color:white;/*是白色*/
  background-color:blue;
}
.unscoped {
  color:white;/*白色（无全局变量概念）*/
}   
~~~
示例明显的告诉我们，在Sass样式中定义变量，调用变量是没有全局变量一个概念存在，因此在Sass中定义了相同变量名时，在调用时候千万小心，不然会给你的样式带来错误。
	
## LESS作用域
LESS中的作用域和娶她程序语言中的作用域非常的相同，他首先会查找局部定义的变量，如果没有找到，会像冒泡一样，一级一级往下查找，直到根为止，同样上面的例子，我们来看看他在LESS下所起的变化。

~~~ css
/*LESS样式*/
@color: black;
.scoped {
  @bg: blue;
  @color: white;
  color: @color;
  background-color:@bg;
}
.unscoped {
  color:@color;
}
~~~
转译出来的CSS样式：

~~~ css
.scoped {
  color:white;/*白色（调用了局部变量）*/
  background-color:blue;
}
.unscoped {
  color:black;/*黑色（调用了全局变量）*/
}
~~~

## Stylus的作用域
Stylus虽然起步比较晚，但其作用域的特性和LESS一样，可以支持全局变量和局部变量。会向上冒泡查找，直到根为止。

# 嵌套
如果我们需要在CSS中相同的parent引用多个元素，这将是非常乏味的，你需要一遍又一遍写parent。例如：

~~~ css
section {
  margin: 10px;
}
section nav {
  height: 25px;
}
section nav a {
  color: #0982C1;
}
section nav a:hover {
  text-decoration: underline;
}
~~~
而如果用CSS预处理器，就可以少写很多单词，而且父子节点关系一目了然，我们这里提到的三个CSS框架都是允许嵌套语法：

~~~ css
section {
  margin: 10px;
  
  nav {
    height: 25px;
  
    a {
      color: #0982C1;
  
      &amp;:hover {
        text-decoration: underline;
      }
    }
  }
}
~~~
最终生成的CSS结果是：

~~~ css
section {
  margin: 10px;
}
section nav {
  height: 25px;
}
section nav a {
  color: #0982C1;
}
section nav a:hover {
  text-decoration: underline;
}
~~~
非常方便。

# Mixins（混入）
Mixins是CSS预处理器中语言中最强大的特性，简单点来说，Mixins可以将一部分样式抽出，作为单独定义的模块，被很多选择器重复使用。平时你在写样式时肯定有碰到过，某段CSS样式经常要用到多个元素中，这样你就需要重复的写多次。在CSS预处理器语言中，你可以为这些公用的CSS样式定义一个Mixin，然后在你CSS需要使用这些样式的地方直接调用你定义好的Mixin。这是一个非常有用的特性，Mixins被当做一个公认的选择器，还可以在Mixins中定义变量或者默认参数。

## Sass的混入语法
Sass样式中声明Mixins时需要使用”@mixin“，然后后面紧跟Mixins的名，他也可以自定义参数，同时可以给这个参数设置一个默认值，但参数名是使用”$“符号开始，而且和参数值之间需要使用冒号（:）分开。
	
在选择器调用定义好的Mixins需要使用”@include“，然后在其后紧跟你要调用的Mixins名。不过在Sass中海支持老的调用方法，就是使用加号”+“调用Mixins，在”+“后紧跟Mixins名。
	
下面是一个简单的例子，比如在你的Sass样式中定义了一个名叫”error“的Mixin，这个”error“设置了一个参数”$borderWidth“，在没特别定义外，这个参数的默认值设置为”2px“：

~~~ css
/* Sass mixin error with (optional) argument $borderWidth which defaults to 2px if not specified */
@mixin error($borderWidth: 2px) {
  border: $borderWidth solid #F00;
  color: #F00;
}
  
.generic-error {
  padding: 20px;
  margin: 4px;
  @ include error(); /* Applies styles from mixin error */
}
.login-error {
  left: 12px;
  position: absolute;
  top: 20px;
  @ include error(5px); /* Applies styles from mixin error with argument $borderWidth equal to 5px*/
}
~~~
## LESS
在LESS中，混入是指将定义好的”Class A“中引入另一个已经定义的”Class“，就像在当前的”class“招工难增加一个属性一样。
		
不过LESS样式中声明Mixins和Sass声明方式不一样，他更像CSS央视定义，在LESS可以将Mixins看成是一个类选择器，当然Mixins也可以设置参数，并给参数设置默认值。不过设置参数的变量名是使用”@“开头，同样参数和默认参数值之间需要使用（:）分隔开。
		
正如Sass混入的示例一样，同样在LESS样式中定义一个名叫”error“的Mixin，这个”error“设置了一个参数”@borderWidth“，在没有特别定义外，这个参数的默认值是”2px“

~~~ css
/* LESS mixin error with (optional) argument @borderWidth which defaults to 2px if not specified */
.error(@borderWidth: 2px) {
  border: @borderWidth solid #F00;
  color: #F00;
}
  
.generic-error {
  padding: 20px;
  margin: 4px;
  .error(); /* Applies styles from mixin error */
}
.login-error {
  left: 12px;
  position: absolute;
  top: 20px;
  .error(5px); /* Applies styles from mixin error with argument @borderWidth equal to 5px */
}
~~~

## Stylus
Stylus中的混入和前两个CSS预处理器语言的混入略有不同，它可以不使用任何符号，就直接声明Mixins名，然后在定义参数和默认值之间用等号（=）来连接。

~~~ css
/* Stylus mixin error with (optional) argument borderWidth which defaults to 2px if not specified */
error(borderWidth= 2px) {
  border: borderWidth solid #F00;
  color: #F00;
}
  
.generic-error {
  padding: 20px;
  margin: 4px;
  error(); /* Applies styles from mixin error */
}
.login-error {
  left: 12px;
  position: absolute;
  top: 20px;
  error(5px); /* Applies styles from mixin error with argument borderWidth equal to 5px */
}
~~~
最终它们都将编译成如下的CSS样式：

~~~ css
.generic-error {
  padding: 20px;
  margin: 4px;
  border: 2px solid #f00;
  color: #f00;
}
.login-error {
  left: 12px;
  position: absolute;
  top: 20px;
  border: 5px solid #f00;
  color: #f00;
}
~~~

# 继承
当我们需要为多个元素定义相同样式的时候，我们可以考虑使用继承的用法。例如我们经常需要：

~~~ css
p,
ul,
ol {
  /* styles here */
}
~~~
这样做非常好，但往往我们需要给单独元素添加另外的样式，这个时候我们就需要把其中选择器单独出来写样式，如此一来我们维护样式就相当的麻烦。为了应对这个问题，CSS预处理器语言可以从一个选择器继承另一个选择器下的所有样式。
	
## Sass和Stylus
Sass和Stylus的继承是把一个选择器的所有样式继承到另一个选择器上，在继承另一个选择器的样式时需要使用”@extend“开始，后面紧跟被继承的选择器：
我们可以这样写：

~~~ css
.block {
  margin: 10px 5px;
  padding: 2px;
}
  
p {
  @extend .block; /* Inherit styles from '.block' */
  border: 1px solid #EEE;
}
ul, ol {
  @extend .block; /* Inherit styles from '.block' */
  color: #333;
  text-transform: uppercase;
}
~~~
在这里首先定义.block块，然后让p、ul和ol元素继承.block，最终生成的CSS如下：

~~~ css
.block, p, ul, ol {
  margin: 10px 5px;
  padding: 2px;
}
p {
  border: 1px solid #EEE;
}
ul, ol {
  color: #333;
  text-transform: uppercase;
}
~~~

## LESS的继承
在这方面Less表现的稍微弱一些，LESS支持的继承和Sass与Stylus不一样，它不是在选择器上继承，而是将Mixins中的样式嵌套到每个选择器里面。这种方法的缺点就是在每个选择器中会有重复的样式产生。这种更像是混入写法：

~~~ css
.block {
  margin: 10px 5px;
  padding: 2px;
}
  
p {
  .block; /* Inherit styles from '.block' */
  border: 1px solid #EEE;
}
ul, ol {
  .block; /* Inherit styles from '.block' */
  color: #333;
  text-transform: uppercase;
}
~~~
生成的CSS如下：

~~~ css
.block {
  margin: 10px 5px;
  padding: 2px;
}
p {
  margin: 10px 5px;
  padding: 2px;
  border: 1px solid #EEE;
}
ul,
ol {
  margin: 10px 5px;
  padding: 2px;
  color: #333;
  text-transform: uppercase;
}
~~~
你所看到的上面的代码中， .block的样式将会被插入到相应的你想要继承的选择器中，但需要注意的是优先级的问题。

# 导入（Inport）
很多CSS开发者对导入的做法都不感冒，因为它需要多次的HTTP请求。但是在CSS预处理器中的导入操作则不同，他只是在语义上包含了不同的文件，但最终结果是一个单一的CSS文件，如果你是通过@import "file.css"；导入CSS文件，那效果跟普通的CSS导入一样。注意：导入文件中定义的混入、变量等信息也将会被引入到主样式文件中，因此需要避免他们互相冲突。
reset.css:

~~~ css
/* file.{type} */
body {
  background: #EEE;
}
~~~
main.xxx:

~~~ css
@ import "reset.css";
@ import "file.{type}";
  
p {
  background: #0982C1;
}
~~~
最终生成的CSS：

~~~ css
@ import "reset.css";
body {
  background: #EEE;
}
p {
  background: #0982C1;
}
~~~
(上面的那个例子好像意思是导入了2遍？)

# 颜色函数

CSS预处理器一般都会内置一些颜色处理函数用来对颜色值进行处理，比如加亮、变暗、颜色梯度等。
	
## Sass

~~~ css
lighten($color, 10%); /* returns a color 10% lighter than $color */
darken($color, 10%);  /* returns a color 10% darker than $color */
  
saturate($color, 10%);   /* returns a color 10% more saturated than $color */
desaturate($color, 10%); /* returns a color 10% less saturated than $color */
  
grayscale($color);  /* returns grayscale of $color */
complement($color); /* returns complement color of $color */
invert($color);     /* returns inverted color of $color */
  
mix($color1, $color2, 50%); /* mix $color1 with $color2 with a weight of 50% */
~~~
上面只是简单列了Sass的一些基本颜色处理函数，完整列表请看[Sass Documentation](http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html)。
	
颜色函数可以运用到任何一个元素上，只要其有颜色的属性，下面是一个具体的例子：

~~~ css
$color: #0982C1;
  
h1 {
  background: $color;
  border: 3px solid darken($color, 50%);
}
~~~
		
## LESS

~~~ css
lighten(@color, 10%); /* returns a color 10% lighter than @color */
darken(@color, 10%);  /* returns a color 10% darker than @color */
  
saturate(@color, 10%);   /* returns a color 10% more saturated than @color */
desaturate(@color, 10%); /* returns a color 10% less saturated than @color */
  
spin(@color, 10);  /* returns a color with a 10 degree larger in hue than @color */
spin(@color, -10); /* returns a color with a 10 degree smaller hue than @color */
  
mix(@color1, @color2); /* return a mix of @color1 and @color2 */
~~~

LESS完整的颜色函数列表请看[LESS Documentation](http://lesscss.org/#-color-functions)。
LESS使用颜色函数的例子：

~~~ css
@color: #0982C1;
  
h1 {
  background: @color;
  border: 3px solid darken(@color, 50%);
}
~~~

## Stylus

~~~ css
lighten(color, 10%); /* returns a color 10% lighter than 'color' */
darken(color, 10%);  /* returns a color 10% darker than 'color' */
  
saturate(color, 10%);   /* returns a color 10% more saturated than 'color' */
desaturate(color, 10%); /* returns a color 10% less saturated than 'color' */
~~~
完整的颜色函数列表请阅读[Stylus Documentation](http://learnboost.github.com/stylus/docs/bifs.html)。

# 运算符
你可以直接在CSS预处理器中进行样式的计算，比如：

~~~ css
body {
  margin: (14px/2);
  top: 50px + 100px;
  right: 100px - 50px;
  left: 10 * 10;
}
~~~
再例如：

~~~ css
@base_margin: 10px;
@double_margin: @base_margin * 2;
@full_page: 960px;
@half_page: @full_page / 2;
@quarter_page: (@full_page / 2) / 2; 
~~~

上面代码是LESS的运算示例，声明一下，在取得”@quarter_page“变量时，我们可以直接除以4，但是在这里，我们只是想演示一下圆括号组成的”运算顺序“。在复合型运算中，小括号是很有必要的。
	
Sass在数字运算上要比LESS更专业，它可以直接换算单位了。Sass可以处理无法识别的度量单位，并将其输出。这个特性很明显是一个对未来的尝试---证明W3C做出的一些改变。
	
Stylus的运算是三款处理器语言中最强大的一款，他拥有其他程序语言一样的运算功能，简单点的加减乘除，复杂的有关系运算、逻辑运算等。

# 一些跟具体浏览器相关的处理
这是宣传使用预处理的原因之一，并且是一个很好的理由，这样可以节省大量的时间和汗水。创建一个mixin来处理不同浏览器的CSS写法是简单的，节省了大量的重复工作和痛苦的代码编辑。

## Sass

~~~ css
@mixin border-radius($values) {
  -webkit-border-radius: $values;
     -moz-border-radius: $values;
          border-radius: $values;
}
  
div {
  @ include border-radius(10px);
}
~~~

## LESS

~~~ css
.border-radius(@values) {
  -webkit-border-radius: @values;
     -moz-border-radius: @values;
          border-radius: @values;
}
  
div {
  .border-radius(10px);
}
~~~

## Stylus

~~~ css
border-radius(values) {
  -webkit-border-radius: values;
     -moz-border-radius: values;
          border-radius: values;
}
  
div {
  border-radius(10px);
}
~~~
编译结果：

~~~ css
div {
  -webkit-border-radius: 10px;
     -moz-border-radius: 10px;
          border-radius: 10px;
}
~~~


# 错误报告
如果你经常写CSS，你会发现很难找到CSS中错误的地方，这也是预处理框架的好处，它会报告错误，你可以从这篇[文章](http://tjholowaychuk.com/post/5002088731/stylus-vs-sass-vs-less-error-reporting)中学习如何让CSS进行错误报告。

# 注释
以上三种框架都支持形如/**/的多行注释以及//的单行注释。
多行注释和CSS的标准注释，他们可以输出到CSS样式中，但在Stylus转译时，只有在”compress“选项未启用的时候才会被输出来。
单行注释不会输出到CSS中。
	
Stylus除了以上两种注释之外，他还有一种注释，叫做多行缓冲注释。这种注释跟多行注释类似，不同之处在于开始的时候，这里是”/*!“。这个相当于告诉Stylus压缩的时候这段无视直接输出。

# CSS预处理器的高级应用
我们知道，Sass、LESS和Stylus都具有变量、混入、嵌套、函数和作用域等特性，但这些特性都是一些普通的特性。其实除了这些特性之外，他们还拥有一些很有趣的特性有助于我们的开发，例如条件语句、循环语句等。接下来，我们从使用上来对比一下这三款CSS预处理器语言在这方面应用的不同。
	
## 条件语句
条件提供了语言的可控制，否则就是纯粹的静态语言。提供的条件有导入、混入、函数以及更多。在编程语言中常见的条件语句：
		if/else if/else 
这三款CSS预处理器语言中都具有这种思想，只不过LESS中表达的方式略有不同。
	
### Sass的条件语句
Sass样式中的条件语句和其它编程语言的条件语句非常相似，在样式中可以使用”@if“来进行判断：

~~~ css
p {
  @if 1 + 1 == 2 { border: 1px solid;  }
  @if 5 < 3      { border: 2px dotted; }
  @if null       { border: 3px double; }
}
~~~
编译出来的CSS：

~~~ css
p {
  border: 1px solid; 
}
~~~
在Sass中条件语句还可以和@else if 、@else配套使用：

~~~css
$type: monster;
p {
  @if $type == ocean {
    color: blue;
  } @else if $type == matador {
    color: red;
  } @else if $type == monster {
    color: green;
  } @else {
    color: black;
  }
}
~~~
转译出来的CSS：

~~~ css
p {color:green;}    
~~~	
	
### Stylus条件语句
Stylus的条件语句的使用和其它编程的条件语句使用基本能累死，不同的是他可以在样式中省略大括号（{}）：

~~~ css
box(x, y, margin = false)
  padding y x
  if margin
    margin y x
body
  box(5px, 10px, true)  
~~~
Stylus同样可以和else if 、else配套使用：

~~~ css
box(x, y, margin-only = false)
  if margin-only
    margin y x
  else
    padding y x 
~~~
Stylus除了这种简单的条件语句应用之外，他还支持后缀条件语句。这就意味着if和unless可以使用，unless基本上与if相反，本质上是“(!(expr))”。
	
例如，我们定义了negative（）来执行一些基本的检查。下面我们使用块式条件：

~~~ css
negative(n)
  unless n is a 'unit'
    error('无效数值')
  if n < 0
    yes
  else
    no  
~~~
接下来，我们利用后缀条件让我们的方法更加简洁：

~~~ css
negative(n)
  error('无效数值') unless n is a 'unit'
  return yes if n < 0
  no    
~~~
当然，我们可以更进一步。如这个“n < 0 ? yes : no”可以用布尔代替：“n < 0”。后缀条件适合于大多数的单行语句。如“@import,@charset”混合书写等。当然，下面所示的属性也是可以的：

~~~ css
pad(types = margin padding, n = 5px)
  padding unit(n, px) if padding in types
  margin unit(n, px) if margin in types

body
  pad()

body
  pad(margin)

body
  apply-mixins = true
  pad(padding, 10) if apply-mixins  
~~~
上面代码转译出来的CSS：

~~~ css
body {
  padding: 5px;
  margin: 5px;
}
body {
  margin: 5px;
}
body {
  padding: 10px;
}
~~~

### LESS的条件语句
LESS的条件语句使用有些另类，它不是我们常见的关键词if和else if之类，而其实现方式是利用关键词“when”。

~~~ css
.mixin (@a) when (@a >= 10) { 
  background-color: black; 
} 
.mixin (@a) when (@a < 10) { 
  background-color: white; 
} 
.class1 { .mixin(12) } 
.class2 { .mixin(6) }  
~~~

转译出来的CSS：

~~~ css
.class1 { 
  background-color: black; 
} 
.class2 { 
  background-color: white; 
}
~~~
利用when以及<、>、=、<=、>=是十分简单和方便的。LESS并没有停留在这里，而且提供了很多类型检查函数来辅助条件表达式，例如：iscolor、isnumber、isstring、iskeyword、isurl等等。

~~~ css
.mixin (@a) when (iscolor(@a)) { 
  background-color: black; 
} 
.mixin (@a) when (isnumber(@a)) { 
  background-color: white; 
} 
.class1 { .mixin(red) } 
.class2 { .mixin(6) }  
~~~
转译出来的CSS：

~~~ css
.class1 { 
  background-color: black; 
} 
.class2 { 
  background-color: white; 
}
~~~
另外，LESS的条件表达式同样支持AND、OR、NOT来组合条件表达式，这样可以组织成更为强大的条件表达式。需要特别指出的一点是，OR在LESS中并不是or关键词，而是用“，”来表示or的逻辑关系。

~~~ css
.smaller (@a, @b) when (@a > @b) { 
  background-color: black; 
} 
.math (@a) when (@a > 10) and (@a < 20) { 
  background-color: red; 
} 
.math (@a) when (@a < 10)，(@a > 20) { 
  background-color: blue; 
} 
.math (@a) when not (@a = 10)  { 
  background-color: yellow; 
} 
.math (@a) when (@a = 10)  { 
  background-color: green; 
} 

.testSmall {.smaller(30, 10) } 
.testMath1 {.math(15)} 
.testMath2 {.math(7)} 
.testMath3 {.math(10)}
~~~
转译出来的CSS：

~~~ css
.testSmall { 
  background-color: black; 
} 
.testMath1 { 
  background-color: red; 
  background-color: yellow; 
} 
.testMath2 { 
  background-color: blue; 
  background-color: yellow; 
} 
.testMath3 { 
  background-color: green; 
}
~~~		

## 循环语句
Sass和Stylus还支持for循环语句，而LESS并没支持for循环语句，但值得庆幸的是，在LESS中可以使用When来模拟出for循环的特性。
	
### Sass的循环语句
Sass中使用for循环语句需要使用@for，并且配合“from”和“through”一起使用，其基本语法：

~~~ css
@for $var from <start> through <end> {语句块}  
~~~

看一个简单的例子：

~~~ css
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}
~~~
转译出来的CSS代码：

~~~ css
.item-1 {  width: 2em; }
.item-2 {  width: 4em; }
.item-3 {  width: 6em; }
~~~
在Sass中循环语句除了@for语句之外，还有@each语句和@while语句
	
@each循环语法：

~~~ css
@each $var in <list>{语句块}    
~~~

简单的例子：

~~~ css
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}   
~~~
转译出来的CSS：

~~~ css
.puma-icon {  background-image: url('/images/puma.png'); }
.sea-slug-icon {  background-image: url('/images/sea-slug.png'); }
.egret-icon {  background-image: url('/images/egret.png'); }
.salamander-icon {  background-image: url('/images/salamander.png') }
~~~
@while循环使用和其它编程语言类似：

~~~ css
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
~~~
转译出来的CSS：

~~~ css
.item-6 {  width: 12em; }
.item-4 {  width: 8em; }
.item-2 {  width: 4em; }
~~~

### Stylus的循环语句
在Stylus样式中通过for/in对表达式进行循环，形式如下：

~~~ css
for <val-name> [, <key-name>] in <expression>  
~~~
例如：

~~~ css
body
  for num in 1 2 3
    foo num
~~~
转译出来的CSS：

~~~ css
body {
  foo: 1;
  foo: 2;
  foo: 3;
}
~~~
下面这个例子演示了如何使用<key-name>：

~~~ css
body
  fonts = Impact Arial sans-serif
  for font, i in fonts
    foo i font
~~~
转译出来的CSS：

~~~ css
body {
  foo: 0 Impact;
  foo: 1 Arial;
  foo: 2 sans-serif;
}
~~~	

### LESS的循环语句
在LESS语言中并没有现在的循环语句，可是像其条件语句一样，通过when来模拟出他的循环功能。

~~~ css
.loopingClass (@index) when (@index > 0) {
  .myclass {
    z-index: @index;
  }
  // 递归
  .loopingClass(@index - 1);
}
// 停止循环
.loopingClass (0) {}

// 输出
.loopingClass (3);  
~~~
转译出的CSS：

~~~ css
.myclass {z-index: 3;}
.myclass {z-index: 2;}
.myclass {z-index: 1;}  
~~~
相比之下，Sass和Stylus对条件语句和循环语句的处理要比LESS语言强大。音位他们具有真正的语言处理能力。

# 参考文章
感谢以下作者为我们带来的高质量的文章：

* [为您详细比较三个CSS预处理器（框架）：Sass、LESS和Stylus](http://www.oschina.net/question/12_44255)
* [Sass vs. LESS vs. Stylus: Preprocessor Shootout](http://code.tutsplus.com/tutorials/sass-vs-less-vs-stylus-a-preprocessor-shootout--net-24320)
* [Sass vs. LESS](http://css-tricks.com/sass-vs-less/)
* [CSS预处理器---Sass、LESS和Stylus实践](http://www.w3cplus.com/css/css-preprocessor-sass-vs-less-stylus-2.html)
* [SASS用法指南-阮一峰](http://www.ruanyifeng.com/blog/2012/06/sass.html)
* [CSS的预处理程序（Sass、LESS、Stylus等）分别有哪些优缺点](http://www.zhihu.com/question/20300388)

