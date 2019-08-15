<template>
    <div class="cmt-container">
        <h3>评论区</h3>
        <hr>
        <textarea placeholder="请输入评论内容，最多不能超过200字" maxlength="200"  v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
            <div class="cmt-list">
                <div class="cmt-item" v-for="(item, index) in cmts" :key="item.id">
                    <div class="cmt-title">
                        第{{ index+1 }}楼&nbsp;&nbsp;用户:{{ item.user_name }}&nbsp;&nbsp;发表时间:{{ item.add_tiem | dataFormat }}
                    </div>
                    <div class="cmt-body">
                        {{ item.content==="undefined"?item.content="该用户很懒，没有评论":item.content }}
                    </div>
                </div>
            </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'

export default {
    data(){
        return{
            pageindex:1,  //默认展示第一页的评论数据
            cmts:[],
            msg:''
        }
    },
    created(){
        this.getComments()
    },
    methods:{
        getComments(){  //获取评论列表
            this.$http.get("api/getcomments/"+this.id+"?pageindex=" + this.pageindex).then(result =>{
                if(result.body.status === 0){
                   /*  this.cmts = result.body.message */
                   //用旧的数据拼接上新的评论数据‘
                   this.cmts = this.cmts.concat(result.body.message)
                }else{
                    Toast("评论获取失败")
                }
            })
        },
        getMore(){
            this.pageindex++
            this.getComments()
        },
        postComment(){  //发表评论
        if(this.msg.trim().length === 0 ){
            return Toast("评论内容不能为空")
        }
        this.$http.post('api/postcomment/'+this.$route.params.id,{ content: this.msg.trim() }).then(result => {
            if(result.body.status === 0){
                // 拼接 出一个 评论对象
                var newcmts = {
                    user_name:"匿名用户",
                    add_time:Date.now(),
                    content:this.msg.trim()
                }
                this.cmts.unshift(newcmts)
                this.msg = ""
            }
        })
    }
    },
    props:['id']
}
</script>
<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        margin: 0;
        font-size: 14px;
        height: 85px;
    }
    .cmt-list{
        margin: 10px 0;
        .cmt-item{
            margin: 5px 0;
            font-size: 13px;
            .cmt-title{
                background-color: #ccc;
                line-height: 30px;
            }
        .cmt-body{
                text-indent: 2em;
                line-height: 35px;
            }
        }
        
    }
    
}
</style>
