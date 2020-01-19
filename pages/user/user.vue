<template>
  <view class="user-content">
    <nav-bar title="个人中心" :opacity="false"></nav-bar>
	<view class="middle">
		<view class="user-banner">
		  <image class="user-banner__avatar" :src="user.avatar"></image>
		  <view class="user-banner__account">{{ user.nickname }}</view>
		</view>
		<view class="user-menu">
		  <view
		   @click="goWhere(item)"
		    v-for="(item, index) in menu"
		    :key="index"
		    class="user-menu__item"
		  >
		    <view class="user-menu__item-leader">
		      <image class="user-menu__item-leader--icon" :src="item.icon" ></image>
		      <view class="user-menu__item-leader--title">{{item.title}}</view>
		    </view>
		    <view class="user-menu__item-actions">
		      <image
		        class="user-menu__item-actions--icon"
		        src="../../static/img/user/jiantou.png"
		        mode="aspectFit"
		      ></image>
		    </view>
		  </view>
		</view>
		<view class="logout-btn" @click="quit" v-if="token">退出登录</view>
	</view>
    <tab-bar :active="4"></tab-bar>
  </view>
</template>

<script>
import { mapState } from 'vuex'
import tabBar from '../../components/tab-bar.vue'
import navBar from '../../components/nav-bar.vue'
import config from './config.js'
import { isEmpty, clearUniStorage } from '@/utils/util.js'
import {logOut} from '@/api/login/login.js'

export default {
	components:{
		tabBar,
		navBar,
	},
	data () {
		return {
		  menu: config.menu
		}
	},
	mounted() {
		console.log('user: ', this.$store);
	},
	computed:{
		...mapState(['token', 'user']),
	},
	methods: {
		// 跳转啊
		goWhere(item) {
			if(isEmpty(this.token)) {
				this.$msg('请您登录');
				return;
			}
			uni.navigateTo({
				url: item.url,
			})
		},
		// 退出啊
		quit() {
			uni.showModal({
				title: '提示',
				content: '确定退出登陆吗？',
				success: (e) => {
					if (e.cancel) return;
					logOut().then(res => {
						if(res.code === 1) {
							clearUniStorage();
							setTimeout(() => {
								uni.navigateTo({
									url: '/pages/login/login'
								})
							}, 300)
						}
						this.$msg(res.msg);
					})
				}
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

.user-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // background-color: #efeff4;
}

.middle{
	flex: 1;
}

.user-banner {
  width: 100%;
  height: 350upx;
  background: url(../../static/img/user/bantou.png) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .user-banner__avatar {
    margin-top: 70upx;
    width: 150upx;
    height: 150upx;
    background-color: #77c7f1;
    border: 4upx solid #fff;
    border-radius: 75upx;
  }
  .user-banner__account {
    margin: 10upx 0;
    color: #fff;
    font-size: 28upx;
  }
}

.user-menu {
  width: 100%;
  margin: 20upx 0;
  .user-menu__item {
    height: 70upx;
    padding: 10upx 20upx;
    border-bottom: 2upx solid #646262;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:last-child {
      border-bottom: none;
    }
    .user-menu__item-leader {
      display: flex;
      .user-menu__item-leader--icon {
        width: 50upx;
        height: 50upx;
      }
      .user-menu__item-leader--title {
        margin-left: 20upx;
        font-size: 38upx;
        color: #646263;
        font-weight: bold;
      }
    }
    .user-menu__item-actions {
      display: flex;
      .user-menu__item-actions--icon {
        width: 30upx;
        // height: 30upx;
      }
    }
  }
}
.logout-btn {
  width: 80%;
  height: 100upx;
  margin: 30upx auto;
  background-image: linear-gradient(to right, #EB9021 , #E1922C);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40upx;
  color: #fff;
  font-weight: bold;
  font-size: 38upx;
}
</style>
