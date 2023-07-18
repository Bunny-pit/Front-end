import axios from 'axios';
import { getToken } from '.token.js';

const baseUrl = process.env.REACT_APP_BASE_URL;

//axios 인스턴스 생성
const api = axios.create({
    baseURL : baseUrl
});

//요청 타임아웃 설정
request.defaults.timeout = 2500;

//요청 인터셉터 추가
request.interceptors.request.use(
    config => {
        //요청을 보내기 전에 수행할 로직
        const token = getToken();
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error =>{
        //요청 에러 발생 시 수행할 로직
        console.log('error', error); //디버깅 로직 예정
        return Promise.reject(error);
    }
);

//응답 인터셉터 추가
request.interceptors.response.use(
    response =>{
        //응답에 대한 로직
        const res = response.data
        return res
    },
    error => {
        //응답 에러 발생 시 수해알 로직
        console.log(error) //디버깅
        return Promise.reject(error);
    }
);

// axios 인스턴스 내보내기
export default api;