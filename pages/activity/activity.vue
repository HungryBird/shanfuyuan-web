<template>
  <view class="activity-content">
    <nav-bar title="活动资讯"></nav-bar>
    <view class="activity-list">
      <view class="activity-list__item" v-for="ls in list" :key="ls.id">
        <image class="activity-list__item-img" :src="ls.img"></image>
        <view class="activity-list__item-content">
          <view class="activity-list__item-title">{{ ls.title }}</view>
          <view class="activity-list__item-body" v-html="ls.desc"></view>
          <view class="activity-list__item-date">{{ ls.updated_time }}</view>
        </view>
      </view>
    </view>
	<tab-bar :active="0"></tab-bar>
  </view>
</template>

<script>
	import tabBar from '../../components/tab-bar.vue'
	import uniIcons from '../../components/uni-icons/uni-icons.vue'
	import navBar from '../../components/nav-bar.vue'
	
export default {
	components:{
		tabBar,
		uniIcons,
		navBar,
	},
  data () {
    return {
      list: [
		  {
			  id: 1,
			  img: '../../static/img/activity/tupianyi.png',
			  title: '安徽千年寺庙拜神活动开启',
			  desc: '安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启',
			  updated_time: '2020-02-01',
		  },
		  {
		  id: 2,
		  img: '../../static/img/activity/tupianyi.png',
		  title: '安徽千年寺庙拜神活动开启',
		  desc: '安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启',
		  updated_time: '2020-02-01',
		  },
		  {
			  id: 3,
				  img: '../../static/img/activity/tupianyi.png',
				  title: '安徽千年寺庙拜神活动开启',
				  desc: '安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启',
				  updated_time: '2020-02-01',
		  },
		  {
			  id: 4,
				  img: '../../static/img/activity/tupianyi.png',
				  title: '安徽千年寺庙拜神活动开启',
				  desc: '安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启安徽千年寺庙拜神活动开启',
				  updated_time: '2020-02-01',
		  },
	  ]
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
}
.activity-list {
  margin-top: 100upx;
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
