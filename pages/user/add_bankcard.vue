<template>
	<view class="uni-padding-wrap uni-common-mt">
		<form>
			<view class="uni-form-item uni-column">
				<view class="title">银行卡号</view>
				<input class="uni-input" v-model="form.card_number" name="nickname" placeholder="请输入银行卡号" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">持卡人姓名</view>
				<input class="uni-input" v-model="form.card_holder" name="nickname" placeholder="请输入姓名" />
			</view>
			<!-- <view class="uni-form-item uni-column">
				<view class="title">银行名称</view>
				<text>{{ form.name }}</text>
			</view> -->
			<!-- <view class="uni-form-item uni-column">
				<view class="title">银行卡类型</view>
				<text>{{ form.type }}</text>
			</view> -->
			<view class="uni-form-item uni-column">
				<view class="title">开户行名</view>
				<input class="uni-input" name="nickname" v-model="form.bank_name" placeholder="请输入开户行名" />
			</view>
			<!-- <view class="uni-form-item uni-column">
				<view class="title">开户行地址</view>
				<input class="uni-input" name="nickname" placeholder="请输入姓名" />
			</view> -->
			<view class="uni-form-item uni-column">
				<view class="title">设为默认</view>
				<switch name="switch" @change="changeDefault" />
			</view>
		</form>
		<button @click="addBank">确定</button>
	</view>
</template>

<script>
	import '@/style/common.css'
	import { addBank, editBank } from '@/api/user/user.js'
	export default{
		data() {
			return {
				form: {
					id: '',
					card_number: '',
					card_holder: '',
					bank_name: '',
					is_default: false,
				},
				action: 'add',
			}
		},
		onLoad(param) {
			console.log('param: ', param)
			this.action = param.action;
			this.form.is_default = param.is_default === '1';
			if(param.action === 'edit') {
				for(const key in param) {
					this.form[key] = param[key];
				}
			}
		},
		methods:{
			changeDefault(e) {
				this.form.is_default = e.detail.value;
			},
			addBank() {
				if(!this.form.card_number) {
					this.$msg('请输入银行卡')
					return;
				}
				if(!this.form.card_holder) {
					this.$msg('请输入持卡人姓名')
					return;
				}
				if(!this.form.bank_name) {
					this.$msg('请输入开户行名')
					return;
				}
				uni.showLoading();
				console.log('this.action: ', this.action)
				if(this.action === 'add') {
					addBank(this.form).then(res => {
						if(res.code === 1) {
							setTimeout(() => {
								uni.navigateTo({
									url: '/pages/user/bankcard'
								})
							}, 500)
						}
						uni.hideLoading();
						this.$msg(res.msg);
						
					})
				}
				else {
					editBank(this.form).then(res => {
						if(res.code === 1) {
							setTimeout(() => {
								uni.navigateTo({
									url: '/pages/user/bankcard'
								})
							}, 500)
						}
						uni.hideLoading();
						this.$msg(res.msg);
					})
				}
				
			}
		}
	}
</script>

<style lang="scss">
	
</style>