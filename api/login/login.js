import http from '@/http/http.js'

export const login = (data) => {
	return http.http('/login/login', 'post', data);
}

export const logOut = (data) => {
	return http.http('/login/logOut', 'get', data);
}