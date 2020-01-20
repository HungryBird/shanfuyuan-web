<template>
    <view class="content">
		<view class="logo-wrap">
			<image src="../../static/img/LOGO.png" mode="widthFix"></image>
			<image src="../../static/img/pinyin.png" mode="widthFix"></image>
		</view>
        <view class="login-form-group">
            <view class="input-row">
                <text class="title">账号：</text>
                <input type="text" clearable focus v-model="tel" placeholder="输入账号"></input>
            </view>
            <view class="input-row">
                <text class="title">密码：</text>
                <input type="password" v-model="password" placeholder="请输入登录密码"></input>
            </view>
        </view>
        <view class="btn-row">
            <button type="primary" class="primary" @tap="bindLogin">立即登录</button>
        </view>
        <view class="action-row">
            <navigator url="../reg/reg">注册账号</navigator>
            <navigator url="../pwd/pwd">忘记密码</navigator>
        </view>
        <view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}">
            <view class="oauth-image" v-for="provider in providerList" :key="provider.value">
                <image :src="provider.image" @tap="oauth(provider.value)"></image>
            </view>
        </view>
    </view>
</template>

<script>
    import service from '../../service.js';
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import mInput from '../../components/m-input.vue'
    import { isEmpty, setUniStorage } from '@/utils/util'
	import { login } from '@/api/login/login.js'
	import { userInfo } from '@/api/user/user.js'

    export default {
        components: {
            mInput
        },
        data() {
            return {
                providerList: [],
                hasProvider: false,
                tel: '',
                password: '',
                positionTop: 0
            }
        },
        computed: mapState(['forcedLogin']),
        methods: {
            ...mapMutations(['login']),
            bindLogin() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                if (isEmpty(this.tel)) {
                    uni.showToast({
                        icon: 'none',
                        title: '请输入账号'
                    });
                    return;
                }
                if (isEmpty(this.password)) {
                    uni.showToast({
                        icon: 'none',
                        title: '请输入密码'
                    });
                    return;
                }
                /**
                 * 下面简单模拟下服务端的处理
                 * 检测用户账号密码是否在已注册的用户列表中
                 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
                 */
                const data = {
                    tel: this.tel,
                    password: this.password
                };
                login(data).then(res => {
					if(res.code === 1) {
						this.$store.commit('setToken', res.data.token);
						userInfo().then(uRes => {
							this.$store.commit('setUser', uRes.data)
							uni.navigateTo({
								url: '../choiceGod/choiceGod'
							})
						})
					}
					else {
						this.$msg(res.msg);
					}
				}).catch(err => {
					console.error('err: ', err);
				})
            },
            oauth(value) {
                uni.login({
                    provider: value,
                    success: (res) => {
                        uni.getUserInfo({
                            provider: value,
                            success: (infoRes) => {
                                /**
                                 * 实际开发中，获取用户信息后，需要将信息上报至服务端。
                                 * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
                                 */
                                this.toMain(infoRes.userInfo.nickName);
                            }
                        });
                    },
                    fail: (err) => {
                        console.error('授权登录失败：' + JSON.stringify(err));
                    }
                });
            },
            toMain(userName) {
                this.login(userName);
                /**
                 * 强制登录时使用reLaunch方式跳转过来
                 * 返回首页也使用reLaunch方式
                 */
                if (this.forcedLogin) {
                    uni.reLaunch({
                        url: '../main/main',
                    });
                } else {
                    uni.navigateBack();
                }

            }
        },
        onReady() {
			// 
        }
    }
</script>

<style lang="scss">
	.logo-wrap{
		width: 380upx;
		margin: 100upx auto 50upx auto;
		text-align: center;
		uni-image{
			width: 100%;
			height: auto;
			&:nth-child(2){
				width: 60%;
			}
		}
	}
	.login-form-group{
		display: flex;
		flex-direction: column;
		width: 500upx;
		margin: 0 auto;
		.input-row{
			display: flex;
			align-items: center;
			&:first-child{
				margin-bottom: 10upx;
			}
			.title{
				width: auto;
				font-weight: 600;
				color: #646262;
				padding: 0;
			}
			uni-input{
				flex: 1;
				line-height: 1.8rem;
				height: 1.8rem;
				text-indent: 0.8em;
				// box-shadow: 0 1px 0 0 rgba(0,0,0,.3) inset,1px 0 0 0 rgba(0,0,0,.3) inset,0 0 1px 0 rgba(0,0,0,.3) inset,0 0 0 1px rgba(0,0,0,.3) inset;
				border: 1px solid rgba(0,0,0,.1);
				font-size: 28upx;
				background-color: #ffe4ba;
				border-top-left-radius: 50upx;
				border-top-right-radius: 50upx;
				border-bottom-left-radius: 50upx;
				border-bottom-right-radius: 50upx;
			}
		}
	}
	.btn-row{
		width: 500upx;
		margin: 50upx auto 26upx auto;
		padding: 0;
		uni-button{
			border-top-left-radius: 40upx;
			border-top-right-radius: 40upx;
			border-bottom-left-radius: 40upx;
			border-bottom-right-radius: 40upx;
			background-image: linear-gradient(to right, rgb(235, 114, 033),  rgb(232, 172, 094));
			font-family: customFont;
		}
	}
</style>

<style>
	.content{
		background: url(../../static/img/dengluyebeijing.png);
		background-size: cover;
		background-repeat: no-repeat;
	}
	
    .action-row {
		width: 500upx;
		margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .action-row navigator {
        color: #646262;
		font-size: 30upx;
		font-weight: 600;
    }

    .oauth-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .oauth-image {
        width: 100upx;
        height: 100upx;
        border: 1upx solid #dddddd;
        border-radius: 100upx;
        margin: 0 40upx;
        background-color: #ffffff;
    }

    .oauth-image image {
        width: 60upx;
        height: 60upx;
        margin: 20upx;
    }
</style>
