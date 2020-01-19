import http from '@/http/http.js'

// 获取贡品
export const enshrineType = (data) => {
	return http.http('/index/enshrineType', 'get', data);
}

// 获取未烧完的贡品
export const orderList = (data) => {
	return http.http('/order/orderList', 'get', data);
}