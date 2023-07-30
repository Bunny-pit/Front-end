import useSWR from 'swr';
import { swrApi } from '../api/axiosInstance';
import { API_USER_ACCESS_TOKEN } from './constant';

const fetcher = (url: string) => swrApi.get(url).then((res) => res.data);

export function useUser() {
	const fetchingURL = `${process.env.REACT_APP_API_URL}${API_USER_ACCESS_TOKEN}`;
	const { data, error, isLoading } = useSWR(fetchingURL, fetcher);

	if (isLoading) {
		console.log('로딩중');
	}
	if (error && data === undefined) {
		// 데이터가 없을 때만 에러 출력
		console.error('Error fetching user data :', error.message);
	}
	if (data) {
		console.log('data 가져옴', data.userData);
		const userData = data.userData;
		return { userData, isError: false };
	}
	return { userData: null, isError: true };
}
