<template>
  <div>
    <!-- 人气推荐 -->
     <div class="hot">
      <div class="new-header">
        <h4>人气推荐</h4>
        <p>人气爆款 不容错过</p>
      </div>
      <div class="new-bottom">
        <div class="new-pictrue" v-for="item in  hotList" :key="item.id">
          <img :src="item.picture" alt="">
          <p>{{item.title}}</p>
          <p>{{item.alt}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    name:'Recommenddation',
    mounted(){
        this.$store.dispatch("getHomeHotList")
    },
    computed:{
        ...mapState({
            hotList:state=>state.home.hotList
        })
    }
}
</script>

<style scoped>
.hot{
  width: 1240px;
  height: 511px;
  margin-left: 116px;
 }
 .hot .new-header{
  width: 1240px;
  height: 115px;
 }
  .new-header h4{
  font-size: 30px;
  float: left;
  line-height: 115px;
 }
 .new-header p:nth-child(2){
  font-size: 15px;
  float: left;
  color: rgb(208, 184, 184);
  margin-top: 55px;
  margin-left: 10px;
 }
 .hot .new-bottom{
  width: 1240px;
  height: 396px;
  display: flex;
  justify-content: space-between;
 }
.new-bottom .new-pictrue{
  height: 100%;
  width: 306px;
  background: rgb(220, 219, 219);
}
.new-pictrue:hover{
  transform: translateY(-2px);
  transition:  transform 0.5s linear;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3) ;
 }
.new-pictrue img{
  width: 100%;
  height: 306px;
}
.new-pictrue p{
  height: 43px;
  width: 100%;
  font-size: 22px;
  text-align: center;
  line-height: 43px;
}
.new-pictrue p:nth-child(3){
    color: rgb(171, 169, 169);
    font-size: 18px;
}
</style>