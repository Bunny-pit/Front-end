import axios from 'axios';
import { getToken } from './token';

//axios 인스턴스 생성
const api = axios.create({
    baseURL : process.env.REACT_APP_API_URL
});

//요청 타임아웃
api.defaults.timeout = 2500;
api.defaults.withCredentials = true;


//요청 인터셉터 추가
api.interceptors.request.use(
    config => {
        //요청을 보내기 전에 수행할 로직
        const token = getToken();
        if(token){
            // config.headers.Authorization = `Bearer ${token}`;
            console.log('요청 인터셉터 -  토큰 획득', token)
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
api.interceptors.response.use(
    response =>{
        //응답에 대한 로직
        const res = response.data
        return console.log('서버 응답 :', res)
    },
    error => {
        //응답 에러 발생 시 수해알 로직
        console.log('서버 응답 오류 발생', error) //디버깅
        return Promise.reject(error);
    }
);

// axios 인스턴스 내보내기
export default api;