<template>
    <view class="content" :style="{'padding-bottom': paddingBottom + 'px'}">
        <!-- <view class="hello">
            <view class="title">
                您好 {{userName}}，您已成功登录。
            </view>
            <view class="ul">
                <view>这是 uni-app 带登录模板的示例App首页。</view>
                <view>在 “我的” 中点击 “退出” 可以 “注销当前账户”</view>
            </view>
        </view> -->
		<view class="main">
			<button @click="setPaddingBottom">test</button>
			<view class="good">
				<img  />
			</view>
		</view>
        <!-- <view v-if="!hasLogin" class="hello">
            <view class="title">
                您好 游客。
            </view>
            <view class="ul">
                <view>这是 uni-app 带登录模板的示例App首页。</view>
                <view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
            </view>
        </view> -->
		<tab-bar :active="2" ref="tab"></tab-bar>
    </view>
</template>

<script>
	const godDict = {
		1: {
			img: '../../static/img/pray/gods/rulai_daxiang.png',
		},
		2: {
			img: '../../static/img/pray/gods/milefo_daxiang.png',
		},
		3: {
			img: '../../static/img/pray/gods/guanyin_daxiang.png',
		},
		4: {
			img: '../../static/img/pray/gods/daxiang.png',
		},
		5: {
			img: '../../static/img/pray/gods/yaoshifo_daxiang.png',
		},
		6: {
			img: '../../static/img/pray/gods/guangong_daxiang.png',
		}
	}
	
    import {
        mapState
    } from 'vuex'
	
	import tabBar from '../../components/tab-bar.vue'
	import { isEmpty } from '@/utils/util.js'

    export default {
		data() {
			return {
				paddingBottom: 0,
			}
		},
		components:{
			tabBar,
		},
        computed: {
			...mapState(['token', 'god']),
			godImg() {
				console.log('god: ', this.god);
				return this.god.id;
			}
		},
        onLoad() {
			// 
        },
		onResize() {
			this.setPaddingBottom();
		},
		onReady() {
			this.setPaddingBottom();
		},
		methods:{
			// 设置padding-bottom
			setPaddingBottom() {
				setTimeout(() => {
					this.$nextTick(function(){
						this.paddingBottom = this.$refs.tab.$el.offsetHeight;
					})
				}, 0)
			}
		}
    }
</script>

<style>
	.content{
		padding: 0;
	}
	.main{
		width: 100%;
		height: 100%;
		background: url(../../static/img/pray/jibaibeijing.png) no-repeat center center;
		background-size: cover;
	}
    .hello {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .title {
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul {
        font-size: 30upx;
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul>view {
        line-height: 50upx;
    }
</style>
