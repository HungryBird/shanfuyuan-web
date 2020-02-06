<template>
	<view class="art-more">
		<nav-bar title="善佛缘艺术"></nav-bar>
		<view class="imgs">
			<image mode="widthFix" v-for="(ls, index) in lists" :key="index" :src="ls"></image>
		</view>
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
					'/static/img/activity/art/1.jpg',
					'/static/img/activity/art/2.jpg',
					'/static/img/activity/art/3.jpg',
					'/static/img/activity/art/4.jpg',
					'/static/img/activity/art/5.jpg',
					'/static/img/activity/art/6.jpg',
					'/static/img/activity/art/7.jpg',
					'/static/img/activity/art/8.jpg',
				]
			}
		}
	}
</script>

<style lang="scss">
	.art-more{
		padding-top: 40px;
		width: 100%;
		.imgs{
			padding: 10upx;
			width: 100%;
			uni-image{
				width: 100%;
				height: auto;
				margin-bottom: 10upx;
			}
		}
	}
</style>
