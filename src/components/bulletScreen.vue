<template>
  <div id="bulletScreen">
    <div class="justBlank"></div>
    <div
      class="screenArea"
      :style="{background: 'url(' + this.imgUrl + ') no-repeat center center' }"
    >
      <!-- 滚动区域 -->
      <div class="scrollBullet" v-if='switchVal'>
        <span v-for="(item,index) in arrIpt" :key="index" class="scrollLeft" :style="{top:item.top + 'rem',color:item.fcolor,fontSize:item.fsize}">
          {{item.msg}}
        </span>
      </div>
      <!-- 顶部区域 -->
      <div class="topBullet"  v-if='switchVal'>
        <span v-for="(item,index) in arrTopIpt" :key="index" class="top" :style="{top:item.top + 'rem',color:item.fcolor,fontSize:item.fsize}">
          {{item.msg}}
        </span>
      </div>
      <!-- 底部区域 -->
      <div class="bottomBullet"  v-if='switchVal'>
        <span v-for="(item,index) in arrBottomIpt" :key="index" class="bottom" :style="{top:item.top + 'rem',color:item.fcolor,fontSize:item.fsize}">
          {{item.msg}}
        </span>
      </div>
    </div>
    <div class="sendBullet">
      <el-row>
        <el-col :span="4">
          <!-- 弹幕开关 -->
          <el-switch
            v-model="switchVal"
            active-color="#409EFF"
            inactive-color="#A8A8A8"
            class="elSwitch"
            active-text="弹幕"
            @change='changeStatus'
          ></el-switch>
        </el-col>
        <el-col :span="1">
          <!-- 选择字号和滚动方式 -->
          <el-dropdown placement='bottom' :hide-on-click="false" trigger="click">
            <span class="el-dropdown-link">
              <i class="fa fa-font" aria-hidden="true"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item disabled>字 号</el-dropdown-item>
              <el-radio-group v-model="radio1" size="medium" @change='changeRadio1'>
                <el-radio-button label='normal'><i class="fa fa-search" aria-hidden="true"></i> 标准</el-radio-button>
                <el-radio-button label='small'><i class="fa fa-search-minus" aria-hidden="true"></i> 小</el-radio-button>
              </el-radio-group>
              <el-dropdown-item disabled divided>模 式</el-dropdown-item>
              <el-radio-group v-model="radio2" size="medium">
                <el-radio-button label='scroll'><i class="fa fa-long-arrow-left" aria-hidden="true"></i> 滚动</el-radio-button>
                <el-radio-button label='top'><i class="fa fa-sort-asc" aria-hidden="true"></i> 顶部</el-radio-button>
                <el-radio-button label='bottom'><i class="fa fa-sort-desc" aria-hidden="true"></i> 底部</el-radio-button>
              </el-radio-group>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="2">
          <!-- 颜色选择器 -->
          <el-color-picker
            v-model="color"
            show-alpha
            :predefine="predefineColors"
            class="colorChooser"
            size="mini"
          ></el-color-picker>
        </el-col>
        <el-col :span="14">
          <el-input
            type="text"
            placeholder="说点什么?"
            v-model="iptVal"
            class="ipt"
            @keyup.enter.native="sendBullet"
          ></el-input>
        </el-col>
        <el-col :span="3">
          <el-button class="send" type="primary" @click="sendBullet">发送</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
