import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import message from '../../assets/icons/message.png';

import {
	Container,
	ContentBox,
	ImageWrap,
	UserRandomImage,
	UserSecretContainer,
	UserSecretName,
	GoSecretChat,
	InnerContent,
	ContentContainer,
	Content,
	EditContentArea,
	Date,
	Wrapper,
	Edit,
	Delete,
} from './MainHomeContentStyle';
import useMainHomePost from '../../hooks/useMainHomePost';

dayjs.extend(utc);
dayjs.extend(timezone);

interface Props {
	userData: any;
	mainHomePost: ReturnType<typeof useMainHomePost>;
}

const MainHomeContent = ({ userData, mainHomePost }: Props) => {
	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setUpdatedContent(e.target.value);
	};

	const {
		posts,
		editingPostId,
		setEditingPostId,
		updatedContent,
		setUpdatedContent,
		lastPostElementRef,
		updatePost,
		deletePost,
		moveToChatPage,
	} = mainHomePost;

	return (
		<Container>
			{posts.map((post, index) => {
				const email: string = post.email;
				const avatarUrl: string = `https://www.gravatar.com/avatar/${email}?d=identicon`;
				return (
					<ContentBox
						key={post._id}
						ref={index == posts.length - 1 ? lastPostElementRef : null}>
						<ImageWrap>
							<UserRandomImage src={avatarUrl} alt='User Random Image' />
						</ImageWrap>
						<InnerContent>
							<UserSecretContainer>
								<UserSecretName>{post.name}</UserSecretName>
								{userData && userData?._id !== post.userId && (
									<GoSecretChat
										src={message}
										alt='message Icon'
										onClick={() =>
											moveToChatPage(userData._id, post.userId, post.name)
										}
									/>
								)}
							</UserSecretContainer>
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
							<Wrapper>
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
											<Delete
												onClick={() => {
													{
														deletePost(post._id);
													}
												}}>
												삭제
											</Delete>
										</>
									))}
							</Wrapper>
						</InnerContent>
					</ContentBox>
				);
			})}
		</Container>
	);
};

export default MainHomeContent;
