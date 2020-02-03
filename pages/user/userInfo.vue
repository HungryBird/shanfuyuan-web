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
				<!-- <input v-model="form.birthday" placeholder="例如2020-01-01" /> -->
				<picker mode="date" :value="form.birthday" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{form.birthday}}</view>
				</picker>
			</view>
		</form>
		<button @click="editUserInfo" class="btn">确定</button>
	</view>
</template>

<script>
	import '@/style/common.css'
	import { uploadImg, editUserInfo, userInfo } from '@/api/user/user.js'
	
	function getDate(type) {
		const date = new Date();
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
	
		return `${year}-${month}-${day}`;
	}
	
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
				startDate:getDate('start'),
				endDate:getDate('end'),
			}
		},
		onLoad() {
			this.userInfo();
		},
		methods:{
			bindDateChange(e) {
				this.form.birthday = e.target.value;
			},
			editUserInfo() {
				uni.showLoading()
				editUserInfo(this.form).then(res => {
					uni.hideLoading();
					this.$msg(res.msg);
					userInfo().then(uRes => {
						this.$store.commit('setUser', uRes.data)
					})
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
								else if(key === 'avatar') {
									if(res.data[key]) {
										this.avatar = res.data['avatar'];
									}
								}
								else if(key === 'birthday') {
									if(res.data['birthday']) {
										this.form.birthday = res.data['birthday'];
									}
								}
								else {
									this.form[key] = res.data[key];
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
						const avatar = e.tempFiles[0];
						const filePath = e.tempFilePaths[0];
						const token = this.$store.state.token;
						const self = this;
						uni.uploadFile({
							name: 'avatar',
							url: 'http://fo.nnzysp.com/api/user/uploadImg',
							filePath,
							header: {
								token,
							},
							success(res) {
								const data = JSON.parse(res.data);
								const url = data.data.url;
								const src = data.data.src;
								self.form.avatar = src;
								self.avatar = url;
							},
							fail(res) {
								console.error('fail: ', res);
							}
						});
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
			width: 100%;
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