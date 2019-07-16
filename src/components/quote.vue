<template>
  <div id="quote" :style="{'backgroundColor':this.color}">
    <div class="inside">
      <div class="deepInside">
        <div class="showQuote" :style="{'color':this.color}">
          <div class="quote">
            <i class="fa fa-quote-left" aria-hidden="true"></i>
            <span>{{quote}}</span>
            <i class="fa fa-quote-right" aria-hidden="true"></i>
          </div>
        </div>
        <div class="showAuthor" :style="{'color':this.color}">
          <div class="author">－{{author}}</div>
        </div>
        <a class="wx" :style="{'backgroundColor':this.color}" title="分享到微信(未实装)">
          <i class="fa fa-weixin" aria-hidden="true"></i>
        </a>
        <a class="qq" :style="{'backgroundColor':this.color}" title="分享到QQ(未实装)">
          <i class="fa fa-qq" aria-hidden="true"></i>
        </a>
        <button
          class="newone"
          @click="newone();changeColor()"
          :style="{'backgroundColor':this.color}"
        >换一句</button>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
// import animate from "animate.css";
import "font-awesome/css/font-awesome.min.css";
export default {
  name:'childQuote',
  data() {
    return {
      quote: "",
      author: "",
      color: ""
    };
  },
  created() {
    this.changeColor();
    this.newone();
  },
  methods: {
    newone() {
      axios({
        method: "get",
        url: "https://v1.hitokoto.cn/"
      })
        .then(response => {
          // console.log(response.data);
          this.quote = response.data.hitokoto;
          if (response.data.from == "") {
            this.author = "未知";
          } else {
            this.author = response.data.from;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 改变为随机颜色(网上找的深的颜色)
    changeColor() {
      const strColor = "0123401234abcabc";
      let arrColor = strColor.split("");
      // 先随机排列上边的数组
      function random(min, max) {
        if (isNaN(min) || isNaN(max)) {
          return null;
        }
        if (min > max) {
          min ^= max;
          max ^= min;
          min ^= max;
        }
        return ((Math.random() * (max - min)) | 0) + min;
      }
      //
      let color = "#";
      for (var i = 0; i < 6; i++) {
        color += arrColor[random(0, 16)];
      }
      this.color = color;
    }
  }
};
</script>

<style scoped>
#quote {
  /* background-color: darkgray; */
  height: 84vh;
  box-shadow: 0 0 10px #1e1f26 inset;
  position: relative;
}
.inside {
  background-color: #fff;
  width:50vw;
  height: 60vh;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -25vw;
  margin-top:-30vh;
}
.deepInside {
  /* border: 1px solid black; */
  width:43vw;
  height: 47vh;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21.5vw;
  /* margin-top: -140px; */
  margin-top:-23.5vh;
}
.showQuote {
  /* background-color: black; */
  /* color: darkgray; */
  height: 32vh;
  width: 100%;
  font-size: 1.5rem;
  display: table;
}
.quote {
  /* border: 1px solid white; */
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  word-break: break-all;
}
.showAuthor {
  /* background-color: blue; */
  /* color: darkgray; */
  height: 3vh;
  width: 100%;
  display: table;
}
.author {
  /* border: 1px solid white; */
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  text-align: right;
  font-size: 16px;
}
.wx {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 3vw;
  height: 6vh;
  /* background-color: darkgray; */
  border-radius: 5px;
  cursor: pointer;
}
.wx:hover{
  opacity: 0.8;
}
.wx i {
  color: white;
  font-size: 16px;
  padding-top: 1.5vh;
  vertical-align: top;
}
.qq {
  position: absolute;
  left: 8%;
  bottom: 0;
  width: 3vw;
  height: 6vh;
  /* background-color: darkgray; */
  border-radius: 5px;
  cursor: pointer;
}
.qq:hover{
  opacity: 0.8;
}
.qq i {
  color: white;
  font-size: 16px;
  padding-top: 1.5vh;
  vertical-align: top;
}
.newone {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100px;
  height: 6vh;
  /* background-color: darkgray; */
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
  color: white;
}
.newone:hover{
  opacity: 0.8;
}
</style>
