<template>
    <div>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id==0?'mui-active':'']" data-wid="tab-top-subpage-1.html" 
                        v-for="item in cates" :key="item.id" @click="getPhotoListByCateID(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>

			</div>
            <ul class="photo-list">
                <router-link v-for="item in imgList" :key="item.id" :to="'/home/photoInfo/'+ item.id " tag="li">
                    <img v-lazy="item.img_url">
                <div class="info">
                <div class="info-title">{{ item.title }}</div>
                <div class="info-body">{{ item.zhaiyao }}</div>
            </div>
                </router-link>
            </ul>
    </div>
</template>
<script>
import mui from '../../lib/MUI/js/mui.js'
import {Toast} from 'mint-ui'

export default {
    data(){
        return {
            cates:[],   //所有列表的分类的数组
            imgList:[]  //图片列表的数组
        }
    },
    created(){
        this.getAllCategory(),
        this.getPhotoListByCateID(0)    //默认进入页面就加载全部图片
    },
    mounted(){  //当组件中的DOM结构被渲染好并放到页面中后，会执行这个钩子函数，这样才拿得到 '.mui-scroll-wrapper' 这个类
        //初始化滑动组件
        mui('.mui-scroll-wrapper').scroll({
	    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
    },
    methods:{
        getAllCategory(){
            //获取所有图片分类
            this.$http.get('api/getimgcategory').then(result =>{
                if(result.body.status === 0){
                    //手动拼接一个最完美的图片列表
                    result.body.message.unshift({
                        title:"全部",
                        id:0
                    })
                    this.cates = result.body.message
                }
            })
        },
        getPhotoListByCateID(cateID){   //根据 分类ID 获取图片列表
            this.$http.get('api/getimages/' + cateID ).then(result =>{
                if(result.body.status === 0){
                    this.imgList = result.body.message
                }else{
                    Toast("获取图片列表失败")
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
* { touch-action: pan-y; } 
.photo-list{
    list-style: none;
    padding-bottom: 0;
    margin: 0;
    padding: 10px;
    li{
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 5px #999;
        position: relative;
    }
    img{
        width: 100%;
        vertical-align: middle;

    }
    .info{
        color: #fff;
        text-align: left;
        bottom: 0;
        background: rgba(0,0,0,.4);
        position: absolute;
        max-height: 84px;
        .info-title{
            font-size: 14px;
        }
        .info-body{
            font-size: 13px;
        }
    }
}
</style>

