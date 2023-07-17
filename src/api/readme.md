axios.interceptors : then이나 catch로 처리되기 전에 요청이나 응답 가로챌 수 있음.

//main.js 임시
import request from './index.js'

// get
const getUserInfo = (UserId) => {
    return request({url : `/getUserInfo/${UserId}`})
}

// post
const saveUserInfo = () =>{
    request({
        method : 'post',
        url : '/user/12345',
        data : {
            firstName : 'kim',
            lastName : 'jh'
        }
    })
}

export default {
    getUserInfo,
    saveUserInfo
}