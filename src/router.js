import VueRouter from 'vue-router'
//导入自定义组件
import homeComponent from './components/tabbarComponents/homeComponent.vue'
import memberComponent from './components/tabbarComponents/memberComponent.vue'
import searchComponent from './components/tabbarComponents/searchComponent.vue'
import shopcarComponent from './components/tabbarComponents/shopcarComponent.vue'
var router = new VueRouter({
    routes: [   //匹配路由规则
        { path:'/', redirect:'/home' },
        { path:'/home', component: homeComponent },
        { path:'/member', component: memberComponent },
        { path:'/shopcar', component: shopcarComponent },
        { path:'/search',component: searchComponent }
    ],
    linkActiveClass:'mui-active'    //覆盖默认的路由高亮的类
})

export default router
