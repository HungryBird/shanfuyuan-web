import http from '@/http/http.js'

export const systemCustomer = (data) => {
	return http.http('/index/systemCustomer', 'get', data);
}