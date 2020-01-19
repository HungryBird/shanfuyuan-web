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
        setToken(state, token) {
            state.token = token;
			setUniStorage('token', token);
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        },
		choiceGod(state, god) {
			state.god = god;
			setUniStorage('god', god);
		}
    }
})

export default store
