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
import alertList from '../../utils/swal';
import Swal from 'sweetalert2';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainHomeContent from '../../components/MainHomeContent/MainHomeContent';
import MainHomeSendBox from '../../components/MainHomeSendBox/MainHomeSendBox';

import { Title } from './MainHomeStyle';

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
				Swal.fire(alertList.errorMessage('최소 1글자 이상 작성해주세요.'));
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
			Swal.fire(alertList.errorMessage('수정 권한이 없습니다.'));
			return;
		}
	};

	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setUpdatedContent(e.target.value);
	};

	const deletePost = async (postId: string) => {
		const result = await Swal.fire(
			alertList.doubleCheckTitkeMsg(
				'게시글을 삭제하시겠습니까?',
				'한번 삭제한 게시글은 복구할 수 없습니다.',
			),
		);
		if (result.isConfirmed) {
			try {
				await del<UserDataType>(`${API_MAINHOME}/${postId}`, {
					withCredentials: true,
				});
				setPosts(posts.filter((post) => post._id !== postId));
			} catch (err) {
				Swal.fire(alertList.errorMessage('삭제 권한이 없습니다.'));
				return;
			}
		}
	};

	const createPost = async () => {
		const token = localStorage.getItem('accessToken');
		if (!token) {
			Swal.fire(
				alertList.errorMessage('게시글 작성을 위해서는 로그인이 필요합니다.'),
			);
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
			navigate(`/chatting`);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<Header />
			<Title>Unknown Bunnies</Title>

			<MainHomeContent
				userData={userData}
				posts={posts}
				setPosts={setPosts}
				editingPostId={editingPostId}
				setEditingPostId={setEditingPostId}
				updatedContent={updatedContent}
				setUpdatedContent={setUpdatedContent}
				page={page}
				setPage={setPage}
				lastPostElementRef={lastPostElementRef}
				moveToChatPage={moveToChatPage}
				updatePost={updatePost}
				handleContentChange={handleContentChange}
				deletePost={deletePost}
			/>
			<MainHomeSendBox
				newPostContent={newPostContent}
				setNewPostContent={setNewPostContent}
				createPost={createPost}
			/>
			<Footer />
		</>
	);
};

export default Mainhome;
