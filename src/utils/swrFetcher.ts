import useSWR, { SWRResponse } from 'swr'
import { swrApi } from '../api/axiosInstance';
import { API_USER_ACCESS_TOKEN } from './constant';

export const fetcher = (url: string) => swrApi.get(url).then(res => res.data)

interface UserData {
    accessToken: string;
    user: {
        createdAt: string;
        email: string;
        password: string;
        role: number;
        secretName: string;
        updatedAt: string;
        userId: string;
        userName: string;
        _id: string;
    };
}

export function useUser(): {
    userData: UserData | null;
    isError: boolean;
    refreshData: () => Promise<SWRResponse<UserData, Error> | undefined>
} {
    const fetchingURL = `${process.env.REACT_APP_API_URL}${API_USER_ACCESS_TOKEN}`
    const { data, error, mutate } = useSWR(fetchingURL, fetcher)

    const refreshData = () => {
        return mutate(fetchingURL)
    }

    if (error && data === undefined) { // 데이터가 없을 때만 에러 출력
        console.error('Error fetching user data :', error.message);
    }
    if (data) {
        console.log('data.userData 가져옴', data.userData);
        // const userData = data.userData;
        return { userData: data.userData, isError: false, refreshData };
    }
    return { userData: null, isError: true, refreshData };
}
