<template>
	<view class="luck">
		<nav-bar title="运势" style="position: static;"></nav-bar>
		<view class="luck-main" :style="{height: mHeight + 'px'}">
			<view class="result" v-if="hasResult">
				<view class="top">
					<img src="../../static/img/luck/shu.png" />
					<view class="text">
						{{ result.sum_up }}
					</view>
				</view>
				<view class="middle">
					<view class="module">
						<view class="banner b1">
							<view class="left">
								<view class="ts"><!-- 变形 --></view>
								<img src="../../static/img/luck/caiyun_tubiao.png" />
								<text>财运</text>
							</view>
							<button class="custom-btn" @click="ownBuddha(4)">供奉加慈</button>
						</view>
						<view class="m-content">
							{{ result.fortunes }}
						</view>
					</view>
					<view class="module">
						<view class="banner b2">
							<view class="left">
								<view class="ts"><!-- 变形 --></view>
								<img src="../../static/img/luck/caiyun_tubiao.png" />
								<text>事业</text>
							</view>
							<button class="custom-btn" @click="ownBuddha(2)">供奉加慈</button>
						</view>
						<view class="m-content">
							{{ result.cause }}
						</view>
					</view>
					<view class="module">
						<view class="banner b3">
							<view class="left">
								<view class="ts"><!-- 变形 --></view>
								<img src="../../static/img/luck/caiyun_tubiao.png" />
								<text>感情</text>
							</view>
							<button class="custom-btn" @click="ownBuddha(3)">供奉加慈</button>
						</view>
						<view class="m-content">
							{{ result.feeling }}
						</view>
					</view>
					<view class="module">
						<view class="banner b4">
							<view class="left">
								<view class="ts"><!-- 变形 --></view>
								<img src="../../static/img/luck/caiyun_tubiao.png" />
								<text>健康</text>
							</view>
							<button class="custom-btn" @click="ownBuddha(5)">供奉加慈</button>
						</view>
						<view class="m-content">
							{{ result.healthy }}
						</view>
					</view>
					<view style="width: 100%;text-align: center;">
						<button class="custom-btn" style="margin: 20upx auto;">再算一次</button>
					</view>
				</view>
			</view>
			<view class="form" v-else>
				<view class="login-form-group">
					<view class="row">
						<view class="input-row">
						    <text class="title" space="emsp">姓氏</text>
						    <input type="text" clearable focus v-model="form.fname"></input>
						</view>
						<view class="input-row">
						    <text class="title" space="emsp">名字</text>
						    <input type="text" clearable focus v-model="form.lname"></input>
						</view>
					</view>
				    <!-- <view class="input-row">
				        <text class="title" space="emsp">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</text>
				        <input type="text" clearable focus v-model="form.name" placeholder="输入姓名"></input>
				    </view>
				    <view class="input-row">
				        <text class="title" space="emsp">属&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相</text>
				        <input type="text" v-model="form.zodiac" placeholder="请输入属相"></input>
				    </view> -->
					<view class="input-row">
						<text class="title" space="emsp">公历</text>
						<view class="row">
							<picker @change="yearChange" :value="yearIndex" range-key="year" :range="yearArray">
								<input v-model="form.year" />
							</picker>年
						</view>
						<view class="row">
							<picker :disabled="!form.year" @change="monthChange" :value="monthIndex" range-key="month" :range="monthArray">
								<input :disabled="!form.year" v-model="form.month" />
							</picker>月
						</view>
						<view class="row">
							<picker :disabled="!form.year || !form.month" @change="dayChange" :value="dayIndex" range-key="day" :range="dayArray">
								<input :disabled="!form.year || !form.month" v-model="form.day" />
							</picker>日
						</view>
					</view>
					<view class="input-row">
					    <text class="title">时辰</text>
						<picker range-key="time" :value="timeIndex" @change="timeChange" :range="timeArray">
							<input type="text" v-model="form.birthTime" placeholder="请选择时辰"></input>
						</picker>
					</view>
					<view class="input-row">
						<text class="title">性别</text>
						<radio-group @change="radioChange" class="row">
							<label class="uni-list-cell uni-list-cell-pd row" v-for="item in sexs" :key="item.value">
								<view>
									<radio class="custm-radio" :value="item.value" :checked="item.value === form.sex" />
								</view>
								<view>{{item.label}}</view>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="btn-row">
				    <button type="primary" class="custom-btn" @click="fortune">确定</button>
				</view>
				<view class="bottom" v-show="hideshow">
					<img src="../../static/img/luck/bottom.png" />
				</view>
			</view>
		</view>
		<tab-bar :active="1" :fixed="true"></tab-bar>
	</view>
