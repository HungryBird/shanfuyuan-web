import { getUpperCase } from '@/utils/util.js'

let baseURL;

if(process.env.NODE_ENV === 'development'){
    baseURL = '/fo'
}else{
	baseURL = 'http://fo.nnzysp.com/api'
}

const http = (url, method = 'GET', header = {}, data, timeout = 30000) => {
	return new Promise(resolve => {
		uni.request({
			url: 'http://fo.nnzysp.com/api' + url,
			method: getUpperCase(method),
			header,
			data,
			timeout,
			success: (res) => {
				resolve(res);
			},
			fail: (res) => {
				resolve(res);
			}
		})
	})
}

export default{
	baseURL,
	http,
}