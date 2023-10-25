<template>
  <!-- 上面部分，规格 -->
  <div>
    <div class="box">
      <div class="left">
        <!-- 放大镜 -->
        <Zoom :imgBig="productGood.mainPictures"></Zoom>
        <!-- 右边图片列表 -->
        <div class="imgList">
          <img
            v-for="(imgs, index) in productGood.mainPictures"
            :key="index"
            :src="imgs"
            alt=""
            @click="changeImg(index)"
            :class="active==index?'active':''"
          />
        </div>
        <div class="bottom">
          <div class="bottom-list">
            <p>销量人气</p>
            <p>200+</p>
            <p><i class="iconfont icon-qizi"></i>销量人气</p>
            <div class="line"></div>
          </div>
          <div class="bottom-list">
            <p>商品评价</p>
            <p>400+</p>
            <p><i class="iconfont icon-comment-filling"></i>查看评价</p>
            <div class="line"></div>
          </div>
          <div class="bottom-list">
            <p>收藏人气</p>
            <p>600+</p>
            <p><i class="iconfont icon-shoucang"></i>收藏商品</p>
            <div class="line"></div>
          </div>
          <div class="bottom-list">
            <p>品牌信息</p>
            <p>苏宁电器</p>
            <p><i class="iconfont icon-dynamic-filling"></i>品牌主页</p>
          </div>
        </div>
      </div>

      <div class="right">
        <p class="one">{{ productGood.name }}</p>
        <p>{{ productGood.desc }}</p>
        <p>
          <span>￥</span>
          <span>{{ skus.price || productGood.price }}</span>
          <span>￥{{ skus.oldPrice || productGood.oldPrice }}</span>
        </p>
        <div class="center">
          <span>促销</span>
          <span>12月好物放送，App领券购买直降120元</span>
        </div>
        <div class="center">
          <span>配送</span>
          <span>至<City></City></span>
        </div>
        <div class="centerTwo">
          <dt>服务</dt>
          <span>•</span>
          <span>无忧退货</span>
          <span>•</span>
          <span>快速退款</span>
          <span>•</span>
          <span>免费包邮</span>
          <i>了解详情</i>
        </div>
        <div class="design" v-for="item in specsValue" :key="item.id">
          <p>{{ item.name }}</p>
          <div class="imgLists">
            <div
              class="frame"
              v-for="(itemChild, index) in item.values"
              :key="index"
            >
              <el-tooltip
                class="item"
                effect="light"
                :content="itemChild.name"
                placement="bottom-start"
                v-if="itemChild.picture"
              >
                <img :src="itemChild.picture" alt="" :class="{actives:itemChild.isCheck==1}" @click="changeActives(itemChild,item)"/>
              </el-tooltip>
              <div class="texts" :class="{actives:itemChild.isCheck==1}" @click="changeActives(itemChild,item)" v-else>{{ itemChild.name }}</div>
            </div>
          </div>
        </div>
        <p class="quantity">数量</p>
        <button class="jian" @click="jianOrjia('jian')">-</button>
        <div class="number">{{ number }}</div>
        <button class="jia" @click="jianOrjia('jia')">+</button>
        <button class="add" @click="addCart">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Message } from 'element-ui';
import Zoom from "./Zoom";
import City from "./City";
export default {
  name: "specification",
  components: { Zoom, City },
  data() {
    return {
      number: 1,
      active: 0,
      //选择的规格
      spection:[],
      //sku数据
      skus:{}
    };
  },
  mounted() {
    this.$store.dispatch("getProductList", this.$route.params.id);
  },
  watch:{
    "$route.params.id":{
      handler(newValue){
        this.$store.dispatch("getProductList", newValue);
      }
    }
  },
  methods: {
    jianOrjia(value) {
      if (value == "jian") {
        if (this.number >= 2) {
          this.number--;
        }
      } else {
        this.number++;
      }
    },
    //修改要放大的图片
    changeImg(index) {
      this.$bus.$emit("getIndex", index);
      this.active=index
    },
    //添加高亮
    changeActives(itemChild,item){
        item.values.forEach(element => {
        element.isCheck=0
      });
      itemChild.isCheck=1
      // 使Vue实例重新渲染
      this.$forceUpdate()
      //收集选中的规格
      if(this.spection.length>0){
        let index=this.spection.findIndex(element=>{
          return element.name==item.name
        })
        if(index!=-1){
          this.spection.splice(index,1)
        }
      }
      let obj = {
        name:item.name,
        valueName:itemChild.name
      }
      let i = this.specsValue.findIndex(element=>{
        return element.name==item.name
      })
      this.spection.splice(i,0,obj)
      //获取sku
      if(this.spection.length==this.specsValue.length){
        let skuIndex= this.productGood.skus.findIndex(element=>{
          //判断数组中的对象是否完全相等可以先将数组对象转化为JSON格式再进行比较
          return JSON.stringify(element.specs)===JSON.stringify(this.spection)
        })
        if(skuIndex!=-1){
          this.skus=this.productGood.skus[skuIndex]
        }else{
          this.skus=this.productGood.skus[0]
        } 
      }
    },
    async addCart(){
      if(this.spection.length==this.specsValue.length){
        if(localStorage.getItem("TOKEN")){
          try {
          await this.$API.getAddCarts({skuId:this.skus.id,count:this.number})
          Message({
          message:"加入购物车成功",
          type:"success"
        })
        } catch (error) {
          alert(error.message)
        }
        }else{
           Message({
          message:"请先登录",
          type:"warning"
        })
        }
      }else{
        Message({
          message:"请选择完整规格",
          type:"warning"
        })
      }
    }
  },
  computed: {
    ...mapState({
      productGood: (state) => state.product.productGood,
      specsValue: (state)=>{
        return state.product.productGood.specs?state.product.productGood.specs.map((item)=>({
          ...item,
          values:item.values?item.values.map((items)=>{
            //向对象中追加属性
            return Object.defineProperty(items,"isCheck",{value:0,writable:true})
          }):[]
        })):[]
      }
    }),
  },
};
</script>

