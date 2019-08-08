##这是我的第一个vue项目
####实在是太激动了

##主流开源协议之间有何异同？
####详情请留意https://www.zhihu.com/question/19568896/answer/20907890

##怎么用（传统的方式）命令行把修改过后的代码上传到GitHub？
1.  git add.
2.  git commit -m "提交信息"
3.  git push

## 制作首页APP组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的tabbar.html的组件
+ 在制作 购物车 小图标的时候的操作：
+ 先把 扩展图标的 css 样式拷贝到项目中
+ 再拷贝扩展字体库 ttf 文件到项目中
+ 为 购物车 小图标添加如下样式 'mui-icon-extra mui-icon-extra-cart'
3. 要在中间区域放置一个 router-view 来展示路由匹配到的组件

## 注意：
1. 在 main.js import VueRouter from 'vue-router' 后 别忘了 启用路由 Vue.use(VueRouter)
2. 在 main.js  import router from './router'   //导入自己的 router.js 路由模块，然后在 vm 实例上挂载路由对象

## 改造 tabbar 为 router-link

## 设置路由高亮

## tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 使用 vue-resource 加载数据
2. 使用 vue-resource 的this.$http.get 获取数据
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环渲染 每个 item 项

## 改造九宫格的样式

## 实现路由切换的动画效果

## 新闻资讯 页面制作
1. 绘制界面，使用 MUI 中的 media-list.html
2. 使用 vue-resource 获取数据
3. 渲染真实数据

## 实现新闻资讯列表 点击跳转到新闻详情
1. 把列表中的每一项改造成 router-link，同时，在转跳的时候应该提供唯一的ID标识符
2. 创建新闻详情的组件页面 NewsInfo.vue 
3. 在路由模块中，将新闻详情的 路由地址 和 组件页面对应起来

## 实现 新闻详情的页面布局 和数据渲染

## 单独封装一个 comment.vue 评论组件
1. 先创建一个 单独的 commentvue 组件模板
2. 在需要使用 comment 组件的页面中，先手动导入 comment 组件，+ `import comment from './comment.vue'`
3. 在父组件中，使用`component`属性，将刚才导入 comment 组件注册为自己的 子组件
4. 将注册子组件时候的 注册名称，以标签形式，在页面中引用即可

## 获取所有的评论数据显示到页面中

## 实现点击加载更多评论的功能
1. 为加载更多按钮，绑定点击事件，在事件中，请求 下一页数据
2. 点击加载更多，让 pageIndex++， 然后重新调用 this.getComments()方法重新获取最新一页的数据
3. 为了防止旧数据覆盖 老数据的情况，在点击加载更多的时候让老数据调用 数组的 concat方法，拼接上新数据