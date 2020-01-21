import http from '@/http/http.js'

export const userInfo = (data) => {
	return http.http('/user/userInfo', 'get', data);
}

export const bankList = (data) => {
	return http.http('/user/bankList', 'get', data);
}

export const doWithdraw = (data) => {
	return http.http('/user/doWithdraw', 'post', data);
}

export const delBank = (data) => {
	return http.http('/user/delBank', 'post', data);
}

export const addBank = (data) => {
	return http.http('/user/addBank', 'post', data);
}

export const editBank = (data) => {
	return http.http('/user/editBank', 'post', data);
}

export const balanceLog = (data) => {
	return http.http('/user/balanceLog', 'get', data);
}

export const teamList = (data) => {
	return http.http('/user/teamList', 'get', data);
}

export const withdrawList = (data) => {
	return http.http('/user/withdrawList', 'get', data);
}

export const uploadImg = (data) => {
	console.log('data: ', data);
	return http.http('/user/uploadImg', 'post', data);
}

export const editUserInfo = (data) => {
	return http.http('/user/editUserInfo', 'post', data);
}

export const myCode = (data) => {
	return http.http('/user/myCode', 'post', data);
}