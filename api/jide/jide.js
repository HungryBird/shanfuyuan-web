import http from '@/http/http.js'

export const temple = (data) => {
	return http.http('/index/temple', 'get', data);
}

export const createVirtueOrder = (data) => {
	return http.http('/order/createVirtueOrder', 'post', data);
}

export const virtueOrderStatus = (data) => {
	return http.http('/order/virtueOrderStatus', 'get', data);
}

export const templeDetail = (data) => {
	return http.http('/index/templeDetail', 'get', data);
}