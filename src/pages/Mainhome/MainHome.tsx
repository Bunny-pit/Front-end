import React, { FC, useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { get, post, patch, del } from '../../api/api';
import { API_MAINHOME } from '../../utils/constant';
import { UserDataType } from '../../types/dataType';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
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
	interface Post {
		_id: string;
		name: string;
		email: string;
		title: string;
		content: string;
		createdAt: string;
		updatedAt: string;
		__v: number;
	}

	const [posts, setPosts] = useState<Post[]>([]);
	const [editingPostId, setEditingPostId] = useState<string>('');
	const [updatedContent, setUpdatedContent] = useState<string>('');
	const [newPostContent, setNewPostContent] = useState<string>('');

	const containerRef = useRef<HTMLDivElement>(null);

	//후에 리팩토링 예정
	const fetchPosts = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_API_URL}/api/mainhome`,
			);
			const updatedPosts = res.data.map((post: Post) => ({
				...post,
				createdAt: dayjs(post.createdAt)
					.utc()
					.tz('Asia/Seoul')
					.format('YYYY-MM-DD HH:mm'),
			}));
			setPosts(updatedPosts);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	const updatePost = async (postId: string) => {
		try {
			// 글자가 1 글자 이하일 때
			if (updatedContent.trim().length <= 1) {
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
			console.error(err);
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
			console.error(err);
		}
	};
	const createPost = async () => {
		try {
			await post<UserDataType>(
				API_MAINHOME,
				{
					content: newPostContent,
				},
				{
					withCredentials: true,
				},
			);
			setNewPostContent('');
			await fetchPosts();
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<Header />
			<Title>Unknown Bunnies</Title>

			<Container ref={containerRef}>
				{posts.map((post) => {
					const email: string = post.email;
					const avatarUrl: string = `https://www.gravatar.com/avatar/${email}?d=identicon`;

					return (
						<ContentBox key={post._id}>
							<ImageWrap>
								<UserRandomImage src={avatarUrl} alt='User Random Image' />
							</ImageWrap>
							<InnerContent>
								<UserSecretContainer>
									<UserSecretName>{post.name}</UserSecretName>
									<GoSecretChat src={message} alt='message Icon' />
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
									{editingPostId === post._id ? (
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
														window.confirm('정말로 게시글을 삭제하시겠습니까?')
													) {
														deletePost(post._id);
													}
												}}>
												삭제
											</Delete>
										</>
									)}
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
