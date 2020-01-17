<template>
    <view class="content" :style="{'padding-bottom': paddingBottom + 'px'}">
		<view class="main">
			<view class="god">
				<img src="../../static/img/pray/dabeiguang.png" >
				<img :src="godDict[god.id]['img']"  />
			</view>
			<view class="cushion-wrap">
				<view class="person" v-if='praying'>
					<img :src="animation.person" />
				</view>
				<view class="cushion" @click="goPray">
					<img src="../../static/img/pray/guidian.png" />
				</view>
			</view>
		</view>
		<tab-bar :active="2" ref="tab" class="tab"></tab-bar>
    </view>
</template>

<script>	
    import {
        mapState
    } from 'vuex'
	
	import tabBar from '../../components/tab-bar.vue'
	import { isEmpty, getUniStorage, getUniStorageSync } from '@/utils/util.js'

    export default {
		data() {
			return {
				praying: false,	// 是否祭拜中
				animation: {
					person: '',
				},
				paddingBottom: 0,
				godDict: {
					1: {
						img: '../../static/img/pray/gods/rulai_daxiang.png',
					},
					2: {
						img: '../../static/img/pray/gods/milefo_daxiang.png',
					},
					3: {
						img: '../../static/img/pray/gods/guanyin_daxiang.png',
					},
					4: {
						img: '../../static/img/pray/gods/daxiang.png',
					},
					5: {
						img: '../../static/img/pray/gods/yaoshifo_daxiang.png',
					},
					6: {
						img: '../../static/img/pray/gods/guangong_daxiang.png',
					}
				}
			}
		},
		components:{
			tabBar,
		},
        computed: {
			...mapState(['token', 'god']),
			godImg() {
				console.log('getUniStorageSync: ', getUniStorageSync('god'))
				return this.godDict[this.god.id]['img'];
			}
		},
        onLoad() {
			// 
        },
		onResize() {
			// this.setPaddingBottom();
		},
		onReady() {
			// this.setPaddingBottom();
		},
		methods:{
			// 设置padding-bottom
			setPaddingBottom() {
				setTimeout(() => {
					this.$nextTick(function(){
						this.paddingBottom = this.$refs.tab.$el.offsetHeight;
						console.log('this.paddingBottom: ', this.paddingBottom)
					})
				}, 0)
			},
			// 开始祭拜
			goPray() {
				if(this.praying) return;
				this.praying = true;
				// 拜了几次
				let count = 0;
				// 当前图片是哪个
				let index = 1;
				const self = this;
				let target = '../../static/img/pray/person/';
				// 填补计时器延时执行
				self.animation.person = '../../static/img/pray/person/m1.png';
				let timer = setInterval(() => {
					if(count > 2) {
						clearInterval(timer)
						self.praying = false;
						return;
					}
					// m:male, f:famle
					self.animation.person = `${target}m${index}.png`;
					if(index === 5) {
						index = 1;
						count++;
					}
					else {
						index++;
					}
				}, 350)
			}
		}
    }
</script>

<style lang="scss">
	.content{
		padding: 0;
		display: flex;
		flex-direction: column;
		.tab{
			position: relative !important;
		}
	}
	.main{
		position: relative;
		width: 100%;
		height: 100%;
		background: url(../../static/img/pray/jibaibeijing.png) no-repeat center center;
		background-size: cover;
		flex: 1;
		.god{
			position: relative;
			width: 70%;
			margin: 0 auto;
			top: 40upx;
			img{
				&:first-child{
					display: block;
					position: absolute;
					top: -80upx;
					left: 50%;
					transform: translateX(-50%);
					z-index: 0;
					animation: scaleLight 2s;
					animation-timing-function: ease-in-out;
					animation-iteration-count: infinite;
				}
				&:nth-child(2){
					position: relative;
					width: 100%;
					object-fit: cover;
					z-index: 1;
				}
			}
		}
		.cushion-wrap{
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			.person{
				position: relative;
				width: 40%;
				top: 60upx;
				z-index: 99999999;
				margin: 0 auto;
				img{
					display: block;
					width: 100%;
					object-fit: cover;
				}
			}
			.cushion{
				width: 40%;
				margin: 0 auto;
				img{
					display: block;
					width: 100%;
					object-fit: cover;
				}
			}
		}
	}
    .hello {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .title {
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul {
        font-size: 30upx;
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul>view {
        line-height: 50upx;
    }
	@keyframes scaleLight
	{
		0{
			transform: translateX(-50%) scale(1);
		}
		50%{
			transform: translateX(-50%) scale(0.8);
		}
		100%{
			transform: translateX(-50%) scale(1);
		}
	}
</style>
