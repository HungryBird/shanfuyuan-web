import http from '@/http/http.js'

export const register = (data) => {
	return http.http('/login/register', 'post', data);
}