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
	loginData?:string;
}
