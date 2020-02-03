<template>
    <view class="content">
		<nav-bar title="大师算命"></nav-bar>
        <view class="login-form-group">
            <view class="input-row">
                <text class="title">姓名：</text>
                <input type="text" clearable focus v-model="form.name" placeholder="请输入您的姓名"></input>
            </view>
            <view class="input-row">
                <text class="title">属相：</text>
                <input type="text" v-model="form.zodiac" placeholder="请输入您的属相"></input>
            </view>
			<view class="input-row">
			    <text class="title">手机号码：</text>
			    <input type="text" v-model="form.mobile" placeholder="请输入您的手机号码"></input>
			</view>
			<view class="input-row">
			    <text class="title">出生时间：</text>
			    <input type="text" v-model="form.birth" placeholder="年/月/日/时辰"></input>
			</view>
			<view class="input-row">
			    <text class="title">地址：</text>
			    <input type="text" v-model="form.address" placeholder="请输入您的地址"></input>
			</view>
			<view class="input-row">
				<radio-group @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="item in sexs" :key="item.value">
						<view>{{item.label}}</view>
						<view>
							<radio class="custm-radio" :value="item.value" :checked="item.value === form.sex" />
						</view>
					</label>
				</radio-group>
			</view>
			<view class="input-row" style="margin-bottom: 120upx;">
			    <text class="title">随喜功德：</text>
			    <input type="text" v-model="form.price" placeholder="100元起"></input>
			</view>
        </view>
        <view class="btn-row">
            <button type="primary" class="primary" @click="createVirtueOrder" style="margin-bottom: 20upx;">确定</button>
			<button type="primary" class="primary" @click="goSuanminging">查看算命状态</button>
        </view>
    </view>
</template>

<script>
    import service from '../../service.js';
    import mInput from '../../components/m-input.vue';
	import { createVirtueOrder } from '@/api/jide/jide.js'
	import { isEmpty } from '@/utils/util.js'
	import navBar from '@/components/nav-bar.vue'

    export default {
        components: {
            mInput,
			navBar,
        },
        data() {
            return {
				form: {
					name: '',
					zodiac: '',
					mobile: '',
					birth: '',
					address: '',
					sex: '1',
					price: '',
				},
				sexs: [
					{
						label: '男',
						value: '1',
					},
					{
						label: '女',
						value: '2',
					}
				]
            }
        },
        methods: {
			radioChange(e){
				this.form.sex = e.detail.value;
			},
            createVirtueOrder() {
                if (isEmpty(this.form.name)) {
                    uni.showToast({
                        icon: 'none',
                        title: '请输入姓名'
                    });
                    return;
                }
                if (isEmpty(this.form.zodiac)) {
                    uni.showToast({
                        icon: 'none',
                        title: '请输入属相'
                    });
                    return;
                }
				if (isEmpty(this.form.mobile)) {
				    uni.showToast({
				        icon: 'none',
				        title: '请输入手机号码'
				    });
				    return;
				}
				if (isEmpty(this.form.birth)) {
				    uni.showToast({
				        icon: 'none',
				        title: '请输入出生年月日时辰'
				    });
				    return;
				}
				if (isEmpty(this.form.address)) {
				    uni.showToast({
				        icon: 'none',
				        title: '请输入地址'
				    });
				    return;
				}
                if (isEmpty(this.form.price)) {
                    uni.showToast({
                        icon: 'none',
                        title: '请输入价格'
                    });
                    return;
                }

				const obj = {};
				for(const key in this.form) {
					if(key === 'sex' || key === 'price') {
						obj[key] = Number(this.form[key])
					}
					else{
						obj[key] = this.form[key];
					}
				}
				uni.showLoading();
                createVirtueOrder(this.form).then(res => {
					if(res.code === 1) {
						this.$msg(res.msg);
						setTimeout(() => {
							this.goSuanminging();
						}, 200)
					}
					else {
						this.$msg(res.msg);
					}
					uni.hideLoading();
				}).catch(err => {
					console.error(err)
				})
            },
			goSuanminging() {
				uni.navigateTo({
					url: './turnDeserves?action=check'
				})
			}
        }
    }
</script>

<style lang="scss">
	.content{
		background: url(../../static/img/jide/suanmingbeijing.png);
		background-size: cover;
		background-repeat: no-repeat;
	}
	.login-form-group{
		display: flex;
		flex-direction: column;
		width: 500upx;
		margin: 0 auto;
		margin-top: 40px;
		.input-row{
			display: flex;
			align-items: center;
			margin-bottom: 10upx;
			.title{
				width: auto;
				font-weight: 600;
				color: #646262;
				padding: 0;
			}
			uni-input{
				flex: 1;
				line-height: 1.8rem;
				height: 1.8rem;
				text-indent: 0.8em;
				// box-shadow: 0 1px 0 0 rgba(0,0,0,.3) inset,1px 0 0 0 rgba(0,0,0,.3) inset,0 0 1px 0 rgba(0,0,0,.3) inset,0 0 0 1px rgba(0,0,0,.3) inset;
				border: 1px solid rgba(0,0,0,.1);
				font-size: 28upx;
				background-color: #ffe4ba;
				border-top-left-radius: 50upx;
				border-top-right-radius: 50upx;
				border-bottom-left-radius: 50upx;
				border-bottom-right-radius: 50upx;
			}
			uni-radio-group{
				margin: 10upx 0;
				uni-label{
					>uni-view{
						display: inline-block;
						&:first-child{
							margin-right: 10upx;
						}
						&:nth-child(2){
							margin-right: 20upx;
						}
					}
				}
			}
		}
	}
	.btn-row{
		width: 500upx;
		margin: 50upx auto 26upx auto;
		padding: 0;
		uni-button{
			border-top-left-radius: 40upx;
			border-top-right-radius: 40upx;
			border-bottom-left-radius: 40upx;
			border-bottom-right-radius: 40upx;
			background-image: linear-gradient(to right, rgb(235, 114, 033),  rgb(232, 172, 094));
			font-family: customFont;
		}
	}
</style>
