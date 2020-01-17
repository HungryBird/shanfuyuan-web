<template>
    <view class="content">
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
					<img :src="zhiqian.zhiqian" class="zhiqian" />
					<img :src="zhiqian.fire" class="zhiqian-fire" />
					<img class="gaizi" src="../../static/img/pray/goods/ground/gaizi.png" />
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
		<!-- 选择神佛 -->
		<custom-mask ref="swiperMask" class="swiper-mask">
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
		</custom-mask>
		<!-- 选择贡品 -->
		<custom-mask ref="offerMask" class="offer-mask">
			<view class="offer-wrap">
				<!-- <view class="top">
					供奉
				</view> -->
				<swiper :indicator-dots="false" @change="changeSwiper" :display-multiple-items="3">
					<swiper-item v-for="(offer, index) in offers" :key="'offer' + index" class="inner">
						<view class="middle">
							<view class="inner">
								<img :src="offer.img" />
								<view>{{ offer.name }}</view>
								<view>供奉时间{{ offer.time }}小时</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</custom-mask>
		<tab-bar :active="2" ref="tab" class="tab"></tab-bar>
    </view>
</template>

<script>	
    import {
        mapState
    } from 'vuex'
	import uniIcons from '../../components/uni-icons/uni-icons.vue'
	import tabBar from '../../components/tab-bar.vue'
	import customMask from '../../components/mask.vue'
	import { isEmpty, getUniStorage, getUniStorageSync } from '@/utils/util.js'
	import { buddhalist, ownBuddha } from '@/api/choiceGod/choiceGod.js'
	import pData from './data.js';

    export default {
		components:{
			tabBar,
			uniIcons,
			customMask,
		},
		data() {
			return {
				// 纸钱
				zhiqian: {
					empty: true,
					fire: '../../static/img/pray/goods/供奉品/zhiqian/fire/fire1.png',
					zhiqian: '../../static/img/pray/goods/供奉品/zhiqian/zhiqianer.png',
				},
				// 是否显示选神
				curGodId: 1,	// 当前神佛的id
				showGods: true,	// 是否显示神佛
				gods: pData.gods,	// 神的种类
				praying: false,	// 是否祭拜中,
				desk: {	// 桌子上的物品
					pingzi: {
						empty: true,
						url: '../../static/img/pray/goods/desk/pingzi.png',
						timer: null,
						flower: '../../static/img/pray/goods/供奉品/pingzi/dalianhuadeng.png'
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
				ground: {	// 地上的物品
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
				animation: {	// 动画
					person: '',
				},
				godDict: pData.godDict,	// 根据id查找对应的神佛图片
				godImg: '',	// 选中神佛的img
				offers: [],	// 贡品
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
			this.setGod();
			// 一开始就烧啊
			this.goFireZhiqian();
		},
		methods:{
			setGod() {
				this.godImg = this.godDict[this.god.id]['img']
			},
 			ownBuddha(id) {
				const buddha_id = id;
				ownBuddha({buddha_id}).then(res => {
					if (res.code === 1) {
						this.$store.commit('choiceGod', this.gods[this.curGodId - 1]);
						this.$refs.swiperMask.close();
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
				this.$refs.swiperMask.open();
			},
			// 点击桌面物品
			deskClick(name) {
				this.$refs.offerMask.open();
			},
			// 点击地上的物品
			groundClick(name) {
				if(name === 'shaoqianpen') {
					this.$refs.offerMask.open();
					this.offers = pData.zhiqian;
				}
			},
			// 开始烧纸钱
			goFireZhiqian() {
				const self = this;
				let target = '../../static/img/pray/goods/供奉品/zhiqian/fire/fire';
				// 填补计时器延时执行
				this.zhiqian.fire = '../../static/img/pray/goods/供奉品/zhiqian/fire/fire1.png';
				let index = 1;
				let timer = setInterval(() => {
					self.zhiqian.fire = `${target}${index}.png`;
					if(index === 3) {
						index = 1;
					}
					else {
						index++;
					}
				}, 450)
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
			banFlash(where, name) {
				const target = this[where][name];
				clearInterval(target.timer);
				const targetUrl = '../../static/img/pray/goods/';
				target.url = `${targetUrl}${where}/${name}.png`;
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

<style lang="scss" scoped>
	.offer-mask{
		.offer-wrap{
			position: absolute;
			bottom: 20upx;
			left: 20upx;
			right: 20upx;
			border-radius: 30upx;
			overflow: hidden;
			background-image: url(../../static/img/pray/sub/gongfengkuang.png);
			background-size: cover;
			.top{
				text-align: center;
				font-family: customFont;
				color: #fff;
				background-image: url(../../static/img/user/xiaobantou.png);
				line-height: 2;
			}
			.middle{
				display: flex;
				height: 100%;
				text-align: center;
				color: #fff;
				font-size: 12px;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.inner{
					img{
						display: block;
						width: 70%;
						margin: 0 auto;
						object-fit: cover;
					}
				}
			}
		}
	}
	.swiper-mask{
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
				position: relative;
				display: block;
				width: 36%;
				img{
					display: block;
					width: 100%;
					object-fit: cover;
				}
				.gaizi{
					position: absolute;
					top: 0;
					left: 0;
					bottom: 0;
					width: 100%;
					height: 100%;
					z-index: 3;
				}
				.zhiqian{
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
					width: 70%;
					z-index: 1;
				}
				.zhiqian-fire{
					position: absolute;
					left: 50%;
					top: 20%;
					transform: translate(-50%, -50%);
					width: 80%;
					z-index: 3;
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
