import axios, { AxiosRequestConfig } from 'axios';
import api from './aixosInstance.js';

const baseUrl = process.env.REACT_APP_BASE_URL;


// axios.get
export const get = async <T>(
	url: string,
	config?: AxiosRequestConfig,
): Promise<T> => {
	const targetURL = baseUrl + url;
	try {
		const response = await api.get<T>(targetURL, {
			...config,
			withCredentials: true,
		});
		return response.data;
	} catch (err) {
		throw new Error((err as any).response.data.name);
	}
};

// axios.post
export const post = async <T>(
	url: string,
	data?: any,
	config?: AxiosRequestConfig,
): Promise<T> => {
	const targetURL = baseUrl + url;
	try {
		const response = await api.post<T>(targetURL, data, {
			...config,
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		throw new Error((error as any).response.data.name);
	}
};

// axios.patch
export const patch = async <T>(
	url: string,
	data?: any,
	config?: AxiosRequestConfig,
): Promise<void> => {
	const targetURL = baseUrl + url
	try {
		await api.patch<T>(targetURL, data, {
			...config,
			withCredentials: true,
		});
	} catch (err) {
		throw new Error((err as any).response.data.name);
	}
};

// axios.delete
export const del = async <T>(
	url: string,
	config?: AxiosRequestConfig,
): Promise<void> => {
	const targetURL = baseUrl + url
	try {
		await api.delete<T>(targetURL, {
			...config,
			withCredentials: true,
		});
	} catch (err) {
		throw new Error((err as any).response.data.name);
	}
};
