<template>
    <view class="content" :style="{'padding-bottom': paddingBottom + 'px'}">
		<view class="main">
			<view class="god">
				<img src="../../static/img/pray/dabeiguang.png" >
				<img :src="godDict[god.id]['img']"  @click="clickGod" />
			</view>
			<view class="desk-wrap">
				<view class="pingzi img-wrap" @click="deskClick('pingzi')">
					<img :src="desk.pingzi.url" />
				</view>
				<view class="zhutai img-wrap" @click="deskClick('zhutai')">
					<img :src="desk.zhutai.url" />
				</view>
				<view class="diezi img-wrap" @click="deskClick('diezi')">
					<img :src="desk.diezi.url" />
				</view>
				<view class="xianglu img-wrap" @click="deskClick('xianglu')">
					<img :src="desk.xianglu.url" />
				</view>
				<view class="diezi img-wrap" @click="deskClick('diezi')">
					<img :src="desk.diezi.url" />
				</view>
				<view class="zhutai img-wrap" @click="deskClick('zhutai')">
					<img :src="desk.zhutai.url" />
				</view>
				<view class="pingzi img-wrap" @click="deskClick('pingzi')">
					<img :src="desk.pingzi.url" />
				</view>
			</view>
			<view class="ground-wrap">
				<view class="shaoqianpen img-wrap" @click="groundClick('shaoqianpen')">
					<img :src="ground.shaoqianpen.url" />
				</view>
				<view class="shanyuanxiang img-wrap" @click="groundClick('shanyuanxiang')">
					<img :src="ground.shanyuanxiang.url" />
				</view>
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
		<view class="mask" v-show="showMask">
			<view class="mask-inner">
				<swiper :indicator-dots="false" @change="changeSwiper">
					<swiper-item v-for="(god, index) in godDict" :key="'god' + index" class="inner">
						<view class="img-wrap">
							<img :src="god.img" />
							<view class="name">
								{{ god.name }}
							</view>
						</view>
						<button class="custom-btn" @click="ownBuddha">请神佛到家</button>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<tab-bar :active="2" ref="tab" class="tab"></tab-bar>
    </view>
</template>

