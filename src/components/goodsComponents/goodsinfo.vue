<template>
    <div class="goodsinfo-container">
        <transition @before-enter="beforeEnter" @enter="Enter" @after-enter="afterEnter">
            <div class="ball" v-show="ballflag" ref="ball"></div>
            </transition>
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :LunBoTuList="lubotu" :isfull="false"></swiper>
					</div>
				</div>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">{{ goodsinfo.title }}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <p class="price">
                            市场价:<del>{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价: <span class="now_price">{{ goodsinfo.sell_price }}</span>
                        </p>
                        <p>购买数量:<numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p>
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addToShopcar">加入购物车</mt-button>
                        </p>
					</div>
				</div>

			</div>
            <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:{{ goodsinfo.goods_no }}</p>
                        <p>库存情况:{{ goodsinfo.stock_quantity }}件</p>
                        <p>上架时间:{{ goodsinfo.add_time|dataFormat }}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="goGoodsdesc(id)">商品详情</mt-button>
                    <mt-button type="danger" size="large" plain @click="goGoodcomment(id)">商品评论</mt-button>
                </div>
			</div>
			</div>
</template>
<script>
import swiper from '../subComponents/swiper.vue'
import numbox from '../subComponents/goodsinfo_numbox.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            lubotu:[],
            goodsinfo:{},
            ballflag:false,
            selectedCount:1 //保存用户选到的商品数量
        }
    },
    created(){
        this.getLunbotu()
        this.getGoodsinfo()
    },
    methods:{
        getLunbotu() {
            this.$http.get('api/getthumimages/'+this.id).then(result =>{
                if(result.body.status === 0){
                    result.body.message.forEach(item => {
                        item.img = item.src
                    });
                    this.lubotu = result.body.message
                }
            })
        },
        getGoodsinfo(){
            this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
                if(result.body.status === 0){
                    this.goodsinfo = result.body.message[0]
                }
            })
        },
        //跳到对应名称的页面
        goGoodsdesc(id){
            this.$router.push({ name:"goodsdesc", params:{id} })
        },
        goGoodcomment(id){
            this.$router.push({ name:"goodscomment", params:{id} })
        },

         //添加到购物车
        addToShopcar(){
            this.ballflag = !this.ballflag

            //{ id:商品id,count:'要购买的商品数量',price:'商品单价',selected:false }
            // 拼接出一个要保存到 store 中 car 数组里的商品信息对象
            var goodsinfo = {
                id:this.id,
                count:this.selectedCount,
                price:this.goodsinfo.sell_price,
                selected:true
            }
            // 调用 store 中的 mutations 来将商品加入购物车
            this.$store.commit("addToCar",goodsinfo)
        },
        //实现小球动画效果
        beforeEnter(el){
            el.style.transform = "translate(0,0)"
        },
        Enter(el,done){
            el.offsetWidth;

            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById("badge").getBoundingClientRect();
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;

            el.style.transform = `translate(${xDist}px,${yDist}px)`
            el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)"
            done()
        },
        afterEnter(el){
            this.ballflag = !this.ballflag
        },
        getSelectedCount(count){
            this.selectedCount = count;
            console.log("父拿到的数量："+this.selectedCount)
        }
    },
    components:{
        swiper,
        numbox
    }
}
</script>
<style lang="scss">
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
    .now_price{
        color: red;
    }
    .mui-card-footer{
        display: block;
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        z-index: 99;
        position:absolute;
        top: 409px;
        left: 78px;
    }
}
</style>
