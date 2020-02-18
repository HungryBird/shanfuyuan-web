<template>
	<view class="video">
		<nav-bar title="视频"></nav-bar>
		<view class="video-main">
			<view class="title">
				{{ title }}
			</view>
			<video id="myVideo" src="https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
				@error="videoErrorCallback" controls></video>
		</view>
	</view>
</template>

<script>
	import navBar from '@/components/nav-bar.vue'
	import { articleDetail } from '@/api/activity/activity.js'
	export default{
		components:{
			navBar,
		},
		data() {
			return {
				title: 'xxxx视频',
			}
		},
		onLoad(e) {
			this.title = e.title;
			this.articleDetail(e.id);
		},
		methods:{
			articleDetail(id) {
				articleDetail({
					article_id: id,
				}).then(res => {
					console.log('res: ', res)
				})
			},
			videoErrorCallback(err) {
				console.error(err)
			},
		}
	}
</script>

<style lang="scss">
	.video{
		width: 100%;
		padding-top: 40px;
		.video-main{
			padding: 20upx;
			.title{
				font-size: 42upx;
			}
		}
	}
	#myVideo{
		width: 100%;
	}
</style>
