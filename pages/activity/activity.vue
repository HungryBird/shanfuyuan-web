<template>
  <view class="activity-content">
    <nav-bar title="活动资讯"></nav-bar>
	<scroll-view scroll-y="true" @scrolltolower="articleList" class="activity-list" :style="{height: middleHeight + 'px'}">
	  <view class="activity-list__item" v-for="ls in list" :key="ls.id" @click="seeMore(ls)">
	    <image class="activity-list__item-img" :src="ls.img"></image>
	    <view class="activity-list__item-content">
	      <view class="activity-list__item-title">{{ ls.title }}</view>
	      <view class="activity-list__item-body" v-html="ls.desc"></view>
	      <view class="activity-list__item-date">{{ ls.updated_time }}</view>
	    </view>
	  </view>
	  <uni-load-more :loadingType="loadingType"></uni-load-more>
	</scroll-view>
	<tab-bar :active="0"></tab-bar>
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
		  list: _data.list,
		  current_page: 1,
		  total: null,
		  per_page: 10,
		  loadingType: 0,
		  scrollHeight: 0,
		}
	},
	onLoad() {
		this.articleList();
	},
	mounted() {
		const info = uni.getSystemInfoSync();
		console.log('info: ', info);
		const windowHeight = info.windowHeight;
		// this.scrollHeight = 
	},
	methods:{
		// 获取列表
		articleList() {
			console.log('加载')
			if (this.loadingType !== 0) return; 
			this.loadingType = 1;
			articleList({current_page: this.current_page}).then(res => {
				if(res.code === 1) {
					this.list.concat(res.data);
					this.current_page++;
					this.loadingType = 0;
					if (this.list.length >= this.total) this.loadingType = 2;
				}
			})
		},
		seeMore(ls) {
			console.log('ls: ', ls);
			uni.navigateTo({
				url: `/pages/activity/more?id=${ls.id}`
			})
		}
	}
}
</script>

<style lang="less">
page {
  width: 100%;
  height: 100%;
}
.activity-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
