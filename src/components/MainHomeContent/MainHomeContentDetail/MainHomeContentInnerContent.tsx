import React from 'react';
import message from '../../../assets/icons/message.png';

import {
	UserContainer,
	UserName,
	GoChat,
	InnerContent,
	ContentContainer,
	Content,
	EditContentArea,
	Date,
	ButtonWrapper,
	Edit,
	Delete,
} from '../MainHomeContentStyle';

interface InnerContentProps {
	post: any;
	userData: any;
	editingPostId: string;
	updatedContent: string;
	handleContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	moveToChatPage: (id1: string, id2: string, name: string) => void;
	updatePost: (id: string) => void;
	setEditingPostId: (id: string) => void;
	setUpdatedContent: (content: string) => void;
	deletePost: (id: string) => void;
}

const MainHomeContentInnerContent = ({
	post,
	userData,
	editingPostId,
	updatedContent,
	handleContentChange,
	moveToChatPage,
	updatePost,
	setEditingPostId,
	setUpdatedContent,
	deletePost,
}: InnerContentProps) => {
	return (
		<InnerContent>
			<UserContainer>
				<UserName>{post.name}</UserName>
				{userData && userData?._id !== post.userId && (
					<GoChat
						src={message}
						alt='message Icon'
						onClick={() => moveToChatPage(userData._id, post.userId, post.name)}
					/>
				)}
			</UserContainer>
			<ContentContainer>
				{editingPostId === post._id ? (
					<EditContentArea
						value={updatedContent}
						onChange={handleContentChange}
					/>
				) : (
					<Content>{post.content}</Content>
				)}
			</ContentContainer>
			<Date>
				<p>{post.createdAt}</p>
			</Date>
			<ButtonWrapper>
				{/* 수정하기 */}
				{userData?._id === post.userId &&
					(editingPostId === post._id ? (
						<>
							<Edit onClick={() => updatePost(post._id)}>저장</Edit>
							<Edit
								onClick={() => {
									setEditingPostId('');
									setUpdatedContent('');
								}}>
								취소
							</Edit>
						</>
					) : (
						<>
							<Edit
								onClick={() => {
									setEditingPostId(post._id);
									setUpdatedContent(post.content);
								}}>
								수정
							</Edit>
							{/* 삭제하기 */}
							<Delete onClick={() => deletePost(post._id)}>삭제</Delete>
						</>
					))}
			</ButtonWrapper>
		</InnerContent>
	);
};

export default MainHomeContentInnerContent;
