<template>
    <view class="content">
		<view class="logo-wrap">
			<image src="../../static/img/LOGO.png" mode="widthFix"></image>
			<image src="../../static/img/pinyin.png" mode="widthFix"></image>
		</view>
        <view class="login-form-group">
            <view class="input-row">
                <text class="title">账号：</text>
                <input type="text" clearable focus v-model="tel" placeholder="字母加数字"></input>
            </view>
            <view class="input-row">
                <text class="title">昵称：</text>
                <input type="text" v-model="nickname" placeholder="请输入昵称"></input>
            </view>
			<view class="input-row">
				<radio-group @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="item in sexs" :key="item.value">
						<view>{{item.label}}</view>
						<view>
							<radio class="custm-radio" :value="item.value" :checked="item.value === sex" />
						</view>
					</label>
				</radio-group>
			</view>
			<view class="input-row">
			    <text class="title">设置密码：</text>
			    <input type="password" clearable focus v-model="password" placeholder="请输入设置密码"></input>
			</view>
			<view class="input-row">
			    <text class="title">确认密码：</text>
			    <input type="password" v-model="re_password" placeholder="请再输入密码"></input>
			</view>
			<view class="input-row">
			    <text class="title">邀请码：</text>
			    <input type="text" disabled="disabled" v-model="invite_code" placeholder="请再输入邀请码(选填)"></input>
			</view>
        </view>
        <view class="btn-row">
            <button type="primary" class="primary" @click="register">立即注册</button>
        </view>
    </view>
</template>

<script>
    import service from '../../service.js';
    import mInput from '../../components/m-input.vue';
	import { register } from '@/api/reg/reg.js'
	import { isEmpty } from '@/utils/util.js'

    export default {
        components: {
            mInput
        },
        data() {
            return {
                tel: '',
                password: '',
				re_password: '',
                nickname: '',
				sex: '1',
				invite_code: '',
				sexs: [
					{
						label: '男',
						value: '1',
					},
					{
						label: '女',
						value: '2',
					}
				]
            }
        },
		onLoad(data) {
			this.invite_code = data.id;
		},
        methods: {
			radioChange(e){
				this.sex = e.detail.value;
			},
            register() {
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
				if (isEmpty(this.nickname)) {
				    uni.showToast({
				        icon: 'none',
				        title: '请输入昵称'
				    });
				    return;
				}
				if (isEmpty(this.sex)) {
				    uni.showToast({
				        icon: 'none',
				        title: '请选择性别'
				    });
				    return;
				}
                if (this.password !== this.re_password) {
                    uni.showToast({
                        icon: 'none',
                        title: '密码与确认密码不相等'
                    });
                    return;
                }

                const data = {
                    tel: this.tel,
                    password: this.password,
					re_password: this.re_password,
                    sex: Number(this.sex),
					nickname: this.nickname,
					invite_code: this.invite_code,
                }
				uni.showLoading();
                register(data).then(res => {
					if(res.code === 1) {
						this.$msg(res.msg);
						setTimeout(() => {
							uni.navigateTo({
								url: '/pages/login/login'
							})
						}, 200)
					}
					uni.hideLoading();
				}).catch(err => {
					console.error(err)
				})
            }
        }
    }
</script>

<style lang="scss">
	.content{
		background: url(../../static/img/dengluyebeijing.png);
		background-size: cover;
		background-repeat: no-repeat;
	}
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
			margin-bottom: 10upx;
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
			uni-radio-group{
				margin: 10upx 0;
				uni-label{
					>uni-view{
						display: inline-block;
						&:first-child{
							margin-right: 10upx;
						}
						&:nth-child(2){
							margin-right: 20upx;
						}
					}
				}
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
