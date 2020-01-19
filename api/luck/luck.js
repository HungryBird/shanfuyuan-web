import http from '@/http/http.js'

export const fortune = (data) => {
	return http.http('/index/fortune', 'post', data);
}