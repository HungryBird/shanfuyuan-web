<template>
  <view class="activity-content">
    <nav-bar title="活动资讯"></nav-bar>
	<view class="activity-middle">
		<view class="inner">
			<view class="block">
				<view class="block-inner" @click="goRoute('./videos')">
					<img src="../../static/img/activity/dabofangtubiao.png" mode="widthFix" /> 
					<text>视频</text>
				</view>
			</view>
			<view class="block">
				<view class="block-inner" @click="goRoute('./story')">
					<img src="../../static/img/activity/gushitubiao.png" mode="widthFix" />
					<text>善佛缘故事</text>
				</view>
			</view>
			<view class="block">
				<view class="block-inner" @click="goRoute('./art')">
					<img src="../../static/img/activity/yishutubiao.png" mode="widthFix" />
					<text>善佛缘艺术</text>
				</view>
			</view>
			<view class="block">
				<view class="block-inner" @click="goRoute('./relics')">
					<img src="../../static/img/activity/shelitubiao.png" mode="widthFix" />
					<text>神佛舍利</text>
				</view>
			</view>
			<view class="block">
				<view class="block-inner" @click="goRoute('./world_temples')">
					<view class="center">
						<img src="../../static/img/activity/simioaotubiao.png" mode="widthFix" />
						<text>世界寺庙大全</text>
					</view>
				</view>
			</view>
		</view>
		<image src="../../static/img/activity/huodongbeijxiaotu.png" class="bottom-img" mode="aspectFit" />
	</view>
	<tab-bar :active="0" class="bottom"></tab-bar>
  </view>
</template>

<script>
	import tabBar from '../../components/tab-bar.vue'
	import uniIcons from '../../components/uni-icons/uni-icons.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	import navBar from '../../components/nav-bar.vue'
	import _data from './data.js'
	import { articleList } from '@/api/activity/activity.js'
	import mixins from '@/mixins/mixins.js'
	
export default {
	components:{
		tabBar,
		uniIcons,
		navBar,
		uniLoadMore,
	},
	mixins: [mixins],
	data () {
		return {
		  // 
		}
	},
	onLoad() {
		// 
	},
	mounted() {
		// 
	},
	methods:{
		goRoute(url) {
			uni.navigateTo({
				url,
			})
		}
	}
}
</script>

<style lang="scss">
	.activity-middle{
		position: relative;
		flex: 1;
		padding: 40px 20upx 50px 20upx;
		background-image: url(../../static/img/tongyongbeijing.png);
		background-position: center;
		background-attachment:fixed;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		.inner{
			display: flex;
			width: 100%;
			flex-wrap: wrap;
			.block{
				box-sizing: border-box;
				width: 50%;
				padding-top: 20upx;
				font-family: customFont;
				overflow: hidden;
				&:nth-child(even){
					padding-left: 10upx;
				}
				&:nth-child(odd){
					padding-right: 10upx;
				}
				&:last-child{
					width: 100%;
					padding: 0;
					padding-top: 20upx;
				}
				&:nth-child(1){
					.block-inner{
						background-color: #8f6096;
					}
				}
				&:nth-child(2){
					.block-inner{
						background-color: #ae76b7;
					}
				}
				&:nth-child(3){
					.block-inner{
						background-color: #cf689d;
					}
				}
				&:nth-child(4){
					.block-inner{
						background-color: #b55887;
					}
				}
				&:nth-child(5){
					.block-inner{
						text-align: center;
						background-color: #8ec220;
						.center{
							margin: auto;
							line-height: 100upx;
						}
						img{
							display: inline-block;
							margin: 0;
							margin-right: 20upx;
							height: 100upx;
							vertical-align: middle;
						}
					}
				}
				.block-inner{
					display: flex;
					flex-direction: column;
					align-items: space-between;
					padding: 40upx;
					text-align: center;
					color: #fff;
					img{
						display: block;
						margin: 0 auto;
						margin-bottom: 20upx;
						width: auto;
						height: 60upx;
						object-fit: cover;
					}
				}
			}
		}
		.bottom-img{
			position: absolute;
			left: 0;
			bottom: -50px;
			width: 100%;
		}
	}
	.bottom{
		position: fixed;
		left: 0;
		width: 100%;
		bottom: 0;
	}
</style>

<style lang="less">
page {
  width: 100%;
  height: 100%;
}
.activity-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.activity-list {
	flex: 1;
  margin-top: 40px;
  width: 100%;
  .activity-list__item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 230upx;
    box-sizing: border-box;
    padding: 20upx;
    border-bottom: 2upx solid #646262;
    position: relative;
    .activity-list__item-img {
      width: 30%;
      height: 100%;
    }
    .activity-list__item-content {
      margin-left: 30upx;
      width: 70%;
      height: 100%;
      .activity-list__item-title {
        width: 100%;
        font-size: 36upx;
        font-weight: bold;
        color: #646263;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .activity-list__item-body {
        width: 100%;
        height: 80upx;
        font-size: 28upx;
        text-indent: 25px;
        margin-top: 10upx;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .activity-list__item-date {
        position: absolute;
        right: 20upx;
        bottom: 20upx;
        font-size: 28upx;
        color: #999;
      }
    }
  }
}
</style>
