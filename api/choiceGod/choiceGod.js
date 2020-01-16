import http from '@/http/http.js'

export const buddhalist = (data) => {
	return http.http('/index/buddhalist', 'get', data);
}

export const ownBuddha = (data) => {
	return http.http('/index/ownBuddha', 'get', data);
}