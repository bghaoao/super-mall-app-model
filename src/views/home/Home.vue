// 首页展示栏组件封装
<template>
  <div id="home" class="home-nav">
    <home-nav/>
    <scroll 
      class="content" 
      ref="scroll" 
      :probe-type="3" 
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="contentpullingUp">
        <home-swiper :banners="banners"/>
        <home-recommend-view :recommends="recommends"/>
        <home-week-bg/>
        <tab-control 
          class="tab-control"
          :titles="['流行','新款','精选']"
          @tabClick="tabClick"/>
        <good-list :goods="showGoods"/>
    </scroll>
    <back-top 
      @click.native="backClick" 
      v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import homeNav from './childerComponents/homeNav'
  import homeSwiper from './childerComponents/homeSwiper'
  import homeRecommendView from './childerComponents/homeRecommendView'
  import homeWeekBg from './childerComponents/homeWeekBg'

  import tabControl from 'components/content/tabControl/tabControl'
  import goodList from 'components/content/goods/goodsList'
  import { getHomeMultidata , getHomeGoods } from 'network/home'
  
  import Scroll from 'components/common/BScroll/Scroll'
  import backTop from 'components/content/backTop/BackTop'
  
  export default {
    name:'Home',
    components: {
      homeNav,
      homeSwiper,
      homeRecommendView,
      homeWeekBg,
      tabControl,
      goodList,
      Scroll,
      backTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: [] },
          'sell': { page: 0, list: [] }
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    computed: {
      // tabControl 切换
      showGoods() {
        return this.goods[this.currentType].list;
      }
    },
    created() {
      // 请求首页数据
      this.getHomeMultidata()
      // 请求流行栏商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
     
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      /**
       * 返回顶部
       */
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      /** 
       * 监听滚动范围
       */
      contentScroll(position) {
        // console.log(position);
        this.isShowBackTop = (-position.y) > 1500 
      },
      /**  
       * 上拉加载事件
       */
      contentpullingUp() {
        // console.log('上拉加载更多');
        this.getHomeGoods(this.currentType) /* 监听图片加载 */
        this.$refs.scroll.scroll.refresh() /* 刷新图片下拉 */
      },
      /**
       * 封装请求方法
       * 网络请求相关的方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          // console.log(res.data.list);
          this.goods[type].list.push(...res.data.list);  /* ...语法 用于获取goodlist数据 */
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  .home-nav {
    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    color: var(--color-background);
  }  
  .tab-control {
    position: sticky;
    top:0px;  /* 涉及到导航栏的距离,目前导航栏未固定 */
    z-index: 1;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 106px;
    bottom: 49px;
    left: 0;
    right: 0;
    background-image: linear-gradient(-225deg, #FFFEFF 0%, #dfe9f3 80%);
  }
</style>