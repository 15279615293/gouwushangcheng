<template>
  <div>
    <div class="bigBox" ref="box">
      <div class="headers">
        <div class="sales">
          <p>{{ goodEvaluate.salesCount }}</p>
          <p>人购买</p>
        </div>
        <div class="sales">
          <p>{{ goodEvaluate.praisePercent }}</p>
          <p>好评率</p>
        </div>
        <div class="said">大家都在说：</div>
        <div class="tag">
          <div
            class="tagList"
            :class="{ active: isActives === 0 }"
            @click="isPicture"
          >
            全部评价({{ goodEvaluate.evaluateCount }})
          </div>
          <div
            class="tagList"
            :class="{ active: isActives === 1 }"
            @click="isPicture"
          >
            有图({{ goodEvaluate.hasPictureCount }})
          </div>
          <div
            class="tagList"
            v-for="(item, index) in goodEvaluate.tags"
            :key="index"
            :class="{ active: isActive === index }"
            @click="chageActive(item, index)"
          >
            {{ item.title }}({{ item.tagCount }})
          </div>
        </div>
      </div>
      <div class="sorts">
        <span>排序:</span>
        <span
          v-for="(a, index) in sorts"
          :key="a.id"
          :class="{ addColor: isColor == index }"
          @click="sortss(a, index)"
          >{{ a.name }}
        </span>
      </div>
      <div class="details" v-for="items in pageList.items" :key="items.id">
        <div class="head">
          <img :src="items.member.avatar" alt="" />
          <p>{{ items.member.nickname }}</p>
        </div>
        <div class="texts">
          <div class="score">
            <el-rate
              v-model="value"
              disabled
              disabled-void-color
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
            <div
              class="sku"
              v-for="(sku, index) in items.orderInfo.specs"
              :key="index"
            >
              <span>{{ sku.name }}:</span>
              <span>{{ sku.nameValue }}</span>
            </div>
          </div>
          <div class="cen">{{ items.content }}</div>
          <div class="bigImage" v-if="items.pictures">
            <el-image
              style="width: 118px; height: 118px; margin-right: 20px"
              v-for="imgList in items.pictures"
              :key="imgList"
              :src="imgList"
              :preview-src-list="items.pictures"
            >
            </el-image>
          </div>
          <div class="bot">
            <div class="date">{{ items.createTime }}</div>
            <div class="praise">
              <i class="iconfont icon-dianzan"></i>{{ items.praiseCount }}
            </div>
          </div>
        </div>
      </div>

      <!-- 分页器 -->
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          background
          prev-text="上一页"
          next-text="下一页"
          pager-count:6
          :current-page="data.page"
          layout="prev, pager, next"
          :total="pageList.counts * 10"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Loading } from "element-ui";
export default {
  name: "evaluation",
  props: ["goodEvaluate"],
  mounted() {
    //加载效果
    this.loadingInstance = Loading.service({
      target: this.$refs.box,
    });
    if (Object.keys(this.goodEvaluate).length > 0) {
      this.$nextTick(() => {
        this.loadingInstance.close();
      });
    }
  },
  data() {
    return {
      sorts: [
        { id: "0001", name: "默认", sort: "null" },
        { id: "0002", name: "最新", sort: "createTime" },
        { id: "0003", name: "最热", sort: "praiseCount" },
      ],
      value: 4,
      isActive: -1,
      isActives: 0,
      isColor: 0,
      data: {
        page: 1,
        pageSize: 10,
      },
    };
  },
  methods: {
    isPicture(event) {
      if (event.target.innerHTML.includes("全部评价")) {
        this.isActives = 0;
        if (Object.keys(this.data).length > 2) {
          this.data = { page: 2, pageSize: 10 };
          this.sendTion();
        }
      } else {
        this.isActives = 1;
        //hasOwnProperty()查找对象中是否有某个属性
        if (this.data.hasOwnProperty("hasPicture") == false) {
          this.$delete(this.data, "tag");
          this.$set(this.data, "hasPicture", true);
          this.sendTion();
        }
      }
      this.isActive = -1;
    },
    chageActive(item, index) {
      if (this.isActive != index) {
        this.$delete(this.data, "hasPicture");
        this.$set(this.data, "tag", item.title);
        this.sendTion();
      }
      this.isActive = index;
      this.isActives = -1;
    },
    sortss(item, index) {
      if (this.isColor != index) {
        this.$set(this.data, "sortField", item.sort);
        this.sendTion();
      }
      this.isColor = index;
    },
    sendTion() {
      this.$store.dispatch("getEvaluatePageList", {
        id: this.$route.params.id,
        data: this.data,
      });
    },
    handleCurrentChange(event) {
      this.data.page = event;
      this.sendTion();
    },
  },
  computed: {
    ...mapState({
      pageList: (state) => state.product.pageList,
    }),
  },
  watch: {
    goodEvaluate: {
      handler() {
        this.$nextTick(() => {
          this.loadingInstance.close();
        });
      },
    },
  },
};
</script>

<style scoped>
.bigBox {
  width: 940px;
  padding: 10px 0;
}
.headers {
  width: 900px;
  height: 124px;
  margin: 30px 20px;
  display: flex;
  align-items: center;
}
.headers .sales {
  width: 150px;
  height: 84px;
}
.headers .sales p:nth-child(1) {
  width: 150px;
  height: 45px;
  font-size: 32px;
  color: red;
  text-align: center;
  line-height: 45px;
}
.headers .sales p:nth-child(2) {
  width: 150px;
  height: 20px;
  font-size: 14px;
  color: #999;
  text-align: center;
  line-height: 20px;
}
.headers .said {
  width: 100px;
  height: 124px;
  text-align: right;
  line-height: 42px;
  font-size: 14px;
  font-weight: 700;
}
.headers .tag {
  width: 500px;
  height: 124px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
}
.headers .tag .tagList {
  width: 132px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}
.active {
  border-color: #27ba9b !important;
  background: #27ba9b !important;
  color: #fff !important;
}
.sorts {
  width: 900px;
  height: 60px;
  margin: 0 20px;
}
.sorts span {
  line-height: 60px;
  font-size: 14px;
  margin-right: 30px;
}
.addColor {
  color: #27ba9b;
}
.details {
  width: 900px;
  padding: 25px 10px;
  margin: 0 10px;
  border-top: 1px solid #f5f5f5;
  display: flex;
}
.details .head {
  width: 160px;
  display: flex;
}
.details .head img {
  width: 40px;
  height: 40px;
}
.details .head p {
  width: 65px;
  height: 20px;
  padding-top: 10px;
  font-size: 14px;
  color: #666;
  text-align: right;
}
.details .texts {
  width: 720px;
}
.details .texts .score {
  width: 720px;
  display: flex;
}
.texts .sku span,
.details .texts .cen {
  font-size: 14px;
  color: #666;
  word-wrap: break-word;
}
.cen {
  margin-top: 10px;
}
.texts .bot {
  width: 720px;
  height: 20px;
  font-size: 14px;
  color: #999;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
}
.texts .bot .date {
  width: 138px;
}
.texts .bot .praise {
  width: 50px;
}
.block {
  width: 900px;
  margin: 20px;
  text-align: center;
}
</style>