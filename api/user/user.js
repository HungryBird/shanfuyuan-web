import http from '@/http/http.js'

export const userInfo = (data) => {
	return http.http('/user/userInfo', 'get', data);
}