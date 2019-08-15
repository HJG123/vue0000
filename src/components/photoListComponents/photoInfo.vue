<template>
    <div class="photoInfo-container">
        <h1>{{photoinfo.title}}</h1>
        <p class="subtitle">
            <span>发表时间:{{photoinfo.add_time|dataFormat}}</span>
            <span>点击{{ photoinfo.click }}次</span>
        </p>
        <hr>
        <!-- 缩略图区域 -->

            <!-- 这种方法已经被更新不可用了 -->
         <!-- <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">  -->  
        
        <div class="thumbs">
            <vue-preview :slides="list"></vue-preview>
        </div>
        
        
        <!-- 放置内容详情 -->
        <div class="content" v-html="photoinfo.content"></div>
        <!-- 评论组件 -->
        <mycmt :id="id"></mycmt>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
import cmt from '../subComponents/comment.vue'
export default {
    data(){
        return{
            id: this.$route.params.id,
            photoinfo:{},
            list:[]
        }
    },
    created(){
        this.getPhotoInfo()
        this.getTumbs()
    },
    methods:{
        getPhotoInfo(){
            this.$http.get('api/getimageInfo/'+this.id).then(result=>{
                if(result.body.status === 0){
                    this.photoinfo = result.body.message[0]
                }else{
                    Toast('获取图片详情失败')
                }
            })
    },
    getTumbs(){
        this.$http.get('api/getthumimages/'+this.id).then(result =>{
            if(result.body.status === 0){
                result.body.message.forEach(item => {
                    item.w = 600;
                    item.h = 600;
                    item.msrc = item.src;
                });
                this.list = result.body.message
            }
        })
    }
},
components:{
    "mycmt":cmt
}
}
</script>
<style lang="scss">
.photoInfo-container{
    padding: 3px;
    h1{
        font-size: 15px;
        color: #26a2ff;
        text-align: center;
        margin: 15px 0;

    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }
    .thumbs{
        .my-gallery{
        display: flex;
        flex-wrap: wrap;
        figure{
           
            img{
                width: 100px;
                height: 100px;
                box-shadow: 0 0 8px #999;
                vertical-align: middle;
            }}
        }
        
    }
    
}

        
    
</style>
