import useSWR from 'swr'
import axios from 'axios'
import api from '../api/axiosInstance';
import { API_USER_ACCESS_TOKEN, API_USER_LOGIN } from './constant';

const fetcher = (url: string) => api.get(url).then(res => res.data)

export function useUser() {

    const { data, error, isLoading } = useSWR(`http://localhost:4000/api/user/accessToken`, fetcher)
    // const petchingURL = `${process.env.REACT_APP_API_URL}${API_USER_LOGIN}`

    if (isLoading) {
        console.log('로딩중')
    }
    if (error) {
        console.error('Error fetching user data :', error.message);
    }
    if (data) {
        console.log('data 가져옴', data.userData);
        const userData = data.userData;
        return { userData, isError: false };
    }

    return { userData: null, isError: true };

}
