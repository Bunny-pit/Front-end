import React, { FC, useRef, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { get, post, patch, del } from '../../api/api';
import { API_MAINHOME } from '../../utils/constant';
import { API_CHATTING_START } from '../../utils/constant';
import { UserDataType, Post } from '../../types/dataType';
import { useUser } from '../../utils/swrFetcher';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import message from '../../assets/icons/message.png';
import sendIcon from '../../assets/icons/Sendicon.png';
import {
	Container,
	Title,
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
	TextBox,
	TextWrapper,
	TextArea,
	SendButton,
	SendIcon,
} from './MainHomeStyle';

dayjs.extend(utc);
dayjs.extend(timezone);

const Mainhome: FC = () => {
	const { userData, isError } = useUser();

	if (isError) {
		console.log('유저 데이터를 불러오는데 실패했습니다.');
	} else if (!userData) {
		console.log('유저 데이터를 불러오는 중...');
	}

	const [posts, setPosts] = useState<Post[]>([]);
	const [editingPostId, setEditingPostId] = useState<string>('');
	const [updatedContent, setUpdatedContent] = useState<string>('');
	const [newPostContent, setNewPostContent] = useState<string>('');
	const [page, setPage] = useState(1);

	const containerRef = useRef<HTMLDivElement>(null);
	const observer = useRef<IntersectionObserver | null>(null);

	const lastPostElementRef = useCallback((element: HTMLDivElement | null) => {
		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setPage((prevPage) => prevPage + 1);
			}
		});
		if (element) observer.current.observe(element);
	}, []);

	const fetchPosts = async () => {
		try {
			const res = await get<Post[]>(`${API_MAINHOME}?page=${page}&limit=10`);

			const updatedPosts = [
				...posts,
				...res.data.map((post: Post) => ({
					...post,
					createdAt: dayjs(post.createdAt)
						.utc()
						.tz('Asia/Seoul')
						.format('YYYY-MM-DD HH:mm'),
				})),
			];
			setPosts(updatedPosts);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, [page]);

	const updatePost = async (postId: string) => {
		try {
			// 글자가 1 글자 미만일 때
			if (updatedContent.trim().length < 1) {
				alert('내용을 작성해주세요.');
				return;
			}

			await patch<UserDataType>(
				`${API_MAINHOME}/${postId}`,
				{
					content: updatedContent,
				},
				{ withCredentials: true },
			);
			setPosts(
				posts.map((post) =>
					post._id === postId ? { ...post, content: updatedContent } : post,
				),
			);
			setEditingPostId('');
			setUpdatedContent('');
		} catch (err) {
			alert('수정 권한이 없습니다!');
			return;
		}
	};

	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setUpdatedContent(e.target.value);
	};

	const deletePost = async (postId: string) => {
		console.log(`${API_MAINHOME}/${postId}`);

		try {
			await del<UserDataType>(`${API_MAINHOME}/${postId}`, {
				withCredentials: true,
			});
			setPosts(posts.filter((post) => post._id !== postId));
		} catch (err) {
			alert('삭제 권한이 없습니다!');
			return;
		}
	};

	const createPost = async () => {
		const token = localStorage.getItem('accessToken');
		if (!token) {
			alert('게시글 작성을 위해서는 로그인이 필요합니다.');
			setNewPostContent('');
			return;
		}
		try {
			const response = await post<Post>(
				API_MAINHOME,
				{
					content: newPostContent,
				},
				{
					withCredentials: true,
				},
			);
			setNewPostContent('');
			setPosts([response.data, ...posts]);
		} catch (err) {
			console.log(err);
			return;
		}
	};

	const navigate = useNavigate();

	const moveToChatPage = async (_id: string, userId: string, name: string) => {
		try {
			await post<UserDataType>(
				API_CHATTING_START,
				{ userId: _id, anonymousUserId: userId, anonymousUserName: name },
				{
					withCredentials: true,
				},
			);

			console.log(
				` userId: ${_id} , anonymousUserId :  ${userId}, anonymousUserName: ${name}`,
			);
			navigate(`/chatting`);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<Header />
			<Title>Unknown Bunnies</Title>

			<Container ref={containerRef}>
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
									<GoSecretChat
										src={message}
										alt='message Icon'
										onClick={() =>
											moveToChatPage(userData._id, post.userId, post.name)
										}
									/>
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
														if (
															window.confirm(
																'정말로 게시글을 삭제하시겠습니까?',
															)
														) {
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
			<TextBox>
				<TextWrapper>
					<TextArea
						placeholder='익명으로 글을 남기게 되면 프로필이 비공개 처리돼요!'
						value={newPostContent}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setNewPostContent(e.target.value)
						}
					/>

					<SendButton onClick={createPost}>
						<SendIcon src={sendIcon} alt='Send Icon' />
					</SendButton>
				</TextWrapper>
			</TextBox>
			<Footer />
		</>
	);
};

export default Mainhome;