<script>	
    import {
        mapState
    } from 'vuex'
	import uniIcons from '../../components/uni-icons/uni-icons.vue'
	import tabBar from '../../components/tab-bar.vue'
	import { isEmpty, getUniStorage, getUniStorageSync } from '@/utils/util.js'
	import { buddhalist, ownBuddha } from '@/api/choiceGod/choiceGod.js'

    export default {
		components:{
			tabBar,
			uniIcons,
			// uniSwiperDot,
		},
		data() {
			return {
				showMask: false,
				// 是否显示选神
				curGodId: 1,
				showGods: true,
				gods: [
					{
						id: 1,
						is_own: 0,
						img: '../../static/img/gods/rulai',
						pname: '../../static/img/gods/shijiamoni.png'
					},
					{
						id: 2,
						is_own: 0,
						img: '../../static/img/gods/milefo',
						pname: '../../static/img/gods/milefo.png'
					},
					{
						id: 3,
						is_own: 0,
						img: '../../static/img/gods/guanyin',
						pname: '../../static/img/gods/guanyin.png'
					},
					{
						id: 4,
						is_own: 0,
						img: '../../static/img/gods/caishen',
						pname: '../../static/img/gods/wulucaishen.png'
					},
					{
						id: 5,
						is_own: 0,
						img: '../../static/img/gods/yaoshifo',
						pname: '../../static/img/gods/yaoshifo.png'
					},
					{
						id: 6,
						is_own: 0,
						img: '../../static/img/gods/guangong',
						pname: '../../static/img/gods/guangong.png'
					},
				],	// 神的种类
				praying: false,	// 是否祭拜中,
				desk: {
					pingzi: {
						empty: true,
						url: '../../static/img/pray/goods/desk/pingzi.png',
						timer: null,
					},
					zhutai: {
						empty: true,
						url: '../../static/img/pray/goods/desk/zhutai.png',
						timer: null,
					},
					diezi: {
						empty: true,
						url: '../../static/img/pray/goods/desk/diezi.png',
						timer: null,
					},
					xianglu: {
						empty: true,
						url: '../../static/img/pray/goods/desk/xianglu.png',
						timer: null,
					}
				},
				ground: {
					shanyuanxiang: {
						empty: true,
						url: '../../static/img/pray/goods/ground/shanyuanxiang.png',
						timer: null,
					},
					shaoqianpen: {
						empty: true,
						url: '../../static/img/pray/goods/ground/shaoqianpen.png',
						timer: null,
					},
				},
				animation: {
					person: '',
				},
				paddingBottom: 0,
				godDict: {
					1: {
						id: 1,
						name: '释迦牟尼（如来佛祖）',
						img: '../../static/img/pray/gods/rulai_daxiang.png',
					},
					2: {
						id: 2,
						name: '弥勒佛',
						img: '../../static/img/pray/gods/milefo_daxiang.png',
					},
					3: {
						id: 3,
						name: '观音大士',
						img: '../../static/img/pray/gods/guanyin_daxiang.png',
					},
					4: {
						id: 4,
						name: '五路财神',
						img: '../../static/img/pray/gods/wulucaishen_daxiang.png',
					},
					5: {
						id: 5,
						name: '药师佛',
						img: '../../static/img/pray/gods/yaoshifo_daxiang.png',
					},
					6: {
						id: 6,
						name: '关公',
						img: '../../static/img/pray/gods/guangong_daxiang.png',
					}
				},
				godImg: '',
			}
		},
        computed: {
			...mapState(['token', 'god']),
		},
        onLoad() {
			this.buddhalist();
			this.curGodId = this.god.id - 1;
        },
		mounted(){
			console.log('mounted')
			this.setGod();
			
		},
		methods:{
			setGod() {
				console.log('this.god: ', this.god)
				this.godImg = this.godDict[this.god.id]['img']
				console.log('this.godImg: ', this.godImg);
			},
 			ownBuddha(id) {
				const buddha_id = id;
				ownBuddha({buddha_id}).then(res => {
					if (res.code === 1) {
						this.$store.commit('choiceGod', this.gods[this.curGodId - 1]);
						this.showMask = false;
						this.setGod();
					}
					this.$msg(res.msg);
				})
				this.$store.commit('choiceGod', this.gods[this.curGodId]);
				this.showMask = false;
				this.setGod();
			},
			// 滑动轮播
			changeSwiper(e) {
				this.curGodId = e.detail.current;
			},
			// 获取神
			buddhalist() {
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
			// 点击佛像
			clickGod() {
				this.showMask = true;
			},
			// 点击桌面物品
			deskClick(name) {
				// 
			},
			// 点击地上的物品
			groundClick(name) {
				// 
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
			},
			// 闪烁
			flash(where, name) {
				const target = this[where][name];
				let count = 0;
				const self = this;
				let targetUrl = '../../static/img/pray/goods/';
				target.timer = setInterval(() => {
					count++;
					const status = count%2 === 1 ? `${name}_liang` : name;
					target.url = `${targetUrl}${where}/${status}.png`;
				}, 1000);
			},
			// 清除闪烁
			banFlash(name) {
				
			}
		},
		watch:{
			'desk.pingzi.empty': {
				handler(val) {
					if(val) {
						this.flash('desk','pingzi');
					}
					else {
						this.banFlash('desk','pingzi');
					}
				},
				immediate: true,
			},
			'desk.zhutai.empty': {
				handler(val) {
					if(val) {
						this.flash('desk','zhutai');
					}
					else {
						this.banFlash('desk','zhutai');
					}
				},
				immediate: true,
			},
			'desk.diezi.empty': {
				handler(val) {
					if(val) {
						this.flash('desk','diezi');
					}
					else {
						this.banFlash('desk','diezi');
					}
				},
				immediate: true,
			},
			'desk.xianglu.empty': {
				handler(val) {
					if(val) {
						this.flash('desk','xianglu');
					}
					else {
						this.banFlash('desk','xianglu');
					}
				},
				immediate: true,
			},
			'ground.shanyuanxiang.empty': {
				handler(val) {
					if(val) {
						this.flash('ground', 'shanyuanxiang');
					}
					else {
						this.banFlash('ground', 'shanyuanxiang');
					}
				},
				immediate: true,
			},
			'ground.shaoqianpen.empty': {
				handler(val) {
					if(val) {
						this.flash('ground', 'shaoqianpen');
					}
					else {
						this.banFlash('ground', 'shaoqianpen');
					}
				},
				immediate: true,
			},
		}
    }
</script>

<style lang="scss">
	.mask{
		position: fixed;
		top: calc(var(--window-top) + env(safe-area-inset-top));
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 99;
		position: fixed;
		text-align: center;
		.mask-inner{
			position: fixed;
			bottom: 0px;
			top: 0px;
			left: 0px;
			right: 0px;
			background-color: rgba(0, 0, 0, 0.4);
			transition-duration: 0.3s;
			.swiper{
				width: 100%;
				height: 100%;
			}
			uni-swiper{
				height: 100%;
			}
			.img-wrap{
				width: 70%;
				margin: 60upx auto;
				img{
					display: block;
					width: 100%;
					object-fit: cover;
				}
				.name{
					font-family: customFont;
					text-align: center;
					line-height: 3;
					background: url(../../static/img/pray/sub/shenfomingkuang.png) no-repeat 100% 100%;
					background-size: cover;
				}
			}
		}
	}
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
		.desk-wrap{
			z-index: 10;
			position: absolute;
			left: 0;
			right: 0;
			width: 100%;
			top: 55%;
			.img-wrap{
				position: absolute;
				width: 15%;
				&:first-child{
					left: 5%;
					margin-top: -80upx;
				}
				&:nth-child(2){
					left: 14%;
					margin-top: -30upx;
				}
				&:nth-child(3){
					left: 25%;
					margin-top: 50upx;
				}
				&:nth-child(4){
					width: 25%;
					left: 50%;
					transform: translateX(-50%);
				}
				&:nth-child(5){
					right: 25%;
					margin-top: 50upx;
				}
				&:nth-child(6){
					right: 14%;
					margin-top: -30upx;
				}
				&:nth-child(7){
					right: 5%;
					margin-top: -80upx;
				}
				img{
					display: block;
					width: 100%;
					object-fit: cover;
				}
			}
		}
		.ground-wrap{
			z-index: 10;
			position: absolute;
			left: 0;
			right: 0;
			width: 100%;
			bottom: 60upx;
			display: flex;
			justify-content: space-around;
			.img-wrap{
				display: block;
				width: 36%;
				img{
					display: block;
					width: 100%;
					object-fit: cover;
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
