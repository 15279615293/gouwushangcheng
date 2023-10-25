<template>
  <div>
  <Header v-if="this.$route.meta.isShow"></Header>
  <router-view></router-view>
  <Footer v-if="this.$route.meta.isShow"></Footer>
  </div>
</template>

<script>

import Home from '@/views/Home'
export default {
  name: 'App',
  components: {
    Home
  },
  mounted() {
    this.$store.dispatch("getCategoryHeader");
  },
}
</script>

<style>
body{background: rgb(234, 232, 232);}
</style>
