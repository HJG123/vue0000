<template>
    <div class="newsinfo-container">
        <h3 class="title">{{ newsinfo.title }}</h3>
        <p class="subtitle">
            <span>{{ newsinfo.add_time | dataFormat }}</span>
            <span>点击:{{ newsinfo.click }}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>
        <mycom :id="id"></mycom>
    </div>
</template>
<script>
import { Toast } from "mint-ui"
import comment from '../../subComponents/comment.vue' 

export default {
    data(){
        return{
            id: this.$route.params.id,  //这里需要加 this
            newsinfo:{}
        }
    },
    created(){
        this.getnewsinfo()
    },
    methods:{
        getnewsinfo(){
            this.$http.get('api/getnew/' + this.id).then(result =>{
                if(result.body.status === 0){
                    this.newsinfo = result.body.message[0] //新闻在数组的第0项
                }else{
                    Toast('获取新闻失败！')
                }
            })
        }
    },
    components:{
        "mycom":comment
    }
}
</script>
<style lang="scss" scoped>
.newsinfo-container{
    padding: 0 4;
    .title{
        color: red;
        font-size: 16px;
        margin: 15px 0;
        text-align: center;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{

    }
}
</style>
