<template>
	<view class="jide">
		<nav-bar title="积德"></nav-bar>
		<view class="jide-main" :style="{height: middleHeight + 'px'}">
			<view class="top">
				<view class="temple bei" @click="goTemple(temples.bei.id)">
					<view class="pic">
						<img :src="temples.bei.pic" />
					</view>
					<view class="position-font">
						<img src="../../static/img/jide/bei.png" />
					</view>
					<view class="name">
						{{ temples.bei.name }}
					</view>
				</view>
			</view>
			<view class="middle">
				<view class="temple xi" @click="goTemple(temples.xi.id)">
					<view class="pic">
						<img :src="temples.xi.pic" />
					</view>
					<view class="position-font">
						<img src="../../static/img/jide/xi.png" />
					</view>
					<view class="name">
						{{ temples.xi.name }}
					</view>
				</view>
				<view class="temple zhong" @click="goTemple(temples.zhong.id)">
					<view class="pic">
						<img :src="temples.zhong.pic" />
					</view>
					<view class="position-font">
						<img src="../../static/img/jide/zhong.png" />
					</view>
					<view class="name">
						{{ temples.zhong.name }}
					</view>
				</view>
				<view class="temple dong" @click="goTemple(temples.dong.id)">
					<view class="pic">
						<img :src="temples.dong.pic" />
					</view>
					<view class="position-font">
						<img src="../../static/img/jide/dong.png" />
					</view>
					<view class="name">
						{{ temples.dong.name }}
					</view>
				</view>
			</view>
			<view class="bottom">
				<view class="temple nan" @click="goTemple(temples.nan.id)">
					<view class="pic">
						<img :src="temples.nan.pic" />
					</view>
					<view class="position-font">
						<img src="../../static/img/jide/nan.png" />
					</view>
					<view class="name">
						{{ temples.nan.name }}
					</view>
				</view>
			</view>
			<button class="custom-btn" @click="goSuanming">大师算命</button>
		</view>
		<tab-bar :active="3"></tab-bar>
		<custom-mask ref="mask" class="tatus-mask">
			<view class="result-wrap" @click.stop="doNomre">
				<view class="top">
					供奉
				</view>
				<view class="result">
					<view v-if="status.check_status === 0">{{ status.desc }}</view>
					<view v-if="status.check_status === -1">请您先算命</view>
					<view class="confirm-text" v-else-if="status.check_status === 1">
						<view>施主，大师帮您算出您该祭拜的方向为</view>
						<view>
							<text class="position-bei position" v-if="status.position === '北'">北</text>
							<text class="position-dong position" v-if="status.position === '东'">东</text>
							<text class="position-nan position" v-if="status.position === '南'">南</text>
							<text class="position-xi position" v-if="status.position === '西'">西</text>
							<text class="position-zhong position" v-if="status.position === '中'">中</text>
							<text>{{ status.desc }}，</text>
							<text>{{ status.temple }}</text>
						</view>
					</view>
				</view>
				<view class="btn-wrap">
					<button class="custom-btn" @click="$refs.mask.close()">确定</button>
				</view>
			</view>
		</custom-mask>
	</view>
</template>

