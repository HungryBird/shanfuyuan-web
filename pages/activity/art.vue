<template>
	<view class="art">
		<nav-bar title="善佛缘艺术"></nav-bar>
		<scroll-view class="art-scroll" scroll-y="true">
			<view v-for="list in lists" :key="list.id" class="art-card" @click="seeMore(list.id)">
				<image :src="list.img" mode="aspectFill"></image>
				<view class="mask">
					{{ list.title }}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import navBar from '@/components/nav-bar.vue'
	
	export default{
		components:{
			navBar,
		},
		data() {
			return {
				lists: [
					{
						id: 1,
						img: '/static/img/activity/art/7.jpg',
						title: '15世纪xxx佛教图',
					},
					{
						id: 2,
						img: '/static/img/activity/art/3.jpg',
						title: '泰国xxx神佛艺术展',
					},
					{
						id: 3,
						img: '/static/img/activity/art/5.jpg',
						title: '泰国xxx神佛艺术展',
					},
					{
						id: 4,
						img: '/static/img/activity/art/4.jpg',
						title: 'xxx神佛艺术展',
					},
				]
			}
		},
		methods:{
			seeMore(id) {
				uni.navigateTo({
					url: `./artMore?id=${id}`
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
