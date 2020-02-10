<template>
	<view class="temple-detail">
		<nav-bar title="积德"></nav-bar>
		<view class="main-content">
			
			<view class="title">
				{{ name }}
				<view class="position-name">
					<view class="position-bei position" v-if="position === '北'"><img src="../../static/img/jide/bei_small.png" /></view>
					<view class="position-dong position" v-if="position === '东'"><img src="../../static/img/jide/dong_small.png" /></view>
					<view class="position-nan position" v-if="position === '南'"><img src="../../static/img/jide/nan_small.png" /></view>
					<view class="position-xi position" v-if="position === '西'"><img src="../../static/img/jide/xi_small.png" /></view>
					<view class="position-zhong position" v-if="position === '中'"><img src="../../static/img/jide/zhong_small.png" /></view>
					<view class="position-name-text">{{ position_name }}</view>
				</view>
			</view>
			<view class="video">
				<video autoplay="true" show-mute-btn="true" style="width:100%;height:200px;object-fit: fill" :src="video"></video>
			</view>
			<view v-html="desc"></view>
			
			<view class="gd-wrap" v-if="status === 1">
				<view class="gd-text">
					<view class="left">结善缘功德值</view>
					<view class="right">{{ merits_virtues }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navBar from '../../components/nav-bar.vue'
	import { templeDetail } from '@/api/jide/jide.js'
	import { virtueOrderStatus } from '@/api/jide/jide.js'
	
	export default{
		components:{
			navBar,
		},
		data() {
			return {
				name: '',
				pic: '',
				desc: '',
				video: '',
				merits_virtues: '',
				position: '',
				position_name: '',
				status: null,	// 算命状态1算过
			}
		},
		onLoad(query) {
			this.templeDetail(query.id);
			this.virtueOrderStatus();
		},
		methods:{
			// 判断是否算命
			virtueOrderStatus() {
				virtueOrderStatus().then(res => {
					this.status = res.status;
				})
			},
			// 获取详细
			templeDetail(id) {
				templeDetail({id}).then(res => {
					if(res.code === 1) {
						for(const key in res.data) {
							this[key] = res.data[key];
						}
					}
					else {
						this.$msg(res.msg);
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.position-name{
		position: absolute;
		left: 0;
		top: 0;
		vertical-align: baseline;
		.position{
			display: inline;
		}
		.position-name-text{
			display: inline;
			font-size: 28upx;
			font-weight: inherit;
			color: #333;
		}
	}
	.temple-detail{
		width: 100%;
		margin-top: 40px;
		padding: 40upx;
		color: #666;
		font-size: 28upx;
	}
	.title{
		position: relative;
		font-size: 40upx;
		color: #333;
		display: block;
		width: 100%;
		text-align: center;
		font-weight: 600;
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
		img{
			width: 44upx;
			object-fit: cover;
		}
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
	.gd-wrap{
		position: relative;
		height: 200upx;
		width: 100%;
		width: 90%;
		margin: 0 auto;
		margin-top: 120upx;
		background-image: url(../../static/img/beijingtuan.png);
		background-position: top center;
		background-size: cover;
		.gd-text{
			display: flex;
			position: absolute;
			left: 50%;
			top: -10%;
			transform: translateX(-50%);
			padding: 20upx 30upx;
			border: 3px solid #e28a2c;
			font-family: customFont;
			font-size: 36upx;
			align-items: baseline;
			background-color: rgba(255,255,255,.8);
			.left{
				white-space:nowrap;
			}
			.right{
				font-size: 72upx;
				font-family: 微软雅黑;
				font-style: italic;
				color: #e28a2c;
				font-weight: 600;
				padding-left: 10upx;
				padding-right: 10upx;
			}
		}
	}
	.video{
		margin-top: 20upx;
		margin-bottom: 20upx;
	}
</style>
