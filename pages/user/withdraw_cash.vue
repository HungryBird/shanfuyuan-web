<template>
	<view class="content">
		<view class="content-top">
			<!-- 我的银行卡信息 -->
			<view class='cell-group margin-cell-group' 
			v-if="hasSelect"
			@click="toBankCardList"
			>
				<view class='cell-item right-img'>
					<view class='cell-item-hd'>
						<image class="yl-logo" src="cardInfo.bank_logo" mode=""></image>
					</view>
					<view class='cell-item-bd'>
						<text class="cell-bd-view">{{ cardInfo.card_number }}</text>
					</view>
					<view class="cell-item-ft">
						<image class='cell-ft-next icon' src='/static/image/right.png'></image>
					</view>
				</view>
			</view>
			<view class='cell-group margin-cell-group' 
			v-else
			@click="toBankCardList"
			>
				<view class='cell-item right-img'>
					<view class='cell-item-hd'>
						<image class="yl-logo" src="../../static/image/yl.png" mode=""></image>
					</view>
					<view class='cell-item-bd'>
						<text class="cell-bd-view">请添加银行卡</text>
					</view>
					<view class="cell-item-ft">
						<image class='cell-ft-next icon' src='../../static/image/right.png'></image>
					</view>
				</view>
			</view>
			
			<!-- 提现金额手续费 提现金额input -->
			<view class='cell-group margin-cell-group'>
				<!-- <view class='cell-item'>
					<view class='cell-item-bd'>
						<view class='cell-hd-title' style="color: #666;">收取服务费1%</view>
					</view>
				</view> -->
				<view class='cell-item'>
					<view class='cell-item-bd withdrawcash-input'>
						<view class='cell-hd-title'><text>￥</text><input type="number" focus v-model="money"/></view>
					</view>
				</view>
				<view class='cell-item'>
					<view class='cell-item-bd'>
						<view class='cell-hd-title' style="color: #666;">可用余额 {{ balance }} 元</view>
					</view>
				</view>
			</view>
			
		</view>
		<view class="button-bottom">
			<button class="btn btn-square btn-b" hover-class="btn-hover2" v-if="isSubmit" @click="toCash" :disabled='submitStatus' :loading='submitStatus'>确认提现</button>
			<button class="btn btn-square btn-b" hover-class="btn-hover2" v-else-if="!isSubmit" disabled>确认提现</button>
		</view>
	</view>
</template>

<script>
	import { userInfo, bankList, doWithdraw } from '@/api/user/user.js'
	import { isEmpty } from '@/utils/util.js'
export default {
	data () {
		return {
			cardInfo: {}, // 我的银行卡信息
			user: {}, // 用户信息
            isSubmit: false, // 提现点击
			money: '', // 用户输入的提现金额
			submitStatus: false,
			balance: 0,
			cards: [],
		}
	},
	onLoad(query) {
		for(const key in query) {
			if(query.hasOwnProperty(key)) {
				this.$set(this.cardInfo, key, query[key]);
			}
		}
		this.userInfo();
		this.bankList();
	},
	computed: {
		hasSelect () {
			console.log('isEmpty(this.cardInfo): ', isEmpty(this.cardInfo))
			return !isEmpty(this.cardInfo)
		},
		// 店铺提现手续费
		tocashMoneyRate () {
			return this.$store.state.config.tocash_money_rate
		},
		// 店铺提现最低金额
		tocashMoneyLow () {
			return this.$store.state.config.tocash_money_low
		},
	},
	methods: {
		// 获取银行卡
		bankList() {
			bankList({page: 1}).then(res => {
				if(res.code === 1) {
					this.cards = res.data.data;
					if(isEmpty(this.cardInfo)){
						for(const row of this.cards) {
							if(row.is_default === 1) {
								{
									for(const key in row) {
										// 设置银行卡信息
										this.$set(this.cardInfo, key, row[key]);
									}
									break;
								}
							}
						}
					}
				}
			})
		},
		// 获取用户信息
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
		// 去提现
		toCash () {
			if (isEmpty(this.cardInfo)) {
				this.$msg('请选择要提现的银行卡')
				return false
            } else if (!this.money) {
				this.$msg('请输入要提现的金额')
				return false
            } else if (Number(this.money) === 0) {
				this.$msg('提现金额不能为0')
            } else {
				this.submitStatus = true;
                doWithdraw({
                    withdraw_money: this.money,
                    id: this.cardInfo.id
                }).then(res => {
					if (res.status) {
						this.submitStatus = false;
					} else {
						this.submitStatus = false;
					}
					this.$msg(res.msg);
				})
            }
		},
		// 跳转我的银行卡列表
		toBankCardList () {
			uni.navigateTo({
				url: './bankcard?mold=select'
			})
		}
	},
	watch: {
		money (val) {
			// 比较用户的输入金额 如果大于可用金额
			if(val !== 0 && val <= this.balance) {
				this.isSubmit = true;
			}
			else{
				this.isSubmit = false;
			}
		}
	}
}
</script>

<style lang="scss">
	.content-top{
		
	}
	.cell-group{
		background-color: #fff;
	}
</style>

<style>
.user-head{
	height: 100upx;
}
.user-head-img{
	height: 90upx;
	width: 90upx;
	border-radius: 50%;
}
.cell-hd-title{
	color: #333;
}
.cell-item{
	border: none;
	padding: 10px 13px 10px 13px;
	width: 386px;
	border-bottom: 1px solid #f3f3f3;
	position: relative;
	overflow: hidden;
	background-color: #fff;
	color: #333;
	display: table;
	min-height: 48px;
}
.icon {
    width: 26px;
    height: 26px;
}
.button-bottom .btn {
	width: 100%;
}
.yl-logo{
	width: 188upx;
	height: 54upx;
	float: left;
}
.withdrawcash-input{
	font-size: 50upx;
	border-bottom: 2upx solid #e8e8e8;
	padding-bottom: 20upx;
}
.withdrawcash-input text{
	font-size: 40upx;
}
.withdrawcash-input input{
	display: inline-block;
	min-width: 500upx;
	padding-left: 20upx;
}
.cell-hd-title input {
	font-size: 24px;
	height: 18px;
}
.yl-logo{
	width: 100px;
	height: 28px;
	float: left;
}
.cell-item-hd {
	display: table-cell;
	vertical-align: middle;
	min-width: 85px;
	max-width: 96px;
	font-size: 14px;
	position: relative;
}
.cell-bd-view {
	position: relative;
	overflow: hidden;
}
.cell-item-ft {
	display: inline-block;
	position: absolute;
	top: 50%;
	right: 13px;
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
	overflow: hidden;
}
.right-img .cell-item-ft {
	height: 26px;
	margin-right: 4px;
}
.cell-item-bd {
	display: table-cell;
	vertical-align: middle;
	margin-left: 10px;
	min-height: 16px;
	overflow: hidden;
	min-width: 234px;
	max-width: 256px;
	padding-right: 26px;
	font-size: 13px;
}
.button-bottom {
    background-color: #fff;
    position: fixed;
	left: 0;
    bottom: 0;
    height: 48px;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    z-index: 66;
    -webkit-box-shadow: 0 0 10px #ccc;
    box-shadow: 0 0 10px #ccc;
}
</style>
