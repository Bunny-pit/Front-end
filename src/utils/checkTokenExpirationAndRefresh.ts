import { getToken } from '../api/token';
import alertList from './swal';
import Swal from 'sweetalert2';

export const checkTokenExpirationAndRefresh = async () => {
	const accessToken = getToken('accessToken');
	const refreshToken = getToken('refreshToken');

	console.log('accessToekn', accessToken);
	console.log('Ref', refreshToken);

	if (!accessToken || !refreshToken) {
		Swal.fire(
			alertList.infoMessage(`로그인 정보가 없습니다.

                로그인 화면으로 이동합니다.
                
                `),
		).then(() => {
			window.location.href = '/login';
		});
		return;
	}

	// // accessToken 유효성 검사 (클라이언트 측에서 간단하게 검사)
	// const decodedAccessToken: JwtPayload = jwt_decode(accessToken);
	// const currentTime = Date.now() / 1000;
	// const TOKEN_REFRESH_LEAD_TIME = 300;
	// if (
	// 	decodedAccessToken.exp &&
	// 	decodedAccessToken.exp - currentTime <= TOKEN_REFRESH_LEAD_TIME
	// ) {
	// 	try {
	// 		// refreshToken을 서버로 전송하여 새로운 accessToken 발급 받기
	// 		const response: AxiosResponse<{ accessToken: string }> = await post(
	// 			API_USER_REFRESH_TOKEN,
	// 			{
	// 				refreshToken: refreshToken,
	// 			},
	// 			{ headers: { 'Content-Type': 'application/json' } },
	// 		);
	// 		if (response.data.accessToken) {
	// 			setToken('accessToken', response.data.accessToken);
	// 		} else {
	// 			Swal.fire(
	// 				alertList.infoMessage(`유효하지 않은 로그인 상태입니다.

	//               로그인 화면으로 이동합니다.

	//               `),
	// 			).then(() => {
	// 				window.location.href = '/login';
	// 			});
	// 		}
	// 	} catch (error) {
	// 		// refreshToken 갱신 에러 처리
	// 		Swal.fire(
	// 			alertList.infoMessage(`로그인 정보 만료!

	//           재 로그인이 필요합니다.

	//           로그인 화면으로 이동합니다.

	//           `),
	// 		).then(() => {
	// 			window.location.href = '/login';
	// 		});
	// 	}
	// }
};