<script>
	import tabBar from '../../components/tab-bar.vue'
	import navBar from '../../components/nav-bar.vue'
	import { temple } from '@/api/jide/jide.js'
	import mixins from '@/mixins/mixins.js'
	import customMask from '@/components/mask.vue'
	import { virtueOrderStatus } from '@/api/jide/jide.js'
	export default{
		components:{
			tabBar,
			navBar,
			customMask,
		},
		data() {
			return{
				temples: {
					dong: {},
					nan: {},
					xi: {},
					bei: {},
					zhong: {}
				},
				status: {
					check_status: 0,
					position: '北',
					temple: '',
					desc: '',
				},
				positionCls: {
					position: true,
					bei: status.position === '北',
					dong: status.position === '东',
					nan: status.position === '南',
					xi: status.position === '西',
					zhong: status.position === '中',
				}
			}
		},
		created() {
			// console.log(this.$store)
			this.temple();
		},
		mixins: [mixins],
		onLoad(query) {
			if(query.action === 'check') {
				this.virtueOrderStatus();
			}
		},
		methods:{
			// goTemple
			goTemple(id) {
				console.log('id: ', id);
				uni.navigateTo({
					url: `./details?id=${id}`
				})
			},
			// 判断大师算命状态
			virtueOrderStatus() {
				virtueOrderStatus().then(res => {
					if(res.code === 1) {
						this.$refs.mask.open();
					}
				})
			},
			doNomre() {
				//
			},
			goSuanming() {
				uni.navigateTo({
					url: './suanming'
				})
			},
			temple() {
				uni.showLoading()
				temple().then(res => {
					if(res.code === 1) {
						res.data.forEach(item => {
							if(item.position === '东') {
								for(const key in item) {
									this.$set(this.temples.dong, key, item[key]);
								}
							}
							else if(item.position === '南') {
								for(const key in item) {
									this.$set(this.temples.nan, key, item[key]);
								}
							}
							else if(item.position === '西') {
								for(const key in item) {
									this.$set(this.temples.xi, key, item[key]);
								}
							}
							else if(item.position === '北') {
								for(const key in item) {
									this.$set(this.temples.bei, key, item[key]);
								}
							}
							else if(item.position === '中') {
								for(const key in item) {
									this.$set(this.temples.zhong, key, item[key]);
								}
							}
						})
					}
					else {
						this.$msg(res.msg);
					}
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="scss">
	.confirm-text{
		text-align: center;
	}
	.jide{
		width: 100%;
		.jide-main{
			margin-top: 40px;
			overflow-y: auto;
			box-sizing: border-box;
			padding: 20upx;
			text-align: center;
			background-image: url('../../static/img/beijingtuan.png');
			background-size: cover;
			background-position: center top;
			.top{
				display: flex;
				justify-content: center;
				margin: 30upx 0;
			}
			.middle{
				display: flex;
				justify-content: space-between;
				margin-bottom: 30upx;
			}
			.bottom{
				display: flex;
				justify-content: center;
				margin-bottom: 80upx;
			}
		}
	}
	.temple{
		position: relative;
		width: 30%;
		padding: 6upx;
		border-radius: 18upx;
		.pic{
			width: 100%;
			img{
				display: block;
				width: 100%;
				min-height: 220upx;
				border-radius: 18upx;
				object-fit: cover;
			}
		}
		.name{
			text-align: center;
			width: 100%;
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
			color: #fff;
		}
	}
	.temple.bei{
		background-color: #fe6462;
	}
	.temple.xi{
		background-color: #dbb129;
	}
	.temple.zhong{
		background-color: #fd9b30;
	}
	.temple.dong{
		background-color: #73c640;
	}
	.temple.nan{
		background-color: #40bad2;
	}
	.position-font{
		position: absolute;
		left: 50%;
		top: 30%;
		transform: translate(-50%, -50%);
		width: 33.3%;
		img{
			display: block;
			width: 100%;
			object-fit: cover;
		}
	}
	.position{
		font-family: customFont;
		font-size: 36upx;
	}
	.position-bei{
		color: #fe6462;
	}
	.position-xi{
		color: #dbb129;
	}
	.position-zhong{
		color: #fe6462;
	}
	.position-nan{
		color: #40bad2;
	}
	.position-dong{
		color: #73c640;
	}
	.tatus-mask{
		.result-wrap{
			width: 90%;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			border-radius: 30upx;
			overflow: hidden;
			background-size: cover;
			background-color: #fff;
			.top{
				text-align: center;
				font-family: customFont;
				color: #fff;
				background-image: url(../../static/img/user/xiaobantou.png);
				line-height: 2;
			}
			.result{
				padding: 20upx;
				font-size: 28upx;
				margin-bottom: 40upx;
				text-align: left;
				color: #555555;
			}
			.btn-wrap{
				width: 80%;
				margin: 0 auto;
				.custom-btn{
					width: 100%;
				}
			}
		}
	}
</style>
