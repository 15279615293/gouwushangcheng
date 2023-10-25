<template>
  <div>
    <div class="goods" v-for="item in goodsInfo" :key="item.id">
      <div class="goods-header">
        <h4>{{ item.name }}</h4>
        <ul>
          <li v-for="itemChild in item.children" :key="itemChild.id">
            {{ itemChild.name }}
          </li>
        </ul>
        <p>查看全部></p>
      </div>
      <div class="goods-bottom">
        <div class="left-img">
          <img :src="item.picture" alt="" />
        </div>
        <div class="right-box">
          <div
            class="box-list"
            v-for="itemGoods in item.goods"
            :key="itemGoods.id"
            @click="goProduct(itemGoods.id)"
          >
            <img :src="itemGoods.picture" alt="" />
            <p>{{ itemGoods.itemGoods }}</p>
            <p>{{ itemGoods.desc }}</p>
            <p>￥{{ itemGoods.price }}</p>
            <div class="goTop">
              <p>找相似</p>
              <p>发现现更多宝贝></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Goods",
  mounted() {
    this.$store.dispatch("getHomeGoodsInfo");
  },
  computed: {
    ...mapState({
      goodsInfo: (state) => state.home.goodsInfo,
    }),
  },
  methods: {
    goProduct(id) {
      this.$router.push({
        name: "product",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>

<style scoped>
.goods {
  width: 1473px;
  height: 725px;
  background: white;
}
.goods-header {
  position: relative;
  width: 1240px;
  height: 115px;
  margin-left: 116px;
}
.goods-header h4 {
  font-size: 30px;
  float: left;
  line-height: 115px;
}
.goods-header p {
  color: yellow;
  font-size: 15px;
  float: right;
  color: rgb(208, 184, 184);
  margin-top: 55px;
}
.goods-header ul {
  position: absolute;
  top: 48px;
  left: 540px;
  width: 610px;
  height: 25px;
}
.goods-header ul li {
  float: left;
  font-size: 15px;
  padding: 5px 10px;
}
.goods-header ul li:hover {
  background: #27ba9b;
  border-radius: 5px;
}
.goods-bottom {
  width: 1240px;
  height: 610px;
  margin-left: 116px;
}
.goods-bottom .left-img {
  width: 240px;
  height: 610px;
  float: left;
}
.goods-bottom .left-img img {
  width: 240px;
  height: 610px;
}
.goods-bottom .right-box {
  width: 990px;
  height: 610px;
  margin-left: 10px;
  /* background: aqua; */
  float: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.right-box .box-list {
  position: relative;
  width: 240px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.box-list:hover {
  outline: #27ba9b solid 2px;
}
.box-list img {
  width: 160px;
  height: 160px;
}
.box-list p:nth-child(2) {
  width: 178px;
  height: 44px;
  font-size: 16px;
}
.box-list p:nth-child(3) {
  width: 178px;
  height: 22px;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.box-list p:nth-child(4) {
  width: 178px;
  height: 28px;
  font-size: 18px;
  color: red;
}
.box-list .goTop {
  width: 240px;
  height: 85px;
  position: absolute;
  top: 300px;
  background: #27ba9b;
}
.box-list:hover .goTop {
  top: 215px;
  transition: top 0.3s linear;
}
.goTop p:nth-child(1) {
  width: 120px;
  height: 40px;
  font-size: 20px;
  color: white;
  margin-left: 60px;
  text-align: center;
  line-height: 40px;
  border-bottom: 1px solid white;
}
.goTop p:nth-child(2) {
  width: 120px;
  height: 40px;
  color: white;
  font-size: 14px;
  margin-left: 60px;
  text-align: center;
  line-height: 40px;
}
</style>