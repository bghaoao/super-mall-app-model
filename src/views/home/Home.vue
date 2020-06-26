<template>
  <div id="home" class="home-nav">
    <home-nav/>
    <home-swiper :banners="banners"/>
  </div>
</template>

<script>
  import homeNav from './childerComponents/homeNav'
  import homeSwiper from './childerComponents/homeSwiper'
  import { getHomeMultidata } from 'network/home'

  export default {
    name:'Home',
    components: {
      homeNav,
      homeSwiper
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    color: var(--color-background);
  }
</style>