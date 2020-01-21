<template>
	<view class="yaoqing">
		<img :src="src" />
	</view>
</template>

<script>
	import {myCode} from '@/api/user/user.js'
	export default{
		data() {
			return {
				src: '',
			}
		},
		onLoad() {
			this.myCode()
		},
		methods:{
			myCode() {
				uni.showLoading()
				const str = location.href.split('#')[0];
				const register_url = `${str}/#/${this.$route.path}`
				myCode({register_url}).then(res => {
					if(res.code !== 1) {
						this.$msg(res.msg);
					}
					else {
						this.src = res.data.url;
					}
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style>
	.yaoqing{
		width: 100%;
		padding: 20upx;
		text-align: center;
	}
</style>
