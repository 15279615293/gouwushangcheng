<template>
  <div>
    <!-- 轮播 , 左侧导航栏-->
    <CarouselList></CarouselList>
    <!-- 新鲜好物 -->
    <NewStuff></NewStuff>
    <!-- 人气推荐 -->
    <Recommenddation></Recommenddation>
    <!-- 热门品牌 -->
    <Brank></Brank>
    <!-- 产品区块 -->
    <Goods></Goods>
    <!-- 最新专题 -->
    <Special></Special>
  </div>
</template>

<script>
import CarouselList from "./CarouselList";
import NewStuff from "./NewStuff";
import Recommenddation from "./Recommendation";
import Brank from "./Brank";
import Goods from "./Goods";
import Special from './Special'
export default {
  name: "Home",
  components: { CarouselList, NewStuff, Recommenddation, Brank, Goods, Special},
};
</script>

<style>
</style>