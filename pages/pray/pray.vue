<template>
    <view class="content">
		<nav-bar :opacity="false"></nav-bar>
		<view class="main">
			<view class="god">
				<img src="../../static/img/pray/dabeiguang.png" >
				<img :src="godDict[god.id]['img']"  @click="clickGod" />
			</view>
			<view class="desk-wrap">
				<view class="pingzi img-wrap" @click="deskClick('pingzi', 3)">
					<img :src="desk.pingzi.pic" class="flower" v-if="!desk.pingzi.empty" />
					<img :src="desk.pingzi.url" />
				</view>
				<view class="zhutai img-wrap" @click="deskClick('zhutai', 2)">
					<img :src="desk.zhutai.pic" v-if="!desk.zhutai.empty" class="lazhu" />
					<img :src="desk.zhutai.url" />
				</view>
				<view class="diezi img-wrap" @click="deskClick('diezi', 5)">
					<img :src="desk.diezi.pic" class="diezi-offer" v-if="!desk.diezi.empty" />
					<img :src="desk.diezi.url" />
				</view>
				<view class="xianglu img-wrap" @click="deskClick('xianglu', 4)">
					<img :src="desk.xianglu.url" v-if="desk.xianglu.empty" />
					<img :src="desk.xianglu.offer" v-else />
				</view>
				<view class="diezi img-wrap" @click="deskClick('diezi', 5)">
					<img :src="desk.diezi.pic" class="diezi-offer" v-if="!desk.diezi.empty" />
					<img :src="desk.diezi.url" />
				</view>
				<view class="zhutai img-wrap" @click="deskClick('zhutai', 2)">
					<img :src="desk.zhutai.pic" v-if="!desk.zhutai.empty" class="lazhu"  />
					<img :src="desk.zhutai.url" />
				</view>
				<view class="pingzi img-wrap" @click="deskClick('pingzi', 3)">
					<img :src="desk.pingzi.pic" class="flower" v-if="!desk.pingzi.empty" />
					<img :src="desk.pingzi.url" />
				</view>
			</view>
			<view class="ground-wrap">
				<view class="shaoqianpen img-wrap" @click="groundClick('shaoqianpen', 1)">
					<img :src="ground.shaoqianpen.url" />
					<img :src="zhiqian.zhiqian" class="zhiqian" v-if="!ground.shaoqianpen.empty" />
					<img :src="zhiqian.fire" class="zhiqian-fire" v-if="!ground.shaoqianpen.empty" />
					<img class="gaizi" src="../../static/img/pray/goods/ground/gaizi.png" />
				</view>
				<!-- <view class="shanyuanxiang img-wrap" @click="groundClick('shanyuanxiang', 0)">
					<img :src="ground.shanyuanxiang.url" />
				</view> -->
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
					<button class="custom-btn" @click="ownBuddha(god.id)">请神佛到家</button>
				</swiper-item>
			</swiper>
		</custom-mask>
		<!-- 选择贡品 -->
		<custom-mask ref="offerMask1" class="offer-mask">
			<view class="offer-wrap">
				<view class="top">
					供奉
				</view>
				<swiper :indicator-dots="false" :display-multiple-items="3">
					<swiper-item v-for="offer in offers.t1" :key="offer.id" class="inner">
						<view class="middle" @click.stop="doNomre">
							<view class="inner" @click="createOrder(offer)">
								<img :src="offer.pic" />
								<view>{{ offer.name }}</view>
								<!-- <view>价格{{ offer.price }}￥</view> -->
								<view>供奉时间{{ offer.time }}小时</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</custom-mask>
		<custom-mask ref="offerMask2" class="offer-mask">
			<view class="offer-wrap">
				<view class="top">
					供奉
				</view>
				<swiper :indicator-dots="false" :display-multiple-items="3">
					<swiper-item v-for="offer in offers.t2" :key="offer.id" class="inner">
						<view class="middle" @click.stop="doNomre">
							<view class="inner" @click="createOrder(offer)">
								<img :src="offer.pic" style="height: 60px;object-fit: contain;" />
								<view>{{ offer.name }}</view>
								<!-- <view>价格{{ offer.price }}￥</view> -->
								<view>供奉时间{{ offer.time }}小时</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</custom-mask>
		<custom-mask ref="offerMask3" class="offer-mask">
			<view class="offer-wrap">
				<view class="top">
					供奉
				</view>
				<swiper :indicator-dots="false" :display-multiple-items="3">
					<swiper-item v-for="offer in offers.t3" :key="offer.id" class="inner">
						<view class="middle" @click.stop="doNomre">
							<view class="inner" @click="createOrder(offer)">
								<img :src="offer.pic" style="width: 50%;" />
								<view>{{ offer.name }}</view>
								<!-- <view>价格{{ offer.price }}￥</view> -->
								<view>供奉时间{{ offer.time }}小时</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</custom-mask>
		<custom-mask ref="offerMask4" class="offer-mask">
			<view class="offer-wrap">
				<view class="top">
					供奉
				</view>
				<swiper :indicator-dots="false" :display-multiple-items="3">
					<swiper-item v-for="offer in offers.t4" :key="offer.id" class="inner">
						<view class="middle" @click.stop="doNomre">
							<view class="inner" @click="createOrder(offer)">
								<img :src="offer.pic" style="width: 30%;" />
								<view>{{ offer.name }}</view>
								<!-- <view>价格{{ offer.price }}￥</view> -->
								<view>供奉时间{{ offer.time }}小时</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</custom-mask>
		<custom-mask ref="offerMask5" class="offer-mask">
			<view class="offer-wrap">
				<view class="top">
					供奉
				</view>
				<swiper :indicator-dots="false" :display-multiple-items="3">
					<swiper-item v-for="offer in offers.t5" :key="offer.id" class="inner">
						<view class="middle" @click.stop="doNomre">
							<view class="inner" @click="createOrder(offer)">
								<img :src="offer.pic" />
								<view>{{ offer.name }}</view>
								<!-- <view>价格{{ offer.price }}￥</view> -->
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
	import pData from './data.js'
	import { enshrineType, orderList, createOrder } from '@/api/pray/pray.js'
	import navBar from '@/components/nav-bar.vue'

    export default {
		components:{
			tabBar,
			uniIcons,
			customMask,
			navBar,
		},
		data() {
			return {
				// 纸钱
				zhiqian: {
					empty: true,
					fire: `${this.$pathURL}static/img/pray/goods/offer/zhiqian/fire/fire1.png`,
					zhiqian: `${this.$pathURL}static/img/pray/goods/offer/zhiqian/zhiqianer.png`,
				},
				// 是否显示选神
				curGodId: 1,	// 当前神佛的id
				showGods: true,	// 是否显示神佛
				gods: pData.gods,	// 神的种类
				praying: false,	// 是否祭拜中,
				desk: {	// 桌子上的物品
					pingzi: {
						empty: true,
						url: `${this.$pathURL}static/img/pray/goods/desk/pingzi.png`,
						pic: '',
						timer: null,
						offer: null,
						overTimer: null,
					},
					zhutai: {
						empty: true,
						url: `${this.$pathURL}static/img/pray/goods/desk/zhutai.png`,
						timer: null,
						offer: null,
						fTimer: null,
						name: '',
						pic: '',
						overTimer: null,
					},
					diezi: {
						empty: true,
						url: require('../../static/img/pray/goods/desk/diezi.png'),
						timer: null,
						offer: null,
						pic: '',
						overTimer: null,
					},
					xianglu: {
						empty: true,
						url: require('../../static/img/pray/goods/desk/xianglu.png'),
						timer: null,
						fTimer: null,
						name: '',
						offer: null,
						overTimer: null,
					}
				},
				ground: {	// 地上的物品
					shanyuanxiang: {
						empty: true,
						url: require('../../static/img/pray/goods/ground/shanyuanxiang.png'),
						timer: null,
						offer: null,
						overTimer: null,
					},
					shaoqianpen: {
						empty: true,
						url: require('../../static/img/pray/goods/ground/shaoqianpen.png'),
						timer: null,
						offer: null,
						overTimer: null,
					},
				},
				animation: {	// 动画
					person: '',
				},
				godDict: {
					1: {
						id: 1,
						name: '释迦牟尼（如来佛祖）',
						img: `${this.$pathURL}static/img/pray/gods/rulai_daxiang.png`,
					},
					2: {
						id: 2,
						name: '弥勒佛',
						img: `${this.$pathURL}static/img/pray/gods/milefo_daxiang.png`,
					},
					3: {
						id: 3,
						name: '观音大士',
						img: `${this.$pathURL}static/img/pray/gods/guanyin_daxiang.png`,
					},
					4: {
						id: 4,
						name: '五路财神',
						img: `${this.$pathURL}static/img/pray/gods/wulucaishen_daxiang.png`,
					},
					5: {
						id: 5,
						name: '药师佛',
						img: `${this.$pathURL}static/img/pray/gods/yaoshifo_daxiang.png`,
					},
					6: {
						id: 6,
						name: '关公',
						img: `${this.$pathURL}static/img/pray/gods/guangong_daxiang.png`,
					}
				},	// 根据id查找对应的神佛图片
				godImg: '',	// 选中神佛的img
				offers: {	// 贡品type: 1纸钱2烛台3装饰物4香5贡品
					t1: [],
					t2: [],
					t3: [],
					t4: [],
					t5: [],
					init: [],	// 未分组
					// t1: [],
					// t2: [],
					// t3: [],
					// t4: [],
					// t5: [],
				},
			}
		},
        computed: {
			...mapState(['token', 'god', 'user']),
			PathUrl() {
				if(process.env.NODE_ENV === 'development') {
					return '/'
				}
				else{
					return '/web/'
				}
			}
		},
        onLoad() {
			this.buddhalist();
			this.curGodId = this.god.id - 1;
        },
		mounted(){
			// 一开始就烧啊
			this.goFireZhiqian();
		},
		onShow(){
			this.orderList();
		},
		methods:{
			// 获取未烧完的贡品
			orderList() {
				this.enshrineType({}).then(res => {
					orderList().then(res => {
						const self = this;
						if(res.code === 1) {
							if (res.data.length !== 0) {
								// 遍历未燃烧完的贡品
								for(let i = 0; i < res.data.length; i++) {
									for(let j = 0; j < this.offers.init.length; j++) {
										if(res.data[i].enshrine_id === this.offers.init[j].id) {
											this.renderOffer(this.offers.init[j]);
											const type = res.data[i].enshrine_type;
											if(type === 1) {
												if(this.ground.shaoqianpen.overTimer) {
													clearTimeout(this.ground.shaoqianpen.overTimer);
												}
												this.ground.shaoqianpen.overTimer = setTimeout(() => {
													self.$msg(`${self.offers.init[j].name}供奉完毕`);
													self.ground.shaoqianpen.empty = true;
													clearTimeout(self.ground.shaoqianpen.overTimer);
													self.orderList();
												}, res.data[i].burned_time * 1000)
											}
											else if(type === 2) {
												if(this.desk.zhutai.overTimer) {
													clearTimeout(this.desk.zhutai.overTimer);
												}
												this.desk.zhutai.overTimer = setTimeout(() => {
													self.$msg(`${self.offers.init[j].name}供奉完毕`);
													self.desk.zhutai.empty = true;
													clearTimeout(self.desk.zhutai.overTimer);
													self.orderList();
												}, res.data[i].burned_time * 1000)
											}
											else if(type === 3) {
												if(this.desk.pingzi.overTimer) {
													clearTimeout(this.desk.pingzi.overTimer);
												}
												this.desk.pingzi.overTimer = setTimeout(() => {
													self.$msg(`${self.offers.init[j].name}供奉完毕`);
													self.desk.pingzi.empty = true;
													clearTimeout(self.desk.pingzi.overTimer);
													self.orderList();
												}, res.data[i].burned_time * 1000)
											}
											else if(type === 4) {
												if(this.desk.xianglu.overTimer) {
													clearTimeout(this.desk.xianglu.overTimer);
												}
												this.desk.xianglu.overTimer = setTimeout(() => {
													self.$msg(`${self.offers.init[j].name}供奉完毕`);
													self.desk.xianglu.empty = true;
													clearTimeout(self.desk.xianglu.overTimer);
													self.orderList();
												}, res.data[i].burned_time * 1000)
											}
											else if(type === 5) {
												if(this.desk.diezi.overTimer) {
													clearTimeout(this.desk.diezi.overTimer);
												}
												this.desk.diezi.overTimer = setTimeout(() => {
													self.$msg(`${self.offers.init[j].name}供奉完毕`);
													self.desk.diezi.empty = true;
													clearTimeout(self.desk.diezi.overTimer);
													self.orderList();
												}, res.data[i].burned_time * 1000)
											}
										}
									}
								}
							}
						}
					})
				})
			},
			// 防止冒泡
			doNomre() {
				// 
			},
			// 创建订单
			createOrder(offer) {
				uni.showLoading();
				const obj = {
					enshrine_id: offer.id,
					buddha_id: this.god.id,
				}
				createOrder(obj).then(res => {
					if (res.code === 1) {
						this.orderList();
					}
					else {
						this.$msg(res.msg);
					}
					uni.hideLoading();
				})
			},
			// 将贡品渲染出来
			renderOffer(offer) {
				if(offer.type === 1) {
					this.ground.shaoqianpen.empty = false;
					this.zhiqian.zhiqian = offer.pic;
					this.$refs.offerMask1.close();
				}
				else if(offer.type === 2) {
					this.desk.zhutai.empty = false;
					this.desk.zhutai.name = offer.name;
					this.goFireLazhu(offer.id);
					this.$refs.offerMask2.close();
				}
				else if(offer.type === 3) {
					this.desk.pingzi.empty = false;
					this.desk.pingzi.url = offer.pic;
					this.$refs.offerMask3.close();
				}
				else if(offer.type === 4) {
					this.desk.xianglu.empty = false;
					this.desk.xianglu.name = offer.name;
					this.goFireXiang(offer.id);
					this.$refs.offerMask4.close();
				}
				else if(offer.type === 5) {
					this.desk.diezi.empty = false;
					this.desk.diezi.pic = offer.pic;
					this.$refs.offerMask5.close();
				}
				
			},
			// 开始烧蜡烛
			goFireLazhu(id) {
				if (this.desk.zhutai.fTimer) {
					clearInterval(this.desk.zhutai.fTimer)
				}
				let target = `${this.$pathURL}static/img/pray/goods/offer/lazhu/`;
				let which = '';
				if (id === 8) {
					target += 'xiaozaizhu'
					which = 'xiaozaizhu';
				}
				else if(id === 6) {
					target += 'pinganzhu'
					which = 'pinganzhu';
				}
				else if(id === 7) {
					target += 'zengcaizhu'
					which = 'zengcaizhu';
				}
				else if(id === 11) {
					target += 'zengfuzhu'
					which = 'zengfuzhu';
				}
				else if(id === 9) {
					target += 'zengyuanzhu'
					which = 'zengyuanzhu';
				}
				else if(id === 10) {
					target += 'zhihuizhu'
					which = 'zhihuizhu';
				}
				const self = this;
				let index = 1;
				// 填补计时器延时执行
				this.desk.zhutai.pic = `${target}/${which}${index}.png`;
				this.desk.zhutai.fTimer = setInterval(() => {
					self.desk.zhutai.pic = `${target}/${which}${index}.png`;
					if(index === 3) {
						index = 1;
					}
					else {
						index++;
					}
				}, 450)
			},
			// 开始烧香
			goFireXiang(id) {
				if (this.desk.zhutai.fTimer) {
					clearInterval(this.desk.zhutai.fTimer)
				}
				let target = `${this.$pathURL}static/img/pray/goods/offer/xiang/`;
				let which = '';
				if (id === 19) {
					target += 'xiaozaixiang'
					which = 'xiaozaixiang';
				}
				else if(id === 17) {
					target += 'pinganxiang'
					which = 'pinganxiang';
				}
				else if(id === 18) {
					target += 'zengcaixiang'
					which = 'zengcaixiang';
				}
				else if(id === 22) {
					target += 'zengfuxiang'
					which = 'zengfuxiang';
				}
				else if(id === 20) {
					target += 'zengyuanxiang'
					which = 'zengyuanxiang';
				}
				else if(id === 21) {
					target += 'zhihuixiang'
					which = 'zhihuixiang';
				}
				const self = this;
				let index = 1;
				// 填补计时器延时执行
				this.desk.xianglu.offer = `${target}/${which}${index}.png`;
				this.desk.zhutai.fTimer = setInterval(() => {
					self.desk.xianglu.offer = `${target}/${which}${index}.png`;
					if(index === 3) {
						index = 1;
					}
					else {
						index++;
					}
				}, 450)
			},
			// 获取贡品
			enshrineType() {
				return new Promise(resolve => {
					enshrineType().then(res => {
						if (res.code === 1) {
							const o1 = [];
							const o2 = [];
							const o3 = [];
							const o4 = [];
							const o5 = [];
							res.data.forEach(item => {
								switch(item.type)
								{
									case 1:
										o1.push(item);
										break;
									case 2:
										o2.push(item);
										break;
									case 3:
										o3.push(item);
										break;
									case 4:
										o4.push(item);
										break;
									default:
										o5.push(item);
										return;
								}
							})
							this.offers.t1 = o1;
							this.offers.t2 = o2;
							this.offers.t3 = o3;
							this.offers.t4 = o4;
							this.offers.t5 = o5;
							this.offers.init = res.data;
							resolve();
						}
						else {
							this.$msg(res.msg);
						}
					})
				})
			},
			// 设置神
			setGod(id) {
				id = id ? id : this.god.id;
				this.godImg = this.godDict[id]['img']
			},
			// 请佛回家
 			ownBuddha(id) {
				const buddha_id = id;
				ownBuddha({buddha_id}).then(res => {
					if (res.code === 1) {
						console.log('this.gods: ', this.gods)
						
						this.$store.commit('choiceGod', this.gods[this.curGodId - 1]);
						this.$refs.swiperMask.close();
						this.setGod(id);
					}
					this.$msg(res.msg);
				})
				this.showMask = false;
				this.setGod();
			},
			// 滑动轮播
			changeSwiper(e) {
				this.curGodId = e.detail.current;
				console.log('e')
			},
			// 获取神
			buddhalist() {
				const picDict = {
					1: {
						img: `${this.$pathURL}static/img/gods/rulai`,
						pname: '${this.$pathURL}static/img/gods/shijiamoni.png'
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
			// 点击佛像
			clickGod() {
				this.$refs.swiperMask.open();
			},
			// 点击桌面物品
			deskClick(name, type) {
				this.showType = type;
				this.$refs[`offerMask${type}`].open();
			},
			// 点击地上的物品
			groundClick(name, type) {
				this.showType = type;
				if(name === 'shaoqianpen') {
					this.$refs[`offerMask${type}`].open();
				}
			},
			// 开始烧纸钱
			goFireZhiqian() {
				const self = this;
				let target = `${this.$pathURL}static/img/pray/goods/offer/zhiqian/fire/fire`;
				// 填补计时器延时执行
				this.zhiqian.fire = `${this.$pathURL}static/img/pray/goods/offer/zhiqian/fire/fire1.png`;
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
				let target = `${this.$pathURL}static/img/pray/person/`;
				const sex = this.user.sex === 1 ? 'm' : 'f';
				console.log('user: ', this.user);
				// 填补计时器延时执行
				self.animation.person = `${this.$pathURL}static/img/pray/person/${sex}1.png`;
				let timer = setInterval(() => {
					if(count > 2) {
						clearInterval(timer)
						self.praying = false;
						return;
					}
					// m:male, f:famle
					self.animation.person = `${target}${sex}${index}.png`;
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
				let targetUrl = `${this.$pathURL}static/img/pray/goods/`;
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
				const targetUrl = `${this.$pathURL}static/img/pray/goods/`;
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
						clearInterval(this.desk.xianglu.timer);
					}
				},
				immediate: true,
			},
			// 'ground.shanyuanxiang.empty': {
			// 	handler(val) {
			// 		if(val) {
			// 			this.flash('ground', 'shanyuanxiang');
			// 		}
			// 		else {
			// 			this.banFlash('ground', 'shanyuanxiang');
			// 		}
			// 	},
			// 	immediate: true,
			// },
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
					margin-top: -100upx;
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
					transform: translate(-50%, -57%);
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
					margin-top: -100upx;
				}
				img{
					display: block;
					width: 100%;
					object-fit: cover;
				}
				.lazhu{
					position: absolute;
					top: -70%;
					left: 0;
				}
				.flower{
					position: absolute;
					top: -70%;
					left: 50%;
					transform: translateX(-50%);
				}
				.diezi-offer{
					width: 100%;
					position: absolute;
					top: -50%;
					left: 50%;
					transform: translateX(-50%);
				}
				.lazhu{
					display: block;
					width: 50%;
					position: absolute;
					top: -95%;
					left: 50%;
					transform: translateX(-50%);
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
			// justify-content: space-around;
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
					transform: translate(-50%, -70%);
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
				top: 80upx;
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
