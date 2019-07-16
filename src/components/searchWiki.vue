<template>
  <div id="search">
    <el-container>
      <el-main class='main'>

        <div class='searchBar' ref="sb">
          <el-input v-model="input" placeholder="Search Wikipedia" class='ipt' @keyup.enter.native="search(input)"></el-input>
          <el-button type="primary" class='sBtn' @click='search(input)'><i class="fa fa-search" aria-hidden="true"></i></el-button>
          <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">
            <el-button round size="small">
                random article
            </el-button>
          </a>
        </div>

        <!-- 显示文章内容 -->
        <ul class='showArticle'>
            <li v-for="(item,index) in list" class='article'>
              <a :href='"https://en.wikipedia.org/?curid="+item.key' target="_blank">
                <h2>{{item.value.title}}</h2>
                <p>
                  {{item.value.extract}}
                </p>
              </a>
            </li>
        </ul>

      </el-main>
    </el-container>
  </div>
</template>

<script>
// const axios = require("axios");
// axios不能跨域, 用npm install jsonp --save
const jsonp = require("jsonp");

import "font-awesome/css/font-awesome.min.css";
export default {
  name: "searchWiki",
  data() {
    return {
      input: '',
      list:[]
    };
  },
  methods: {
    getWiki(str) {
      jsonp("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=20&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+str, null, (err, data) => {
        if (err) {
          console.error(err.message);
        } else if(data.query==undefined){
          this.$notify.info({
            title:"",
            message: "在wiki未找到相关内容",
            position: "top-right",
            duration: 2000,
            offset:80
          });
        }else{
          // console.log(data)
          // console.log(str)
          const list = Object.keys(data.query.pages).map((item, index) => ({key: item, value:data.query.pages[item]}))
          // console.log(list[0].key)
          this.list=list;
          // 给搜索栏加个样式
          // console.log(this.$refs.sb.className='afterSearch')
          this.$refs.sb.className='afterSearch'
        }
      });
    },
    search(val){
      // console.log(val)
      if(val==''||val.trim()==''){
        this.$notify.info({
          title:"",
          message: "请输入搜索的内容",
          position: "top-left",
          duration: 2000,
          offset:80
        });
      }else{
        this.getWiki(val)
      }
    }
  }
};
</script>

<style scoped>
#search{
  height: 84vh;
  box-shadow: 0 0 10px #1e1f26 inset;
  background-color: #092B40;
  background: url(https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1122px-Wikipedia-logo-v2.svg.png) center center no-repeat fixed;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100vw;
}
.main{
  /* height有必要, 滚动条限制在main里 */
  height: 84vh;
}
.searchBar{
  /* background-color: lightcoral; */
  /* 开始 */
  padding-top:30vh;

}
/* 搜索出结果后 */
.afterSearch{
  animation: searchBarUp 2s ease;
  padding-top:5vh;

}
@keyframes searchBarUp{
  from {
    padding-top:30vh;

  }
  to {
    padding-top:5vh;

  }
}
/* 搜索栏样式 没毛病 */
.ipt{
  width:30vw;
}
.el-button+.el-button{
  margin-left: 0;
}
.sBtn{
  width: 36px;
  padding:11px 10px;
}
/* 内容显示区域 */

.article{
  margin: 0 auto 0.2rem;
  width:54vw;
  background-color: #fff;
  border: 2px solid lightgray;
  border-radius:5px;
}
.article:first-of-type{
  margin-top: 3rem;
}
.article a{
  color:#323234;
}
.article h2{
  text-align: left;
  padding: 1rem 1rem 0.25rem;
  font-size:1.5rem;
  margin: 0;
}
.article p{
  text-align: left;
  word-break: break-all;
  padding: 0.25rem 1rem 1rem;
  font-size:1rem;
  margin: 0;
}
</style>
