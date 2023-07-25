import axios, { AxiosRequestConfig } from 'axios';
import api from './aixosInstance.js';

// axios.get
export const get = async <T>(url: string, config?: AxiosRequestConfig) => {
	try {
		const response = await api.get<T>(url, { ...config });
		return response;
	} catch (error: any) {
		throw new Error(error);
	}
};

// axios.post
export const post = async <T>(
	url: string,
	userData?: any,
	config?: AxiosRequestConfig,
) => {
	try {
		const response = await api.post<T>(url, userData, { ...config });
		return response;
	} catch (error: any) {
		throw new Error(error);
	}
};

// axios.patch
export const patch = async <T>(
	url: string,
	userData?: any,
	config?: AxiosRequestConfig,
) => {
	try {
		const response = await api.patch<T>(url, userData, { ...config });
		return response;
	} catch (error: any) {
		throw new Error(error);
	}
};

// axios.delete
export const del = async <T>(url: string, config?: AxiosRequestConfig) => {
	try {
		await api.delete<T>(url, { ...config });
	} catch (error: any) {
		throw new Error(error);
	}
};
