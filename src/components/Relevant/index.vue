<template>
  <!-- 同类商品推荐（猜你喜欢） -->
  <div>
    <div class="relevant">
      <div class="top">
        <i class="iconfont icon-lingxing iconOne"></i>
        <i class="iconfont icon-qiehuanqiyou iconTwo"></i>
        <span>同类商品推荐</span>
      </div>
      <div class="swiper-container" ref="cur">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in relevantInfo" :key="item.id">
            <div class="carousels" @click="goProduct(item.id)">
              <div class="imgList">
                <img :src="item.picture" alt="" />
                <p>{{ item.name }}</p>
                <p>¥{{ item.price }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Relevant",
  props: ["relevantInfo"],
  methods:{
    goProduct(id){
      this.$router.push({
        name:"product",
        params:{
          id:id
        }
      })
    }
  },
  watch: {
    relevantInfo: {
      handler() {
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.cur, {
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            slidesPerView: 4,
            slidesPerGroup: 4,
          });
        });
      },
    },
  },
};
</script>

<style scoped>
.relevant {
  margin-left: 116px;
  margin-top: 20px;
  width: 1240px;
  height: 460px;
  background: white;
}
.relevant .top {
  width: 1240px;
  height: 80px;
}
.top .iconOne {
  margin-left: 10px;
  line-height: 80px;
  color: #bcf1e6;
}
.top .iconTwo {
  position: relative;
  left: -10px;
  color: #27ba9b;
}
.top span {
  font-size: 20px;
}
.carousels {
  width: 1080px;
  height: 290px;
  display: flex;
  justify-content: space-between;
}
.carousels .imgList {
  width: 240px;
  height: 290px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.imgList img {
  width: 190px;
  height: 190px;
}
.imgList p:nth-child(2) {
  width: 150px;
  height: 23px;
  font-size: 16px;
  color: #666;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  line-height: 23px;
}
.imgList p:nth-child(3) {
  width: 100%;
  height: 23px;
  text-align: center;
  line-height: 23px;
  color: red;
  font-size: 16px;
}
.swiper-container {
  width: 1080px;
  height: 380px;
}
.swiper-button-prev {
  position: relative;
  top: -250px;
  left: 30px;
  --swiper-navigation-size: 20px;
  color: #999;
}
.swiper-button-next {
  position: relative;
  top: -250px;
  left: 1190px;
  --swiper-navigation-size: 20px;
  color: #999;
}
.swiper-pagination {
  top: 330px;
  --swiper-pagination-color: #27ba9b;
}
</style>