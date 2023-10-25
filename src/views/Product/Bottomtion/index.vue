<template>
  <div class="box">
    <div class="boxTitle">注意事项</div>
    <p class="active">• 购买运费如何收取？</p>
    <p> 单笔订单金额(不含运费)满88元免邮费；不满88元，每单收取10元运费。（港澳台地区需满500元免邮费；不满500元，每单收取30元运费) </p>
    <p class="active">• 使用什么快递发货?</p>
    <p>默认使用顺丰快递发货(个别商品使用其他快递）</p>
    <p>配送范围覆盖全国大部分地区(港澳台地区除外）</p>
    <p class="active">• 如何申请退货?</p>
    <p>1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账； </p>
    <p>2.内裤和食品等特殊商品无质量问题不支持退货；</p>
    <p>3.退货流程： 确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成； </p>
    <p>4.因小兔鲜儿产生的退货，如质量问题，退货邮费由小兔鲜儿承担，退款完成后会以现金券的形式报销。因客户个人原因产生的退货，购买和寄回运费由客户个人承担。 </p>
  </div>
</template>

<script>
export default {
    name:'bottomtion'
}
</script>

<style scoped>
.box{
  margin-left: 116px;
  margin-top: 30px;
  width: 915px;
  height: 600px;
  background: white;
  padding-left: 25px;
}
.box .boxTitle{
  width: 915px;
  height: 70px;
  font-size: 18px;
  text-indent: 50px;
  line-height: 70px;
}
.box p{
  width: 915px;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  color: #666;
}
.box .active{
  color: black;
  margin-top: 20px;
}
</style>