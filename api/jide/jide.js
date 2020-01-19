import http from '@/http/http.js'

export const temple = (data) => {
	return http.http('/index/temple', 'get', data);
}