<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	}
</script>

<style>
	@font-face {
		font-family:customFont;
		src: url(static/fonts/方正粗黑宋简体.ttf);
	}
	
	.custom-btn{
		display: inline-block;
		color: #fff;
		padding: 0 60upx;
		width: auto;
		border-top-left-radius: 60upx;
		border-top-right-radius: 60upx;
		border-bottom-left-radius: 60upx;
		border-bottom-right-radius: 60upx;
		background-image: linear-gradient(to right, rgb(235, 114, 033),  rgb(232, 172, 094));
		font-family: customFont;
	}
	
	/*每个页面公共css */
	page {
		min-height: 100%;
		display: flex;
	}

	/* #ifdef MP-BAIDU */
	page {
		width: 100%;
		height: 100%;
		display: block;
	}

	swan-template {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* 原生组件模式下需要注意组件外部样式 */
	custom-component {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	/* #ifdef MP-ALIPAY */
	page {
		min-height: 100vh;
	}

	/* #endif */

	/* 原生组件模式下需要注意组件外部样式 */
	m-input {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
		padding: 20upx;
	}

	.input-group {
		background-color: #ffffff;
		margin-top: 40upx;
		position: relative;
	}

	.input-group::before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
	}

	.input-row .title {
		width: 20%;
		height: 50upx;
		min-height: 50upx;
		padding: 15upx 0;
		padding-left: 30upx;
		line-height: 50upx;
	}

	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 15upx;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.btn-row {
		margin-top: 50upx;
		padding: 20upx;
	}

	button.primary {
		background-color: #0faeff;
	}
	
	uni-radio{
		transform: scale(0.75);
	}
	uni-radio .uni-radio-input {
	    -webkit-appearance: none;
	    appearance: none;
	    margin-right: 5px;
	    outline: 0;
	    border: 1px solid rgba(0,0,0,.1);
	    background-color: #FFE3BB;
	    border-radius: 50%;
	    width: 22px;
	    height: 22px;
	    position: relative;
	}
	uni-radio .uni-radio-input.uni-radio-input-checked{
		background-color: #fff !important;
		border: 1px solid #fff !important;
		box-shadow: #C8C7CC 0px 0px 4px 2px;
	}
	uni-radio .uni-radio-input.uni-radio-input-checked:before {
	    content: "";
		width: 80%;
		height: 80%;
		background-color: #E2892B;
		border-radius: 100%;
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%,-50%);
	}
</style>
