import Vue from 'vue'
import Vuex from 'vuex'
import { setUniStorage, getUniStorageSync } from '../utils/util.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        token: getUniStorageSync('token'),
		god: getUniStorageSync('god'),
		user: getUniStorageSync('user'),
		orderList: getUniStorageSync('orderList'),
    },
	getters: {
		getToken(state) {
			return state.token;
		},
		getGod(state) {
			return state.god;
		},
		getUser(state) {
			return state.user;
		},
		getOrderList(state) {
			return state.orderList;
		}
	},
    mutations: {
		// 存储未燃烧完的贡品
		setOrderList(state, orderList) {
			state.orderList = orderList;
			setUniStorage('orderList', orderList);
		},
        setToken(state, token) {
			console.log('setToken: ', token);
            state.token = token;
			setUniStorage('token', token);
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        },
		choiceGod(state, god) {
			console.log('god: ', god);
			state.god = god;
			setUniStorage('god', god);
		},
		setUser(state, user) {
			state.user = user;
			setUniStorage('user', user);
		}
    }
})

export default store
