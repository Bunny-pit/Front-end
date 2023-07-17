import axios, { AxiosRequestConfig } from 'axios';

const createRequestConfig = (
	method: string,
	url: string,
	data: any | null = null
): AxiosRequestConfig => {
	const config: AxiosRequestConfig = {
		method: method,
		url: url,
		headers: { 'Content-Type': 'application/json' },
		withCredentials: true,
	};

	if (data) {
		config.data = data;
	}

	return config;
}

// axios.get
const getRequest = async (url: string): Promise<void> => {
	const config: AxiosRequestConfig = createRequestConfig('GET', url);
	try {
		const response = await axios(config);
		console.log('get response.data', response.data);
	} catch (error) {
		console.log('get error', error);
	}
}
// axios.post
const postRequest = async (url: string, data: any): Promise<void> => {
	const config: AxiosRequestConfig = createRequestConfig('POST', url, data);
	try {
		const response = await axios(config);
		console.log('post response.data', response.data);
	} catch (error) {
		console.log('request error', error);
	}
}

// axios.delete
const deleteRequest = async (url: string): Promise<void> => {
	const config: AxiosRequestConfig = createRequestConfig('DELETE', url);
	try {
		const response = await axios(config);
		console.log('delete response.data', response.data);
	} catch (error) {
		console.log('delete error', error);
	}
}
