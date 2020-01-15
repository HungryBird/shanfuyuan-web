<template>
	<view class="content">
		<view class="top">
			<view class="gods">
				
			</view>
			<button class="custom-btn">确 定</button>
		</view>
		<view class="bottom">
			<img src="../../static/img/simiaofaguang.png" class="light" />
			<image src="../../static/img/simiao.png" mode="widthFix" class="temple"></image>
		</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss">
	.content{
		background: url(../../static/img/beijingtu.png);
		background-size: cover;
		background-repeat: no-repeat;
	}
	.bottom{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		.light{
			display: block;
			width: 100%;
			margin: 0 auto;
			object-fit: cover;
			animation: scaleLight 2s;
			animation-timing-function: ease-in-out;
			animation-iteration-count: infinite;
		}
		.temple{
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
		}
	}
	@keyframes scaleLight
	{
		0{
			transform: scale(1);
		}
		50%{
			transform: scale(1.2);
		}
		100%{
			transform: scale(1);
		}
	}
</style>
