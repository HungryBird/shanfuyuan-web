<template>
	<view class="content" @touchstart="tStart" @touchmove="tMove">
		<view class="top">
			<view class="gods">
				<view class="god" ref="god" v-for="(god, index) in gods" :key="god.url" 
				:class="{scaleImg: index === activeIndex, 'go-down': index === activeIndex && flying}" @click="clickGod(index)">
					<img :src="god.img + '_' + (index === activeIndex ? '1' + '.png' : '0' + '.png')" />
					<view class="name-wrap" v-if="index === activeIndex && !flying">
						<img :src="god.pname" />
					</view>
					<img src="../../static/img/xuanzhongbeiguang.png" class="light" v-if="index === activeIndex" />
					<button class="choice-btn" @click="ownBuddha(index)" v-if="index === activeIndex && !flying">确 定</button>
				</view>
			</view>
		</view>
		<view class="bottom">
			<img src="../../static/img/simiaofaguang.png" class="light" v-if="into" />
			<image src="../../static/img/simiao.png" mode="widthFix" class="temple"></image>
		</view>
	</view>
</template>

<script>
	import { buddhalist, ownBuddha } from '@/api/choiceGod/choiceGod.js'
	let timer;
	export default{
		data() {
			return {
				innerAudioContext: null,
				into: false,
				flying: false,
				ownBuddhaing: false,
				startPageX: 0,
				endPageX: 0,
				activeIndex: 0,
				gods: [
					{
						id: 4,
						is_own: 0,
						img: `${this.$pathURL}static/img/gods/caishen`,
						pname: `${this.$pathURL}static/img/gods/wulucaishen.png`
					},
					{
						id: 6,
						is_own: 0,
						img: `${this.$pathURL}static/img/gods/guangong`,
						pname: `${this.$pathURL}static/img/gods/guangong.png`
					},
					{
						id: 3,
						is_own: 0,
						img: `${this.$pathURL}static/img/gods/guanyin`,
						pname: `${this.$pathURL}static/img/gods/guanyin.png`
					},
					{
						id: 2,
						is_own: 0,
						img: `${this.$pathURL}static/img/gods/milefo`,
						pname: `${this.$pathURL}static/img/gods/milefo.png`
					},
					{
						id: 1,
						is_own: 0,
						img: `${this.$pathURL}static/img/gods/rulai`,
						pname: `${this.$pathURL}static/img/gods/shijiamoni.png`
					},
					{
						id: 5,
						is_own: 0,
						img: `${this.$pathURL}static/img/gods/yaoshifo`,
						pname: `${this.$pathURL}static/img/gods/yaoshifo.png`
					},
				],
				posXY: [],
			}
		},
		onShow() {
			this.buddhalist();
			this.startPlay();
		},
		mounted() {
			// 计算位置
			this.calcuPos();
			
		},
		methods:{
			// 开始播放声音
			startPlay() {
				this.innerAudioContext = uni.createInnerAudioContext();
				this.innerAudioContext.src = '../../static/sounds/choice_god.mp3';
				this.innerAudioContext.autoplay = true;
				this.innerAudioContext.loop = true;
				this.innerAudioContext.onEnded(() => {
					
				});
				this.innerAudioContext.onPlay(() => {
					
				});
				this.innerAudioContext.onError((err) => {
					
				});
			},
			// 请神回家
			ownBuddha(index) {
				if(this.ownBuddhaing) return;
				this.ownBuddhaing = true;
				const buddha_id = this.gods[this.activeIndex].id;
				this.$store.commit('choiceGod', this.gods[this.activeIndex]);
				ownBuddha({buddha_id}).then(res => {
					if (res.code === 1) {
						this.flying = true;
						const self = this;
						setTimeout(() => {
							self.into = true;
							setTimeout(() => {
								console.log('开始没有')
								self.$store.commit('choiceGod', this.gods[this.activeIndex]);
								self.into = false;
								self.flying = false;
								self.innerAudioContext.stop();
								self.innerAudioContext = null;
								uni.navigateTo({
									url: '../pray/pray'
								})
							}, 4750)
						}, 1750)
					}
					this.ownBuddhaing = false;
				})
			},
			// 获取佛的种类
			buddhalist() {
				const picDict = {
					1: {
						img: `${this.$pathURL}static/img/gods/rulai`,
						pname: `${this.$pathURL}static/img/gods/shijiamoni.png`
					},
					2: {
						img: `${this.$pathURL}static/img/gods/milefo`,
						pname: `${this.$pathURL}static/img/gods/milefo.png`
					},
					3: {
						img: `${this.$pathURL}static/img/gods/guanyin`,
						pname: `${this.$pathURL}static/img/gods/guanyin.png`
					},
					4: {
						img: `${this.$pathURL}static/img/gods/caishen`,
						pname: `${this.$pathURL}static/img/gods/wulucaishen.png`
					},
					5: {
						img: `${this.$pathURL}static/img/gods/yaoshifo`,
						pname: `${this.$pathURL}static/img/gods/yaoshifo.png`
					},
					6: {
						img: `${this.$pathURL}static/img/gods/guangong`,
						pname: `${this.$pathURL}static/img/gods/guangong.png`
					}
				}
				buddhalist().then(res => {
					if (res.code === 1) {
						this.gods = res.data.map((item, index) => {
							for(const key in picDict) {
								if(key == item.id) {
									Object.assign(item, picDict[key]);
									break;
								}
							}
							return item;
						})
					}
					else {
						this.$msg(res.msg);
					}
				})
			},
			tStart(e) {
				this.startPageX = e.touches[0].pageX;
			},
			tMove(e) {
				if(timer) {
					clearTimeout(timer);
				}
				const self = this;
				timer = setTimeout(() => {
					self.endPageX = e.touches[0].pageX;
				}, 200)
			},
			// 计算位置
			calcuPos() {
				const { windowWidth } = uni.getSystemInfoSync();
				// 固定6张图片
				var total = 6,
				diam,radius1,radius2,imgW,radius;
				// 直径等于屏幕宽度
				diam = windowWidth;
				// 屏幕宽度的半径
				var radius = diam / 2,
				// 图片宽度等于25%屏幕宽度
				imgW = windowWidth/4,
				// 内半径
				radius2 = radius - imgW;
				// 90°
				var alpha = Math.PI / 2,
				len = 6,
				corner = 2 * Math.PI / total;
				var offsetAngle = 360 / len,
				start = 180;
				
				// 储存位置信息
				let posArr = []
				for(let i = 0; i < total; i++) {
					var rotateAngle = offsetAngle * i + len*offsetAngle/2;
					alpha = alpha - corner;
					const left = parseInt(radius - imgW / 2 + radius2 * Math.cos(alpha)) + 'px';
					const top = parseInt(radius - imgW / 2 - radius2 * Math.sin(alpha)) + 'px';
					const obj = {
						left,
						top, 
					}
					posArr.push(obj);
				}
				// 第四个面对用户
				const newArr = posArr.splice(0,2);
				this.posXY = posArr.concat(newArr);
				for(let i = 0; i < this.posXY.length; i++) {
					this.$refs.god[i].$el.style.left = this.posXY[i].left;
					this.$refs.god[i].$el.style.top = this.posXY[i].top;
				}
			},
			// 变换位置
			translatePos(val) {
				return;
				const len = this.gods.length;
				// 右划
				if(val > 0) {
					this.activeIndex = this.activeIndex === len - 1 ? 0 : ++this.activeIndex;
				}
				// 左划
				else if(val < 0){
					this.activeIndex = this.activeIndex === 0 ? len - 1 : --this.activeIndex;
				}
			},
			// 点击神
			clickGod(index) {
				if(this.flying) return;
				// this.activeIndex = index;
				const newArr = this.gods.splice(0, index);
				this.gods = this.gods.concat(newArr);
			}
		},
		watch: {
			endPageX(val) {
				this.translatePos(this.startPageX - val);
			}
		}
	}
