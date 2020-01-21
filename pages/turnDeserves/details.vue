<template>
	<view class="temple-detail">
		<nav-bar title="积德"></nav-bar>
		<view class="main-content">
			<view class="title">{{ name }}</view>
			<view class="video">
				<video :muted="true" :autoplay="true" style="width:100%;height:200px;object-fit: fill" :src="video"></video>
			</view>
			<view>
				<text class="position-bei position" v-if="position === '北'">北</text>
				<text class="position-dong position" v-if="position === '东'">东</text>
				<text class="position-nan position" v-if="position === '南'">南</text>
				<text class="position-xi position" v-if="position === '西'">西</text>
				<text class="position-zhong position" v-if="position === '中'">中</text>
			</view>
			<view>功德值：{{ merits_virtues }}</view>
			<view v-html="desc"></view>
		</view>
	</view>
</template>

<script>
	import navBar from '../../components/nav-bar.vue'
	import { templeDetail } from '@/api/jide/jide.js'
	export default{
		components:{
			navBar,
		},
		data() {
			return {
				name: '',
				pic: '',
				desc: '',
				video: '',
				merits_virtues: '',
				position: '',
			}
		},
		onLoad(query) {
			this.templeDetail(query.id);
		},
		methods:{
			templeDetail(id) {
				templeDetail({id}).then(res => {
					if(res.code === 1) {
						for(const key in res.data) {
							this[key] = res.data[key];
						}
					}
					else {
						this.$msg(res.msg);
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.temple-detail{
		width: 100%;
		margin-top: 40px;
		padding: 40upx;
		color: #666;
		font-size: 28upx;
	}
	.title{
		font-size: 56upx;
	}
	.position-font{
		position: absolute;
		left: 50%;
		top: 30%;
		transform: translate(-50%, -50%);
		width: 33.3%;
		img{
			display: block;
			width: 100%;
			object-fit: cover;
		}
	}
	.position{
		font-family: customFont;
		font-size: 36upx;
	}
	.position-bei{
		color: #fe6462;
	}
	.position-xi{
		color: #dbb129;
	}
	.position-zhong{
		color: #fe6462;
	}
	.position-nan{
		color: #40bad2;
	}
	.position-dong{
		color: #73c640;
	}
</style>
