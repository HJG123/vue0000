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

## 实现路由切换的动画效果*