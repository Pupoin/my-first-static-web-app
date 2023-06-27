<template>
    <div class="pulayout">
        <div class="header"> 头部区域

        </div>
        <div class="navbar">左侧区域        </div>
        <div class="main">主区域

          didi dada 
          <img alt="minecraft logo" src="../assets/mine2.png">
        </div>
    </div>
</template>
  
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      headerhight: 80
    }
  }
}
</script>

<style scoped>
  /* 头部样式 */
  .header {
    position: absolute;
    line-height: 80px;
    top: 0px;
    left: 0px;
    right: 0px;
    background-color: #d8cdbe;
  }

  /* 左侧样式 */
  .navbar {
    position: absolute;
    width: 230px;
    top: 80px;  /* 距离上面50像素 */
    left: 0px;
    bottom: 0px;
    overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
    background-color: #818a93;
  }

  /* 主区域 */
  .main {
    position: absolute;
    top: 80px;
    left: 230px;
    bottom: 0px;
    right: 0px;  /* 距离右边0像素 */
    padding: 10px;
    overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
    background-color: rgb(208, 146, 197);
  }
</style>