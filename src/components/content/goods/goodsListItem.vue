// 单个商品组件封装
<template>
<div class="goods-item">
  <img :src="goodsItem.show.img" alt="">
  <div class="goods-info">
    <p class="title">{{goodsItem.title}}</p>
    <span class="price">¥{{goodsItem.price}}</span>
    <span class="collect ">{{goodsItem.cfav}}</span>
  </div>
</div>
 
</template>

<script>
  export default {
    name:'goodsListItem',
    props: {
      goodsItem: {
        type:Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 60px;
    position: relative;
    width: 48%;
    height: 100%;
  }
  .goods-item img {
    width: 100%;
    border-radius: 10px;
  }
  .goods-info {
    font-size: 14px;
    color: #000;
    line-height: 18px;
    position: absolute;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 8px;
  }
  .goods-info .title {
    margin-top: 5px;
    font-size: 120%;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 30px;
    font-size: 120%;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 0px;
    width: 18px;
    height: 100%;
    background: url("~assets/img/common/collect.svg") 0 0/18px 18px;
  }
</style>