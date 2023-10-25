<template>
<div>
  <Filters></Filters>
  <Goods></Goods>
</div>
</template>

<script>
import Filters from "./SubFilter"
import Goods from "./SubGoods"
export default {
  name:'CategorySub',
  components:{Filters,Goods}
}
</script>

<style>

</style>