// const jsonp = require("jsonp");
// import animate from "animate.css";
import "font-awesome/css/font-awesome.min.css";
export default {
  name: "bulletScreen",
  data() {
    return {
      imgUrl: "",
      switchVal: true,
      // 输入内容
      iptVal: "",
      // 滚动弹幕的合集
      arrIpt: [],
      // 顶部弹幕合集
      arrTopIpt:[],
      // 底部弹幕
      arrBottomIpt:[],
      // 取色器的颜色
      color: "#ffffff",
      predefineColors: [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "hsv(51, 100, 98)",
        "hsl(181, 100%, 37%)",
        "#000000"
      ],
      size:'2.5rem',
      radio1:'normal',
      radio2:'scroll'
    };
  },
  created() {
    this.getImage();
    // console.log(this.radio2)
  },
  methods: {
    getImage() {
      axios({
        method: "get",
        url: "https://open.saintic.com/api/bingPic/"
      })
        .then(response => {
          // console.log(response.request.responseURL);
          this.imgUrl = response.request.responseURL;
        })
        .catch(error => {
          console.log(error);
        });

      // jsonp('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN', null, (err, data) => {
      //   if (err) {
      //     console.error(err.message);
      //   } else {
      //     console.log(data);
      //   }
      // });
      
    },
    sendBullet() {
      // console.log(this.radio2)
      if (this.iptVal == "") {
        this.$notify.info({
          title: "",
          message: "请输入内容再发送哟",
          position: "bottom-right",
          duration: 2000,
          offset: 60
        });
      } else if(this.radio2=='scroll'){
        // 我这里的单位是rem,滚动弹幕的最大高也就10em,还要把颜色,字体大小也存进去
        let top = Math.floor(Math.random() * 10);
        let obj = { msg: this.iptVal, top: top, fcolor:this.color, fsize:this.size};
        this.arrIpt.push(obj);
        this.iptVal = "";
        // console.log(top,this.arrIpt)
      }else if(this.radio2=='top'){
        // 我这里的单位是rem,top弹幕的最大高也就5em,还要把颜色,字体大小也存进去
        let top = Math.floor(Math.random() * 5);
        let obj = { msg: this.iptVal, top: top, fcolor:this.color, fsize:this.size};
        this.arrTopIpt.push(obj);
        this.iptVal = "";
        // let that=this;
        // setTimeout(function(){
          
        // },2000)
        
      }else if(this.radio2=='bottom'){
        // 我这里的单位是rem,bottom弹幕的最大高也就5em,还要把颜色,字体大小也存进去
        let top = Math.floor(Math.random() * 5);
        let obj = { msg: this.iptVal, top: top, fcolor:this.color, fsize:this.size};
        this.arrBottomIpt.push(obj);
        this.iptVal = "";
        
      }
    },
    // 如果关了弹幕按钮 则清空之前的弹幕
    changeStatus: function(callback){
      // console.log(callback);
      if(callback==false){
        this.arrIpt=[]
        this.arrTopIpt=[]
        this.arrBottomIpt=[]
      }
    },
    changeRadio1(val){
      // console.log(val)
      if(val=='small'){
        this.size='1.5rem'
      }else{
        this.size='2.5rem'
      }
    },
    
    
  }
};
</script>

<style scoped>
#bulletScreen {
  height: 84vh;
}
.justBlank {
  height: 20px;
}
.screenArea {
  background-color: gray !important;
  width: 900px;
  height: 400px;
  margin: 0 auto;
  position: relative;
  box-shadow: 0 0 2px gray;
  overflow: hidden;
}
.scrollBullet {
  /* background-color: lightblue; */
  width: 100%;
  height: 10rem;
}
.topBullet {
  /* background-color: lightcoral; */
  width: 100%;
  height: 5rem;
  position: absolute;
  top: 1rem;
  text-align: center;
  display: flex; 
  align-items: center;
  justify-content: center;
}
.bottomBullet {
  /* background-color: lightseagreen; */
  width: 100%;
  height: 5rem;
  position: absolute;
  bottom: 2rem;
  text-align: center;
  display: flex; 
  align-items: center;
  justify-content: center;
}
.sendBullet {
  box-shadow: 0 0 2px gray;
  width: 900px;
  margin: 0 auto;
  padding-bottom: 5px;
}
.elSwitch {
  margin-top: 10px;
}
.el-dropdown{
  color:#409EFF;
  font-size: 1rem;
  cursor: pointer;
}

.colorChooser {
  margin-top: 8px;
}
/* 滚动弹幕样式 */
.scrollLeft{
    position: absolute;
    transform: translateX(100vw);
    animation: toLeft 12s linear;
}
@keyframes toLeft {
    from {
      transform: translateX(36vw);
    }
    to {
      transform:  translateX(-200vw);
    }
}
/* top弹幕样式 */
/* 这里我用了取巧的方式, 本来应该两秒后直接消失, 但是js不知咋写, 就用了透明度 */
.top{
  position: absolute;
  opacity:0;
  animation:bye 3s ease-in;
}
@keyframes bye{
  from {opacity: 1;}
  to {opacity: 0;}
}
/* bottom弹幕 */
.bottom{
  position: absolute;
  opacity:0;
  animation:bye 3s ease-in;
}
</style>
