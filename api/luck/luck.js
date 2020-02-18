import http from '@/http/http.js'

export const fortune = (data) => {
	return http.http('/index/news_fortune', 'post', data);
}