<template>
	<view class="jide">
		<nav-bar title="积德"></nav-bar>
		<view class="jide-main">
			<view class="middle">
				<view class="temple">
					<view class="lingxing"></view>
					<view class="top">
						<img :src="temples.bei.pic" />
					</view>
					<view class="middle"></view>
					<view class="bottom"></view>
				</view>
				<button class="custom-btn">大师算命</button>
			</view>
		</view>
		<tab-bar :active="3"></tab-bar>
	</view>
</template>

<script>
	import tabBar from '../../components/tab-bar.vue'
	import navBar from '../../components/nav-bar.vue'
	import { temple } from '@/api/jide/jide.js'
	export default{
		components:{
			tabBar,
			navBar
		},
		data() {
			return{
				temples: {
					dong: {
						"id": 4,
						"name": "12312",
						"desc": "<p>12321</p>",
						"pic": "/static/img/jide/dong_simiao.png",
						"status": 1,
						"created_time": "1579168554",
						"updated_time": 1579168554,
						"video": "http://test.fo.com/uploads/20200116/7a7ef4c9cb9320d054b271445cf10e32.mp4",
						"position": "东"
					},
					nan: {
						"id": 5,
						"name": "21122121",
						"desc": "<p>1212</p>",
						"pic": "../../static/img/jide/nan_simiao.png",
						"status": 1,
						"created_time": "1579243565",
						"updated_time": 1579243565,
						"video": "http://test.fo.com/uploads/20200117/48ec03d2a472ed8fabba173a03b86216.mp4",
						"position": "南"
					},
					xi: {
						"id": 6,
						"name": "12222222222",
						"desc": "<p>1222222222</p>",
						"pic": "../../static/img/jide/xi_simiao.png",
						"status": 1,
						"created_time": "1579243583",
						"updated_time": 1579243583,
						"video": "http://test.fo.com/uploads/20200117/497c0899f7edf5e6a3341be0d40d1089.mp4",
						"position": "西"
					},
					bei: {
						"id": 7,
						"name": "12222222222",
						"desc": "<p>11111111111111111111</p>",
						"pic": "static/img/jide/bei_simiao.png",
						"status": 1,
						"created_time": "1579243600",
						"updated_time": 1579243600,
						"video": "http://test.fo.com/uploads/20200117/be0acaba6e3647d0ca5c63415b326391.mp4",
						"position": "北"
					},
					zhong: {
						"id": 8,
						"name": "222222",
						"desc": "<p>1222222222</p>",
						"pic": "../../static/img/jide/zhong_simiao.png",
						"status": 1,
						"created_time": "1579243664",
						"updated_time": 1579243664,
						"video": "http://test.fo.com/uploads/20200117/90d89160b0a707318e86ad1ee41deb15.mp4",
						"position": "中"
					}
				}
			}
		},
		created() {
			// console.log(this.$store)
			this.temple();
		},
		methods:{
			temple() {
				temple().then(res => {
					if(res.code === 1) {
						res.data.forEach(item => {
							if(item.position === '东') {
								this.temples.dong = item;
							}
							else if(item.position === '南') {
								this.temples.nan = item;
							}
							else if(item.position === '西') {
								this.temples.xi = item;
							}
							else if(item.position === '北') {
								this.temples.bei = item;
							}
							else if(item.position === '中') {
								this.temples.zhong = item;
							}
						})
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
	.jide{
		display: flex;
		width: 100%;
		flex-direction: column;
		.jide-main{
			flex: 1;
			margin-top: 40px;
			.middle{
				text-align: center;
			}
		}
	}
</style>
