<template>
  <div>
    <!-- 筛选栏 -->
    <div class="sub">
      <ul>
        <li>
          <div class="brands">品牌:</div>
          <div class="brands-list">
            <div class="list-box">全部</div>
            <div
              class="list-box"
              v-for="brands in subList.brands"
              :key="brands.id"
            >
              {{ brands.name }}
            </div>
          </div>
        </li>
        <li v-for="sale in subList.saleProperties" :key="sale.id">
          <div class="brands">{{ sale.name }}:</div>
          <div class="brands-list">
            <div class="list-box">全部</div>
            <div
              class="list-box"
              v-for="saleChild in sale.properties"
              :key="saleChild.id"
            >
              {{ saleChild.name }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SubFilter",
  data() {
    return {
    //   isActive: 0,
    //   parentId:0
    };
  },
  mounted() {
    this.$store.dispatch("getCategorySub", this.$route.query.category2ID);
  },
  computed: {
    ...mapState({
      subList: (state) => state.category.subList,
    }),
  },
};
</script>

<style scoped>
.sub {
  margin-left: 116px;
}
.sub ul {
  width: 1240px;
  background: white;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
}
.sub ul li {
  width: 1190px;
  height: inherit;
  margin-left: 25px;
}
.brands {
  width: 80px;
  height: 44px;
  float: left;
  color: #999;
  line-height: 40px;
  font-size: 14px;
}
.brands-list {
  width: 1110px;
  float: left;
  display: flex;
  flex-wrap: wrap;
}
.list-box {
  height: 44px;
  margin-right: 30px;
  line-height: 40px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.list-box:hover{
  color: #27ba9b;
}
.active {
  color: #27ba9b;
}
.list-box:nth-child(1) {
  color: #27ba9b;
}
</style>