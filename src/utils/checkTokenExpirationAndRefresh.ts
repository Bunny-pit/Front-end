import jwt_decode, { JwtPayload } from "jwt-decode";
import { getToken, setToken } from "../api/token";
import { AxiosResponse } from 'axios'
import { post } from "../api/api";
import { API_USER_REFRESH_TOKEN } from "./constant";
import alertList from "./swal";
import Swal from 'sweetalert2';

export const checkTokenExpirationAndRefresh = async () => {
    const accessToken = getToken('accessToken');
    const refreshToken = getToken('refreshToken');
    if (!accessToken || !refreshToken) {
        await Swal.fire(alertList.infoMessage(`토큰이 존재하지 않습니다.

                로그인 화면으로 이동합니다.
                
                `))
        window.location.href = '/login'
        return;
    }

    // accessToken 유효성 검사 (클라이언트 측에서 간단하게 검사)
    const decodedAccessToken: JwtPayload = jwt_decode(accessToken);
    const currentTime = Date.now() / 1000;
    if (decodedAccessToken.exp && decodedAccessToken.exp < currentTime) {
        try {
            // refreshToken을 서버로 전송하여 새로운 accessToken 발급 받기
            const response: AxiosResponse<{ accessToken: string }> = await post(
                API_USER_REFRESH_TOKEN,
                {
                    refreshToken: refreshToken
                },
                { headers: { 'Content-Type': 'application/json' } }
            )
            if (response.data.accessToken) {
                setToken('accessToken', response.data.accessToken);
            } else {
                await Swal.fire(alertList.infoMessage(`토큰이 존재하지 않습니다.

                로그인 화면으로 이동합니다.
                
                `))
                window.location.href = '/login'
            }
        } catch (error) {
            // refreshToken 갱신 에러 처리
            await Swal.fire(alertList.infoMessage(`토큰 만료!
            
            토큰 갱신이 필요합니다.

            로그인 화면으로 이동합니다.
            
            `))
            window.location.href = '/login'
        }
    }
};
