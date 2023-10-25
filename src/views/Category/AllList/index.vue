<template>
  <div>
    <!-- 全部分类 -->
    <div class="allList">
      <h3>全部分类</h3>
      <div class="list">
        <ul>
          <li v-for="item in info.children" :key="item.id" @click="goSub(item)">
            <img :src="item.picture" alt="" />
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllList",
  props: ["info"],
  methods:{
    goSub(item){
      this.$router.push({
        name:"sub",
        query:{
          category1Name:this.info.name,
          id:this.info.id,
          category2Name:item.name,
          category2ID:item.id
        }
      })
      this.$store.dispatch("getCategorySub",this.$route.query.category2ID)
      this.$emit("getName",item.name)
    }
  }
};
</script>

<style scoped>
.allList {
  width: 1240px;
  /* height: 260px; */
  margin-top: 30px;
  background: white;
}
.allList h3 {
  width: 100%;
  height: 100px;
  font-size: 28px;
  color: rgb(146, 138, 138);
  text-align: center;
  line-height: 100px;
}
.allList .list {
  width: 100%;
  height: 160px;
}
.list ul {
  width: 1176px;
  height: 140px;
  margin-left: 32px;
}
.list ul li {
  width: 168px;
  height: 140px;
  float: left;
}
.list ul li img {
  width: 100px;
  height: 100px;
  margin-left: 34px;
}
.list ul li p {
  width: 120px;
  height: 40px;
  margin-left: 34px;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
}
</style>