import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
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
	const [editingPostId, setEditingPostId] = useState<string | null>(null);
	const [updatedContent, setUpdatedContent] = useState<string>('');

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await axios.get(
					'https://port-0-back-end-kvmh2mljxnw03c.sel4.cloudtype.app/api/mainhome',
				);
				setPosts(res.data);
			} catch (err) {
				console.error(err);
			}
		};

		fetchPosts();
	}, []);

	const updatePost = async (postId: string) => {
		try {
			await axios.patch(
				`https://port-0-back-end-kvmh2mljxnw03c.sel4.cloudtype.app/api/mainhome/${postId}`,
				{ content: updatedContent },
			);
			setPosts(
				posts.map((post) =>
					post._id === postId ? { ...post, content: updatedContent } : post,
				),
			);
			setEditingPostId(null);
			setUpdatedContent('');
		} catch (err) {
			console.error(err);
		}
	};

	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setUpdatedContent(e.target.value);
	};

	const deletePost = async (postId: string) => {
		try {
			await axios.delete(
				`https://port-0-back-end-kvmh2mljxnw03c.sel4.cloudtype.app/api/mainhome/${postId}`,
			);
			setPosts(posts.filter((post) => post._id !== postId));
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<Header />
			<Title>Unknown Bunnies</Title>

			<Container>
				{posts.map((post) => {
					const hashedEmail: string = post.email;
					const avatarUrl: string = `https://www.gravatar.com/avatar/${hashedEmail}?d=identicon`;

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
									<Content isEditing={editingPostId === post._id}>
										{post.content}
									</Content>
									<EditContentArea
										isEditing={editingPostId === post._id}
										value={updatedContent}
										onChange={handleContentChange}
									/>
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
													setEditingPostId(null);
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
					<TextArea placeholder='익명으로 글을 남기게 되면 프로필이 비공개 처리돼요!'></TextArea>
					<SendButton>
						<SendIcon src={sendIcon} alt='Send Icon' />
					</SendButton>
				</TextWrapper>
			</TextBox>
			<Footer />
		</>
	);
};

export default Mainhome;
