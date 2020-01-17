<template>
	<view class="mask" v-show="show" @click.stop="close">
		<view class="mask-inner">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'customMask',
		data() {
			return {
				show: false,
			};
		},
		methods:{
			open() {
				this.show = true;
			},
			close() {
				this.show = false;
			}
		}
	}
</script>

<style lang="scss">
	.mask{
		position: fixed;
		top: calc(var(--window-top) + env(safe-area-inset-top));
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 99;
		position: fixed;
		text-align: center;
		.mask-inner{
			position: fixed;
			bottom: 0px;
			top: 0px;
			left: 0px;
			right: 0px;
			background-color: rgba(0, 0, 0, 0.4);
			transition-duration: 0.3s;
		}
	}
</style>
