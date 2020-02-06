export default {
	computed: {
		middleHeight() {
			const info = uni.getSystemInfoSync();
			const windowHeight = info.windowHeight;
			const navHeight = 44;
			const tabHeight = 50;
			return windowHeight - navHeight - tabHeight;
		},
		windowHeight() {
			const info = uni.getSystemInfoSync();
			const windowHeight = info.windowHeight;
			return windowHeight;
		}
	}
}