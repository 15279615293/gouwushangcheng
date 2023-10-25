<template>
  <div>
    <!-- 热门品牌 -->
    <div class="brank">
      <div class="new-header">
        <h4>热门品牌</h4>
        <p>国际经典 品质保证</p>
      </div>
      <div class="swiper-container" ref="cur">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in brankList" :key="item.id">
            <img :src="item.picture" alt="" />
          </div>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { mapState } from "vuex";
export default {
  name: "Brank",
  mounted() {
    this.$store.dispatch("getHotBrankList");
  },
  computed: {
    ...mapState({
      brankList: (state) => state.home.brankList,
    }),
  },
  watch: {
    brankList() {
      this.$nextTick(() => {
        var mySwiper = new Swiper(this.$refs.cur, {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          slidesPerView: 5,
          slidesPerGroup: 5,
        });
      });
    },
  },
};
</script>

<style scoped>
.brank {
  position: relative;
  width: 1240px;
  height: 420px;
  margin-left: 116px;
}
.brank .new-header {
  width: 1240px;
  height: 115px;
}
.new-header h4 {
  font-size: 30px;
  float: left;
  line-height: 115px;
}
.new-header p:nth-child(2) {
  font-size: 15px;
  float: left;
  color: rgb(208, 184, 184);
  margin-top: 55px;
  margin-left: 10px;
}
.swiper-container {
  height: 305px;
  width: 100%;
}
.swiper-slide img {
  width: 240px;
  height: 305px;
}
.swiper-button-prev {
  top: 70px;
  left: 1150px;
  width: 20px;
  height: 20px;
  background: #27ba9b;
  color: white;
  --swiper-navigation-size: 20px;
}
.swiper-button-next {
  top: 70px;
  right: 40px;
  width: 20px;
  height: 20px;
  background: #27ba9b;
  color: white;
  --swiper-navigation-size: 20px;
}
</style>