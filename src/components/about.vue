<template>
  <div id="about">
    <!-- 关于页面 -->
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
        <h1 style="margin:0;">留下你的脚印</h1>
        <!-- 一条线 -->
        <div style="margin: 20px 46% 20px 46%;border-top:3px solid #B99D61;"></div>
        <p style="margin:0;font-style:italic;font-size:16px;">走过路过，不要错过</p>
      </el-header>
      <el-main class="main">
        <el-row>
          <el-col :span="7" :offset="1">
            <div>
              <h3>关于我</h3>
              <div style="margin: 20px 90% 20px 0;border-top:3px solid #B99D61;"></div>
              <p>一个非典型处女座的90后，WEB和移动前端初级开发(api调用员-_-||)。向中级开发努力中。</p>
            </div>
          </el-col>
          <el-col :span="7" :offset="1">
            <div>
              <h3>联系我</h3>
              <div style="margin: 20px 90% 20px 0;border-top:3px solid #B99D61;"></div>
              <p>VX & QQ : 452253308</p>
              <p>github : <a href="https://github.com/hlw1992">https://github.com/hlw1992</a></p>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <h3 style='padding-left:4%;'>留言</h3>
              <div style="margin:20px 86% 20px 4%;border-top:3px solid #B99D61;"></div>
              <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm" @submit.native.prevent>
                <el-form-item label="昵称" prop="name">
                  <el-input  v-model="ruleForm.name" placeholder="请输入昵称(目前只有样式)"></el-input>
                </el-form-item>

                <el-form-item label="意见和建议" prop="desc">
                  <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入意见和建议(目前只有样式)"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer class="footer">
        <p>参考学习的链接</p>
        <p>
          <a href="https://cn.vuejs.org/v2/api/">Vue.js </a>|
          <a href="https://element.eleme.cn/#/zh-CN/component/quickstart">element-ui </a>|
          <a href="https://daneden.github.io/animate.css/">Animate.css </a>|
          <a href="http://www.fontawesome.com.cn/faicons/">FontAwesome </a>|
          <a href="https://shuax.com/">耍下</a>
        </p>
      </el-footer>
    </el-container>
    
    <!-- 遮罩层 -->
    <transition enter-active-class="animated fadeInDownBig" leave-active-class="animated fadeOutUpBig">
      <CompMask v-if='isMask'></CompMask>
    </transition>

  </div>
</template>

<script>
import CompMask from './mask.vue'
import animate from 'animate.css'
import 'font-awesome/css/font-awesome.min.css'

export default {
  name: "about",
  data() {
    return {
      ruleForm: {
          name: '',
          desc: ''
      },
      isMask:false
    };
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('提交成功!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      showMask(){
        this.isMask=!this.isMask
      }
    },
    components: {CompMask},
};
</script>

<style scoped>
.container {
  height: 100vh;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  /* 千万别加下面这个 */
  /* z-index: 1; */
}
.header {
  height: 40vh !important;
  font-size: 36px;
  padding-top: 30px;
  color: white;
  background-image: url("../assets/images/vista.jpg");
}
.header a{
  color:white;
}
.main {
  height: 50vh !important;
  text-align: left;
}
.main p{
  font-size: 14px;
  color: #606266;
}
.footer {
  height: 10vh !important;
  color: white;
  background-image: url("../assets/images/Desert-7.jpg");
}
.footer p{
  margin:0;
  height: 40%;
  line-height: 160%;
}
.footer p a{
  /* text-decoration: none; */
  color: #B99D61;
}
.footer p a:hover{
  color: white;
}

.el-form-item{
  margin-bottom: 8px;
}
.about{
  display:inline-block;
  cursor: pointer;
}
/* 最大的div */
#about{
  position: relative;
}
</style>

