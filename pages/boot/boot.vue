<template>
	<view class="content">
		<view class="main">
			<image mode="widthFix" src="../../static/img/beijingtuan.png"></image>
			<view class="inner">
				<view class="top">
					<view class="top-section">
						<img src="../../static/img/shan.png" />
					</view>
					<view class="top-section">
						<img src="../../static/img/fu.png" />
					</view>
					<view class="top-section">
						<img src="../../static/img/yuan.png" />
					</view>
				</view>
				<image mode="widthFix" class="middle" src="../../static/img/pinyin.png"></image>
				<image mode="widthFix" class="bottom" src="../../static/img/fubiaoti.png"></image>
				<img src="../../static/img/yunyi.png" class="yun yun1" />
				<img src="../../static/img/yunyi.png" class="yun yun2" />
				<img src="../../static/img/daguang.png" class="light" />
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		onReady() {
			setTimeout(() => {
				uni.switchTab({
					url: '../main/main'
				})
			}, 3500)
		}
	}
</script>

<style lang="scss">
	.content{
		background: url(../../static/img/dengluyebeijing.png);
		background-size: cover;
		background-repeat: no-repeat;
		.main{
			position: relative;
			width: 80%;
			margin: 160upx auto;
			uni-image{
				width: 100%;
				height: auto;
			}
			.inner{
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				width: 100%;
				text-align: center;
				.top{
					height: auto;
					margin: 0 auto;
					overflow: hidden;
					display: flex;
					.top-section{
						flex: auto;
						opacity: 0;
						&:first-child{
							animation: changeOpacity 0.5s;
							animation-fill-mode: forwards;
						}
						&:nth-child(2){
							animation: changeOpacity 0.75s;
							animation-delay: 0.35s;
							animation-fill-mode: forwards;
						}
						&:nth-child(3){
							animation: changeOpacity 1s;
							animation-delay: 0.7s;
							animation-fill-mode: forwards;
						}
						uni-image{
							width: 100%;
							height: 100%;
						}
						img{
							display: block;
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}
					// background-image: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1));
				}
				.middle{
					width: 40%;
					height: auto;
					opacity: 0;
					animation: changeOpacity 1s;
					animation-delay: 1.1s;
					animation-fill-mode: forwards;
				}
				.bottom{
					width: 70%;
					height: auto;
					opacity: 0;
					margin-top: 20upx;
					animation: changeOpacity 1s;
					animation-delay:1.1s;
					animation-fill-mode: forwards;
				}
				.yun{
					position: absolute;
					display: block;
					width: auto;
					height: auto;
					opacity: 0.5;
					transition: all 1s;
				}
				.yun1{
					top: 10%;
					left: -100%;
					animation: moveYun1 1s;
					animation-timing-function: ease-out;
					animation-delay:1.1s;
					animation-fill-mode: forwards;
				}
				.yun2{
					top: 35%;
					right: -100%;
					animation: moveYun2 1s;
					animation-timing-function: ease-out;
					animation-delay:1.1s;
					animation-fill-mode: forwards;
				}
				.light{
					position: absolute;
					top: -360upx;
					left: 120upx;
					// opacity: 0.5;
					transform: scale(0);
					animation: scaleLight 1.5s;
					animation-delay:1.1s;
					animation-fill-mode: forwards;
					animation-timing-function: ease-in-out;
					
				}
			}
		}
	}
	
	@keyframes scaleLight
	{
		0{
			transform: scale(0.3);
		}
		50%{
			transform: scale(0.6);
		}
		100%{
			transform: scale(0.5);
			opacity: 0.4;
		}
	}
	@keyframes moveYun1
	{
		from{
			left: -100%;
			opacity: 0.5;
		}
		to{
			left: 0;
			opacity: 1;
		}
	}
	@keyframes moveYun2
	{
		from{
			right: -100%;
			opacity: 0.5;
		}
		to{
			right: 0;
			opacity: 1;
		}
	}
	@keyframes changeOpacity
	{
		from{
			opacity: 0;
		}
		to{
			opacity: 1;
		}
	}
</style>
