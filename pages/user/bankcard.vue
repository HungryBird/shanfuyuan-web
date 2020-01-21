<template>
	<view class="content">
		<view class="content-top" v-if="cards.length > 0">
			<view class="card-item"
			v-for="(item, index) in cards"
			:key="index"
			>
				<view class="card-item-tip" v-if="item.is_default === 1">
					<view class="cit-bg"></view>
					<view class="cit-text">默</view>
				</view>
				<view class="card-item-body">
					<view class="cib-left">
						<image class="bank-logo" :src="item.bank_logo" mode=""></image>
					</view>
					<view class="cib-right">
						<view class="cibr-t color-3">
							{{ item.bank_name }}
						</view>
						<view class="cibr-b color-9">
							{{ item.card_number }}
						</view>
					</view>
				</view>
				<view class="mr-card" 
				v-if="item.is_default === 2"
				@click="setDefault(item.id)"
				>
					<button class="btn btn-w" :disabled='submitStatus' :loading='submitStatus'>设为默认</button>
				</view>
				<view class="card-btn"
				
				>
					<button class="btn btn-b" :disabled='delSubmitStatus' :loading='delSubmitStatus' @click="removeCard(item.id)">删除</button>
					<button class="btn btn-b" @click="selected(item)">选择</button>
					<button class="btn btn-b" @click="edit(item)">编辑</button>
				</view>
			</view>
		</view>
		<view class="cards-none" v-else>
			<image class="cards-none-img" src="/static/image/order.png" mode=""></image>
		</view>
		<view class="button-bottom">
			<button class="btn btn-b" @click="goAddcard()">添加银行卡</button>
		</view>
	</view>
</template>

<script>
	import { bankList, delBank } from '@/api/user/user.js'
export default {
	data () {
		return {
			mold: '',
			cards: [
				{
					"id": 9,
					"user_id": 188,
					"card_number": "654333333240101248777",
					"card_holder": "兰兰",
					"bank_name": "建设银行",
					"is_default": 0,
					"add_time": 1579080473,
					"mod_time": null
				}
			] ,// 我的银行卡列表
			submitStatus: false,
			delSubmitStatus: false
		}
	},
	onLoad (options) {
		if (options.mold && options.mold == 'select') {
			this.mold = options.mold
		}
	},
	onShow () {
		this.getBankCards()
	},
	methods:{
		edit(item) {
			let url = './add_bankcard?action=edit'
			for(const key in item) {
				url += `&${key}=${item[key]}`
			}
			uni.navigateTo({
				url,
			})
		},
		// 获取我的银行卡列表
		getBankCards() {
			bankList({page:1}).then(res => {
				if(res.code === 1) {
					return;
					this.cards = res.data.data;
				}
			})
		},
		// 删除银行卡
		removeCard (id) {
			uni.showModal({
				title: '提示',
				content: '确定删除该银行卡',
				success: function(res) {
					if (res.confirm) {
						this.delSubmitStatus = true;
						let data = {
							id,
						}
						delBank(data).then(res => {
							if (res.code === 1) {
								this.delSubmitStatus = false;
								this.getBankCards();
							}
							this.delSubmitStatus = false;
							console.log('res.msg: ', res.msg)
							this.$msg(res.msg);
						})
					} else if (res.cancel) {
						// 用户取消操作
					}
				}
			})
		},
		// 设置默认卡
		setDefault (id) {
			this.submitStatus = true;
			let data = {
				id: id
			}
			this.$api.setDefaultBankCard(data, res => {
				if (res.status) {
					this.$common.successToShow(res.msg, ress => {
						this.submitStatus = false;
						this.getBankCards();
					})
				} else {
					this.$common.errorToShow(res.msg);
					this.submitStatus = false;
				}
			})
		},
		// 添加新的银行卡
		goAddcard(){
			uni.navigateTo({
				url: './add_bankcard?action=add',
			})
		},
		selected (item) {
			let url = '/pages/user/withdraw_cash?';
			for(const key in item) {
				url += `${key}=${item[key]}&`
			}
			console.log('url: ', url);
			uni.navigateTo({
				url,
			})
		}
	}
}
</script>

<style lang="scss">
	.button-bottom{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
	}
	.card-btn{
		display: flex;
		flex-direction: row-reverse;
	}
</style>

<style>
.card-item{
	position: relative;
	background-color: #fff;
	margin: 26upx;
	border-radius: 10upx;
	box-shadow: 0 0 20upx #ccc;
	padding: 60upx 30upx 80upx;
}
.card-item-tip{
	position:absolute;
	top:0upx;
	left:0upx;
	z-index:10;
	border-top-left-radius:10upx;
	overflow:hidden;
	width:100upx;
	height:100upx;
}
.cit-bg{
	position:absolute;
	top:0;
	left:0;
	z-index:11;
	color:#ffffff;
	width:0upx;
	height:0upx;
	border-bottom:solid 100upx transparent;
	border-right:solid 100upx transparent;
	border-top:solid 100upx #FF7159;
}
.cit-text{
	position:absolute;
	top:0;
	left:0;
	z-index:12;
	color:#ffffff;
	margin-top:4upx;
	margin-left:14upx;
	font-size:30upx;

}
.card-item-body{
	position: relative;
}
.cib-left{
	position: absolute;
	top: 60%;
	transform: translateY(-50%);
	width: 250upx;
}
.bank-logo{
	width: 240upx;
	height: 70upx;
}
.cib-right{
	margin-left: 250upx;
}
.cibr-t{
	font-size: 30upx;
	margin-bottom: 10upx;
	text-align: center;
}
.cibr-b{
	font-size: 26upx;
	text-align: center;
}
.mr-card{
	position: absolute;
	right: 140upx;
	bottom: 0upx;
}
.card-btn{
	position: absolute;
	right: 30upx;
	bottom: 0upx;
}
.card-btn .btn,.mr-card .btn{
	font-size: 24upx;
	height: 48upx;
	line-height: 46upx;
	padding: 0 16upx;
	margin-left: 20px;
	margin-bottom: 10px;;
}
.cards-none{
	text-align: center;
	padding: 200upx 0;
}
.cards-none-img{
	width: 274upx;
	height: 274upx;
}
</style>
