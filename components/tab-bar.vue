<template>
	<view class="tab-bar-wrap">
		<ul>
			<li v-for="(tab, index) in tabs" :key="index" @click="go(tab.url)">
				<img :src="index === active ? tab.selectIcon : tab.icon" />
				<view class="line"></view>
			</li>
		</ul>
	</view>
</template>

<script>
	export default {
		props: {
			active: {
				type: Number,
				default: 0,
			}
		},
		data() {
			return {
				tabs: [
					{
						name: '活动',
						url: '/pages/activity/activity',
						icon: 'static/img/tabbars/huodong.png',
						selectIcon: 'static/img/tabbars/huodong_xz.png',
					},
					{
						name: '运势',
						url: '/pages/luck/luck',
						icon: 'static/img/tabbars/yunshi.png',
						selectIcon: 'static/img/tabbars/yunshi_xz.png',
					},
					{
						name: '祭拜',
						url: '/pages/pray/pray',
						icon: 'static/img/tabbars/jibai.png',
						selectIcon: 'static/img/tabbars/jibai_xz.png',
					},
					{
						name: '积德',
						url: '/pages/turnDeserves/turnDeserves',
						icon: 'static/img/tabbars/jide.png',
						selectIcon: 'static/img/tabbars/jide_xz.png',
					},
					{
						name: '我的',
						url: '/pages/mine/mine',
						icon: 'static/img/tabbars/wode.png',
						selectIcon: 'static/img/tabbars/wode_xz.png',
					},
				]
			};
		},
		methods: {
			go(url) {
				uni.navigateTo({
					url,
				})
			}
		}
	}
</script>

<style lang="scss">
	.tab-bar-wrap{
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		border-top: 2px solid #E28A2C;
		background: #fff;
		ul{
			display: flex;
			width: 100%;
			box-sizing: border-box;
			li{
				position: relative;
				width: 20%;
				padding: 10upx 0;
				box-sizing: border-box;
				img{
					display: block;
					width: 50%;
					margin: 0 auto;
					object-fit: fill;
				}
				.line{
					position: absolute;
					top: 50%;
					left: 0;
					width: 100%;
					height: 50%;
					transform: translateY(-50%);
					border-right: 1px solid #8F8F94 !important;
					&:last-child{
						border-right: none;
					}
				}
			}
		}
	}
</style>
