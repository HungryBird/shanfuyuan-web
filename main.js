import Vue from 'vue'
import App from './App'

import store from './store'

import * as Common from './config/common.js'
import * as Db from './config/db.js'
import * as Config from './config/config.js'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$common = Common;
Vue.prototype.$db = Db;
Vue.prototype.$config = Config;

Vue.prototype.$pathURL = process.env.NODE_ENV === 'development' ? '' : '/web/';

App.mpType = 'app'

const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}

Vue.prototype.$msg = msg;

const app = new Vue({
    store,
    ...App
})
app.$mount()
