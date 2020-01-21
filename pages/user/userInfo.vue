<template>
	<view class="uni-padding-wrap uni-common-mt">
		<form>
			<view class="uni-form-item uni-column">
				<view class="title">头像</view>
				<view class="avatar" @click="upload">
					<img :src="avatar" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">昵称</view>
				<input class="uni-input" v-model="form.nickname" name="nickname" placeholder="请输入姓名" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">性别</view>
				<radio-group @change="radioChange">
					<radio :checked="form.sex == 1" value="1">男</radio>
					<radio :checked="form.sex != 1" value="2">女</radio>
				</radio-group>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">生日</view>
				<input v-model="form.birthday" placeholder="例如2020-01-01" />
			</view>
		</form>
		<button @click="editUserInfo" class="btn">确定</button>
	</view>
</template>

<script>
	import '@/style/common.css'
	import { uploadImg, editUserInfo, userInfo } from '@/api/user/user.js'
	export default{
		data() {
			return {
				form: {
					avatar: '',
					sex: '',
					nickname: '',
					birthday: '',
				},
				avatar: '',
				uploadFile: null,
			}
		},
		onLoad() {
			this.userInfo();
		},
		methods:{
			editUserInfo() {
				uni.showLoading()
				editUserInfo(this.form).then(res => {
					uni.hideLoading();
					this.$msg(res.msg);
				})
			},
			userInfo() {
				uni.showLoading()
				userInfo().then(res => {
					if(res.code === 1) {
						for(const key in res.data) {
							if(this.form.hasOwnProperty(key)) {
								if(key === 'sex') {
									this.form.sex = res.data[key] + ''
								}
								else {
									this.form[key] = res.data[key];
								}
								if(key === 'avatar') {
									this.avatar = res.data['avatar'];
								}
							}
						}
						uni.hideLoading()
					}
				})
			},
			radioChange(e){
				this.form.sex = e.detail.value;
			},
			upload() {
				uni.chooseImage({
					count: 1,
					success: (e) => {
						console.log('e ', e)
						const avatar = e.tempFiles[0];
						const token = this.$store.getters.getToken;
						const header = {
								'Accept': 'application/json',
								'Content-Type': 'multipart/form-data',
								'token': token,
						}
						console.log('header: ', header);
						uni.uploadFile({
							url: 'http://fo.nnzysp.com/api/user/uploadImg',
							filePath: e.tempFilePaths[0],
							fileType: 'image',
							name: 'file',
							header,
							formData: {
								'method': 'images.upload',
								'upfile': avatar
							},
							success: (uploadFileRes) => {
								const res = JSON.parse(uploadFileRes.data);
								if(res.code === 1) {
									this.form.avatar = res.src;
									this.avatar = res.url;
								}
								else{
									this.$msg(res.msg);
								}
								
							},
							fail: (error) => {
								if (error && error.response) {
									showError(error.response);
								}
							},
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.avatar{
		display: block;
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		overflow: hidden;
		background-color: #333333;
		img{
			display: block;
			height: 100%;
			object-fit: cover;
		}
	}
	.btn{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
	}
</style>