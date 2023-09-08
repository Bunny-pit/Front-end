import useSWR, { SWRResponse } from 'swr';
import { api, swrApi } from '../api/axiosInstance';
import { API_USER_ACCESS_TOKEN } from './constant';
import { UserDataType } from '../types/dataType';

export const fetcher = (url: string) =>
	api.get(url).then((res) => {
		console.log(res);
		return res.data;
	});

export function useUser(): {
	userData: UserDataType | null;
	isError: boolean;
	error: { message: string } | null;
} {
	const fetchingURL = `${process.env.REACT_APP_API_URL}${API_USER_ACCESS_TOKEN}`;

	const { data, error } = useSWR(fetchingURL, fetcher);

	if (error && data === undefined) {
		console.error('Error fetching user data :', error.message);
		return { userData: null, isError: true, error };
	}

	if (data) {
		return { userData: data.userData, isError: false, error: null };
	}

	// 데이터가 없고, 에러도 발생하지 않았을 때의 기본 반환
	return { userData: null, isError: false, error: null };
}
