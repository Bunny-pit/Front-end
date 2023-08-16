import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { get, post, patch, del } from '../api/api';
import {
	API_MAINHOME_FRIENDS,
	API_FRIENDCHATTING_START,
} from '../utils/constant';

import { UserDataType, Post } from '../types/dataType';
import alertList from '../utils/swal';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const useMainHomePost = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [page, setPage] = useState(1);
	const [newPostContent, setNewPostContent] = useState<string>('');
	const [updatedContent, setUpdatedContent] = useState<string>('');
	const [editingPostId, setEditingPostId] = useState<string>('');

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

	useEffect(() => {
		fetchPosts();
	}, [page]);

	async function fetchPosts() {
		try {
			const res = await get<Post[]>(
				`${API_MAINHOME_FRIENDS}?page=${page}&limit=10`,
			);
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
	}

	const updatePost = async (postId: string) => {
		try {
			// 글자가 1 글자 미만일 때
			if (updatedContent.trim().length < 1) {
				Swal.fire(alertList.errorMessage('최소 1글자 이상 작성해주세요.'));
				return;
			} else if (updatedContent.trim().length > 100) {
				Swal.fire(
					alertList.errorMessage(
						'게시글은 최대 100글자 미만으로 작성해주세요.',
					),
				);
				return;
			}
			await patch<UserDataType>(
				`${API_MAINHOME_FRIENDS}/${postId}`,
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

	const deletePost = async (postId: string) => {
		const result = await Swal.fire(
			alertList.doubleCheckTitkeMsg(
				'게시글을 삭제하시겠습니까?',
				'한번 삭제한 게시글은 복구할 수 없습니다.',
			),
		);
		if (result.isConfirmed) {
			try {
				await del<UserDataType>(`${API_MAINHOME_FRIENDS}/${postId}`, {
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
		} else if (newPostContent.length > 100) {
			Swal.fire(
				alertList.errorMessage('게시글은 최대 100글자 미만으로 작성해주세요.'),
			);
			return;
		}
		try {
			const response = await post<Post>(
				API_MAINHOME_FRIENDS,
				{
					content: newPostContent,
				},
				{
					withCredentials: true,
				},
			);
			setNewPostContent('');
			setPosts([response.data, ...posts]);
			Swal.fire(
				alertList.successMessage('게시글이 성공적으로 업로드 되었습니다.'),
			);
		} catch (err) {
			console.log(err);
		}
	};

	const sendReport = async (postId: string, reason: string) => {
		const token = localStorage.getItem('accessToken');
		if (!token) {
			Swal.fire(
				alertList.errorMessage('게시글 신고를 위해서는 로그인이 필요합니다.'),
			);
			return;
		}
		try {
			await post<{ message: string }>(
				`${API_MAINHOME_FRIENDS}/report/${postId}`,
				{
					reason: reason,
				},
				{
					withCredentials: true,
				},
			);
			Swal.fire(alertList.successMessage('게시글을 성공적으로 신고했습니다.'));
		} catch (err) {
			console.error(err);
			Swal.fire(alertList.errorMessage('신고 접수 중 오류가 발생했습니다.'));
		}
	};

	const navigate = useNavigate();

	const moveToChatPage = async (_id: string, userId: string, name: string) => {
		try {
			await post<UserDataType>(
				API_FRIENDCHATTING_START,
				{ userId: _id, anonymousUserId: userId, anonymousUserName: name },
				{
					withCredentials: true,
				},
			);
			navigate(`/friendchatting`);
		} catch (error) {
			console.error(error);
		}
	};

	return {
		posts,
		fetchPosts,
		updatePost,
		deletePost,
		createPost,
		lastPostElementRef,
		newPostContent,
		setNewPostContent,
		updatedContent,
		setUpdatedContent,
		editingPostId,
		setEditingPostId,
		sendReport,
		moveToChatPage,
	};
};

export default useMainHomePost;
