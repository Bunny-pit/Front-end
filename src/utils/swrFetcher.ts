import useSWR, { SWRResponse } from 'swr';
import { swrApi } from '../api/axiosInstance';
import { API_USER_ACCESS_TOKEN } from './constant';
import { UserDataType } from '../types/dataType';

export const fetcher = (url: string) =>
	swrApi.get(url).then((res) => {
		console.log(res);
		return res.data;
	});

export function useUser(): {
	userData: UserDataType | null;
	isError: boolean;
} {
	const fetchingURL = `${process.env.REACT_APP_API_URL}${API_USER_ACCESS_TOKEN}`;
	const { data, error } = useSWR(fetchingURL, fetcher, {
		dedupingInterval: 1000000,
		errorRetryInterval: 5000,
	});

	if (error && data === undefined) {
		// 데이터가 없을 때만 에러 출력
		console.error('Error fetching user data :', error.message);
	}
	if (data) {
		// console.log('data.userData 가져옴', data.userData);
		// const userData = data.userData;
		return { userData: data.userData, isError: false };
	}
	return { userData: null, isError: true };
}
