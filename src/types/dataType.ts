export interface UserDataType {
	userId: string;
	userName: string;
	secretName: string;
	email: string;
	password: string;
	role: number;
	error: any;
}

export interface LoginDataType {
	email: string;
	password: string;
	loginData?: string;
}

export interface Post {
	_id: string;
	userId: string;
	name: string;
	email: string;
	title: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}
