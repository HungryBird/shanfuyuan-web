<template>
	<view class="content" @touchstart="tStart" @touchmove="tMove">
		<view class="top">
			<view class="gods">
				<view class="god" ref="god" v-for="(god, index) in gods" :key="god.url" :class="{scaleImg: index === activeIndex}" @click="clickGod(index)">
					<img :src="god.img + '_' + (index === activeIndex ? '1' + '.png' : '0' + '.png')" />
					<img :src="god.pname" v-if="index === activeIndex" />
				</view>
			</view>
		</view>
		<button class="custom-btn" @click="ownBuddha" v-if="!ownBuddhaing">确 定</button>
		<view class="bottom">
			<img src="../../static/img/simiaofaguang.png" class="light" />
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
				ownBuddhaing: false,
				startPageX: 0,
				endPageX: 0,
				activeIndex: 0,
				gods: [
					{
						id: 4,
						is_own: 0,
						img: '../../static/img/gods/caishen',
						pname: '../../static/img/gods/wulucaishen.png'
					},
					{
						id: 6,
						is_own: 0,
						img: '../../static/img/gods/guangong',
						pname: '../../static/img/gods/guangong.png'
					},
					{
						id: 3,
						is_own: 0,
						img: '../../static/img/gods/guanyin',
						pname: '../../static/img/gods/guanyin.png'
					},
					{
						id: 2,
						is_own: 0,
						img: '../../static/img/gods/milefo',
						pname: '../../static/img/gods/milefo.png'
					},
					{
						id: 1,
						is_own: 0,
						img: '../../static/img/gods/rulai',
						pname: '../../static/img/gods/shijiamoni.png'
					},
					{
						id: 5,
						is_own: 0,
						img: '../../static/img/gods/yaoshifo',
						pname: '../../static/img/gods/yaoshifo.png'
					},
				],
				posXY: [],
			}
		},
		onLoad() {
			this.buddhalist();
		},
		mounted() {
			// 计算位置
			this.calcuPos();
		},
		methods:{
			// 请神回家
			ownBuddha() {
				this.ownBuddhaing = true;
				const buddha_id = this.gods[this.activeIndex].id;
				this.$store.commit('choiceGod', this.gods[this.activeIndex]);
				ownBuddha({buddha_id}).then(res => {
					if (res.code === 1) {
						setTimeout(() => {
							this.$store.commit('choiceGod', this.gods[this.activeIndex]);
							uni.navigateTo({
								url: '../pray/pray'
							})
						}, 200)
					}
					this.$msg(res.msg);
					this.ownBuddhaing = false;
				})
			},
			// 获取佛的种类
			buddhalist() {
				const picDict = {
					1: {
						img: '../../static/img/gods/rulai',
						pname: '../../static/img/gods/shijiamoni.png'
					},
					2: {
						img: '../../static/img/gods/milefo',
						pname: '../../static/img/gods/milefo.png'
					},
					3: {
						img: '../../static/img/gods/guanyin',
						pname: '../../static/img/gods/guanyin.png'
					},
					4: {
						img: '../../static/img/gods/caishen',
						pname: '../../static/img/gods/wulucaishen.png'
					},
					5: {
						img: '../../static/img/gods/yaoshifo',
						pname: '../../static/img/gods/yaoshifo.png'
					},
					6: {
						img: '../../static/img/gods/guangong',
						pname: '../../static/img/gods/guangong.png'
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
				var total = 6,
				coords = {},
				diam,radius1,radius2,imgW,radius;
				diam = windowWidth;
				var radius = diam / 2,
				imgW = windowWidth/4,
				radius2 = radius - imgW;
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
				this.activeIndex = index;
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
	.custom-btn{
		position: absolute;
		left: 50%;
		bottom: 60upx;
		transform: translate(-50%, 0);
		z-index: 99999;
	}
	.content{
		background: url(../../static/img/beijingtu.png);
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
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
					&:nth-child(2){
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, 40%);
						width: 100%;
						height: auto;
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
			animation: scaleLight 2s;
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
	@keyframes scaleLight
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
</style>
