// 商品展示栏组件封装
<template>
  <div class="tab-control">
    <div v-for="( item , index ) in titles" 
    :key="item.titles" 
    class="tab-control-item"
    :class="{active: index === currentIndex}"
    @click="tabclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'tabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabclick(index) {
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font: 600 14px Georgia;
}
.tab-control-item {
  flex: 1;
  height: 50px;
  line-height: 40px;
  color: #000;
  background-color: #fff;
}
.active {
  font-size: 18px;
  text-align: center;
}
.active  span {
  padding: 5px 5px 8px 5px;
  border-bottom: 5px solid #b7c4fc;
  border-radius: 50%;
}
</style>