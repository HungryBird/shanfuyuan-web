<template>
	<view class="luck">
		<nav-bar title="运势"></nav-bar>
		<view class="luck-main">
			<view class="top">
				<img src="../../static/img/luck/shu.png" />
				<view class="text">
					属相运势属相运势属相运势属相运势属相运势属相运势属相运势属相运势属相运势属相运势属相运势属相运势属相运势属相运势属相运势属相运势属相运势属相运势属相运势属相运势属相运势属相运势属相运势属相运势
				</view>
			</view>
			<view class="middle">
				
			</view>
		</view>
		<tab-bar :active="1"></tab-bar>
	</view>
</template>

<script>
	import tabBar from '../../components/tab-bar.vue'
	import navBar from '../../components/nav-bar.vue'
	export default{
		components:{
			tabBar,
			navBar
		}
	}
</script>

<style lang="scss">
	.luck{
		display: flex;
		width: 100%;
		flex-direction: column;
		.luck-main{
			flex: 1;
			margin-top: 40px;
			.top{
				padding: 40upx;
				display: flex;
				background: #DDDDDD;
				img{
					width: 30%;
					object-fit: contain;
					margin-right: 40upx;
				}
				.text{
					flex: 1;
					font-size: 12px;
					color: #666;
				}
			}
		}
	}
</style>
