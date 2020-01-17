<template>
  <view class="user-content">
    <view class="user-banner">
      <image class="user-banner__avatar"></image>
      <view class="user-banner__account">zhaozeran_cr7@qq.com</view>
    </view>
    <view class="user-menu">
      <view
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
    <view class="logout-btn">退出登录</view>
    <!-- <view class="btn-row">
      <button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
      <button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
    </view> -->
  </view>
</template>

<script>
// import {
//   mapState,
//   mapMutations
// } from 'vuex'

import config from './config.js'
export default {
  data () {
    return {
      menu: config.menu
    }
  },
  // computed: {
  //   ...mapState(['hasLogin', 'forcedLogin'])
  // },
  methods: {
    // ...mapMutations(['logout']),
    // bindLogin() {
    //   uni.navigateTo({
    //       url: '../login/login',
    //   });
    // },
    // bindLogout() {
    //   this.logout();
    //   /**
    //    * 如果需要强制登录跳转回登录页面
    //    */
    //   if (this.forcedLogin) {
    //     uni.reLaunch({
    //       url: '../login/login',
    //     });
    //   }
    // }
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
  // background-color: #efeff4;
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
