<template>
  <div id='mask'>
    <el-container class="container">
      <el-header class="header">
        <el-row>
          <el-col :span="6">
            <div>
              <router-link :to="{path:'/',query:{t:Date.now()}}">
                <i class="fa fa-home" aria-hidden="true"></i>
              </router-link>
            </div>
          </el-col>
          <el-col :span="6" :offset="12">
            <div class='about' @click='hideMask'>
              <i class="fa fa-times" aria-hidden="true"></i>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main class='main'>
        <ul>
          <li>
            <router-link :to="{path:'/',query:{t:Date.now()}}">
              首页
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/about',query:{t:Date.now()}}">
              关于
            </router-link>
          </li>
        </ul>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import animate from 'animate.css'
import 'font-awesome/css/font-awesome.min.css'

export default {
  methods: {
    hideMask(){
      this.$parent.showMask();
    },
    // 编程式导航 比如:配合div的@click事件
    // goAbout(){
    //   this.$router.push({
    //       path:"/about",
    //       query:{
    //           t:Date.now(),
    //       },
    //   });
    // }
  },
}
</script>

<style scoped>
.container {
  height: 100vh;
  text-align: center;
  color: white;
  font-size: 36px;
  background: #222222;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
}
.header {
  height: 35vh !important;
  padding-top: 30px;
}
.header a{
  color:white;
}
.main li{
  margin: 10px;
}
.main li a{
  color: white;
  /* text-decoration: none; */
}
.main li a:hover{
  color:#B99D61;
}
.about{
  display:inline-block;
  cursor: pointer;
}

</style>

