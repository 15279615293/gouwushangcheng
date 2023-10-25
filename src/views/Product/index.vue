<template>
  <div>
    <Specification></Specification>
    <div v-if="relevantInfo">
      <Relevant :relevantInfo="relevantInfo"></Relevant>
    </div>   
    <div class="boxs">
    <Details></Details>
    <HotSales></HotSales>
    </div>
    <Bottomtion></Bottomtion>
  </div>
</template>

<script>
import Specification from "./Specification/index.vue"
import Details from './Details'
import HotSales from "./HotSales"
import Bottomtion from "./Bottomtion"
import {mapState} from "vuex"
export default {
    name:"product",
    components:{Specification,Details,HotSales,Bottomtion},
    mounted(){
      this.$store.dispatch("getRelevantInfo",{id:this.$route.params.id,limit:16})
    },
    computed:{
      ...mapState({
        relevantInfo:state=>state.product.relevantInfo
      })
    }
}
</script>

<style scoped>
.boxs{
  margin-left: 116px;
  margin-top: 30px;
  width: 1240px;
  display: flex;
}
</style>