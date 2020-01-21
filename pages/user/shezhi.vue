<template>
	<view class="shezhi">
		<uni-list>
			<uni-list-item title="个人信息" @click="navigateToHandle('./userInfo')" />
		</uni-list>
	</view>
	
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default{
		components:{
			uniList,
			uniListItem,
		},
		methods: {
			// 页面跳转
			navigateToHandle (url) {
				uni.navigateTo({
					url,
				})
			}
		}
	}
</script>

<style>
	.shezhi{
		display: block;
		width: 100%;
	}
</style>
