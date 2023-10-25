<template>
  <div>
    <div class="goods">
      <div class="header">
        <div class="left">
          <div
            class="sort"
            v-for="(item, index) in sortFields"
            :key="item.id"
            :class="index == num ? 'active' : ''"
            @click="changeIndex(item, index)"
          >
            {{ item.name }}
          </div>
          <i
            class="iconfont icon-shangsheng-tianchong asc"
            :class="temporaryInfo.sortMethod == 'asc' ? 'actives' : ''"
          ></i>
          <i
            class="iconfont icon-xiajiang_huaban desc"
            :class="temporaryInfo.sortMethod == 'desc' ? 'actives' : ''"
          ></i>
        </div>
        <div class="inputs">
          <input type="checkbox" value="youhuo" @change="changeCheck('one')"/>仅显示有货商品
          <input type="checkbox" value="tehui" @change="changeCheck('two')"/>仅显示特惠商品
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <div class="temporary">
      <div class="box-list" ref="boxList">
        <ul v-for="(items, index) in list" :key="index" @click="goProduct(items.id)">
          <li>
            <img :src="items.picture" />
            <p>{{ items.name }}</p>
            <p>{{ items.desc }}</p>
            <p>¥{{ items.price }}</p>
          </li>
        </ul>
      </div>
      <el-empty v-if="flag" description="亲,没有更多了"></el-empty>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import debounce from "lodash/debounce";
import { Loading } from "element-ui";
export default {
  name: "SubGoods",
  data() {
    return {
      sortFields: [
        { id: "001", sortField: null, name: "默认排序" },
        { id: "002", sortField: "publishTime", name: "最新商品" },
        { id: "003", sortField: "orderNum", name: "最高人气" },
        { id: "004", sortField: "evaluateNum", name: "评论最多" },
        { id: "005", sortField: "price", name: "价格排序" },
      ],
      //sortFields高亮
      num: 0,
      //储存列表数据
      list: [],
      //总页数
      pages: 1,
      flag: false,
      temporaryInfo: {
        //分类ID
        categoryId: this.$route.query.category2ID,
        //当前页
        page: 1,
        //页条数
        pageSize: 20,
        //价格升降序
        sortMethod: "desc",
        //排序字段
        sortField: null,
        //是否有库存
        inventory: false,
        //只显示特惠
        onlyDiscount: false,
      },
    };
  },
  mounted() {
    this.getTemporary();
    window.addEventListener("scroll", this.scrollBottom);
    // Loading.service({
    //   target:this.$refs.boxList,
    // });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollBottom);
  },
  methods: {
    changeIndex(item, index) {
      if (index == 4) {
        this.num = -1;
        if (this.temporaryInfo.sortMethod == "desc") {
          this.temporaryInfo.sortMethod = "asc";
        } else {
          this.temporaryInfo.sortMethod = "desc";
        }
      } else {
        this.num = index;
      }
      this.temporaryInfo.sortField = item.sortField;
      //加载效果
      // let loadingInstance = Loading.service({
      //   target: this.$refs.boxList,
      // });
      // this.getTemporary();
      // if (this.list) {
      //     // 关闭Loading
      //     loadingInstance.close();
      // }
      this.loadEffect()
    },
    //加载效果
    loadEffect(){
      let loadingInstance = Loading.service({
        target: this.$refs.boxList,
      });
      this.getTemporary();
      if (this.list) {
          // 关闭Loading
          loadingInstance.close();
      }
    },
    //发送请求的方法
    getTemporary() {
      this.$store.dispatch("getTemporary", this.temporaryInfo);
    },
    //触底下一页回调
    scrollBottom: debounce(function () {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      // 到底的条件
      if (scrollTop + windowHeight >= scrollHeight - 1300) {
        //到底后要去触发的事件
        if (this.temporaryInfo.page <= this.pages) {
          console.log("到底了");
          this.temporaryInfo.page++;
          this.getTemporary();
        } else {
          this.flag = true;
        }
      }
    }, 15),
    //有货与特惠框的回调
    changeCheck(value){
      if(value=='one'){
        this.temporaryInfo.inventory=!this.temporaryInfo.inventory
        this.loadEffect()
      }else if(value=='two'){
        this.temporaryInfo.onlyDiscount=!this.temporaryInfo.onlyDiscount
        this.loadEffect()
      }
    },
    //跳转至Product页面
    goProduct(id){
      this.$router.push({
        name:"product",
        params:{
          id:id
        }
      })
    }
  },
  computed: {
    ...mapState({
      temporaryInfos: (state) => state.category.temporaryInfos,
    }),
  },
  watch: {
    //监视temporaryInfos数据变化，合并数组
    temporaryInfos: {
      handler(a, b) {
        if(a.pages>0){
          this.list = [...this.list, ...a.items]
        }else{
          //当没有新数据时清空数据
          this.list=[]
          this.flag=true
        }
        this.pages = a.pages;
      },
    },
    "$route.query.category2ID":{     
        handler(newKey){
          this.temporaryInfo.categoryId=newKey
          this.loadEffect()
        }  
    }
  },
};
</script>

<style>
/* 修改你checkbox的默认样式 */
.inputs input[type="checkbox"] {
  width: 15px;
  height: 15px;
  display: inline-block;
  line-height: 18px;
  margin-right: 5px;
  position: relative;
}

.inputs input[type="checkbox"]::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0;
  background: #fff;
  width: 100%;
  height: 100%;
  border: 1px solid #999;
}

.inputs input[type="checkbox"]:checked::before {
  content: "√";
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 1px solid #999;
  color: #27ba9b;
  font-size: 20px;
}
</style>
<style scoped>
.goods {
  margin-left: 116px;
  margin-top: 30px;
  width: 1240px;
  /* height: 300px; */
  background: white;
}
.goods .header {
  width: 1190px;
  height: 80px;
  /* background: aqua; */
  margin-left: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.goods .header .left {
  width: 590px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.goods .header .left .sort {
  width: 100px;
  height: 30px;
  color: #999;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  outline: 1px solid #999;
}

.left .asc {
  font-size: 5px;
  position: absolute;
  left: 570px;
  top: 5px;
}
.left .desc {
  font-size: 5px;
  position: absolute;
  left: 570px;
  top: 12px;
}
.active {
  background: #27ba9b;
  color: white !important;
}
/* 价格升降序高亮 */
.actives {
  color: #27ba9b;
}
.goods .header .inputs {
  width: 276px;
  height: 23px;
  font-size: 14px;
  color: #999;
  line-height: 23px;
}
.header .inputs input {
  margin-left: 15px;
}
/* 修改你checkbox的默认样式
.header .inputs input[type="checkbox"] {
  width: 15px;
  height: 15px;
  display: inline-block;
  line-height: 18px;
  margin-right: 5px;
  position: relative;
}

.header .inputs input[type="checkbox"]::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0;
  background: #fff;
  width: 100%;
  height: 100%;
  border: 1px solid #999;
}

.header .inputs input[type="checkbox"]:checked::before {
  content: "√";
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 1px solid #999;
  color: #27ba9b;
  font-size: 20px;
} */

/* 列表 */
.temporary {
  width: 1240px;
  background: white;
  margin-left: 116px;
}
.temporary .box-list {
  width: 1140px;
  margin-left: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.box-list ul {
  width: 220px;
  height: 310px;
}
.box-list ul li {
  width: 220px;
  height: 300px;
  background: white;
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
  margin-top: 30px;
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