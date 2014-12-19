# 项目结构
modules:每一个组件demo都对应一个文件夹
libs:常用库，应该只会包含jquery,requirejs,backbone
plugins:demo中引入的插件都在这里，在demo中，我尽量使用原生js实现，少使用插件
config:项目配置文件，主要是require配置，grunt的less任务和dust任务配置
assets:静态资源文件，包含样式、模板、图片资源
assets/dustjs:dustjs源文件，demo中需要用到的模板，需要用到模板渲染的都会使用dust.js
assets/less:.less的源文件，整个项目都会用到less，这里是xxx.less源文件存放之处
assets/css:demo中引用到的css文件
assets/images-large:demo中引用到的图片资源，没有压缩的
assets/images:demo中引用到的图片资源，经过压缩的
assets/templates

# 已经做的
1. 整个demo站使用AMD架构，异步加载，访问更加快速了哟
2. 整个demo站的文件规划都是模块/组件的方式哟，高内聚低耦合，极其方便重复利用了哟


# 想要做的
1. 做一个侧边栏菜单
2. 配置grunt自动化任务，更改任意less，dust源文件可以自动编译了，减少重复性的工作哟
3. 据说图片资源压缩会让您体验更好？采用图片压缩技术哟
4. 按照组件划分，将每个组件的js和css文件打包压缩
5. 在需要使用后台数据的页面，也让后台的json数据打包成一个请求（达到减少http请求的目的）


