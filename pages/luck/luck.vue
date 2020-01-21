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
				    <view class="input-row">
				        <text class="title" space="emsp">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</text>
				        <input type="text" clearable focus v-model="form.name" placeholder="输入姓名"></input>
				    </view>
				    <view class="input-row">
				        <text class="title" space="emsp">属&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相</text>
				        <input type="text" v-model="form.zodiac" placeholder="请输入属相"></input>
				    </view>
					<view class="input-row">
					    <text class="title">生辰八字</text>
					    <input type="text" v-model="form.birth" placeholder="请输入生辰八字"></input>
						<!-- <picker mode="date" :value="dateIndex" @change="changeDate">
							<view v-if="!form.birth">请选择生辰八字</view>
							<view v-else>{{ form.birth }}</view>
						</picker> -->
					</view>
				</view>
				<view class="btn-row">
				    <button type="primary" class="custom-btn" @click="fortune">确定</button>
				</view>
				<view class="bottom">
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
	export default{
		components:{
			tabBar,
			navBar
		},
		data() {
			return{
				dateIndex: [0,0,0],
				hasResult: false,
				form: {
					name: '',
					zodiac: '',
					birth: '',
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
				}, 200)
			})
		},
		methods:{
			changeDate(e) {
				this.form.birth = e.detail.value;
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
		}
	}
</script>

<style lang="scss">
	.luck{
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
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
				&::after{
					content: '：';
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
