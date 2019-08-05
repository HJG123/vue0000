<template>
   <div class="myapp">
       <!-- 顶部header区域 -->
       <mt-header fixed title="我的APP"></mt-header>

       <!-- 中间的 router-view 区域 -->
       <transition>
            <router-view></router-view>
       </transition>
       
       <!-- 底部tabbar的区域 -->
       <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
        
   </div>
</template>
<script>

</script>
<style lang="scss" scoped>
.myapp{
    padding-top: 40px;
    overflow-x: hidden;
}
.v-enter{
    opacity: 0;
    transform: translateX(100%);
}
.v-leave-to{
    transform: translateX(-100%);   /* 动画离开效果：从左往右页面离开 */
    position: absolute;     /* 为了解决动画离开另一页面进来的时候，进来页面从下往上贴合顶部的问题 */
}
.v-enter-active,
.v-leave-active{
    transition: all 0.5s ease;
}
</style>

