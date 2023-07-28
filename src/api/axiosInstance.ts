import axios from 'axios';
import { getToken } from './token';

const accessTokenInLocalStorage = getToken();

//api 요청 타임아웃 2.5초 : 인스턴스 생성 후.
axios.defaults.timeout = 2500;

export const swrApi = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		Authorization: `Bearer ${accessTokenInLocalStorage}`,
	},
	withCredentials: true,
});

//axios 인스턴스 생성시 config 설정
export const api = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	withCredentials: true,
});

// 요청 인터셉터 추가
api.interceptors.request.use(
	(config) => {
		//요청을 보내기 전에 수행할 로직
		const token = getToken();
		if (token) {
			console.log('요청 인터셉터 - 엑세스 토큰 획득 완료');
		}
		return config;
	},
	(error) => {
		//요청 에러 발생 시 수행할 로직
		console.log('error', error); //디버깅 로직 예정
		return Promise.reject(error);
	},
);

//응답 인터셉터 추가
api.interceptors.response.use(

    (response) => {
        //응답에 대한 로직
        console.log('서버 응답 :', response)
        return response
    },
    error => {
        //응답 에러 발생 시 수행 로직
        console.log('서버 응답 오류 발생', error) //디버깅
        return Promise.reject(error);
    }

);

// axios 인스턴스 내보내기
