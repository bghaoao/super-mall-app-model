<template>
  <div id="app">
    <router-view/>
    <tab-layout/>
  </div>
</template>

<script>
  import tabLayout from 'components/content/tabbar-layout/tab-layout'
export default {
   name: 'app',
  components: {
    tabLayout
  }
}
</script>

<style scoped>
  @import "assets/css/base.css";
</style>
