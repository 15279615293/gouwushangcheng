<template>
  <div>
    <div class="carousel">
      <img src="../../../assets/345.jpg" alt="" />
      <!-- 轮播 -->
      <el-carousel height="500px" trigger="click">
        <el-carousel-item v-for="item in bannersList" :key="item.id">
          <img :src="item.imgUrl" alt="" />
        </el-carousel-item>
      </el-carousel>
      <!-- 左侧导航栏 -->
      <div class="category">
        <div class="category-li" v-for="c1 in headListCild" :key="c1.id">
          <ul>
            <li @click="goCategory(c1.id)">
              <a href="javascript:;">{{ c1.name }}</a>
            </li>
            <li
              v-for="c2 in c1.children"
              :key="c2.id"
              @click="goCategorySub(c1, c2)"
            >
              <a href="javascript:;">{{ c2.name }}</a>
            </li>
            <div class="hiden-box">
              <h4 class="one">分类推荐</h4>
              <p class="two">根据您的购买或浏览记录推荐</p>
              <div class="hiden-child">
                <div
                  class="hiden-childlist"
                  v-for="item in c1.goods"
                  :key="item.id"
                  @click="goProduct(item.id)"
                >
                  <img :src="item.picture" alt="" />
                  <div class="hiden-childtext">
                    <p>{{ item.name }}</p>
                    <p>{{ item.desc }}</p>
                    <p>
                      ￥<span>{{ item.price }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CarouselList",
  mounted() {
    this.$store.dispatch("getBannersList");
  },
  computed: {
    ...mapState({
      headListCild: (state) => {
        return state.header.headerList.map((item) => ({
          ...item,
          children: item.children ? item.children.slice(0, 2) : [],
        }));
      },
      bannersList: (state) => state.home.bannersList,
    }),
  },
  methods: {
    //跳转至category页面
    goCategory(category1Id) {
      this.$router.push({
        name: "category",
        query: {
          id: category1Id,
        },
      });
    },
    //跳转至sub页面
    goCategorySub(item, itemChildren) {
      this.$router.push({
        name: "sub",
        query: {
          category1Name: item.name,
          id: item.id,
          category2Name: itemChildren.name,
          category2ID: itemChildren.id,
        },
      });
    },
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

<style>
.carousel {
  width: 1240px;
  height: 0px;
  margin-left: 116px;
  position: relative;
}
.carousel img {
  width: 100%;
  height: 100%;
}
/* 箭头位置 */
.el-carousel__arrow--left {
  margin-left: 280px;
}
.category {
  width: 250px;
  height: 450px;
  margin-top: 20px;
  background: rgba(59, 58, 58, 0.3);
  position: absolute;
  top: 16.5px;
  left: 0;
  z-index: 998;
}
.category-li {
  width: 100%;
  height: 50px;
}
.category-li:hover {
  background: green;
}
.category-li ul {
  margin-left: 40px;
}
.category-li li {
  float: left;
  font-size: 14px;
  padding: 5px;
  text-align: center;
}
.category-li li a {
  text-decoration: none !important;
  color: white;
  line-height: 40px;
}
.category-li li a:hover {
  color: white !important;
}
.category-li .hiden-box {
  height: 0px;
  width: 990px;
  background: rgba(202, 200, 200, 0.8);
  z-index: 998;
  position: absolute;
  top: 0;
  left: 250px;
  visibility: hidden;
}
.category-li:hover .hiden-box {
  height: 500px;
  width: 990px;
  visibility: inherit;
}
.hiden-box .one {
  float: left;
  margin-top: 20px;
  margin-left: 10px;
  font-size: 20px;
}
.hiden-box .two {
  float: left;
  margin-top: 25px;
  margin-left: 10px;
  font-size: 14px;
}
.hiden-box .hiden-child {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 970px;
  height: 420px;
  margin-left: 10px;
  margin-top: 70px;
}
.hiden-child .hiden-childlist {
  width: 300px;
  height: 120px;
  background: white;
}
.hiden-childlist img {
  width: 100px;
  height: 100px;
  margin-left: 10px;
  margin-top: 10px;
  float: left;
}
.hiden-childtext {
  width: 180px;
  height: 100px;
  margin-left: 10px;
  margin-top: 10px;
  float: left;
}
.hiden-childtext p {
  font-size: 16px;
}
.hiden-childtext p:nth-child(2) {
  white-space: nowrap;
  color: rgb(142, 139, 139);
  overflow: hidden;
  text-overflow: ellipsis;
}
.hiden-childtext p:nth-child(3) {
  color: red;
  margin-top: 10px;
}
.hiden-childtext p span {
  color: red;
  font-size: 20px;
}
</style>