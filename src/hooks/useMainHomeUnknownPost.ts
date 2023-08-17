import { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { post, patch, del } from '../api/api';
import { API_MAINHOME_UNKNOWN, API_CHATTING_START } from '../utils/constant';
import { useUser, fetcher } from '../utils/swrFetcher';
import useSWR, { mutate } from 'swr';

import { UserDataType, Post } from '../types/dataType';
import alertList from '../utils/swal';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

const useMainHomePost = () => {
	const { userData, isError } = useUser();
	const [page, setPage] = useState(1);

	const fetchWithPagination = async (url: string): Promise<Post[]> => {
		const newPosts = await fetcher(url);
		if (newPosts.length === 0) {
			// 빈 배열이면 이전 데이터만 반환
			return posts || [];
		}
		console.log(newPosts.length);

		if (newPosts.length === 0 && observer.current) {
			observer.current.disconnect();
		}

		return [...(posts || []), ...newPosts];
	};

	const { data: posts, error: postsError } = useSWR<Post[]>(
		() =>
			`${process.env.REACT_APP_API_URL}${API_MAINHOME_UNKNOWN}?page=${page}&limit=10`,
		fetchWithPagination,
		{
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
		},
	);

	const [newPostContent, setNewPostContent] = useState<string>('');
	const [updatedContent, setUpdatedContent] = useState<string>('');
	const [editingPostId, setEditingPostId] = useState<string>('');

	const observer = useRef<IntersectionObserver | null>(null);
	const lastPostElementRef = useCallback(
		(element: HTMLDivElement | null) => {
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					setPage((prevPage) => prevPage + 1);
					mutate(
						`${process.env.REACT_APP_API_URL}${API_MAINHOME_UNKNOWN}?page=${
							page + 1
						}&limit=10`,
					);
				}
			});
			if (element) observer.current.observe(element);
		},
		[posts],
	);

	const updatePost = async (postId: string) => {
		try {
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
				`${API_MAINHOME_UNKNOWN}/${postId}`,
				{
					content: updatedContent,
				},
				{ withCredentials: true },
			);
			const updatedPosts = (posts || []).map((post) =>
				post._id === postId ? { ...post, content: updatedContent } : post,
			);
			mutate(
				`${process.env.REACT_APP_API_URL}${API_MAINHOME_UNKNOWN}?page=${page}&limit=10`,
				updatedPosts,
				false,
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
				await del<UserDataType>(`${API_MAINHOME_UNKNOWN}/${postId}`, {
					withCredentials: true,
				});

				const updatedPosts = (posts || []).filter(
					(post) => post._id !== postId,
				);
				mutate(
					`${process.env.REACT_APP_API_URL}${API_MAINHOME_UNKNOWN}?page=${page}&limit=10`,
					updatedPosts,
					false,
				);
			} catch (err) {
				Swal.fire(alertList.errorMessage('삭제 권한이 없습니다.'));
				return;
			}
		}
	};

	const createPost = async () => {
		if (!userData) {
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
				API_MAINHOME_UNKNOWN,
				{
					content: newPostContent,
				},
				{
					withCredentials: true,
				},
			);
			const updatedPosts = [response.data, ...(posts || [])];
			mutate(
				`${process.env.REACT_APP_API_URL}${API_MAINHOME_UNKNOWN}?page=${page}&limit=10`,
				updatedPosts,
				false,
			);
			setNewPostContent('');
			Swal.fire(
				alertList.successMessage('게시글이 성공적으로 업로드 되었습니다.'),
			);
		} catch (err) {
			console.log(err);
		}
	};
	const sendReport = async (
		currentpost: Post,
		userData: UserDataType | null,
	) => {
		const hasUserAlreadyReported = currentpost.reports.some(
			(report: { userId: string }) => report.userId === userData?._id,
		);

		if (hasUserAlreadyReported) {
			Swal.fire('알림', '이미 신고한 게시글입니다.', 'warning');
			return;
		}

		Swal.fire({
			title: '신고 사유 입력',
			input: 'text',
			inputPlaceholder: '신고 사유를 입력해주세요',
			showCancelButton: true,
			confirmButtonText: '신고하기',
			cancelButtonText: '취소하기',
			showLoaderOnConfirm: true,
			preConfirm: async (reason) => {
				if (!reason) {
					Swal.showValidationMessage('신고 사유를 입력해주세요');
					return;
				}

				const token = localStorage.getItem('accessToken');
				if (!token) {
					Swal.fire(
						alertList.errorMessage(
							'게시글 신고를 위해서는 로그인이 필요합니다.',
						),
					);
					return;
				}
				try {
					await post<{ message: string }>(
						`${API_MAINHOME_UNKNOWN}/report/${currentpost._id}`,
						{
							reason: reason,
						},
						{
							withCredentials: true,
						},
					);
					Swal.fire(
						alertList.successMessage('게시글을 성공적으로 신고했습니다.'),
					);
				} catch (err) {
					console.error(err);
					Swal.fire(
						alertList.errorMessage('신고 접수 중 오류가 발생했습니다.'),
					);
				}
			},
		});
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

	return {
		posts,
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
