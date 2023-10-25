<template>
  <div>
    <div class="maintion">
      <div class="list"  v-for="(item,index) in details.properties" :key="index">
        <p>{{item.name}}</p>
        <p>{{item.value}}</p>
      </div>
      <div class="imgList">
        <img v-for="(items,index) in details.pictures" :key="index" :src="items" alt="" />
      </div>  
         
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: "commodity",
  computed:{
    ...mapState({
      details:state=>state.product.productGood.details || {}
    })
  },
};
</script>

<style scoped>
.maintion {
  width: 860px;
  margin: 30px 40px;
  display: flex;
  flex-flow: wrap;
}
.maintion .list {
  width: 430px;
  margin-top: 10px;
  display: flex;
}
.list p:nth-child(1) {
  width: 100px;
  font-size: 14px;
  word-wrap: break-word;
  color: #999;
}
.list p:nth-child(2) {
  width: 330px;
  font-size: 14px;
  color: #666;
  word-wrap: break-word;
}
.maintion .imgList{
  width: 860px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 30px;
}
.maintion img {
  width: 860px;
  height: 229px;
}
</style>