import { getUpperCase, getUniStorageSync, isEmpty } from '@/utils/util.js'

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