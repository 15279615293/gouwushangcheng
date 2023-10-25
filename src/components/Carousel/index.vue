<template>
<!-- 把轮播图注册为全局组件 -->
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev" ></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
//引包
import Swiper from "swiper"
export default {
  name: "Carousels",
  props:["list"],
   watch:{
    list:{
      //数据没有发生变化，监听不到list，所以开启immediate
      immediate:true,
      handler(){
        this.$nextTick(()=>{
           var mySwiper = new Swiper(this.$refs.cur, {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        //点击小球的时候也切换图片
        clickable :true,
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      //自动播放
      autoplay:{
        delay:3000,
        stopOnLastSlide:false,
        disableOnInteraction:false
      }
    })
        })
      }
    }
  }
};
</script>

<style scoped>
/* .swiper-button-next .swiper-button-prev{
  background: red;
} */
</style>