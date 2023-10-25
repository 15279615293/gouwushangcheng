<template>
  <div>
    <div class="hotList">
      <p class="hotTilte">24小时热销榜</p>
      <div
        class="list"
        v-for="item in salesOne"
        :key="item.id"
        @click="goProduct(item.id)"
      >
        <img :src="item.picture" alt="" />
        <p>{{ item.name }}</p>
        <p>{{ item.desc }}</p>
        <p>¥{{ item.price }}</p>
      </div>
      <p class="hotWeek">周热销榜</p>
      <div
        class="list"
        v-for="(items, index) in salesTwo"
        :key="index"
        @click="goProduct(items.id)"
      >
        <img :src="items.picture" alt="" />
        <p>{{ items.name }}</p>
        <p>{{ items.desc }}</p>
        <p>¥{{ items.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "hotSales",
  mounted() {
    this.$store.dispatch("hotSalesListOne", {
      id: this.$route.params.id,
      limit: 3,
      type: 1,
    });
    this.$store.dispatch("hotSalesListTwo", {
      id: this.$route.params.id,
      limit: 3,
      type: 2,
    });
  },
  computed: {
    ...mapState({
      salesOne: (state) => state.product.salesOne,
      salesTwo: (state) => state.product.salesTwo,
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
.hotList {
  width: 280px;
  margin-left: 20px;
}
.hotList .hotTilte,
.hotWeek {
  width: 280px;
  height: 70px;
  background: #e26237;
  font-size: 18px;
  color: white;
  text-indent: 25px;
  line-height: 70px;
}
.hotWeek {
  margin-top: 10px;
}
.hotList .list {
  width: 280px;
  height: 340px;
  background: white;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hotList .list img {
  width: 200px;
  height: 200px;
}
.hotList .list p {
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
}
.hotList .list p:nth-child(2) {
  height: 32px;
  font-size: 16px;
  line-height: 32px;
}
.hotList .list p:nth-child(3) {
  color: #999;
  height: 29px;
  font-size: 14px;
  line-height: 29px;
}
.hotList .list p:nth-child(4) {
  color: red;
  height: 38px;
  font-size: 20px;
  line-height: 38px;
}
</style>