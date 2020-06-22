<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle"> 
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'tabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default:"#000"
    }
  },
  data() {
    return {

    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;   
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    font-family:'icon';
    color: #95a5a6;
  }
  .tab-bar-item img {
    width: 26px;
    height: 26px;
    margin-top: 4px;
    vertical-align: middle;
    margin-bottom: 4px;
  }
</style>
