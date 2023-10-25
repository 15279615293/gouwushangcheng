<template>
  <div>
    <!-- 最新专题 -->
    <div class="special">
      <div class="special-header">
        <h4>最新专题</h4>
        <p>查看全部></p>
      </div>
      <div class="special-bottom">
        <div class="pictrue" v-for="item in specialList" :key="item.id">
          <div class="pictrue-img">
            <img :src="item.cover" alt="" />
            <p>{{item.title}}</p>
            <p>
             {{item.summary}}
            </p>
            <p>￥{{item.lowestPrice}}起</p>
          </div>
          <div class="text">
            <div class="iconfont icon-aixin collectNum">{{item.collectNum}}</div>
            <div class="iconfont icon-yanjing two viewNum">{{item.viewNum}}</div>
            <div class="iconfont icon-xiaoxi replyNum">{{item.replyNum}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Special",
  mounted(){
    this.$store.dispatch('getSpecialList')
  },
  computed:{
    ...mapState({
        specialList:state=>state.home.specialList
    })
  }
};
</script>

<style scoped>
.special {
  width: 1240px;
  height: 475px;
  margin-left: 116px;
}
.special-header {
  width: 1240px;
  height: 115px;
}
.special-header h4 {
  font-size: 30px;
  float: left;
  line-height: 115px;
}
.special-header p {
  font-size: 15px;
  float: right;
  color: rgb(208, 184, 184);
  margin-top: 55px;
}
.special-bottom {
  width: 1240px;
  height: 360px;
  display: flex;
  justify-content: space-between;
}
.special-bottom .pictrue {
  position: relative;
  width: 404px;
  height: 360px;
}
.special-bottom .pictrue:hover{
  transform: translateY(-2px);
  transition:  transform 0.5s linear;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3) ;
}
.pictrue .pictrue-img {
  width: 404px;
  height: 288px;
}
.pictrue p {
  position: absolute;
  height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.pictrue p:nth-child(2) {
  top: 220px;
  left: 15px;
  color: white;
  font-size: 22px;
  width: 267px;
}
.pictrue p:nth-child(3) {
  top: 250px;
  left: 15px;
  color: rgb(191, 177, 177);
  font-size: 20px;
  width: 267px;
}
.pictrue p:nth-child(4) {
  top: 240px;
  right: 10px;
  color: red;
  font-size: 14px;
  width: 90px;
  background: white;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
}
.pictrue-img img {
  width: 404px;
  height: 288px;
}
.special-bottom .text {
  width: 404px;
  height: 72px;
  background: white;
}
.text div {
  width: 100px;
  height: 72px;
  float: left;
  font-size: 18px;
  line-height: 72px;
}
.text .collectNum {
  margin-left: 15px;
}
.text .replyNum {
  float: right;
}
</style>