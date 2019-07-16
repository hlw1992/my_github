<template>
  <div id="app">
    <router-view :key="$route.path + $route.query.t"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  margin:0;padding:0;
}
ul,ol{
  list-style: none;
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
</style>
