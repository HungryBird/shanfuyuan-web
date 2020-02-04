<template>
  <view class="activity-content">
	<scroll-view scroll-y="true" @scrolltolower="articleList" class="activity-list" :style="{height: middleHeight + 'px'}">
	  <uni-card v-for="ls in list" :key="ls.id" :title="ls.type_text" :extra="ls.add_date">
		  <view class="yue-content">
			  <view class="left">
				  <img :src="ls.avatar" />
			  </view>
			  <view class="right">
				  <view>名称：{{ ls.nickname }}</view>
				  <view>￥{{ ls.get_money }}</view>
			  </view>
		  </view>
	  </uni-card>
	  <uni-load-more :loadingType="loadingType"></uni-load-more>
	</scroll-view>
  </view>
</template>

<script>
	import tabBar from '../../components/tab-bar.vue'
	import uniIcons from '../../components/uni-icons/uni-icons.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	import navBar from '../../components/nav-bar.vue'
	import { teamList } from '@/api/user/user.js'
	import mixins from '@/mixins/mixins.js'
	import uniCard from '@/components/uni-card/uni-card.vue'
	import '@/style/common.css'
export default {
	components:{
		tabBar,
		uniIcons,
		navBar,
		uniLoadMore,
		uniCard,
	},
	mixins: [mixins],
	data () {
		return {
		  list: [],
		  current_page: 1,
		  total: null,
		  per_page: 10,
		  loadingType: 0,
		  scrollHeight: 0,
		}
	},
	onLoad() {
		this.teamList();
	},
	mounted() {
		const info = uni.getSystemInfoSync();
		const windowHeight = info.windowHeight;
		// this.scrollHeight = 
	},
	methods:{
		// 获取列表
		teamList() {
			if (this.loadingType !== 0) return; 
			this.loadingType = 1;
			teamList({current_page: this.current_page}).then(res => {
				if(res.code === 1) {
					this.list = this.list.concat(res.data.data);
					this.current_page++;
					this.loadingType = 0;
					if (this.list.length >= this.total) this.loadingType = 2;
				}
			})
		},
	}
}
</script>

<style lang="less">
page {
  width: 100%;
  height: 100%;
}
.yue-content{
	display: flex;
	padding: 10upx;
	.left{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		overflow: hidden;
		background-color: #333333;
		img{
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.right{
		flex: 1;
		display: flex;
		flex-direction: column;
		text-align: right;
	}
	
}
.activity-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.activity-list {
	flex: 1;
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
