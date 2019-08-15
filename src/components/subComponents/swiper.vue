<template>
    <div>
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in LunBoTuList" :key="item.id">
                <img :src="item.img" alt="" :class="{'full':isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:['LunBoTuList','isfull']
}
</script>

<style lang="scss">
    .full{
        width: 100%;
    }

    .mint-swipe {
        text-align: center;
    height:200px;
     .mint-swipe-item{
     /*   &:nth-child(1){
            background-color: red;
        }
        &:nth-child(2){
            background-color:blue;
        }
        &:nth-child(3){
            background-color: yellow;
        } */
        img{
            /* width: 100%; */
            height: 100%;
        }
    } 
}
</style>