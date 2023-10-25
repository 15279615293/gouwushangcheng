<template>
  <div>
    <div class="home-header">
      <ul>
        <li v-if="userName"><a href="javascript:;" @click="goLogin">{{userName}}</a>&nbsp;&nbsp;|</li>
        <li v-else><a href="javascript:;" @click="goLogin">请先登录</a>&nbsp;&nbsp;|</li>
        <li v-if="userName"><a href="javascript:;" @click="exit">退出登录</a>&nbsp;&nbsp;|</li>
        <li v-else><a href="javascript:;">免费注册</a>&nbsp;&nbsp;|</li>
        <li><a href="javascript:;">我的订单</a>&nbsp;&nbsp;|</li>
        <li><a href="javascript:;">会员中心</a>&nbsp;&nbsp;|</li>
        <li><a href="javascript:;">帮助中心</a>&nbsp;&nbsp;|</li>
        <li><a href="javascript:;">关于我们</a>&nbsp;&nbsp;|</li>
        <li><a href="javascript:;" class="iconfont icon-shouji">手机版</a></li>
      </ul>
    </div>
    <div class="header-bottom">
      <div class="image" @click="goHome"></div>
      <div class="center">
        <ul>
          <li @click="goHome"><a href="javascript:;">首页</a></li>
          <li
            v-for="item in headerList"
            :key="item.id"
          >
            <a href="javascript:;" @click="goCategory(item.id)">{{ item.name }}</a>
            <div class="hiden-box">
              <div class="list-nav">
                <div
                  class="list"
                  v-for="itemChildren in item.children"
                  :key="itemChildren.id"
                  @click="goCategorySub(item,itemChildren)"
                >
                  <div class="list-img">
                    <img :src="itemChildren.picture" alt="" />
                  </div>
                  <div class="list-text">{{ itemChildren.name }}</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="search">
        <div class="iconfont icon-fangdajing"></div>
        <input type="text" class="input" />
      </div>
      <div class="cart" @click="goCart">
        <div class="iconfont icon-gouwuchekong"></div>
        <div class="cart-box">0</div>
      </div>
    </div>
  </div>
</template>

<script>
import {removeToken} from "@/utils/token"
import { mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      headerList: (state) => state.header.headerList,
    }),
    userName(){
      return localStorage.getItem("userName")
    }
  },
  methods: {
    //跳转至Category页面
    goCategory(category1Id) {
      this.$router.push({
        name: "category",
        query:{
          id:category1Id
        }
      });
      this.$store.dispatch("getCategory",this.$route.query.id)
    },
    //跳转至首页
    goHome(){
      this.$router.push("/")
    },
    //跳转至sub页面
    goCategorySub(item,itemChildren){
      this.$router.push({
        name:"sub",
        query:{
          category1Name:item.name,
          id:item.id,
          category2Name:itemChildren.name,
          category2ID:itemChildren.id
        }
      })
      this.$store.dispatch("getCategorySub", this.$route.query.category2ID);
    },
    goCart(){
      this.$router.push("/cart")
    },
    goLogin(){
      if(!this.userName){
        this.$router.push("/login")
      }    
    },
    exit(){
      removeToken()
      localStorage.removeItem("userName")
      this.$router.push("/login")
    }
  },
};
</script>

<style scoped>
.home-header {
  width: 1473px;
  height: 53px;
  background: black;
  text-align: center;
}
.home-header ul {
  float: right;
  margin-right: 116px;
  width: 620px;
  height: 53px;
}
.home-header ul li {
  float: left;
  padding: 0 10px;
  line-height: 53px;
  color: #928d8d;
}
.home-header ul a {
  text-decoration: none;
  color: #cdcdcd;
  font-size: 14px;
  float: left;
}
.home-header ul a:hover {
  color: aquamarine !important;
}
.home-header ul .iconfont {
  line-height: 56px;
}
.header-bottom {
  position: relative;
  width: 1473px;
  height: 132px;
  background: white;
}
.header-bottom .image {
  height: 100%;
  width: 200px;
  background: red;
  margin-left: 116px;
  float: left;
  background: url(~@/assets/image/header.png) no-repeat center 18px / contain;
}
.header-bottom .center {
  height: 100%;
  width: 800px;
  background: white;
  float: left;
}
.center .hiden-box {
  height: 0px;
  width: 1240px;
  background: white;
  position: absolute;
  top: 100px;
  left: 116px;
  visibility: hidden;
  z-index: 999;
  /* transition: height 0.2s linear; */
  box-shadow: -2px -2px 2px #aaaaaa, 2px 2px 2px #aaaaaa;
}
.center .hiden-box .list-nav {
  display: flex;
  height: 140px;
  width: 1000px;
  margin-left: 110px;
}
.hiden-box .list-nav .list {
  height: 100%;
  width: 150px;
  margin-left: 10px;
}
.hiden-box .list-nav .list:hover{
  color: #27ba9b;
}
.list-nav .list .list-img {
  width: 70%;
  height: 60%;
  margin-top: 10px;
  padding: 0 15px;
}
.list-nav .list img {
  width: 100%;
  height: 100%;
}
.list-nav .list .list-text {
  width: 100%;
  height: 20px;
  margin-top: 5px;
  font-size: 16px;
  text-align: center;
  line-height: 20px;
}
.header-bottom .center ul {
  width: 800px;
  height: 32px;
  margin-top: 50px;
}
.header-bottom .center ul li {
  width: 35px;
  height: 50px;
  list-style: none;
  float: left;
  margin-left: 40px;
}
.header-bottom .center ul li a {
  text-decoration: none;
  color: black;
  font-size: 16px;
  text-align: center;
  line-height: 32px;
}
.header-bottom .center ul li a:hover {
  color: rgb(105, 246, 199) !important;
  border-bottom: 1px solid rgb(105, 246, 199);
}
.header-bottom .center ul li:hover .hiden-box {
  height: 150px;
  visibility: inherit;
}
.header-bottom .search {
  height: 32px;
  width: 170px;
  margin: 50px 0;
  float: left;
  border-bottom: 1px solid rgb(220, 219, 219);
}
.header-bottom .search .iconfont {
  margin-top: 6px;
  font-size: 20px;
  float: left;
}
.header-bottom .search .input {
  margin-top: 10px;
  margin-left: 5px;
  float: left;
  outline: none;
  border: none;
}
.header-bottom .cart {
  height: 100%;
  width: 50px;
  float: left;
  position: relative;
}
.cart .iconfont {
  font-size: 25px;
  position: absolute;
  top: 55px;
  left: 10px;
}
.cart .cart-box {
  width: 20px;
  height: 15px;
  border-radius: 15px;
  background: red;
  position: absolute;
  top: 53px;
  left: 28px;
  color: white;
  line-height: 15px;
  text-align: center;
}
</style>