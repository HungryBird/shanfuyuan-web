<template>
	<view class="art">
		<nav-bar title="善佛缘艺术"></nav-bar>
		<scroll-view class="art-scroll" scroll-y="true" :style="{height: windowHeight - 40 + 'px'}" @scrolltolower="loadMore">
			<view v-for="list in lists" :key="list.id" class="art-card" @click="seeMore(list.id)">
				<image :src="list.img" mode="aspectFill"></image>
				<view class="mask">
					{{ list.title }}
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
			return {
				status: 'more',
				page: 1,
				total: 0,
				lists: []
			}
		},
		onLoad() {
			this.loadMore();
		},
		methods:{
			loadMore() {
				if(this.status !== 'more') return;
				this.status = 'loading';
				articleList({
					cate_id: 3,
					page: this.page,
				}).then(res => {
					if(res.code === 1) {
						this.page++;
						this.lists = this.lists.concat(res.data.data);
						this.status = res.data.total === this.lists.length ? 'nomore' : 'more';
					}
					else {
						this.$msg(res.msg);
					}
				})
			},
			seeMore(id) {
				uni.navigateTo({
					url: `./more?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.art{
		width: 100%;
		padding-top: 40px;
	}
	.art-card{
		position: relative;
		height: 400upx !important;
		margin-bottom: 10upx;
		uni-image{
			display: block;
			width: 100%;
			height: 100%;
			>div{
				background-position: top center;
			}
		}
		.mask{
			position: absolute;
			width: 100%;
			left: 0;
			bottom: 0;
			line-height: 2;
			text-align: center;
			background-color: rgba(0,0,0,.7);
			color: #fff;
			font-size: 36upx;
		}
	}
	.art-scroll{
		box-sizing: border-box;
		width: 100%;
		padding: 20upx;
	}
</style>
