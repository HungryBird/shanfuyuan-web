<template>
	<view>
		<nav-bar title="活动咨询"></nav-bar>
		<view class="inner">
			<view class="top">
				<view class="title">{{ title }}</view>
				<view class="sub">{{ updated_time }}</view>
			</view>
			<p><br></p>
			<img class="imgs" :src="imgs" />
			<p><br></p>
			<view class="detail" v-html="desc"></view>
		</view>
	</view>
</template>

<script>
	import navBar from '../../components/nav-bar.vue'
	import { articleDetail } from '@/api/activity/activity.js'
	export default{
		components:{
			navBar,
		},
		data() {
			return {
				title: '',
				updated_time: '',
				desc: '',
				imgs: '',
			}
		},
		onLoad(params) {
			this.articleDetail(params.id);
		},
		methods:{
			articleDetail(article_id) {
				articleDetail({article_id}).then(res => {
					if(res.code === 1) {
						this.title = res.data.title;
						this.updated_time = res.data.updated_time;
						this.desc = res.data.desc;
						this.imgs = res.data.imgs;
					}
					else {
						this.$msg(res.msg);
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.inner{
		position: absolute;
		top: 54px;
		left: 10px;
		right: 10px;
		.top{
			.title{
				padding-bottom: 10upx;
				font-size: 40upx;
				font-weight: 400;
			}
			.sub{
				padding-bottom: 10upx;
				font-size: 14px;
				color: #C8C7CC;
			}
		}
		.imgs{
			display: block;
			max-width: 80%;
			margin: 0 auto;
			object-fit: contain;
		}
		.detail{
			overflow: hidden;
		}
		.detail >>> p{
			video{
				max-width: 100%;
			}
			img{
				max-width: 100%;
				object-fit: contain;
			}
		}
	}
</style>
