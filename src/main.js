//JS 的入口文件
import Vue from 'vue'
import { Header } from 'mint-ui'
Vue.component(Header.name,Header)
import app from '../App.vue'
import '../src/lib/MUI/css/mui.min.css'

var vm = new Vue({
    el:'#app',
    data:{

    },
    methods:{

    },
    render: c => c(app)
})