</template>

<script>
	let timer;
	import tabBar from '../../components/tab-bar.vue'
	import navBar from '../../components/nav-bar.vue'
	import { isEmpty } from '@/utils/util.js'
	import { fortune } from '@/api/luck/luck'
	import { ownBuddha } from '@/api/choiceGod/choiceGod.js'
	
	function getYear() {
		const date = new Date();
		const endY = date.getFullYear() + 50;
		const startY = endY - 200;
		const arr = []
		for(let i = startY; i <= endY; i++) {
			arr.push({
				year: i,
			})
		}
		return arr;
	}
	
	function initYearIndex() {
		const date = new Date();
		const year = date.getFullYear();
		const arr = getYear();
		for(let i = 0; i < arr.length; i++) {
			if(year === arr[i].year) {
				return i;
			}
		}
	}
	
	export default{
		components:{
			tabBar,
			navBar
		},
		data() {
			return{
				sexs: [
					{
						label: '男性',
						value: '1',
					},
					{
						label: '女性',
						value: '2',
					}
				],
				docmHeight: document.documentElement.clientHeight,  //默认屏幕高度
				showHeight: document.documentElement.clientHeight,   //实时屏幕高度
				hideshow:true,  //显示或者隐藏footer
				timeIndex: 0,
				yearIndex: initYearIndex(),
				monthIndex: 0,
				dayIndex: 0,
				hasResult: false,
				yearArray: getYear(),
				monthArray: [
					{month: '1'},{month: '2'},{month: '3'},{month: '4'},{month: '5'},{month: '6'},{month: '7'},{month: '8'},{month: '9'},{month: '10'},{month: '11'},{month: '12'},
				],
				dayArray: [],
				timeArray: [
					{time: '子时 23:00~01:00'},
					{time: '丑时 01:00~03:00'},
					{time: '寅时 03:00~05:00'},
					{time: '卯时 05:00~07:00'},
					{time: '辰时 07:00~09:00'},
					{time: '巳时 09:00~11:00'},
					{time: '午时 11:00~13:00'},
					{time: '未时 13:00~15:00'},
					{time: '申时 15:00~17:00'},
					{time: '酉时 17:00~19:00'},
					{time: '戌时 19:00~21:00'},
					{time: '亥时 21:00~23:00'},
				],
				form: {
					name: '',
					zodiac: '',
					brithDate: '',
					fname: '',
					lname: '',
					birthTime: '',
					year: '',
					month: '',
					day: '',
					sex: '1',
				},
				result: {
					sum_up: '',
					fortunes: '',
					cause: '',
					feeling: '',
					healthy: '',
				},
				mHeight: 0,
			}
		},
		mounted() {
			const self = this;
			this.calcuHeight();
			window.addEventListener('resize', () => {
				if(timer) {
					clearTimeout(timer);
				}
				timer = setTimeout(() => {
					self.calcuHeight();
					self.showHeight = document.body.clientHeight;
				}, 200)
			})
		},
		methods:{
			radioChange(e){
				this.form.sex = e.detail.value;
			},
			// 选择时辰
			timeChange(e) {
				const index = e.detail.value;
				this.timeIndex = index;
				this.form.birthTime = this.timeArray[index].time;
			},
			dayChange(e) {
				const index = e.detail.value;
				this.dayIndex = index;
				this.form.day = this.dayArray[index].day;
			},
			monthChange(e) {
				const index = e.detail.value;
				this.monthIndex = index;
				this.form.month = this.monthArray[index].month;
				this.form.day = '';
				this.dayIndex = 0;
			},
			yearChange(e) {
				const index = e.detail.value;
				this.yearIndex = index;
				this.form.year = this.yearArray[index].year;
				this.form.month = '';
				this.form.day = '';
				this.monthIndex = 0;
				this.dayIndex = 0;
			},
			calcuHeight() {
				const {windowHeight} = uni.getSystemInfoSync();
				this.mHeight = windowHeight - 40 - 50;
			},
			fortune() {
				if (isEmpty(this.form.name)) {
					this.$msg('请输入名字')
					return;
				}
				else if(isEmpty(this.form.zodiac)) {
					this.$msg('请输入属相')
					return;
				}
				else if(isEmpty(this.form.birth)) {
					this.$msg('请输入生辰八字')
					return;
				}
				uni.showLoading({
				    title: '算运中'
				});
				fortune(this.form).then(res => {
					if(res.code === 1) {
						uni.hideLoading();
						Object.assign(this.result, res.data);
						this.hasResult = true;
					}
					this.$msg(res.msg)
				})
			},
			ownBuddha(buddha_id) {
				uni.showLoading();
				ownBuddha({buddha_id}).then(res => {
					if (res.code === 1) {
						this.$store.commit('choiceGod', {id: buddha_id});
						uni.navigateTo({
							url: '../pray/pray'
						})
					}
					else {
						this.$msg(res.msg);
					}
					uni.hideLoading();
				})
			}
		},
		watch: {
			showHeight:function() {
			    if(this.docmHeight > this.showHeight){
			       this.hideshow = false
			    }else{
			       this.hideshow = true
			    }
			},
			'form.month': {
				handler() {
					const lastDay = new Date(this.form.year, this.form.month, 0).getDate();
					const arr = []
					for(let i = 1; i <= lastDay; i++) {
						arr.push({
							day: i,
						})
					}
					this.dayArray = arr;
				}
			}
		}
	}
