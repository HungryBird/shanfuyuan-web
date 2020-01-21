<template>
    <view class="content">
		<nav-bar title="联系客服"></nav-bar>
        <view class="logo-wrap">
        	<image src="../../static/img/LOGO.png" mode="widthFix"></image>
        	<image src="../../static/img/pinyin.png" mode="widthFix"></image>
        </view>
		<view class="middle">
			<view>请联系客服QQ号</view>
			<view>{{ QQ }}</view>
		</view>
    </view>
</template>

<script>
    import service from '../../service.js';
	import {systemCustomer} from '@/api/forget/forget.js'
	import navBar from '../../components/nav-bar.vue'

    export default {
		components:{
			navBar
		},
        data() {
            return {
                QQ: ''
            }
        },
		created() {
			this.systemCustomer();
		},
        methods: {
            systemCustomer() {
				systemCustomer().then(res => {
					if(res.code === 1) {
						this.QQ = res.data.qq;
					}
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
