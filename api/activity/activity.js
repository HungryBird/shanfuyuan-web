import http from '@/http/http.js'

export const articleList = (data) => {
	return http.http('/article/articleList', 'get', data);
}

export const articleDetail = (data) => {
	return http.http('/article/articleDetail', 'get', data);
}