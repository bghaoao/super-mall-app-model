// 商品列表组件封装
<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item" :key="item.title"/>
  </div>
</template>

<script>
  import GoodsListItem from './goodsListItem';
  export default {
    name:"goodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    padding: 4px 0px 4px 0px;
  }
</style>