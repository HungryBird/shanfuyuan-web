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
        hasLogin: false,
        token: getUniStorageSync('token'),
		god: getUniStorageSync('god'),
    },
	getters: {
		getToken(state) {
			return state.token;
		},
		getGod(state) {
			return state.god;
		}
	},
    mutations: {
        login(state, userName) {
            state.userName = userName || '新用户';
            state.hasLogin = true;
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        },
		choiceGod(state, god) {
			console.log('god: ', god);
			state.god = god;
		}
    }
})

export default store
