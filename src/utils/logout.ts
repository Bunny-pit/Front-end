import { post } from "../api/api";
import { removeToken } from "../api/token";
import Swal from "sweetalert2";
import alertList from "./swal";
import { API_USER_LOGOUT } from "./constant";

export default async function handleLogout() {
    try {
        const result = await Swal.fire(alertList.doubleCheckMessage(`정말 로그아웃 하시겠어요?`))
        if (result.isConfirmed) {
            await post(API_USER_LOGOUT)
            removeToken('accessToken');
            removeToken('refreshToken');
            await Swal.fire(alertList.successMessage(`로그아웃 성공! 
                
                홈 페이지로 이동합니다.
    
                `)).then(() => { window.location.href = '/' })
        }
    } catch (error) {
        console.error(error)
    }
}