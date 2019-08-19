<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' style="height:25px">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="initnumbox" @change="countChanged" ref="numbox" readonly />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
    </div>
</template>

<script>
import mui from '../../lib/MUI/js/mui.js'

export default {
    mounted(){
        mui(".mui-numbox").numbox()
    },
    data(){
        return{

        }
    },
    methods:{
        countChanged(){
            //每当数量值改变了，立即把最新的数量同步到购物车的 store 中，覆盖之前的数量值
           this.$store.commit("updateGoodsInfo",{
               id:this.goodsid,
               count:this.$refs.numbox.value
           })
        }
    },
    //props: ["max"],
 /*  watch: {
    // 属性监听
    max: function(newVal, oldVal) {
      // 使用 JS API 设置 numbox 的最大值
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
    }
  } */
  props:["initnumbox","goodsid"]
}
</script>

<style lang="scss">
    
</style>