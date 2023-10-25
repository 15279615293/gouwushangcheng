<template>
  <div>
    <div class="child" v-for="item in info.children" :key="item.id">
      <div class="text">
        - {{item.name}} -
        <span>查看全部 ></span>
      </div>
      <p class="childtext">温暖柔软,品质首选</p>
      <div class="box-list">
        <ul>
          <li v-for="itemGoods in item.goods" :key="itemGoods.id" @click="goProduct(itemGoods.id)">
            <img :src="itemGoods.picture" alt="" />
            <p>{{itemGoods.name}}</p>
            <p>{{itemGoods.desc}}</p>
            <p>¥{{itemGoods.price}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Child",
  props:["info"],
  methods:{
    goProduct(id){
      this.$router.push({
        name:"product",
        params:{
          id:id
        }
      })
    }
  }
};
</script>

<style scoped>
.child {
  width: 1240px;
  height: 458px;
  margin-top: 30px;
  background: white;
}
.child .text {
  position: relative;
  width: 100%;
  height: 100px;
  font-size: 28px;
  color: rgb(146, 138, 138);
  text-align: center;
  line-height: 120px;
}
.child .text span {
  font-size: 16px;
  position: absolute;
  top: -30px;
  right: 20px;
}
.child .childtext {
  width: 100%;
  height: 28px;
  color: rgb(181, 177, 177);
  font-size: 20px;
  text-align: center;
  line-height: 28px;
}
.child .box-list {
  width: 100%;
  height: 330px;
}
.box-list ul {
  width: 1100px;
  height: 300px;
  margin-left: 70px;
}
.box-list ul li {
  width: 220px;
  height: 300px;
  background: white;
  float: left;
  position: relative;
  top: 10px;
}
.box-list ul li:hover {
  transform: translateY(-2px);
  transition: transform 0.5s linear;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.box-list ul li img {
  width: 160px;
  height: 160px;
  margin-left: 30px;
  margin-top: 20px;
}
.box-list ul li p {
  width: 160px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin-left: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.box-list ul li p:nth-child(2) {
  font-size: 16px;
}
.box-list ul li p:nth-child(3) {
  font-size: 14px;
  color: rgb(146, 138, 138);
}
.box-list ul li p:nth-child(4) {
  font-size: 20px;
  color: red;
}
</style>