<style scoped>
.box {
  margin-left: 116px;
  margin-top: 30px;
  width: 1240px;
  height: 600px;
  background: white;
}
.box .left {
  width: 580px;
  height: 600px;
  background: white;
  float: left;
  position: relative;
}
.box .left .imgList {
  width: 80px;
  height: 400px;
  background: white;
  position: absolute;
  left: 470px;
  top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.left .imgList img {
  width: 65px;
  height: 65px;
  margin-left: 5px;
}
.active {
  border: 3px solid #27ba9b;
}
.left .bottom {
  width: 400px;
  height: 140px;
  position: absolute;
  top: 430px;
  left: 65px;
}
.left .bottom .iconfont {
  color: #27ba9b;
  line-height: 33px;
}
.left .bottom .bottom-list {
  width: 100px;
  height: 100px;
  float: left;
  position: relative;
  top: 20px;
}
.bottom-list p {
  width: 100px;
  height: 33px;
  color: #999;
  font-size: 14px;
  text-align: center;
  line-height: 33px;
}
.bottom-list p:nth-child(2) {
  color: red;
}
.bottom-list p:nth-child(3) {
  color: black;
}
.bottom-list p:hover {
  color: #27ba9b;
}
.bottom-list .line {
  width: 0.5px;
  height: 60px;
  background: #cac9c9;
  position: absolute;
  top: 20px;
  left: 99px;
}
.box .right {
  width: 660px;
  height: 600px;
  background: white;
  float: left;
}
.box .right .one {
  width: 630px;
  height: 60px;
  font-size: 22px;
  line-height: 80px;
}
.box .right p:nth-child(2) {
  width: 630px;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  color: #999;
}
.box .right p:nth-child(3) {
  width: 630px;
  height: 30px;
  background: white;
  margin: 10px 0;
}
.box .right p span {
  font-size: 16px;
  line-height: 30px;
  color: red;
}
.box .right p span:nth-child(2) {
  font-size: 22px;
}
.box .right p span:nth-child(3) {
  margin-left: 10px;
  color: #999;
  text-decoration: line-through;
}
.box .right .center,
.centerTwo {
  width: 500px;
  height: 50px;
  background: #f5f5f5;
  font-size: 14px;
}
.center span {
  line-height: 50px;
}
.center span:nth-child(1) {
  color: #999;
  margin-left: 10px;
  margin-right: 20px;
}
.centerTwo dt {
  float: left;
  line-height: 50px;
  margin-left: 10px;
  margin-right: 20px;
  color: #999;
}
.centerTwo span {
  line-height: 50px;
}
.centerTwo span:nth-child(even) {
  color: #27ba9b;
}
.centerTwo i {
  margin-left: 10px;
  color: #27ba9b;
}
.design {
  width: 620px;
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.design p,
.quantity {
  width: 50px;
  text-align: center;
  font-size: 14px;
  color: #999;
}
.design .imgLists {
  width: 570px;
  display: flex;
  flex-wrap: wrap;
  max-height: 125px;
  overflow: auto;
}
.design .imgLists .frame img {
  width: 50px;
  height: 50px;
  border: 1px solid #e4e4e4;
  margin-left: 10px;
}
.imgLists .frame .texts {
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  padding: 0 20px;
  display: inline-block;
  border: 1px solid #e4e4e4;
  margin: 5px;
}
.actives{
  border: 1px solid #27ba9b !important;
}
.quantity,
.number,
.jia,
.jian {
  margin-top: 10px;
  float: left;
}
.number {
  width: 60px;
  height: 29px;
  text-align: center;
  line-height: 29px;
  font-size: 14px;
}
.jia,
.jian {
  width: 29px;
  height: 29px;
}
.jian {
  margin-left: 20px;
}
.add {
  width: 180px;
  height: 50px;
  border-radius: 4px;
  border: none;
  background: #27ba9b;
  font-size: 16px;
  color: white;
  position: relative;
  top: 50px;
  left: -185px;
}
</style>