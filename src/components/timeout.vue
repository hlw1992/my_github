<template>
  <div id='timeout'>
    <!-- 控制时间长短 -->
    <div class='controls'>
      <div>
        <p>专注时间<span>(分钟)</span></p>
        <el-input-number class='ipt1' size="mini" v-model="doNum" @change="handleChange" :step="1" :min="1" :max="50" step-strictly :disabled="numDis"></el-input-number>
      </div>
      <div>
        <p>休息时间<span>(分钟)</span></p>
        <el-input-number class='ipt2' size="mini" v-model="restNum" @change="handleChangeR" :step="1" :min="1" :max="10" step-strictly :disabled="numDis"></el-input-number>
      </div>
    </div>
    <!-- 显示圆圈和信息 -->
    <div class='tomato' ref='tomato' style='border: 2px solid #67c23a;' title="通常来说, 一个番茄时间包含两个部分: 25分钟的专注时间和5分钟的休息时间。">
        <div>{{showWord}}</div>
        <div>{{showTime}}</div>
    </div>
    <!-- 开始(暂停)按钮, 重置 -->
    <div class='btn'>
      <el-button :type="btnType" @click='startOrStop' v-html='btnValue' :disabled='ifDis'>{{btnValue}}</el-button>
      <el-button type="info" @click='reset'><i class="fa fa-repeat" aria-hidden="true"></i> 重置</el-button>
    </div>
    <!-- 音频 -->
    <audio ref='audio1' id='audio1'>
      <source src="../assets/audios/didi.mp3" type="audio/mpeg">
    </audio>
    <audio ref='audio2' id='audio2'>
      <source src="../assets/audios/tiktok.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
import animate from 'animate.css'
import 'font-awesome/css/font-awesome.min.css'