</script>

<style lang="scss">
	.luck{
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		.row{
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-weight: 600;
			color: #646262;
		}
		.luck-main{
			overflow-y: auto;
			flex-grow: 1;
			flex-shrink: 1;
			.result{
				width: 100%;
				.top{
					padding: 40upx;
					display: flex;
					background: #DDDDDD;
					img{
						width: 30%;
						object-fit: contain;
						margin-right: 40upx;
					}
					.text{
						flex: 1;
						font-size: 12px;
						color: #666;
					}
				}
				.middle{
					padding: 10upx 0;
					.module{
						.b1{
							border-color: #F4C22D;
							.left{
								background-color: #F4C22D;
							}
						}
						.b2{
							border-color: #41BAD5;
							.left{
								background-color: #41BAD5;
							}
						}
						.b3{
							border-color: #FE8E8D;
							.left{
								background-color: #FE8E8D;
							}
						}
						.b4{
							border-color: #6EE587;
							.left{
								background-color: #6EE587;
							}
						}
						.banner{
							box-sizing: border-box;
							padding: 10upx 20upx 10upx 0;
							display: flex;
							justify-content: space-between;
							border-bottom: 2px solid;
							.left{
								position: relative;
								display: flex;
								align-items: center;
								margin-bottom: -10upx;
								color: #fff;
								font-family: customFont;
								.ts{
									display: block;
									position: absolute;
									left: 0;
									top: 0;
									width: 130%;
									height: 100%;
									margin-bottom: -10upx;
									background-color: inherit;
									transform: skewX(45deg);
									border-top-right-radius: 10upx;
									z-index: -1;
								}
								img{
									display: block;
									height: 60%;
									margin: 0 20upx;
								}
							}
							.custom-btn{
								margin: 0;
							}
						}
						.m-content{
							padding: 20upx;
							font-size: 14px;
							color: #777777;
						}
					}
				}
			}
			.form{
				position: relative;
				width: 100%;
				height: 100%;
				background-image: url(../../static/img/tongyongbeijing.png);
				background-position: center;
				background-size: cover;
				.bottom{
					position: fixed;
					bottom: -1%;
					left: 0;
					right: 0;
					width: 100%;
					img{
						display: block;
						width: 100%;
						object-fit: cover;
					}
				}
			}
		}
	}
	.login-form-group{
		display: flex;
		flex-direction: column;
		width: 500upx;
		margin: 0 auto;
		padding-top: 60upx;
		.input-row{
			display: flex;
			align-items: center;
			margin-bottom: 10upx;
			.title{
				width: auto;
				font-weight: 600;
				color: #646262;
				padding: 0;
				white-space: nowrap;
				&:after{
					content: ':';
				}
			}
			uni-input,uni-picker{
				flex: 1;
				line-height: 1.8rem;
				height: 1.8rem;
				text-indent: 0.8em;
				// box-shadow: 0 1px 0 0 rgba(0,0,0,.3) inset,1px 0 0 0 rgba(0,0,0,.3) inset,0 0 1px 0 rgba(0,0,0,.3) inset,0 0 0 1px rgba(0,0,0,.3) inset;
				border: 1px solid rgba(0,0,0,.1);
				font-size: 28upx;
				background-color: #ffe4ba;
				border-top-left-radius: 50upx;
				border-top-right-radius: 50upx;
				border-bottom-left-radius: 50upx;
				border-bottom-right-radius: 50upx;
			}
		}
	}
	.btn-row{
		text-align: center;
		width: 500upx;
		margin: 40upx auto;
		.custom-btn{
			width: 100%;
		}
	}
</style>
