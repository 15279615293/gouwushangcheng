<template>
  <div>
    <div class="newStuff">
      <div class="new-header">
        <h4>新鲜好物</h4>
        <p>新鲜出炉 品质靠谱</p>
        <p>查看全部></p>
      </div>
      <div class="new-bottom">
        <div
          class="new-pictrue"
          v-for="newStuff in newList"
          :key="newStuff.id"
          @click="goProduct(newStuff.id)"
        >
          <img :src="newStuff.picture" alt="" />
          <p>{{ newStuff.name }}</p>
          <p>￥{{ newStuff.price }}.00</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NewStuff",
  mounted() {
    this.$store.dispatch("HomeNewList");
  },
  computed: {
    ...mapState({
      newList: (state) => state.home.newList,
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
.newStuff {
  width: 1240px;
  height: 511px;
  margin-left: 116px;
  margin-top: 520px;
}
.newStuff .new-header {
  width: 1240px;
  height: 115px;
}
.new-header h4 {
  font-size: 30px;
  float: left;
  line-height: 115px;
}
.new-header p:nth-child(2) {
  font-size: 15px;
  float: left;
  color: rgb(208, 184, 184);
  margin-top: 55px;
  margin-left: 10px;
}
.new-header p:nth-child(3) {
  color: yellow;
  font-size: 15px;
  float: right;
  color: rgb(208, 184, 184);
  margin-top: 55px;
}
.newStuff .new-bottom {
  width: 1240px;
  height: 396px;
  display: flex;
  justify-content: space-between;
}
.new-bottom .new-pictrue {
  height: 100%;
  width: 306px;
  background: rgb(220, 219, 219);
}
.new-pictrue:hover {
  transform: translateY(-2px);
  transition: transform 0.5s linear;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.new-pictrue img {
  width: 100%;
  height: 306px;
}
.new-pictrue p:nth-child(2) {
  font-size: 22px;
  max-width: 250px;
  margin-left: 30px;
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.new-pictrue p:nth-child(3) {
  height: 45px;
  width: 100%;
  font-size: 22px;
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>