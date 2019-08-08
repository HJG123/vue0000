//JS 的入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)  //安装路由
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'  //按需导入Mint-UI的功能
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button)

import VueResource from 'vue-resource'  //安装vue-resource
Vue.use(VueResource)
//vue-resource 设置 请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005/';

import app from '../App.vue'
import '../src/lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'

import router from './router'   //导入自己的 router.js 路由模块

//导入格式化时间的插件
import moment from 'moment'
Vue.filter('dataFormat',function(dataStr,parten="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(parten)
})
var vm = new Vue({
    el:'#app',
    data:{

    },
    methods:{
        
    },
    render: c => c(app),
    router  //挂载路由对象到 vm 实例上
})