<template>
	<view>
		<nav-bar title="活动资讯"></nav-bar>
		<view class="inner">
			<view class="top">
				<view class="title">{{ title }}</view>
				<view class="sub">{{ updated_time }}</view>
			</view>
			<p><br></p>
			<img class="imgs" :src="img1" />
			<p><br></p>
			<view class="detail" v-html="desc"></view>
			<p><br></p>
			<img class="imgs" :src="img2" />
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
				title: '标题标题',
				updated_time: '2020-02-06 14:44:05',
				desc: '<view style="text-indent:2em;font-size:15px;color:#666;">资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯</view>',
				img1: '/web/static/img/activity/temples/1.jpg',
				img2: '/web/static/img/activity/temples/3.png',
			}
		},
		onLoad(params) {
			// this.articleDetail(params.id);
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
				color: #888888;
			}
		}
		.imgs{
			display: block;
			max-width: 100%;
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
