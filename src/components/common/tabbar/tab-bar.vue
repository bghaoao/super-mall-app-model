<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  components: {

  }
}
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #ecf0f1;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 0px rgba(100, 100, 100, 0.8);
  }
</style>

