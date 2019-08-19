<template>
    <div class="shopcar-container">
        <!-- 商品列表区域 -->
        <div class="goods-list">
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner" v-for="(item,i) in shopcar_goodslist" :key="item.id">

						<mt-switch 
                        v-model="$store.getters.getGoodsSelected[item.id]"
                        @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div class="info">
                            <h1>{{ item.title }}</h1>
                            <p>
                                <span class="price">￥{{ item.sell_price }}</span>
                                <numbox class="num_box" :initnumbox="$store.getters.getCountByID[item.id]" :goodsid="item.id"></numbox>
                                <a href="#" @click="remove(item.id,i)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>

            <!-- 结算区域 -->
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						
                        <div class="left">
                            <p>总计（不含运费）</p>
                            <p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件，
                            总价 ￥<span class="red">{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
                        </div>
                            <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
                
			</div>
        </div>
        <p>{{ $store.getters.getGoodsSelected }}</p>
    </div>
</template>

<script>
import numbox from '../subComponents/shopcar_numbox.vue'
export default {
    data(){
        return{
            shopcar_goodslist:[]
        }
    },
    created(){
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){
            //1. 获取到 store 中所有的商品的 ID，然后拼接出一个用逗号分隔的字符串
            var idArr = []
            this.$store.state.car.forEach(item => {
                idArr.push(item.id)
            });
            // 如果 购物车中没有商品，则返回，不需要请求数据接口，不然会报错
            if(idArr.length <= 0){
                return;
            }
            this.$http.get('api/goods/getshopcarlist/'+idArr.join(',')).then(result =>{
                if(result.body.status === 0){
                    this.shopcar_goodslist = result.body.message
                }
            })
        },
        remove(id,index){
            this.shopcar_goodslist.splice(index,1)
            this.$store.commit("removeFromCar", id)
        },
        selectedChanged(id,val){
            console.log(id + "--------" + val);
            this.$store.commit("updateGoodsSelected",{id,selected:val})
        }
    },
    components:{
        numbox
    }
}
</script>

<style lang="scss" scoped>
.shopcar-container{
    background-color: #eee;
    overflow: hidden;
    .goods-list{
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
        img{
            width:60px;
            height:60px;
        }
        h1{
            font-size: 13px;
        }
        .info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .price{
                color: red;
                font-weight:bold;
            }
            .num_box{
                display: inline-block
            }
        }
    }
    .jiesuan{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red{
            color: red;
            font-weight: bold;
        }
    }
}
</style>

