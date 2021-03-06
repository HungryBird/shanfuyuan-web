import { getUpperCase, getUniStorageSync, isEmpty, clearUniStorage } from '@/utils/util.js'

let baseURL;

if(process.env.NODE_ENV === 'development'){
    baseURL = '/fo'
}else{
	baseURL = 'http://fo.nnzysp.com/api'
}

const http = (url, method = 'GET', data ,header = {}, timeout = 30000) => {
	const token = getUniStorageSync('token');
	if(!isEmpty(token)) {
		header['token'] = token;
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: 'http://fo.nnzysp.com/api' + url,
			method: getUpperCase(method),
			header,
			data,
			timeout,
			success: (res) => {
				if(res.data.code >= 10000) {
					clearUniStorage();
					uni.navigateTo({
						url: '/pages/login/login'
					})
					return;
				}
				resolve(res.data);
			},
			fail: (err) => {
				console.log('fail: ', err);
				reject(err);
			}
		})
	})
}

export default{
	baseURL,
	http,
}