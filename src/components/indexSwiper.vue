<template>
  <div id='swiper'>
    <!-- 轮播 -->
    <el-carousel :autoplay="false" arrow="always" trigger="click" class="carousel" height="100vh">
      <el-carousel-item v-for="(item,index) in carouselArr" :key="index"
                        :style="{backgroundImage: 'url(' + item.url + ')' }"
      >
        <!-- 轮播图里的内容 -->
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
                  <div class='about' @click='showMask'>
                    <i class="fa fa-info-circle" aria-hidden="true"></i>
                  </div>
                </el-col>
              </el-row>
          </el-header>
          
          <el-main class='main'>
              <el-row>
                <el-col :span="21" :offset="3">
                  <h1>{{item.toolName}}</h1>
                  <h6>{{item.toolDescribtion}}</h6>
                  <router-link :to='item.toolPath' class='insideBtn'>查看</router-link>
                </el-col>
              </el-row>
          </el-main>
        </el-container>

      </el-carousel-item>
    </el-carousel>

    <!-- 遮罩层 -->
    <transition
      enter-active-class="animated fadeInDownBig"
      leave-active-class="animated fadeOutUpBig"
    >
      <CompMask v-if='isMask'></CompMask>
    </transition>
  </div>
</template>

<script>
import animate from 'animate.css'
import 'font-awesome/css/font-awesome.min.css'
import CompMask from "./mask.vue"

export default {
  name: "swiper",
  data() {
    return {
      carouselArr:[
        {url:require('@/assets/images/1.jpg'),toolName:'每日一言',toolDescribtion:'随机的一句话',toolPath:'/tools/quote'},
        {url:require('@/assets/images/2.jpg'),toolName:'弹幕',toolDescribtion:'发射弹幕, 可以更改弹幕颜色',toolPath:'/tools/bulletScreen'},
        {url:require('@/assets/images/3.jpg'),toolName:'搜索',toolDescribtion:'搜索wikipedia(需科学上网)',toolPath:'/tools/searchWiki'},
        {url:require('@/assets/images/4.jpg'),toolName:'计算器',toolDescribtion:'常规计算功能',toolPath:'/tools/calc'},
        {url:require('@/assets/images/5.jpg'),toolName:'番茄计时',toolDescribtion:'仿番茄倒计时',toolPath:'/tools/timeout'}
      ],
      isMask:false
    };
  },
  components: {CompMask},
  methods: {
    showMask(){
      this.isMask=!this.isMask
    }
  }
};
</script>

<style scoped>
#swiper{
  position: relative;
}
/* 轮播图 */
.carousel {
  height: 100vh;
  text-align: center;
  color: white;
  font-size: 2.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* z-index: 100; */
}
.header {
  height: 20vh !important;
  padding-top: 4vh;
}
.header a{
  color:white;
}
.main{
  text-align: left;
}
.main h1{
  margin:1% 0;
}
.main h6{
  margin:5% 0;
}
.about{
  display:inline-block;
  cursor: pointer;
}

.insideBtn {
  border: 2px solid white;
  color: white;
  font-size: 16px;
  padding: 10px 18px;
  cursor: pointer;
  /* text-decoration: none; */
}
</style>
