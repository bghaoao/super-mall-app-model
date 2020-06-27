<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.title" class="recommend-item">
    <el-link :underline="false" :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </el-link>
    
    </div>
  </div>
</template>

<script>
export default {
    name:'homeRecommendView',
    props: {
      recommends: {
          type: Array,
          default() {
            return []
          }
      }
    }
}
</script>

<style scoped>
.recommend {
  display: flex;
}
.recommend-item {
  flex: 1;
  width: 100%; 
  text-align: center;
  background-color: #fff;
  border-bottom: 3px solid #b7c4fc; 
  padding: 0px 0 5px 0;
}
.recommend-item img {
  height: 70px;
  width: 70px;    
  padding: 5px 0 3px 0;
}

</style>