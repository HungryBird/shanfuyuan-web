<template>
	<view>
		<nav-bar title="活动咨询"></nav-bar>
		<view class="inner">
			<view class="top">
				<view class="title">{{ title }}</view>
				<view class="sub">{{ updated_time }}</view>
			</view>
			<!-- <img class="imgs" :src="imgs" /> -->
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
				title: '测试啊啊啊啊 1',
				updated_time: '2020-01',
				desc: '<p>这是视频2</p><p><br/></p><p><video class=\"edui-upload-video video-js vjs-default-skin video-js\" controls=\"\" preload=\"none\" width=\"420\" height=\"280\" src=\"http://test.fo.com/ueditor/php/upload/video/20200114/1578986661498474.mp4\"></video></p><p>这是图片</p><p><img src=\"http://test.fo.com/ueditor/php/upload/image/20200114/1578986677670989.jpg\" title=\"1578986677670989.jpg\" alt=\"善福缘-选择角色页-祭拜页男.jpg\"/></p>',
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
