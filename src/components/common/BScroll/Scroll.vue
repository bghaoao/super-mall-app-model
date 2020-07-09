// better-scroll 滚动组件封装
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name:'Scroll',
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      pullUpLoad: {
        type: Boolean,
        default:false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    components: {
    
    },
    // 创建滚动事件
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
      /**
       * probeType(监听滚动): 3个参数 1 不开启 2 跟随 3 自由 
      */
        probeType: this.probeType,
      /** 
       * pullUpLoad(上拉事件) 
      */
        pullUpLoad: this.pullUpLoad
      })
    // 监听滚动范围
      this.scroll.on('scroll',(position) => {
        this.$emit('scroll',position)
      })
    // 监听上拉事件
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      scrollTo(x, y, time = 500) {
        this.scroll.scrollTo(x, y ,time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>
