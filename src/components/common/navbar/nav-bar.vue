// 导航栏组件封装
<template>
<!-- 导航开始 -->
<div class="nav-bar">
<!-- 顶部开始 -->
  <div class="barAbove">
    <div class="above">

      <div class="leftside">
        <slot name="leftside"></slot>
      </div>

      <div class="centerside">
        <slot name="centerside"></slot>
      </div>

      <div class="rightside">
        <slot name="rightside"></slot>
      </div>
      
    </div>
  </div>
<!-- 顶部结束 -->
<!-- 搜素开始 -->
  <div class="main">
    <div class="main_con">

      <div class="left">
        <slot name="left"></slot>
      </div>
      
      <div class="center">
        <slot name="center"></slot>
      </div>

      <div class="right">
        <slot name="right"></slot>
      </div>

    </div>
    
  </div>
<!-- 搜素结束 -->
<!-- 底部开始 -->
    <div class="barBottom">
      <slot name="barBottom"></slot>
    
    </div>  
<!-- 底部结束 -->
</div>
<!-- 导航结束 -->

</template>

<script>
export default {
  name: 'navBar',
  components: {
  }
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    flex-direction:column;
    height: 100%;
    line-height: 40px;
    text-align: center;
  }
  .barAbove {
    height: 40px;
  }
  .above {
    height: 100%; 
  }
  .leftside {
    width: 70px;
    height:100%;
    float:left; 
  }

  .centerside {
    flex:1;
  }

  .rightside {
    width: 120px;
    float:right;
    height:100%;
  }


  .main {
    flex:1; 
  }

  .main_con {
    height: 100%;
    display:flex;
  }

  .left {
    width: 20px;
    height:100%;
    float:left; 
  }

  .right{
    width: 70px;
    height:100%;
    float:right;
  }

  .center {
    flex:1;
  }

  .barBottom {
    line-height: 20px;
    height: 100%;
    box-shadow: 0px 1px 0px rgba(100, 100, 100, 0.2);
    text-align: center;
    font: bold 18px  Georgia;
  }

</style>

