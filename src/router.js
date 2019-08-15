import VueRouter from 'vue-router'
//导入自定义组件
import homeComponent from './components/tabbarComponents/homeComponent.vue'
import memberComponent from './components/tabbarComponents/memberComponent.vue'
import searchComponent from './components/tabbarComponents/searchComponent.vue'
import shopcarComponent from './components/tabbarComponents/shopcarComponent.vue'
import newsListComponent from './components/newsComponents/NewsList.vue'
import newsinfoComponent from './components/newsComponents/NewsInfo.vue'
import photoShareComponent from './components/photoListComponents/photoShare.vue'
import photoInfoComponent from './components/photoListComponents/photoInfo.vue'
import goodsListComponent from './components/goodsComponents/goods.vue'
import goodsInfo from './components/goodsComponents/goodsinfo.vue'
import goodsdesc from './components/goodsComponents/goodsdesc.vue'
import goodscomment from './components/goodsComponents/goodscomment.vue'
var router = new VueRouter({
    routes: [   //匹配路由规则
        { path:'/', redirect:'/home' },
        { path:'/home', component: homeComponent },
        { path:'/member', component: memberComponent },
        { path:'/shopcar', component: shopcarComponent },
        { path:'/search',component: searchComponent },
        { path:'/home/newslist', component: newsListComponent },
        { path:'/home/Newsinfo/:id', component: newsinfoComponent },
        { path:'/home/photoshare', component: photoShareComponent },
        { path:'/home/photoInfo/:id', component: photoInfoComponent },
        { path:'/home/goodsList', component: goodsListComponent },
        { path:'/home/goodsinfo/:id', component: goodsInfo, name:"details" },
        { path:'./home/goodsdesc/:id', component: goodsdesc, name:"goodsdesc"},
        { path:'./home/goodscomment/:id', component:goodscomment, name:"goodscomment" }
    ],
    linkActiveClass:'mui-active'    //覆盖默认的路由高亮的类
})

export default router
