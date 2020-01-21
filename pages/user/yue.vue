<template>
	<view>
		<swiper :indicator-dots="false" :display-multiple-items="1">
			<swiper-item >
				1
			</swiper-item>
			<swiper-item >
				2
			</swiper-item>
			<swiper-item >
				3
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import navBar from '../../components/nav-bar.vue'
	export default{
		components:{
			navBar,
		}
	}
</script>

<style>
</style>
