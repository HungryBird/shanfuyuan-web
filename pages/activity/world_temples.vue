<template>
	<view class="videos">
		<nav-bar title="世界寺庙大全"></nav-bar>
		<scroll-view scroll-y="true" :style="{height: windowHeight - 40 + 'px'}" @scrolltolower="loadMore">
			<swiper indicator-dots="true" indicator-color="rgba(255,255,255,.8)" indicator-active-color="#e88c29" autoplay="true">
				<swiper-item v-for="(temple, index) in templesImg" :key="index">
					<image mode="aspectFill" class="swiper-img" :src="temple"></image>
				</swiper-item>
			</swiper>
			<view class="temples" v-if="show">
				<view class="temple" v-for="temple in temples" :key="temple.id" @click="seeMore(temple)">
					<image mode="aspectFill" :src="temple.img"></image>
					<view class="bottom">
						{{ temple.title }}
					</view>
				</view>
			</view>
			<view class="list-wrap">
				<view v-for="ls in lists" :key="ls.id" class="list" @click="seeMore(ls)">
					<view class="left">
						<image :src="ls.img" mode="aspectFill"></image>
					</view>
					<view class="right">
						<view class="title">
							{{ ls.title }}
						</view>
						<view class="descript">
							{{ ls.descript }}
						</view>
						<view class="bottom">
							<view class="num">
								<image src="../../static/img/activity/yuedutubiao.png" mode="aspectFit"></image>
								{{ ls.num || 0 }}
							</view>
							<view class="time">
								{{ ls.updated_time }}
							</view>
						</view>
					</view>
				</view>
			</view>
			<uni-load-more :status="status"></uni-load-more>
		</scroll-view>
	</view>
</template>

<script>
	import navBar from '@/components/nav-bar.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	import mixins from '@/mixins/mixins.js'
	import { articleList } from '@/api/activity/activity.js'
	
	export default{
		components:{
			navBar,
			uniLoadMore,
		},
		mixins:[mixins],
		data() {
			return{
				templesImg: [
					`/static/img/activity/temples/1.jpg`,
					`/static/img/activity/temples/2.jpg`,
				],
				status: 'more',
				page: 1,
				total: 0,
				lists: [],
				show: false,
				temples: []
			}
		},
		onShow() {
			this.loadMore();
		},
		methods: {
			loadMore() {
				if(this.status !== 'more') return;
				this.status = 'loading';
				articleList({
					cate_id: 5,
					page: this.page,
				}).then(res => {
					if(res.code === 1) {
						this.page++;
						this.lists = this.lists.concat(res.data.data);
						this.status = res.data.total === this.lists.length ? 'nomore' : 'more';
						this.show = true;
						this.temples = this.lists.slice(0, 4);
					}
					else {
						this.$msg(res.msg);
					}
				})
			},
			seeMore(list) {
				uni.navigateTo({
					url: `./more?id=${list.id}&title=${list.title}&updated_time=${list.updated_time}&desc=${list.desc}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.videos{
		width: 100%;
	}
	uni-scroll-view{
		margin-top: 40px;
		.swiper-img{
			width: 100%;
			height: 100%;
		}
	}
	.list-wrap{
		margin-top: 40upx;
		.list{
			display: flex;
			border-bottom: 1px solid #555555;
			margin: 0 10upx 10upx 10upx;
			.left{
				width: 20%;
				padding: 10upx;
				uni-image{
					width: 100%;
					height: 100%;
				}
			}
			.right{
				flex: 1;
				padding-left: 20upx;
				.title{
					color: #595957;
					font-weight: 600;
				}
				.descript{
					text-indent: 2em;
					font-size: 30upx;
					color: #929290;
					padding: 6upx 0 10upx 0;
				}
				.bottom{
					display: flex;
					justify-content: space-between;
					overflow: hidden;
					font-size: 28upx;
					padding: 10upx;
					.num{
						display: flex;
						align-items: center;
						uni-image{
							width: 40upx;
							height: 40upx;
							vertical-align: middle;
							margin-right: 10upx;
						}
					}
					
				}
			}
		}
	}
	.temples{
		display: flex;
		flex-wrap: wrap;
		.temple{
			position: relative;
			box-sizing: border-box;
			width: 50%;
			padding: 10upx;
			uni-image{
				width: 100%;
				height: 200upx;
			}
			.bottom{
				position: absolute;
				left: 10upx;
				bottom: 10upx;
				right: 10upx;
				background-color: rgba(0,0,0,0.7);
				color: #fff;
				line-height: 2;
				text-align: center;
			}
		}
	}
</style>
