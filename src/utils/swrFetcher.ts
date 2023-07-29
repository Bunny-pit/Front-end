import { swrApi } from '../api/axiosInstance';

export const fetchUserData = async (url: string) => {
    try {
        const response = await swrApi.get(url);
        return response.data;
    } catch (error) {
        // 에러 처리 로직
        console.error('Error fetching user data:', error);
        throw error;
    }
};

export const fetcher = async (url: string) => {
    const response = await swrApi.get(url);
    return response.data
}


