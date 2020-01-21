<template>
	<view style="width: 100%;">
		<swiper :indicator-dots="false" @change="changeSwiper">
			<swiper-item v-for="(god, index) in godDict" :key="'god' + index" class="inner">
				<view class="img-wrap">
					<!-- <img :src="god.img" /> -->
					<view class="name">
						{{ god.name }}
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import navBar from '../../components/nav-bar.vue'
	import pData from '../pray/data.js'
	export default{
		components:{
			navBar,
		},
		data() {
			return {
				godDict: pData.godDict,	// 根据id查找对应的神佛图片
			}
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
