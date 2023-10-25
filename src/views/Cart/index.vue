<template>
  <div>
    <div class="cart">
      <!-- @selection-change="handleSelectionChange" -->
      <el-table :data="carInfo" tooltip-effect="dark" style="width: 100%" @select-all="selectAll" @select="selectOne">
        <el-table-column type="selection" width="120" align="center" label-class-name="titles">
        </el-table-column>
        <el-table-column prop="prop" label="商品信息" width="400" header-align="center">
          <template slot-scope="{ row }">
            <div class="imgList">
              <img :src="row.picture" alt="" style="width: 100px; height: 100px"/>
              <div class="tests">
                <p>{{row.name}}</p>
                <div class="pover">
                  <!-- :before-close="handleClose" -->
                  <el-button type="info" size="mini" plain @click="getSku(row.skuId)">{{row.attrsText}}∨</el-button>
                  <el-dialog title="规格" :visible.sync="dialogVisible" width="30%">
                    <div class="specification" v-for="item in carSku.specs" :key="item.id">
                      <div class="left">{{item.name}}</div>
                      <!-- <div class="right" v-for="(picktrues,index) in item.values" :key="index">
                        <div v-if="picktrues.picture">
                          <el-tooltip effect="dark" :content="picktrues.name" placement="bottom-end">
                          <img :src="picktrues.picture" alt="">
                        </el-tooltip>
                        </div>                        
                        <div class="textss" v-else>{{picktrues.name}}</div>
                      </div> -->
                    </div>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                    </span>
                  </el-dialog>
                </div>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="单价" width="220" align="center">
        </el-table-column>
        <el-table-column  label="数量"  width="180" align="center">
          <template slot-scope="{row}">
            <div>
              <button class="jian" @click="jianOrjia('jian')">-</button>
              <div class="number">{{ row.count }}</div>
              <button class="jia" @click="jianOrjia('jia')">+</button>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="小计" width="180" align="center">
          <template slot-scope="{row}">
            <div style="color:red">￥{{row.price*row.count}}.00</div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="操作" width="140" align="center">
          <template slot-scope="{row}">
            <div>
              <p>移入收藏夹</p>
              <p style="color:#27ba9b" @click="selectTwo(row)">删除</p>
              <p>找相似</p>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="total">
      <div class="total-left">
        <div class="inputs">
        <input type="checkbox" :checked="isChecked">全选
      </div>
      <p @click="delectShop">删除商品</p>
      <p>移入收藏夹</p>
      <p>清空失效商品</p>
      </div>
      <div class="total-right">
        共 2 件商品，已选择 1 件，商品合计：
        <span>¥199</span>
        <button>下单结算</button>
        </div>         
    </div>
    <Relevant :relevantInfo="relevantInfo"></Relevant>
  </div>
</template>

<script>
import {mapState} from "vuex"
import { MessageBox,Message } from 'element-ui';
export default {
  name: "cart",
  data() {
    return {
      dialogVisible: false,
      number: 1,
      carInfo:[],
      carSku:[],
      isChecked:false,
      data:{
        ids:[],
        clearAll:false,
        clearInvalid:false
      }
    };
  },
  mounted(){
    this.$store.dispatch("getRelevantInfo",{limit:16})
    this.getCarInfo()
  },
  methods:{
    jianOrjia(value) {
      if (value == "jian") {
        if (this.number >= 2) {
          this.number--;
        }
      } else {
        this.number++;
      }
    },
    async getCarInfo(){
      let results = await this.$API.getCarInfos()
      this.carInfo=results.data.result
    },
    async getSku(skuId){
      this.dialogVisible = true
      let results = await this.$API.getCarSkus(skuId)
      this.carSku=results.data.result
    },
    selectAll(selection){
      if(selection.length>0){
        this.isChecked=true
      }else{
        this.isChecked=false
      }
      selection.forEach(element => {
        this.data.ids.push(element.skuId)
      });
      console.log(this.data.ids)
    },
    selectOne(selection, row){
      this.data.ids.push(row.skuId)
    },
    delectShop(){
      if(this.data.ids.length>0){
        MessageBox.confirm('亲，您是否确认删除选中的商品', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          try {
          await this.$API.getselectedAll(this.data)
          this.getCarInfo()
           Message({
            type: 'success',
            message: '删除成功!'
          });
        } catch (error) {
          alert(error.message)
        }
        }).catch(() => {
          Message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    },
    async selectTwo(row){
      this.data.ids.push(row.skuId)
      await this.$API.getselectedAll(this.data)
      this.getCarInfo()
    }
  },
  computed:{
      ...mapState({
        relevantInfo:state=>state.product.relevantInfo
      })
    }
};
</script>


<style scoped>
.cart {
  margin-left: 116px;
  margin-top: 30px;
  width: 1240px;
  /* height: 500px; */
  background: aqua;
}
.imgList {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.tests,
.pover {
  width: 270px;
  margin-left: 5px;
}
.tests p{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.specification {
  /* width: 348px; */
  height: 175px;
  display: flex;
  align-items: center;
}
.specification .left{
  width: 50px;
  height: 24px;
}
.specification .right{
  width: 298px;
  height: 165px;
  /* background: yellow; */
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
}
.specification .right img{
  width: 50px;
  height: 50px;
}
.specification .right .textss{
  /* padding: 0 10px; */
  width: 100px;
  height: 30px;
  background: aqua;
  text-align: center;
}
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
.total{
  margin-left: 116px;
  margin-top: 30px;
  width: 1180px;
  height: 80px;
  padding: 0 30px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.total .total-left{
  width: 352px;
  height: 24px;
  display: flex;
  justify-content: space-between;
}
.total .total-left .inputs{
  font-size: 14px;
  color: #999;
}
.total .total-left p{ 
  width: 100px;
  height: 24px;
  font-size: 16px;
  text-align: center;
}
.total .total-right{
  width: 527px;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
}
.total .total-right span{
  color: red;
  font-size: 18px;
}
.total .total-right button{
  width: 180px;
  height: 50px;
  font-size: 16px;
  background: #27ba9b;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  margin-left: 20px;
}
</style>