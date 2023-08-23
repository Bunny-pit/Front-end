export interface UserDataType {
	_id: string;
	userId: string;
	userName: string;
	secretName: string;
	email: string;
	password: string;
	role: number;
	error: any;
	createdAt: string;
	updatedAt: string;
	profileImg: string;
	introduction: string;
}

export interface LoginDataType {
	email: string;
	password: string;
	loginData?: string;
}

interface Report {
	reportedBy: {
		type: string;
		ref: 'User';
		required: true;
	};
	userId: string;
	reason: string;
	createdAt: Date;
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
	profileImage: string;
	reports: Report[];
	__v: number;
}

export interface DataType {
	data: any;
	error: any;
}
