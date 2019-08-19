//JS 的入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)  //安装路由

import Vuex from 'vuex'
Vue.use(Vuex)

// 每次刚进入网站，会调用 main.js 在刚调用的时候，先从本地存储中，把购物车的数据源读取放到 store 中
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
    state:{ //使用方法：this.$store.state.***
        car:car  //将 购物车的商品的数据，用一个数组储存起来，在 car 数组中，储存一些商品的对象，
                //可以设计成：{ id:商品id,count:'要购买的商品数量',price:'商品单价',selected:false }
    },
    mutations:{ //使用方法：this.$store.commit('方法','唯一的参数')
        addToCar(state,goodsinfo){
            //点击加入购物车，把商品信息，保存到 store 中的 car 上
            //1、如果购物车中，之前就有这个对应的商品了，那么，只需要更新数量
            //2、如果没有，则直接把商品数据，push到 car 即可
            var flag = false
            state.car.some(item =>{
                if(item.id == goodsinfo.id){
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })

            // 如果循环完毕，得到的 flag 还是false，则把商品数据直接 push 到购物车中
            if(!flag){
                state.car.push(goodsinfo)
            }

            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsInfo(state,goodsinfo){
            //修改购物车中商品的数量
            state.car.some(item =>{
                if(item.id == goodsinfo.id){
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            // 当修改完商品的数量，把最新的购物车数据保存到 本地储存中
            localStorage.setItem("car",JSON.stringify(state.car))
        },
        removeFromCar(state,id){
            state.car.some((item,i) =>{
                if(item.id == id){
                    state.car.splice(i,1)
                    return true
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsSelected(state,info){
            state.car.some(item =>{
                if(item.id == info.id){
                    item.selected = info.selected
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))

        }

    },
    getters:{   //使用方法：this.$store.getters.***
        getAllCount(state){
            var c = 0;
            state.car.forEach(item =>{
                c += item.count
            })
            return c
        },
        getCountByID(state){
            var o = {}
            state.car.forEach(item =>{
                o[item.id] = item.count
            })
            return o
        },
        getGoodsSelected(state){
            var o = {}
            state.car.forEach(item =>{
                o[item.id] = item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state){
            var o = {
                count:0,
                amount:0
            }
            state.car.forEach(item =>{
                if(item.selected){
                    o.count += item.count
                    o.amount += item.price * item.count
                }
            })
            return o
        }
    }
})
/* import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'  //按需导入Mint-UI的功能
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button)
Vue.use(Lazyload);
 */
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//安装缩略图预览插件
import VuePreview from 'vue-preview'

Vue.use(VuePreview) 

import VueResource from 'vue-resource'  //安装vue-resource
Vue.use(VueResource)
//vue-resource 设置 请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005/';
Vue.http.options.emulateJSON = true

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
    router,  //挂载路由对象到 vm 实例上
    store
})

