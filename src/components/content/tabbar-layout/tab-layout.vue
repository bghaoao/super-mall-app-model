<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#0be881">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="首页">
      <img slot="item-icon-active" src="~assets/img/tabbar/homed.svg" alt="首页">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/classify" activeColor="#9286eb">
      <img slot="item-icon" src="~assets/img/tabbar/classify.svg" alt="首页">
      <img slot="item-icon-active" src="~assets/img/tabbar/classifyed.svg" alt="首页">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/find" activeColor="#e8ac2b">
      <img slot="item-icon" src="~assets/img/tabbar/find.svg" alt="首页">
      <img slot="item-icon-active" src="~assets/img/tabbar/finded.svg" alt="首页">
      <div slot="item-text">发现</div>
    </tab-bar-item>
    <tab-bar-item path="/shop" activeColor="#ff1744">
      <img slot="item-icon" src="~assets/img/tabbar/shop.svg" alt="首页">
      <img slot="item-icon-active" src="~assets/img/tabbar/shoped.svg" alt="首页">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/mine" activeColor="#83b5e2">
      <img slot="item-icon" src="~assets/img/tabbar/mine.svg" alt="首页">
      <img slot="item-icon-active" src="~assets/img/tabbar/mined.svg" alt="首页">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import tabBar from 'components/common/tabbar/tab-bar'
  import tabBarItem from 'components/common/tabbar/tab-baritem'
export default {
  name: 'tabLayout',
  components: {
    tabBar,
    tabBarItem
  }
}
</script>

<style scoped>

</style>
