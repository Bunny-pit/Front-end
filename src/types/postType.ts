export interface PostType {
	_id: string;
	userId: string;
	profileImage: string;
	images: string[];
	content: string;
	createdAt: Date;
}

export interface PostDetailType {
	_id: string;
	userId: string;
	profileImage: string;
	images: string[];
	content: string;
	createdAt: string;
	likeCount: number;
}

export interface CommentType {
	comment: string;
	_id: string;
	postId: string;
	userId: string;
	userName: string;
	createdAt: Date;
	updatedAt: Date;
}
