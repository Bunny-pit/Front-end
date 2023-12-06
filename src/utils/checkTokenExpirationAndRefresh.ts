import { getToken } from '../api/token';
import alertList from './swal';
import Swal from 'sweetalert2';

const checkTokenExpirationAndRefresh = async () => {
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
};

export default checkTokenExpirationAndRefresh;
