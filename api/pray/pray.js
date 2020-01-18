import http from '@/http/http.js'

// 获取贡品
export const enshrineType = (data) => {
	return http.http('/index/enshrineType', 'get', data);
}