export default {
  data () {
    return {
      doNum: 25,
      restNum:5,
      showWord:'专注',
      showTime:'',
      timer: null,
      btnValue:'<i class="fa fa-play" aria-hidden="true"></i> 开始',
      btnType:'success',
      ifDis:false,
      numDis:false
    }
  },
  mounted () {
    this.formatTime()
  },
  beforeDestroy(){
    clearInterval(this.timer)
    this.timer=null
  },
  methods: {
    reset(){
      this.doNum= 25
      this.formatTime()
      this.restNum= 5
      this.showWord='专注'
      clearInterval(this.timer)
      this.timer=null
      this.btnValue='<i class="fa fa-play" aria-hidden="true"></i> 开始'
      this.btnType='success'
      this.ifDis=false
      this.numDis=false
      this.$refs.tomato.style.border='2px solid #67c23a'
    },
    handleChange(value) {
      // console.log(value);
      if(this.timer!==null){
        // 如果正在倒计时, +-应该按不了
        this.numDis=true
        // 功能未实现, change并禁用后value变回原来的值
      }else{
        this.numDis=false
        this.doNum = value
        this.formatTime()
      }
      
    },
    handleChangeR(value) {
      this.restNum = value
      if(this.timer!==null){
        // 如果正在倒计时, +-应该按不了
        this.numDis=true
        // 功能未实现, change并禁用后value变回原来的值
      }else{
        this.numDis=false
        this.restNum = value
      }
    },
    // 初始化时间(只有专注时间用到)
    formatTime(){
      let begin = this.doNum*60
      if(begin>0){
        let m = Math.floor(begin/60)
        let s = Math.floor(begin%60)
        if(s<10){
          s='0'+s
        }
        this.showTime = m+':'+s
      }
    },
    // xx:xx 时间转秒数
    toSeconds(str){
      let arr = str.split(':')
      return arr[0]*60+arr[1]*1
    },
    // 进入休息时间函数
    restFn(){
      // 改变圆圈颜色
      this.$refs.tomato.style.border='2px solid #f56c6c'
      this.showWord='休息'
      // 禁用开始/暂停按钮
      this.ifDis=true
      this.btnType=''

      let begin = this.restNum*60
      let that = this
      // 又是倒计时
      this.timer = setInterval(function() {
        // console.log('restTime')
        if(begin>=0){
          let m = Math.floor(begin/60)
          let s = Math.floor(begin%60)
          if(s<10){
            s='0'+s
          }
          that.showTime = m+':'+s
          begin --
        }else if(begin<0){
          // console.log('回到专注')
          clearInterval(that.timer)
          that.timer=null
          // 样式开始
          that.$refs.tomato.style.border='2px solid #67c23a'
          that.showWord='专注'
          // 启用开始/暂停按钮
          that.ifDis=false
          that.btnType = 'success'
          that.btnValue = '<i class="fa fa-play" aria-hidden="true"></i> 开始'
          // 时间重置
          // that.formatTime()
          that.handleChange(that.doNum)
          that.handleChangeR(that.restNum)

          that.$refs.audio2.play()
          that.$message({
            showClose: true,
            message: '一个番茄时间(或自定义时间)结束了，您可以开始新的番茄时间',
            type:'success'
          });
        }
        
      },1000)
      
    },
    // 点击倒计时
    startOrStop(){
      // debugger
      // console.log(1)
      // console.log(this.$refs.tomato.style.border)
      // 判断是否点击多次
      if(this.timer!=null){ // 说明在倒计时状态

        clearInterval(this.timer)
        this.timer=null
        // 样式开始
        this.showWord = '暂停中'
        this.btnType = 'success'
        this.btnValue = '<i class="fa fa-play" aria-hidden="true"></i> 开始'
      }else{  //就是没有计时状态,暂停结束要开始或者是刚开始的状态
        // 暂停结束要开始
        if(this.toSeconds(this.showTime)!=this.doNum*60){
          // 样式暂停
          this.showWord = '专注'
          this.btnType = 'danger'
          this.btnValue = '<i class="fa fa-stop-circle-o" aria-hidden="true"></i> 暂停'
          // showtime要转化成秒数, 再显示
          // console.log(this.toSeconds(this.showTime))
          let tempSecs = this.toSeconds(this.showTime)
          let that = this
          this.timer= setInterval(function(){
            if(tempSecs>=0){
              let m = Math.floor(tempSecs/60)
              let s = Math.floor(tempSecs%60)
              if(s<10){
                s = '0'+s
              }
              that.showTime = m+':'+s
              tempSecs --
            }else if(tempSecs<0){

              clearInterval(that.timer)
              that.timer=null
              // 时间重置
              that.formatTime()
              // 样式开始
              // that.showWord = '暂停中'
              // that.btnType = 'success'
              // that.btnValue = '<i class="fa fa-play" aria-hidden="true"></i> 开始'

              // 进入休息时间
              // document.getElementById('audio1').play()
              that.$refs.audio1.play()
              that.$message({
                showClose: true,
                message: '专注时间结束，进入休息时间',
              });
              that.restFn()
            }
          },1000)

        }else{  //刚开始的状态
          // 样式暂停
          this.showWord = '专注'
          this.btnType = 'danger'
          this.btnValue = '<i class="fa fa-stop-circle-o" aria-hidden="true"></i> 暂停'
          // 开始倒计时
          let secs = this.doNum*60
          let that = this
          this.timer = setInterval(function(){
            // console.log(2);
            if(secs>=0){
              let m = Math.floor(secs/60)
              let s = Math.floor(secs%60)
              if(s<10){
                s = '0'+s
              }
              that.showTime = m+':'+s
              secs --
            }else if(secs<0){
              // that.showTime = '0:00'
              clearInterval(that.timer)
              that.timer=null
              // 时间重置
              that.formatTime()
              // 样式开始
              // that.showWord = '暂停中'
              // that.btnType = 'success'
              // that.btnValue = '<i class="fa fa-play" aria-hidden="true"></i> 开始'

              // 进入休息时间
              // document.getElementById('audio1').play()
              that.$refs.audio1.play()
              that.$message({
                showClose: true,
                message: '专注时间结束，进入休息时间',
              });
              that.restFn()
            }
          },1000)
        }
      }

    }
  }
}
</script>

<style scoped>
  #timeout{
    height: 84vh;
    box-shadow: 0 0 10px #1e1f26 inset;
    background-color: #333333;
    color:white;
    position: relative;
  }

  .controls div:first-child{
    position: absolute;
    left:25%;
  }
  .controls div:last-child{
    position: absolute;
    right:25%;
  }
  .ipt1{
    position: absolute;
    left:0;
  }
  .ipt2{
    position: absolute;
    left:0;
  }
  .el-input-number--mini{
    width:90px;
  }
  .controls div p{
    margin:1vh 0;
    font-size: 4vh;
  }
  .controls div p span{
    font-size: 2vh;
    font-weight: lighter;
  }
  /* 圆圈 */
  .tomato{
    /* border: 2px solid #67c23a; */
    border-radius: 50%;
    width:24vw;
    height: 46vh;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
  }
  .tomato div:first-child{
    padding:10vh 0 5vh;
    font-size:3vw;
  }
  .tomato div:last-child{
    padding:5vh 0 10vh;
    font-size:3vw;
  }
  .btn{
    position: absolute;
    left:50%;
    bottom:3vh;
    transform: translate(-50%, -10%);
  }
</style>

