import React from 'react';
import message from '../../../assets/icons/message.png';
import { Link, useLocation } from 'react-router-dom';
import Group from '../../../assets/icons/Group.png';
import { Post } from '../../../types/dataType';
import useMainHomePost from '../../../hooks/useMainHomePost';
import { useUser } from '../../../utils/swrFetcher';

import {
	UserContainer,
	UserName,
	IconContainer,
	GoChat,
	GoProfile,
	InnerContent,
	ContentContainer,
	Content,
	SliderContainer,
	ImageContainer,
	Image,
	TextArea,
	EditContentArea,
	BottomContainer,
	Date,
	ButtonWrapper,
	Edit,
	Delete,
	Report,
} from '../MainHomeContentStyle';
import MainHomeContentImage from './MainHomeContentImage';

interface InnerContentProps {
	post: Post;
}

const MainHomeContentInnerContent = ({ post }: InnerContentProps) => {
	const { userData, isError, error } = useUser();
	const location = useLocation();
	const {
		editingPostId,
		setEditingPostId,
		updatedContent,
		setUpdatedContent,
		moveToChatPage,
		updatePost,
		deletePost,
		sendReport,
	} = useMainHomePost(location.pathname);

	if (isError && error) {
		const errorMessage =
			typeof error === 'object' && 'message' in error
				? error.message
				: String(error);
		console.error(errorMessage);
	}

	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setUpdatedContent(e.target.value);
	};

	const isOnFriendsPage = location.pathname === '/mainhome/friends';

	return (
		<InnerContent>
			<UserContainer>
				<MainHomeContentImage post={post} />
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
							onClick={() =>
								moveToChatPage(userData._id, post.userId, post.name)
							}>
							<img src={message} alt='해당 유저와 1대1 채팅' />
						</GoChat>
					)}
					{userData && userData?._id !== post.userId && (
						<Report onClick={() => sendReport(post, userData)}>신고</Report>
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
					<Content>
						<SliderContainer>
							{post.images &&
								post.images.map((image, index) => (
									<ImageContainer key={index}>
										<Image src={image} alt={`Post Image ${index}`} />
									</ImageContainer>
								))}
						</SliderContainer>
						<TextArea>{post.content}</TextArea>
					</Content>
				)}
			</ContentContainer>
			<BottomContainer>
				<Date>
					<p>{post.createdAt}</p>
				</Date>
				<ButtonWrapper>
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
								<Delete onClick={() => deletePost(post._id)}>삭제</Delete>
							</>
						))}
				</ButtonWrapper>
			</BottomContainer>
		</InnerContent>
	);
};

export default MainHomeContentInnerContent;
