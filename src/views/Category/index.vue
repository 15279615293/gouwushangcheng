<template>
<div>
  <!-- 面包屑 -->
  <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item replace :to="{path:`/category?id=${categoryInfo.id || $route.query.id}`}" @click.native="clearCategoryName">{{ categoryInfo.name || $route.query.category1Name}}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="category2Name || $route.query.category2Name">{{ category2Name || $route.query.category2Name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <router-view v-if="$route.query.category2ID"></router-view>
    <div class="Category" v-else>
    <div class="header">
      <!-- 轮播 -->
      <Carousels :list="bannersList"></Carousels>
    </div>
    <!-- 全部分类 -->
    <AllList :info="categoryInfo" @getName="getName"></AllList>
    <!-- 子分类 -->
    <Child :info="categoryInfo"></Child>
  </div>
  <!-- <router-view v-if="$route.query.category2ID"></router-view> -->
</div>
</template>

<script>
import { mapState } from "vuex";
import AllList from "./AllList";
import Child from "./Child";
export default {
  name: "Category",
  components: { AllList, Child },
  data() {
    return {
      category2Name:'',
    }
  },
  mounted() {
    this.$store.dispatch("getBannersList");
    if(this.$route.query.id){
      this.$store.dispatch("getCategory",this.$route.query.id);
    }
  },
  computed: {
    ...mapState({
      bannersList: (state) => state.home.bannersList,
      categoryInfo: (state) => state.category.categoryInfo,
      // goodsInfo: (state) => {
      //   return state.category.categoryInfo.children?.map(item => {
      //      return item.goods
      //   });
      // },
    }),
  },
  methods:{
    getName(category2Name){
      this.category2Name=category2Name
    },
    clearCategoryName(){
      this.category2Name=''
    }
  },
  watch:{
    //让路由跳转时页面刷新一次
    // $route(to ,from){
    //   window.location.reload()
    // }
  }
};
</script>

<style scoped>
.Category {
  margin-left: 116px;
}
.crumbs {
  width: 500px;
  height: 30px;
  line-height: 30px;
  margin-top: 30px;
  margin-left: 116px;
}
.header {
  width: 1240px;
  height: 500px;
  position: relative;
  margin-top: 15px;
}
</style>