<template>
	<div id="calc">
		<div class="main">
			<div class="inside">
				<div class="title">
					<i class="fa fa-calculator" aria-hidden="true"></i>
					Calculator Basic
				</div>
				<!-- 显示结果 -->
				<div class="monitor">
					<p>{{ strShow }}{{ lastShow }}</p>
					<p>{{ result }}{{ lastResult }}</p>
				</div>
				<!-- 按钮部分,布局用display:flex -->
				<div class="press">
					<div class="colDiv">
						<button class="rowBtn" value="7" @click="btnClick()">7</button>
						<button class="rowBtn" value="8" @click="btnClick()">8</button>
						<button class="rowBtn" value="9" @click="btnClick()">9</button>
						<button class="rowBtn" value="*" @click="btnClick()">*</button>
						<button class="delBtn" value="delAll" @click="btnClick()">AC</button>
					</div>
					<div class="colDiv">
						<button class="rowBtn" value="4" @click="btnClick()">4</button>
						<button class="rowBtn" value="5" @click="btnClick()">5</button>
						<button class="rowBtn" value="6" @click="btnClick()">6</button>
						<button class="rowBtn" value="/" @click="btnClick()">/</button>
						<button class="delBtn" value="_" @click="btnClick()"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
					</div>
					<div class="colDiv">
						<button class="rowBtn" value="1" @click="btnClick()">1</button>
						<button class="rowBtn" value="2" @click="btnClick()">2</button>
						<button class="rowBtn" value="3" @click="btnClick()">3</button>
						<button class="rowBtn" value="-" @click="btnClick()">-</button>
						<button class="rowBtn" value="(" @click="btnClick()">(</button>
						<button class="rowBtn" value=")" @click="btnClick()">)</button>
					</div>
					<div class="colDiv">
						<button class="rowBtn" value="0" @click="btnClick()">0</button>
						<button class="rowBtn" value="." @click="btnClick()">.</button>
						<button class="rowBtn" value="π" @click="btnClick()">π</button>
						<button class="rowBtn" value="+" @click="btnClick()">+</button>
						<button class="eqBtn" value="=" @click="btnClick()">=</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// 有个需求未实现: 监听键盘事件 输入数字和符号
export default {
	data() {
		return {
			// 输入显示
			strShow: '',
			// 运算实际结果
			result: '',
			// 上次的输入显示
			lastShow: '',
			// 显示上次的运算结果
			lastResult: ''
		};
	},
	methods: {
		// 点击事件
		btnClick(e) {
			// console.log(e)	//undefined
			// console.log('当前点击的是 '+ event.currentTarget.value)
			// console.log('上次显示的算式 '+ this.lastShow)
			// console.log('上次显示结果 '+ this.lastResult)
			//如果连续按=号, 相当于没按
			// 有两种情况, 运算后又多按了=号. 以及 刚进来就按=号
			// debugger
			if (event.currentTarget.value == 'delAll') {
				this.strShow = '';
				this.result = '';
				this.lastShow = '';
				this.lastResult = '';
			} else {
				if (
					(event.currentTarget.value == '=' && this.lastShow != '' && this.lastResult != '') ||
					(event.currentTarget.value == '=' && this.lastShow == '' && this.lastResult == '' && this.strShow == '' && this.result == '')
				) {
					return;
				} else {
					//先把上次显示清空
					this.lastShow = '';
					// console.log(event.currentTarget.value)
					let iptVal = event.currentTarget.value;
					// 如果按了回退键位
					if (event.currentTarget.value == '_') {
						this.strShow = this.strShow.substring(0, this.strShow.length - 1);
					} else {
						//拼接字符串 显示
						this.strShow += iptVal;

						// 最后 按了等号
						if (iptVal == '=') {
							// 把上次结果清空
							this.lastResult = '';
							// 判断有没有π
							var havePi = '';
							if (this.strShow.indexOf('π') > -1) {
								havePi = this.strShow;
								this.strShow = this.strShow.replace(/π/g, 'Math.PI');
								// 显示
								this.lastShow = havePi;
							} else {
								this.lastShow = this.strShow;
							}

							// 字符串截取, 把=删了, 运算出结果
							// 如果eval()运算出错, 用try..catch..
							try {
								if (
									eval(this.strShow.substring(0, this.strShow.indexOf('='))) == undefined ||
									eval(this.strShow.substring(0, this.strShow.indexOf('='))) == NaN ||
									eval(this.strShow.substring(0, this.strShow.indexOf('='))) == null
								) {
									return;
								} else {
									this.result = eval(this.strShow.substring(0, this.strShow.indexOf('=')));
									this.lastResult = this.result;
								}
								
							} catch (error) {
								// console.log(error)
								// alert('出问题鸟')
								this.$message({
									showClose: true,
									message: '请检查您的算式',
									type: 'error'
								});
							}

							this.result = '';

							this.strShow = '';
						}
					}
				}
			}
		}
	}
};
</script>

<style scoped>
#calc {
	height: 84vh;
	box-shadow: 0 0 10px #1e1f26 inset;
	background: url('../assets/images/Deepin15_wallpaper_011.jpg') center center no-repeat fixed;
	background-size: 100% 100%;
	position: relative;
}
.main {
	background-color: #333333;
	border-radius: 5px;
	position: absolute;
	height: 90%;
	width: 60%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.inside {
	/* background-color: lightgray; */
	position: absolute;
	height: 90%;
	width: 90%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.title {
	/* background-color: blue; */
	color: white;
	font-size: 1.2rem;
	height: 4rem;
	line-height: 4rem;
}
.monitor {
	border: 2px solid black;
	background-color: #e6e6e6;
	text-align: right;
	padding: 0.5rem;
	height: 3rem;
}
.monitor p {
	margin: 0;
}
.monitor p:first-child {
	font-size: 1.3rem;
	color: darkblue;
	height: 1.3rem;
}
.monitor p:nth-child(2) {
	font-size: 1.7rem;
	color: darkred;
	height: 1.7rem;
}
.press {
	margin-top: 1rem;
	/* background-color: green; */
	height: 63%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.colDiv {
	height: 20%;
	width: 100%;
	/* background-color:yellow; */
	margin: 0.6rem 0 0;
	display: flex;
	justify-content: space-between;
}
.rowBtn {
	background-color: #191919;
	border: 1px solid black;
	border-radius: 5px;
	width: 15%;
	cursor: pointer;
	color: white;
	font-size: 1.4rem;
}
.rowBtn:hover {
	opacity: 0.7;
}
.delBtn {
	background-color: darkslategray;
	border: 1px solid black;
	border-radius: 5px;
	width: 32%;
	cursor: pointer;
	color: white;
	font-size: 1.4rem;
}
.delBtn:hover {
	opacity: 0.8;
}
.eqBtn {
	background-color: #3b8006;
	border: 1px solid black;
	border-radius: 5px;
	width: 32%;
	cursor: pointer;
	color: white;
	font-size: 1.4rem;
}
.eqBtn:hover {
	opacity: 0.8;
}
</style>
