import jwt_decode, { JwtPayload } from 'jwt-decode';
import { getToken, setToken } from '../api/token';
import { AxiosResponse } from 'axios';
import { post } from '../api/api';
import { API_USER_REFRESH_TOKEN } from './constant';

export const checkTokenExpirationAndRefresh = async () => {
	const accessToken = getToken('accessToken');
	const refreshToken = getToken('refreshToken');

	if (!accessToken || !refreshToken) {
		// 로그인 필요
		alert('로그인이 필요합니다.');
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
					refreshToken: refreshToken,
				},
				{ headers: { 'Content-Type': 'application/json' } },
			);
			if (response.data.accessToken) {
				setToken('accessToken', response.data.accessToken);
			} else {
				const confirmed = window.confirm(
					'토큰 만료: 로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?',
				);
				if (confirmed) {
					window.location.href = '/login';
					return;
				}
			}
		} catch (error) {
			// refreshToken 갱신 에러 처리
			const confirmed = window.confirm(
				'엑세스 토큰 검증 실패: 로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?',
			);
			if (confirmed) {
				window.location.href = '/login';
				return false;
			}
		}
	}
};
