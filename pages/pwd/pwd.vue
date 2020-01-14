<template>
    <view class="content">
        <view class="logo-wrap">
        	<image src="../../static/img/LOGO.png" mode="widthFix"></image>
        	<image src="../../static/img/pinyin.png" mode="widthFix"></image>
        </view>
		<view class="middle">
			<view>请联系客服QQ号</view>
			<view>888888888</view>
		</view>
    </view>
</template>

<script>
    import service from '../../service.js';
    import mInput from '../../components/m-input.vue';

    export default {
        components: {
            mInput
        },
        data() {
            return {
                email: ''
            }
        },
        methods: {
            findPassword() {
                /**
                 * 仅做示例
                 */
                if (this.email.length < 3 || !~this.email.indexOf('@')) {
                    uni.showToast({
                        icon: 'none',
                        title: '邮箱地址不合法',
                    });
                    return;
                }
                uni.showToast({
                    icon: 'none',
                    title: '已发送重置邮件至注册邮箱，请注意查收。',
                    duration: 3000
                });
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
	.middle{
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -150%);
		text-align: center;
		font-weight: 600;
		color: #646262;
	}
</style>
