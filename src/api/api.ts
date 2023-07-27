import axios, { AxiosRequestConfig } from 'axios';
import {api} from './axiosInstance';

// axios.get
export const get = async <T>(url: string, config?: AxiosRequestConfig) => {
	try {
		const response = await api.get<T>(url, { ...config });
		return response
	} catch (error: any) {
		throw error
	}
};

// axios.post
export const post = async <T>(url: string, userData?: any, config?: AxiosRequestConfig) => {
	try {
		const response = await api.post<T>(url, userData, { ...config });
		return response
	} catch (error: any) {
		throw error
	}
};

// axios.patch
export const patch = async <T>(url: string, userData?: any, config?: AxiosRequestConfig) => {
	try {
		const response = await api.patch<T>(url, userData, { ...config });
		return response
	} catch (error: any) {
		throw error
	}
};

// axios.delete
export const del = async <T>(url: string, config?: AxiosRequestConfig) => {
	try {
		await api.delete<T>(url, { ...config });
	} catch (error: any) {
		throw error
	}
};
