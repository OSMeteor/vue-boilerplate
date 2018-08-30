<template>
  <div id="app"> 
    <router-view/> 
  </div>
</template>

<script> 
export default {
   name: 'App',
    components: {  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
* {
    margin: 0;
    padding: 0;
    /* color: #333333; */
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: "Helvetica Neue", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
 
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
