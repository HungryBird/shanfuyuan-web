<template>
	<view class="yue">
		<view class="withdrawcash-top">
			<view class="withdrawcash-title">
				<text>账户余额（元）</text>
			</view>
			<view class="withdrawcash-num">
				{{ balance }}
			</view>
		</view>
		<uni-list>
			<uni-list-item title="余额提现" @click="navigateToHandle('./withdraw_cash')" />
			<uni-list-item title="余额明细" @click="navigateToHandle('./details')" />
			<uni-list-item title="提现记录" @click="navigateToHandle('./cashlist')" />
			<uni-list-item title="我的银行卡" @click="navigateToHandle('./bankcard')" />
		</uni-list>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import { userInfo } from '@/api/user/user.js'
	export default{
		components:{
			uniList,
			uniListItem,
		},
		data() {
			return{
				balance: 0,
			}
		},
		onLoad() {
			this.userInfo();
		},
		methods:{
			userInfo() {
				userInfo().then(res => {
					if(res.code === 1) {
						this.balance = res.data.balance;
					}
					else {
						this.$msg(res.msg);
					}
				})
			},
			// 页面跳转
			navigateToHandle (url) {
				uni.navigateTo({
					url,
				})
			}
		}
	}
</script>

<style lang="scss">
	.yue{
		display: block;
		width: 100%;
		.margin-cell-group {
		    margin: 10px 0;
		    color: #666;
		}
	}
	.withdrawcash-top{
	  padding: 40upx 26upx;
	  background-color: #FF7159;
	  color: #fff;
	}
	.withdrawcash-title{
	  font-size: 28upx;
	  display: block
	}
	.withdrawcash-num{
	  font-size: 70upx;
	  display: block;
	  margin-top: 20upx;
	  margin-left: 50upx;
	}
	.margin-cell-group {
	    margin: 20upx 0;
	    color: #666666;
	}
</style>
