import axios from 'axios';
import { getToken } from './token';

axios.defaults.timeout = 2500;

export const swrApi = axios.create({
	headers: {
		Authorization: `Bearer ${getToken('accessToken')}`,
	},
	withCredentials: true,
});

swrApi.interceptors.response.use(
	(response) => {
		//응답에 대한 로직
		console.log('swr 요청에 대한 서버 응답 :', response);
		return response;
	},
	(error) => {
		//응답 에러 발생 시 수행 로직
		console.log('swr 요청에 대한 서버 응답 오류 발생', error); //디버깅
		return Promise.reject(error);
	},
);

export const api = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
	},
	withCredentials: true,
});

api.interceptors.request.use(
	(config) => {
		const token = getToken('accessToken');
		if (token) {
			console.log('api 요청 인터셉터 - 엑세스 토큰 획득 완료');
		}
		config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => {
		//요청 에러 발생 시 수행할 로직
		console.log('error', error);
		return Promise.reject(error);
	},
);

api.interceptors.response.use(
	(response) => {
		console.log('api 요청 응답 :', response);
		return response;
	},
	(error) => {
		console.log('api 요청 오류 발생', error);
		return Promise.reject(error);
	},
);
