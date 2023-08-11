import React from 'react';
import message from '../../../assets/icons/message.png';
import { Link, useLocation } from 'react-router-dom';
import Group from '../../../assets/icons/Group.png';

import {
	UserContainer,
	UserName,
	IconContainer,
	GoChat,
	GoProfile,
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
	const isOnFriendsPage = useLocation().pathname === '/mainhome/friends';
	return (
		<InnerContent>
			<UserContainer>
				<UserName>{post.name}</UserName>
				<IconContainer>
					{isOnFriendsPage && (
						<Link to={`/post/user/${post.name}`}>
							<GoProfile>
								<img src={Group} alt='해당 유저 프로필로 이동' />
							</GoProfile>
						</Link>
					)}
					{userData && userData?._id !== post.userId && (
						<GoChat
							src={message}
							alt='message Icon'
							onClick={() =>
								moveToChatPage(userData._id, post.userId, post.name)
							}
						/>
					)}
				</IconContainer>
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
