webpackJsonp([1],{"0OFL":function(t,e){},"2BgX":function(t,e,s){t.exports=s.p+"static/img/5.dc5e5f7.jpg"},"2bj7":function(t,e){},"3lFO":function(t,e,s){t.exports=s.p+"static/img/4.720f9c7.jpg"},"4uXd":function(t,e){},"9Smp":function(t,e,s){t.exports=s.p+"static/media/tiktok.8822860.mp3"},"9dHI":function(t,e,s){t.exports=s.p+"static/media/didi.e7c94a3.mp3"},AsW3:function(t,e,s){t.exports=s.p+"static/img/2.77d694f.jpg"},BD8V:function(t,e){},L5hT:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{key:this.$route.path+this.$route.query.t})],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},i,!1,function(t){s("xu0c")},null,null).exports,o=s("/ocq"),n=s("oPmM"),l=s.n(n),c=(s("e0XP"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"mask"}},[e("el-container",{staticClass:"container"},[e("el-header",{staticClass:"header"},[e("el-row",[e("el-col",{attrs:{span:6}},[e("div",[e("router-link",{attrs:{to:{path:"/",query:{t:Date.now()}}}},[e("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])],1)]),this._v(" "),e("el-col",{attrs:{span:6,offset:12}},[e("div",{staticClass:"about",on:{click:this.hideMask}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])])],1)],1),this._v(" "),e("el-main",{staticClass:"main"},[e("ul",[e("li",[e("router-link",{attrs:{to:{path:"/",query:{t:Date.now()}}}},[this._v("\n            首页\n          ")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:{path:"/about",query:{t:Date.now()}}}},[this._v("\n            关于\n          ")])],1)])])],1)],1)},staticRenderFns:[]});var u=s("VU/8")({methods:{hideMask:function(){this.$parent.showMask()}}},c,!1,function(t){s("4uXd")},"data-v-c1db402c",null).exports,h={name:"swiper",data:function(){return{carouselArr:[{url:s("dE1y"),toolName:"每日一言",toolDescribtion:"随机的一句话",toolPath:"/tools/quote"},{url:s("AsW3"),toolName:"弹幕",toolDescribtion:"发射弹幕, 可以更改弹幕颜色",toolPath:"/tools/bulletScreen"},{url:s("iCB0"),toolName:"搜索",toolDescribtion:"搜索wikipedia(需科学上网)",toolPath:"/tools/searchWiki"},{url:s("3lFO"),toolName:"计算器",toolDescribtion:"常规计算功能",toolPath:"/tools/calc"},{url:s("2BgX"),toolName:"番茄计时",toolDescribtion:"仿番茄倒计时",toolPath:"/tools/timeout"}],isMask:!1}},components:{CompMask:u},methods:{showMask:function(){this.isMask=!this.isMask}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"swiper"}},[s("el-carousel",{staticClass:"carousel",attrs:{autoplay:!1,arrow:"always",trigger:"click",height:"100vh"}},t._l(t.carouselArr,function(e,a){return s("el-carousel-item",{key:a,style:{backgroundImage:"url("+e.url+")"}},[s("el-container",{staticClass:"container"},[s("el-header",{staticClass:"header"},[s("el-row",[s("el-col",{attrs:{span:6}},[s("div",[s("router-link",{attrs:{to:{path:"/",query:{t:Date.now()}}}},[s("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])],1)]),t._v(" "),s("el-col",{attrs:{span:6,offset:12}},[s("div",{staticClass:"about",on:{click:t.showMask}},[s("i",{staticClass:"fa fa-info-circle",attrs:{"aria-hidden":"true"}})])])],1)],1),t._v(" "),s("el-main",{staticClass:"main"},[s("el-row",[s("el-col",{attrs:{span:21,offset:3}},[s("h1",[t._v(t._s(e.toolName))]),t._v(" "),s("h6",[t._v(t._s(e.toolDescribtion))]),t._v(" "),s("router-link",{staticClass:"insideBtn",attrs:{to:e.toolPath}},[t._v("查看")])],1)],1)],1)],1)],1)}),1),t._v(" "),s("transition",{attrs:{"enter-active-class":"animated fadeInDownBig","leave-active-class":"animated fadeOutUpBig"}},[t.isMask?s("CompMask"):t._e()],1)],1)},staticRenderFns:[]};var f=s("VU/8")(h,d,!1,function(t){s("0OFL")},"data-v-1c4ae9b8",null).exports,v={name:"about",data:function(){return{ruleForm:{name:"",desc:""},isMask:!1}},methods:{submitForm:function(t){this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;alert("提交成功!")})},resetForm:function(t){this.$refs[t].resetFields()},showMask:function(){this.isMask=!this.isMask}},components:{CompMask:u}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"about"}},[s("el-container",{staticClass:"container"},[s("el-header",{staticClass:"header"},[s("el-row",[s("el-col",{attrs:{span:6}},[s("div",[s("router-link",{attrs:{to:{path:"/",query:{t:Date.now()}}}},[s("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])],1)]),t._v(" "),s("el-col",{attrs:{span:6,offset:12}},[s("div",{staticClass:"about",on:{click:t.showMask}},[s("i",{staticClass:"fa fa-info-circle",attrs:{"aria-hidden":"true"}})])])],1),t._v(" "),s("p",{staticStyle:{margin:"0"}},[t._v("留下你的脚印")])],1),t._v(" "),s("el-main",{staticClass:"main"},[s("el-row",[s("el-col",{attrs:{span:7,offset:1}},[s("div",[s("h3",[t._v("关于我")]),t._v(" "),s("div",{staticStyle:{margin:"20px 90% 20px 0","border-top":"3px solid #B99D61"}}),t._v(" "),s("p",[t._v("一个非典型处女座的90后，WEB和移动前端开发(api调用员-.-||)。向中级开发努力中。")])])]),t._v(" "),s("el-col",{attrs:{span:7,offset:1}},[s("div",[s("h3",[t._v("联系我")]),t._v(" "),s("div",{staticStyle:{margin:"20px 90% 20px 0","border-top":"3px solid #B99D61"}}),t._v(" "),s("p",[t._v("VX & QQ : 452253308")]),t._v(" "),s("p",[t._v("github : "),s("a",{attrs:{href:"https://github.com/hlw1992"}},[t._v("https://github.com/hlw1992")])])])]),t._v(" "),s("el-col",{attrs:{span:8}},[s("div",[s("h3",{staticStyle:{"padding-left":"4%"}},[t._v("留言")]),t._v(" "),s("div",{staticStyle:{margin:"20px 86% 20px 4%","border-top":"3px solid #B99D61"}}),t._v(" "),s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,"label-width":"100px"},nativeOn:{submit:function(t){t.preventDefault()}}},[s("el-form-item",{attrs:{label:"昵称",prop:"name"}},[s("el-input",{attrs:{placeholder:"请输入昵称(目前只有样式)"},model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"意见和建议",prop:"desc"}},[s("el-input",{attrs:{type:"textarea",placeholder:"请输入意见和建议(目前只有样式)"},model:{value:t.ruleForm.desc,callback:function(e){t.$set(t.ruleForm,"desc",e)},expression:"ruleForm.desc"}})],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("立即创建")]),t._v(" "),s("el-button",{on:{click:function(e){return t.resetForm("ruleForm")}}},[t._v("重置")])],1)],1)],1)])],1)],1),t._v(" "),s("el-footer",{staticClass:"footer"},[s("p",[t._v("参考学习的链接")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cn.vuejs.org/v2/api/"}},[t._v("Vue.js ")]),t._v("|\n        "),s("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/quickstart"}},[t._v("element-ui ")]),t._v("|\n        "),s("a",{attrs:{href:"https://daneden.github.io/animate.css/"}},[t._v("Animate.css ")]),t._v("|\n        "),s("a",{attrs:{href:"http://www.fontawesome.com.cn/faicons/"}},[t._v("FontAwesome ")]),t._v("|\n        "),s("a",{attrs:{href:"https://shuax.com/"}},[t._v("耍下")])])])],1),t._v(" "),s("transition",{attrs:{"enter-active-class":"animated fadeInDownBig","leave-active-class":"animated fadeOutUpBig"}},[t.isMask?s("CompMask"):t._e()],1)],1)},staticRenderFns:[]};var p=s("VU/8")(v,m,!1,function(t){s("2bj7")},"data-v-eb5177e0",null).exports,_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"tools"}},[s("el-header",{staticClass:"header"},[s("el-row",[s("el-col",{attrs:{span:6}},[s("div",[s("router-link",{attrs:{to:{path:"/",query:{t:Date.now()}}}},[s("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])],1)]),t._v(" "),s("el-col",{attrs:{span:6,offset:12}},[s("el-dropdown",{attrs:{placement:"top"}},[s("span",{staticClass:"el-dropdown-link"},[s("i",{staticClass:"fa fa-caret-square-o-down",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{nativeOn:{click:function(e){return t.toQuote(e)}}},[s("a",[t._v("每日一言")])]),t._v(" "),s("el-dropdown-item",{nativeOn:{click:function(e){return t.toBulletScreen(e)}}},[s("a",[t._v("弹幕")])]),t._v(" "),s("el-dropdown-item",{nativeOn:{click:function(e){return t.toSearchWiki(e)}}},[s("a",[t._v("搜索")])]),t._v(" "),s("el-dropdown-item",{nativeOn:{click:function(e){return t.toCalc(e)}}},[s("a",[t._v("计算器")])]),t._v(" "),s("el-dropdown-item",{nativeOn:{click:function(e){return t.toTimeout(e)}}},[s("a",[t._v("番茄计时")])])],1)],1)],1)],1)],1),t._v(" "),s("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[s("router-view")],1)],1)},staticRenderFns:[]};var b=s("VU/8")({name:"tools",data:function(){return{}},methods:{toQuote:function(){this.$router.push({path:"quote"})},toBulletScreen:function(){this.$router.push({path:"bulletScreen"})},toSearchWiki:function(){this.$router.push({path:"searchWiki"})},toCalc:function(){this.$router.push({path:"calc"})},toTimeout:function(){this.$router.push({path:"timeout"})}},components:{}},_,!1,function(t){s("L5hT")},"data-v-974f0602",null).exports,C=s("mtWM"),w={name:"childQuote",data:function(){return{quote:"",author:"",color:""}},created:function(){this.changeColor(),this.newone()},methods:{newone:function(){var t=this;C({method:"get",url:"https://v1.hitokoto.cn/"}).then(function(e){t.quote=e.data.hitokoto,""==e.data.from?t.author="未知":t.author=e.data.from}).catch(function(t){console.log(t)})},changeColor:function(){var t="0123401234abcabc".split("");for(var e,s,a="#",i=0;i<6;i++)a+=t[(e=0,s=16,isNaN(e)||isNaN(s)?null:(e>s&&(e^=s,e^=s^=e),(Math.random()*(s-e)|0)+e))];this.color=a}}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{style:{backgroundColor:this.color},attrs:{id:"quote"}},[s("div",{staticClass:"inside"},[s("div",{staticClass:"deepInside"},[s("div",{staticClass:"showQuote",style:{color:this.color}},[s("div",{staticClass:"quote"},[s("i",{staticClass:"fa fa-quote-left",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",[t._v(t._s(t.quote))]),t._v(" "),s("i",{staticClass:"fa fa-quote-right",attrs:{"aria-hidden":"true"}})])]),t._v(" "),s("div",{staticClass:"showAuthor",style:{color:this.color}},[s("div",{staticClass:"author"},[t._v("－"+t._s(t.author))])]),t._v(" "),s("a",{staticClass:"wx",style:{backgroundColor:this.color},attrs:{title:"分享到微信(未实装)"}},[s("i",{staticClass:"fa fa-weixin",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("a",{staticClass:"qq",style:{backgroundColor:this.color},attrs:{title:"分享到QQ(未实装)"}},[s("i",{staticClass:"fa fa-qq",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("button",{staticClass:"newone",style:{backgroundColor:this.color},on:{click:function(e){t.newone(),t.changeColor()}}},[t._v("换一句")])])])])},staticRenderFns:[]};var g=s("VU/8")(w,k,!1,function(t){s("SxEI")},"data-v-66341087",null).exports,y=s("mtWM"),x={name:"bulletScreen",data:function(){return{imgUrl:"",switchVal:!0,iptVal:"",arrIpt:[],arrTopIpt:[],arrBottomIpt:[],color:"#ffffff",predefineColors:["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","hsv(51, 100, 98)","hsl(181, 100%, 37%)","#000000"],size:"2.5rem",radio1:"normal",radio2:"scroll"}},created:function(){this.getImage()},methods:{getImage:function(){var t=this;y({method:"get",url:"https://open.saintic.com/api/bingPic/"}).then(function(e){t.imgUrl=e.request.responseURL}).catch(function(t){console.log(t)})},sendBullet:function(){if(""==this.iptVal)this.$notify.info({title:"",message:"请输入内容再发送哟",position:"bottom-right",duration:2e3,offset:60});else if("scroll"==this.radio2){var t=Math.floor(10*Math.random()),e={msg:this.iptVal,top:t,fcolor:this.color,fsize:this.size};this.arrIpt.push(e),this.iptVal=""}else if("top"==this.radio2){var s=Math.floor(5*Math.random()),a={msg:this.iptVal,top:s,fcolor:this.color,fsize:this.size};this.arrTopIpt.push(a),this.iptVal=""}else if("bottom"==this.radio2){var i=Math.floor(5*Math.random()),r={msg:this.iptVal,top:i,fcolor:this.color,fsize:this.size};this.arrBottomIpt.push(r),this.iptVal=""}},changeStatus:function(t){0==t&&(this.arrIpt=[],this.arrTopIpt=[],this.arrBottomIpt=[])},changeRadio1:function(t){this.size="small"==t?"1.5rem":"2.5rem"}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"bulletScreen"}},[s("div",{staticClass:"justBlank"}),t._v(" "),s("div",{staticClass:"screenArea",style:{background:"url("+this.imgUrl+") no-repeat center center"}},[t.switchVal?s("div",{staticClass:"scrollBullet"},t._l(t.arrIpt,function(e,a){return s("span",{key:a,staticClass:"scrollLeft",style:{top:e.top+"rem",color:e.fcolor,fontSize:e.fsize}},[t._v("\n        "+t._s(e.msg)+"\n      ")])}),0):t._e(),t._v(" "),t.switchVal?s("div",{staticClass:"topBullet"},t._l(t.arrTopIpt,function(e,a){return s("span",{key:a,staticClass:"top",style:{top:e.top+"rem",color:e.fcolor,fontSize:e.fsize}},[t._v("\n        "+t._s(e.msg)+"\n      ")])}),0):t._e(),t._v(" "),t.switchVal?s("div",{staticClass:"bottomBullet"},t._l(t.arrBottomIpt,function(e,a){return s("span",{key:a,staticClass:"bottom",style:{top:e.top+"rem",color:e.fcolor,fontSize:e.fsize}},[t._v("\n        "+t._s(e.msg)+"\n      ")])}),0):t._e()]),t._v(" "),s("div",{staticClass:"sendBullet"},[s("el-row",[s("el-col",{attrs:{span:4}},[s("el-switch",{staticClass:"elSwitch",attrs:{"active-color":"#409EFF","inactive-color":"#A8A8A8","active-text":"弹幕"},on:{change:t.changeStatus},model:{value:t.switchVal,callback:function(e){t.switchVal=e},expression:"switchVal"}})],1),t._v(" "),s("el-col",{attrs:{span:1}},[s("el-dropdown",{attrs:{placement:"bottom","hide-on-click":!1,trigger:"click"}},[s("span",{staticClass:"el-dropdown-link"},[s("i",{staticClass:"fa fa-font",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{disabled:""}},[t._v("字 号")]),t._v(" "),s("el-radio-group",{attrs:{size:"medium"},on:{change:t.changeRadio1},model:{value:t.radio1,callback:function(e){t.radio1=e},expression:"radio1"}},[s("el-radio-button",{attrs:{label:"normal"}},[s("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}}),t._v(" 标准")]),t._v(" "),s("el-radio-button",{attrs:{label:"small"}},[s("i",{staticClass:"fa fa-search-minus",attrs:{"aria-hidden":"true"}}),t._v(" 小")])],1),t._v(" "),s("el-dropdown-item",{attrs:{disabled:"",divided:""}},[t._v("模 式")]),t._v(" "),s("el-radio-group",{attrs:{size:"medium"},model:{value:t.radio2,callback:function(e){t.radio2=e},expression:"radio2"}},[s("el-radio-button",{attrs:{label:"scroll"}},[s("i",{staticClass:"fa fa-long-arrow-left",attrs:{"aria-hidden":"true"}}),t._v(" 滚动")]),t._v(" "),s("el-radio-button",{attrs:{label:"top"}},[s("i",{staticClass:"fa fa-sort-asc",attrs:{"aria-hidden":"true"}}),t._v(" 顶部")]),t._v(" "),s("el-radio-button",{attrs:{label:"bottom"}},[s("i",{staticClass:"fa fa-sort-desc",attrs:{"aria-hidden":"true"}}),t._v(" 底部")])],1)],1)],1)],1),t._v(" "),s("el-col",{attrs:{span:2}},[s("el-color-picker",{staticClass:"colorChooser",attrs:{"show-alpha":"",predefine:t.predefineColors,size:"mini"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1),t._v(" "),s("el-col",{attrs:{span:12}},[s("el-input",{staticClass:"ipt",attrs:{type:"text",placeholder:"说点什么?"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendBullet(e)}},model:{value:t.iptVal,callback:function(e){t.iptVal=e},expression:"iptVal"}})],1),t._v(" "),s("el-col",{attrs:{span:3}},[s("el-button",{staticClass:"send",attrs:{type:"primary"},on:{click:t.sendBullet}},[t._v("发送")])],1)],1)],1)])},staticRenderFns:[]};var B=s("VU/8")(x,S,!1,function(t){s("m6jB")},"data-v-49594c46",null).exports,M=s("fZjL"),D=s.n(M),T=s("hU7x"),V={name:"searchWiki",data:function(){return{input:"",list:[]}},methods:{getWiki:function(t){var e=this;T("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=20&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+t,null,function(t,s){if(t)console.error(t.message);else if(void 0==s.query)e.$notify.info({title:"",message:"在wiki未找到相关内容",position:"top-right",duration:2e3,offset:80});else{var a=D()(s.query.pages).map(function(t,e){return{key:t,value:s.query.pages[t]}});e.list=a,e.$refs.sb.className="afterSearch"}})},search:function(t){""==t||""==t.trim()?this.$notify.info({title:"",message:"请输入搜索的内容",position:"top-left",duration:2e3,offset:80}):this.getWiki(t)}}},E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"search"}},[s("el-container",[s("el-main",{staticClass:"main"},[s("div",{ref:"sb",staticClass:"searchBar"},[s("el-input",{staticClass:"ipt",attrs:{placeholder:"Search Wikipedia"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(t.input)}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),s("el-button",{staticClass:"sBtn",attrs:{type:"primary"},on:{click:function(e){return t.search(t.input)}}},[s("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Special:Random",target:"_blank"}},[s("el-button",{attrs:{round:"",size:"small"}},[t._v("\n              random article\n          ")])],1)],1),t._v(" "),s("ul",{staticClass:"showArticle"},t._l(t.list,function(e,a){return s("li",{staticClass:"article"},[s("a",{attrs:{href:"https://en.wikipedia.org/?curid="+e.key,target:"_blank"}},[s("h2",[t._v(t._s(e.value.title))]),t._v(" "),s("p",[t._v("\n                "+t._s(e.value.extract)+"\n              ")])])])}),0)])],1)],1)},staticRenderFns:[]};var I=s("VU/8")(V,E,!1,function(t){s("hy+4")},"data-v-0f4a91b0",null).exports,O=s("u2SD"),$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"calc"}},[s("div",{staticClass:"main"},[s("div",{staticClass:"inside"},[t._m(0),t._v(" "),s("div",{staticClass:"monitor"},[s("p",[t._v(t._s(t.strShow)+t._s(t.lastShow))]),t._v(" "),s("p",[t._v(t._s(t.result)+t._s(t.lastResult))])]),t._v(" "),s("div",{staticClass:"press"},[s("div",{staticClass:"colDiv"},[s("button",{staticClass:"rowBtn",attrs:{value:"7"},on:{click:function(e){return t.btnClick()}}},[t._v("7")]),t._v(" "),s("button",{staticClass:"rowBtn",attrs:{value:"8"},on:{click:function(e){return t.btnClick()}}},[t._v("8")]),t._v(" "),s("button",{staticClass:"rowBtn",attrs:{value:"9"},on:{click:function(e){return t.btnClick()}}},[t._v("9")]),t._v(" "),s("button",{staticClass:"rowBtn",attrs:{value:"*"},on:{click:function(e){return t.btnClick()}}},[t._v("*")]),t._v(" "),s("button",{staticClass:"delBtn",attrs:{value:"delAll"},on:{click:function(e){return t.btnClick()}}},[t._v("AC")])]),t._v(" "),s("div",{staticClass:"colDiv"},[s("button",{staticClass:"rowBtn",attrs:{value:"4"},on:{click:function(e){return t.btnClick()}}},[t._v("4")]),t._v(" "),s("button",{staticClass:"rowBtn",attrs:{value:"5"},on:{click:function(e){return t.btnClick()}}},[t._v("5")]),t._v(" "),s("button",{staticClass:"rowBtn",attrs:{value:"6"},on:{click:function(e){return t.btnClick()}}},[t._v("6")]),t._v(" "),s("button",{staticClass:"rowBtn",attrs:{value:"/"},on:{click:function(e){return t.btnClick()}}},[t._v("/")]),t._v(" "),s("button",{staticClass:"delBtn",attrs:{value:"_"},on:{click:function(e){return t.btnClick()}}},[s("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"}})])]),t._v(" "),s("div",{staticClass:"colDiv"},[s("button",{staticClass:"rowBtn",attrs:{value:"1"},on:{click:function(e){return t.btnClick()}}},[t._v("1")]),t._v(" "),s("button",{staticClass:"rowBtn",attrs:{value:"2"},on:{click:function(e){return t.btnClick()}}},[t._v("2")]),t._v(" "),s("button",{staticClass:"rowBtn",attrs:{value:"3"},on:{click:function(e){return t.btnClick()}}},[t._v("3")]),t._v(" "),s("button",{staticClass:"rowBtn",attrs:{value:"-"},on:{click:function(e){return t.btnClick()}}},[t._v("-")]),t._v(" "),s("button",{staticClass:"rowBtn",attrs:{value:"("},on:{click:function(e){return t.btnClick()}}},[t._v("(")]),t._v(" "),s("button",{staticClass:"rowBtn",attrs:{value:")"},on:{click:function(e){return t.btnClick()}}},[t._v(")")])]),t._v(" "),s("div",{staticClass:"colDiv"},[s("button",{staticClass:"rowBtn",attrs:{value:"0"},on:{click:function(e){return t.btnClick()}}},[t._v("0")]),t._v(" "),s("button",{staticClass:"rowBtn",attrs:{value:"."},on:{click:function(e){return t.btnClick()}}},[t._v(".")]),t._v(" "),s("button",{staticClass:"rowBtn",attrs:{value:"π"},on:{click:function(e){return t.btnClick()}}},[t._v("π")]),t._v(" "),s("button",{staticClass:"rowBtn",attrs:{value:"+"},on:{click:function(e){return t.btnClick()}}},[t._v("+")]),t._v(" "),s("button",{staticClass:"eqBtn",attrs:{value:"="},on:{click:function(e){return t.btnClick()}}},[t._v("=")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("i",{staticClass:"fa fa-calculator",attrs:{"aria-hidden":"true"}}),this._v("\n\t\t\t\tCalculator Basic\n\t\t\t")])}]};var q=function(t){s("BD8V")},F=s("VU/8")(O.a,$,!1,q,"data-v-cc50448e",null).exports,N={data:function(){return{doNum:25,restNum:5,showWord:"专注",showTime:"",timer:null,btnValue:'<i class="fa fa-play" aria-hidden="true"></i> 开始',btnType:"success",ifDis:!1,numDis:!1}},mounted:function(){this.formatTime()},beforeDestroy:function(){clearInterval(this.timer),this.timer=null},methods:{reset:function(){this.doNum=25,this.formatTime(),this.restNum=5,this.showWord="专注",clearInterval(this.timer),this.timer=null,this.btnValue='<i class="fa fa-play" aria-hidden="true"></i> 开始',this.btnType="success",this.ifDis=!1,this.numDis=!1,this.$refs.tomato.style.border="2px solid #67c23a"},handleChange:function(t){null!==this.timer?this.numDis=!0:(this.numDis=!1,this.doNum=t,this.formatTime())},handleChangeR:function(t){this.restNum=t,null!==this.timer?this.numDis=!0:(this.numDis=!1,this.restNum=t)},formatTime:function(){var t=60*this.doNum;if(t>0){var e=Math.floor(t/60),s=Math.floor(t%60);s<10&&(s="0"+s),this.showTime=e+":"+s}},toSeconds:function(t){var e=t.split(":");return 60*e[0]+1*e[1]},restFn:function(){this.$refs.tomato.style.border="2px solid #f56c6c",this.showWord="休息",this.ifDis=!0,this.btnType="";var t=60*this.restNum,e=this;this.timer=setInterval(function(){if(t>=0){var s=Math.floor(t/60),a=Math.floor(t%60);a<10&&(a="0"+a),e.showTime=s+":"+a,t--}else t<0&&(clearInterval(e.timer),e.timer=null,e.$refs.tomato.style.border="2px solid #67c23a",e.showWord="专注",e.ifDis=!1,e.btnType="success",e.btnValue='<i class="fa fa-play" aria-hidden="true"></i> 开始',e.handleChange(e.doNum),e.handleChangeR(e.restNum),e.$refs.audio2.play(),e.$message({showClose:!0,message:"一个番茄时间(或自定义时间)结束了，您可以开始新的番茄时间",type:"success"}))},1e3)},startOrStop:function(){if(null!=this.timer)clearInterval(this.timer),this.timer=null,this.showWord="暂停中",this.btnType="success",this.btnValue='<i class="fa fa-play" aria-hidden="true"></i> 开始';else if(this.toSeconds(this.showTime)!=60*this.doNum){this.showWord="专注",this.btnType="danger",this.btnValue='<i class="fa fa-stop-circle-o" aria-hidden="true"></i> 暂停';var t=this.toSeconds(this.showTime),e=this;this.timer=setInterval(function(){if(t>=0){var s=Math.floor(t/60),a=Math.floor(t%60);a<10&&(a="0"+a),e.showTime=s+":"+a,t--}else t<0&&(clearInterval(e.timer),e.timer=null,e.formatTime(),e.$refs.audio1.play(),e.$message({showClose:!0,message:"专注时间结束，进入休息时间"}),e.restFn())},1e3)}else{this.showWord="专注",this.btnType="danger",this.btnValue='<i class="fa fa-stop-circle-o" aria-hidden="true"></i> 暂停';var s=60*this.doNum,a=this;this.timer=setInterval(function(){if(s>=0){var t=Math.floor(s/60),e=Math.floor(s%60);e<10&&(e="0"+e),a.showTime=t+":"+e,s--}else s<0&&(clearInterval(a.timer),a.timer=null,a.formatTime(),a.$refs.audio1.play(),a.$message({showClose:!0,message:"专注时间结束，进入休息时间"}),a.restFn())},1e3)}}}},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"timeout"}},[a("div",{staticClass:"controls"},[a("div",[t._m(0),t._v(" "),a("el-input-number",{staticClass:"ipt1",attrs:{size:"mini",step:1,min:1,max:50,"step-strictly":"",disabled:t.numDis},on:{change:t.handleChange},model:{value:t.doNum,callback:function(e){t.doNum=e},expression:"doNum"}})],1),t._v(" "),a("div",[t._m(1),t._v(" "),a("el-input-number",{staticClass:"ipt2",attrs:{size:"mini",step:1,min:1,max:10,"step-strictly":"",disabled:t.numDis},on:{change:t.handleChangeR},model:{value:t.restNum,callback:function(e){t.restNum=e},expression:"restNum"}})],1)]),t._v(" "),a("div",{ref:"tomato",staticClass:"tomato",staticStyle:{border:"2px solid #67c23a"},attrs:{title:"通常来说, 一个番茄时间包含两个部分: 25分钟的专注时间和5分钟的休息时间。"}},[a("div",[t._v(t._s(t.showWord))]),t._v(" "),a("div",[t._v(t._s(t.showTime))])]),t._v(" "),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:t.btnType,disabled:t.ifDis},domProps:{innerHTML:t._s(t.btnValue)},on:{click:t.startOrStop}},[t._v(t._s(t.btnValue))]),t._v(" "),a("el-button",{attrs:{type:"info"},on:{click:t.reset}},[a("i",{staticClass:"fa fa-repeat",attrs:{"aria-hidden":"true"}}),t._v(" 重置")])],1),t._v(" "),a("audio",{ref:"audio1",attrs:{id:"audio1"}},[a("source",{attrs:{src:s("9dHI"),type:"audio/mpeg"}})]),t._v(" "),a("audio",{ref:"audio2",attrs:{id:"audio2"}},[a("source",{attrs:{src:s("9Smp"),type:"audio/mpeg"}})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("专注时间"),e("span",[this._v("(分钟)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("休息时间"),e("span",[this._v("(分钟)")])])}]};var P=s("VU/8")(N,R,!1,function(t){s("O7Yk")},"data-v-07f2492f",null).exports;a.default.use(o.a);var W=new o.a({routes:[{path:"/",name:"swiper",component:f,meta:{title:"首页"}},{path:"/about",name:"about",component:p,meta:{title:"关于"}},{path:"/tools",name:"tools",redirect:"/tools/quote",component:b,children:[{path:"quote",name:"quote",component:g,meta:{title:"每日一言"}},{path:"bulletScreen",name:"bulletScreen",component:B,meta:{title:"弹幕"}},{path:"searchWiki",name:"searchWiki",component:I,meta:{title:"搜索"}},{path:"calc",name:"calc",component:F,meta:{title:"计算器"}},{path:"timeout",name:"timeout",component:P,meta:{title:"番茄计时"}}]}]}),A=s("zL8q"),U=s.n(A);s("tvR6");a.default.use(U.a),a.default.use(l.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:W,components:{App:r},template:"<App/>"}),W.beforeEach(function(t,e,s){t.meta.title&&(document.title=t.meta.title),s()})},O7Yk:function(t,e){},SxEI:function(t,e){},dE1y:function(t,e,s){t.exports=s.p+"static/img/1.b12e27f.jpg"},e0XP:function(t,e){},"hy+4":function(t,e){},iCB0:function(t,e,s){t.exports=s.p+"static/img/3.e38684c.jpg"},m6jB:function(t,e){},oPmM:function(t,e){},tvR6:function(t,e){},u2SD:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_animate_css__=__webpack_require__("oPmM"),__WEBPACK_IMPORTED_MODULE_0_animate_css___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_animate_css__),__WEBPACK_IMPORTED_MODULE_1_font_awesome_css_font_awesome_min_css__=__webpack_require__("e0XP"),__WEBPACK_IMPORTED_MODULE_1_font_awesome_css_font_awesome_min_css___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_font_awesome_css_font_awesome_min_css__);__webpack_exports__.a={data:function(){return{strShow:"",result:"",lastShow:"",lastResult:""}},methods:{btnClick:function btnClick(e){if("delAll"==event.currentTarget.value)this.strShow="",this.result="",this.lastShow="",this.lastResult="";else{if("="==event.currentTarget.value&&""!=this.lastShow&&""!=this.lastResult||"="==event.currentTarget.value&&""==this.lastShow&&""==this.lastResult&&""==this.strShow&&""==this.result)return;this.lastShow="";var iptVal=event.currentTarget.value;if("_"==event.currentTarget.value)this.strShow=this.strShow.substring(0,this.strShow.length-1);else if(this.strShow+=iptVal,"="==iptVal){this.lastResult="";var havePi="";this.strShow.indexOf("π")>-1?(havePi=this.strShow,this.strShow=this.strShow.replace(/π/g,"Math.PI"),this.lastShow=havePi):this.lastShow=this.strShow;try{if(void 0==eval(this.strShow.substring(0,this.strShow.indexOf("=")))||NaN==eval(this.strShow.substring(0,this.strShow.indexOf("=")))||null==eval(this.strShow.substring(0,this.strShow.indexOf("="))))return;this.result=eval(this.strShow.substring(0,this.strShow.indexOf("="))),this.lastResult=this.result}catch(t){this.$message({showClose:!0,message:"请检查您的算式",type:"error"})}this.result="",this.strShow=""}}}}}},xu0c:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b2f3aa42113bf5e625dc.js.map