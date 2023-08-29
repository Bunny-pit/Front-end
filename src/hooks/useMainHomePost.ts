import { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useSWRInfinite from 'swr/infinite';
import { fetcher, useUser } from '../utils/swrFetcher';

import { post, patch, del } from '../api/api';
import {
	API_MAINHOME_SECRET,
	API_MAINHOME_FRIENDS,
	API_FRIENDCHATTING_START,
} from '../utils/constant';
import { UserDataType, Post } from '../types/dataType';

import Swal from 'sweetalert2';
import alertList from '../utils/swal';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const PAGE_SIZE = 10;

const toKST = (utcDate: string) => {
	return dayjs(utcDate).tz('Asia/Seoul').format('YYYY-MM-DD HH:mm');
};

const useMainHomePost = (pathname: string) => {
	const API_ENDPOINT = pathname.includes('secret')
		? API_MAINHOME_SECRET
		: API_MAINHOME_FRIENDS;

	const getKey = (pageIndex: number, previousPageData: Post[] | null) => {
		if (previousPageData && !previousPageData.length) return null;
		return `${process.env.REACT_APP_API_URL}${API_ENDPOINT}?page=${
			pageIndex + 1
		}&limit=${PAGE_SIZE}`;
	};

	const [newPostContent, setNewPostContent] = useState<string>('');
	const [updatedContent, setUpdatedContent] = useState<string>('');
	const [editingPostId, setEditingPostId] = useState<string>('');

	const { data, error, setSize, mutate } = useSWRInfinite(getKey, fetcher);

	const posts: Post[] = data
		? ([] as Post[]).concat(...data).map((post: Post) => ({
				...post,
				createdAt: toKST(post.createdAt),
				updatedAt: toKST(post.updatedAt),
		  }))
		: [];

	if (error) {
		console.error(error);
	}

	const observer = useRef<IntersectionObserver | null>(null);
	const lastPostElementRef = useCallback((element: HTMLDivElement | null) => {
		if (observer.current) observer.current.disconnect();
		if (!element) return;
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setSize((size) => size + 1);
			}
		});

		observer.current.observe(element);
	}, []);

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
				`${API_ENDPOINT}/${postId}`,
				{ content: updatedContent },
				{ withCredentials: true },
			);

			mutate();
			setEditingPostId('');
			setUpdatedContent('');

			Swal.fire(
				alertList.successMessage('게시글이 성공적으로 수정 되었습니다.'),
			);
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
				await del<UserDataType>(`${API_ENDPOINT}/${postId}`, {
					withCredentials: true,
				});

				mutate();
				Swal.fire(
					alertList.successMessage('게시글이 성공적으로 삭제 되었습니다.'),
				);
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
			await post<Post>(
				API_ENDPOINT,
				{
					content: newPostContent,
				},
				{
					withCredentials: true,
				},
			);
			setNewPostContent('');

			mutate();

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
						`${API_ENDPOINT}/report/${currentpost._id}`,
						{
							reason: reason,
						},
						{
							withCredentials: true,
						},
					);
					mutate();
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