</script>

<style lang="scss">
	.choice-btn{
		position: absolute;
		left: 50%;
		top: 110%;
		transform: translate(-50%, -50%);
		width: 80%;
		z-index: 99999;
		color: #fff;
		font-size: 28upx;
		border-top-left-radius: 60upx;
		border-top-right-radius: 60upx;
		border-bottom-left-radius: 60upx;
		border-bottom-right-radius: 60upx;
		background-image: linear-gradient(to right, rgb(235, 114, 033),  rgb(232, 172, 094));
		font-family: customFont;
		line-height: 2;
		font-size: 28upx;
	}
	.content{
		background: url(../../static/img/beijingtu.png);
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
	}
	.go-down{
		position: fixed !important;
		left: 50% !important;
		transform: translateX(-50%) !important;
		top: 80% !important;
		transition: all 1.75s !important;
		animation: fade 0.75s;
		animation-delay: 1.75s;
		animation-fill-mode: forwards;
	}
	.top{
		position: absolute;
		top: -6%;
		left: 0;
		width: 100%;
		.gods{
			position: relative;
			.god{
				position: absolute;
				width: 25%;
				uni-image{
					&:first-child{
						width: 100%;
					}
					&:nth-child(2){
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, 40%);
						width: 100%;
						height: auto;
					}
				}
				img{
					display: block;
					object-fit: cover;
					&:first-child{
						width: 100%;
					}
				}
				.light{
					position: absolute;
					left: 0;
					top: 0;
					display: block;
					height: 100%;
					width: 100%;
					margin: 0 auto;
					object-fit: cover;
					z-index: -1;
					animation: scaleLight-big 2s;
					animation-timing-function: ease-in-out;
					animation-iteration-count: infinite;
				}
				.name-wrap{
					position: absolute;
					left: 50%;
					bottom: 80upx;
					transform: translate(-50%, 0);
					width: 100%;
					height: auto;
					img{
						display: block;
						object-fit: cover;
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
					}
				}
			}
			.scaleImg{
				transform: scale(1.5);
				z-index: 9999;
				transition: all 1s;
			}
		}
	}
	.bottom{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		.light{
			display: block;
			width: 100%;
			margin: 0 auto;
			object-fit: cover;
			animation: scaleLight-small 2s;
			animation-timing-function: ease-in-out;
			animation-iteration-count: infinite;
		}
		.temple{
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
		}
	}
	@keyframes scaleLight-big
	{
		0{
			transform: scale(1);
		}
		50%{
			transform: scale(1.6);
		}
		100%{
			transform: scale(1);
		}
	}
	@keyframes scaleLight-small
	{
		0{
			transform: scale(1);
		}
		50%{
			transform: scale(1.2);
		}
		100%{
			transform: scale(1);
		}
	}
	@keyframes fade
	{
		to{
			opacity: 0;
		}
	}
</style>
