<template>
	<view class="navi-bar" :class="{opacity: !opacity}">
		<view class="goback-btn" @click="goBack"></view>
		<view class="title">{{ title }}</view>
		<view class="sound" @click="toggleSound">
			<img :src="slience ? `${img}_guanbi.png` : `${img}.png`" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: `${this.$pathURL}static/img/shengyin`,
				slience: false,
			};
		},
		props: {
			title: {
				type: String,
				default: '',
			},
			opacity: {
				type: Boolean,
				default: true,
			},
		},
		methods:{
			toggleSound() {
				this.slience = !this.slience;
				this.$emit('toggle-sound', this.slience);
			},
			goBack() {
				this.$emit('go-back');
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
.navi-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  color: #fff;
  background-color: #E38A2C;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-image: url(../static/img/user/xiaobantou.png);
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .goback-btn{
	  // float: left;
	  width: 60upx;
	  height: 60upx;
	  background-image: url('../static/img/fanhui.png');
	  background-size: cover;
	  background-repeat: no-repeat;
	  margin-left: 20upx;
  }
  .title{
	  font-family: customFont;
  }
  .sound{
	  width: 60upx;
	  height: 60upx;
	  margin-right: 20upx;
	  img{
		  display: block;
		  width: 100%;
		  object-fit: cover;
	  }
  }
}
.navi-bar.opacity{
	background: none;
}
</style>
