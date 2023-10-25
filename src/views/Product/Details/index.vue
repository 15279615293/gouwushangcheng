<template>
  <div>
    <div class="box">
      <div class="commodity">
        <div class="list" :class="{ active: isActive == true }" @click="change">
          商品详情
        </div>
        <div
          class="list"
          :class="{ active: isActive == false }"
          @click="change"
        >
          商品评价<span>(136)</span>
        </div>
      </div>
      <Commodity v-if="isActive"></Commodity>
      <Evaluation v-else :goodEvaluate="goodEvaluate"></Evaluation>
    </div>
  </div>
</template>

<script>
import Commodity from "./Commodity";
import Evaluation from "./Evaluation";
import { mapState } from "vuex";
export default {
  name: "detail",
  data() {
    return {
      isActive: true,
    };
  },
  components: { Commodity, Evaluation },
  methods: {
    change(event) {
      if (event.target.innerHTML.includes("商品详情")) {
        this.isActive = true;
      } else {
        this.isActive = false;
        //Object.keys()返回对象的属性名组成一个数组，如果长度为0则为空数组
        if (Object.keys(this.goodEvaluate).length==0) {
        this.$store.dispatch("getGoodEvaluateList", this.$route.params.id);
        this.$store.dispatch("getEvaluatePageList", {
          id: this.$route.params.id,
          data: { page: 2, pageSize: 10 },
        });
        }
      }
    },
  },
  computed: {
    ...mapState({
      goodEvaluate: (state) => state.product.goodEvaluate,
    }),
  },
};
</script>

<style scoped>
.box {
  width: 940px;
  background: white;
}
.box .commodity {
  width: 940px;
  height: 70px;
}
.commodity .list {
  width: 153px;
  height: 70px;
  /* background: aqua; */
  float: left;
  font-size: 18px;
  text-align: center;
  line-height: 70px;
}
.list span {
  color: red;
}
.active {
  border-bottom: 3px solid #27ba9b;
}
</style>