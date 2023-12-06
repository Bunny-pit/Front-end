import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import DetailHeader from '../../../components/Header/DetailHeader/DetailHeader';
import Footer from '../../../components/Footer/Footer';
import DeleteIcon from '../../../assets/icons/DeleteIcon.png';
import likeIcon from '../../../assets/icons/like_11zon.webp';
import likedIcon from '../../../assets/icons/liked_11zon.webp';
import CommentDeleteIcon from '../../../assets/icons/CommentDeleteIcon_11zon.webp';
import { useUser } from '../../../utils/swrFetcher';
import alertList from '../../../utils/swal';
import { del } from '../../../api/api';
import { PostDetailType, PostType, CommentType } from '../../../types/postType';
import Swal from 'sweetalert2';
import { mutate } from 'swr';
import dayjs from 'dayjs';
import {
	Container,
	DeleteButtonWrap,
	DeleteButton,
	DeleteButtonIcon,
	ProfileWrap,
	Profile,
	ProfileUserImage,
	ProfileId,
	PostWrap,
	ImgWrap,
	PostImg,
	PostDetailWrap,
	LikeWrap,
	LikeButton,
	LikeButtonIcon,
	LikeCountWrap,
	LikeCount,
	PostTime,
	CommentWrap,
	CommentTitle,
	CommentUl,
	Commentli,
	CommentUserId,
	CommentContent,
	CommentInput,
	ContentWrap,
	Content,
	CommentContentWrap,
	CommentDeleteButton,
	CommentDeleteImg,
} from './DetailStyle';

const settings = {
	dots: true, // dot navigation을 보여줄지에 대한 여부
	infinite: true, // 무한으로 슬라이드가 돌아가는지에 대한 여부
	speed: 500, // 슬라이드가 넘어가는 속도(ms 단위)
	slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
	slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수
};

const Detail = () => {
	const navigate = useNavigate();
	const { postId } = useParams();
	const [post, setPost] = useState<PostDetailType | null>(null); // 초기 상태를 null로 설정
	const [comments, setComments] = useState<CommentType[]>([]); // 댓글 상태를 추가
	const [commentInput, setCommentInput] = useState('');
	const [userName, setUserName] = useState(''); // userName 게시글 기준으로 추가해야됨
	const [likeCount, setLikeCount] = useState<number>(0);
	const [isLiked, setIsLiked] = useState<boolean>(false);
	const [profileImage, setProfileImage] = useState('');
	const { userData, isError } = useUser();
	if (isError) {
		console.log('유저 데이터를 불러오는데 실패했습니다.');
	}
	useEffect(() => {
		const token = localStorage.getItem('accessToken');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		const fetchPosts = async () => {
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_API_URL}/api/post/${postId}`,
					config,
				);
				setPost(response.data.post);
				setProfileImage(response.data.user.profileImg);
				if (response.data.like && response.data.like.userId) {
					setLikeCount(response.data.like.userId.length);
					const currentUser = userData?._id;
					const isUserLiked = response.data.like.userId.includes(currentUser);
					setIsLiked(isUserLiked);
					setUserName(response.data.post.userName);
				} else {
					setLikeCount(0);
					setIsLiked(false);
					setUserName(response.data.post.userName);
				}
			} catch (error) {
				console.error('Error fetching posts:', error);
			}
		};
		const fetchComments = async () => {
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_API_URL}/api/comment/${postId}`,
				);
				setComments(response.data);
			} catch (error) {
				console.error('Error fetching comments:', error);
			}
		};

		fetchPosts();
		fetchComments();
	}, [postId, isLiked, userData?._id]);
	// --------토큰 받아오는 함수 ---------
	const getToken = () => {
		const token = localStorage.getItem('accessToken');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		return config;
	};

	//----------게시글 삭제------------
	const deletePost = async () => {
		try {
			const result = await Swal.fire(
				alertList.doubleCheckMessage('게시글을 삭제하시겠습니까?'),
			);
			if (result.isConfirmed) {
				await del<PostType[]>(`/api/post/${postId}`);
				mutate(`${process.env.REACT_APP_API_URL}/api/post/${postId}`);
				navigate('/post');
			}
		} catch (error) {
			console.log('게시글 삭제 실패', error);
			await Swal.fire(alertList.errorMessage('게시글 삭제에 실패하였습니다.'));
		}
	};

	//----- 댓글 생성 코드------
	const handleCommentInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setCommentInput(event.target.value);
	};
	const handleCommentSubmit = async (
		event: React.FormEvent<HTMLFormElement>,
	) => {
		event.preventDefault();
		if (commentInput.trim() === '') {
			alert('댓글을 입력해주세요.');
			return;
		}
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/api/comment/${postId}`,
				{
					comment: commentInput,
					userId: userData?.userId,
					userName: userData?.userName,
				},
				getToken(),
			);
			setComments((prevComments) => [...prevComments, response.data]);
			setCommentInput('');
		} catch (error) {
			console.error('Error posting comment:', error);
		}
	};
	//----------댓글 삭제------------
	const deleteComment = async (
		postId: string,
		commentId: string,
		userId: string,
	) => {
		try {
			if (userData?._id !== userId) {
				await Swal.fire(
					alertList.errorMessage('댓글 아이디가 일치하지 않습니다.'),
				);
				return;
			}
			const result = await Swal.fire(
				alertList.doubleCheckMessage('댓글을 삭제하시겠습니까?'),
			);
			if (result.isConfirmed) {
				await del<CommentType[]>(`/api/comment/${postId}/${commentId}`);
				mutate(
					`${process.env.REACT_APP_API_URL}/apicomment/${postId}/${commentId}`,
				);
				// 삭제된 댓글을 제외한 댓글들로 상태를 업데이트합니다.
				setComments(comments.filter((comment) => comment._id !== commentId));
			}
		} catch (error) {
			console.log('댓글 삭제에 실패했습니다.', error);
			await Swal.fire(alertList.errorMessage('댓글 삭제에 실패하였습니다.'));
		}
	};

	// --------좋아요 기능 ----------
	const handleLikeButton = async () => {
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/api/like/${postId}`,
				{},
				getToken(),
			);
			const { liked, count } = response.data;
			setIsLiked(liked);
			setLikeCount(count);
		} catch (error) {
			console.error('Error updating like:', error);
		}
	};
	//------------댓글 이름 클릭 시 그 사람 프로필로 이동------------
	const moveToUser = async (userName: string) => {
		try {
			navigate(`/post/user/${userName}`);
		} catch (error) {
			console.log(error);
		}
	};
	if (post === null) {
		// post가 null일 때 로딩 상태로 처리
		return <div>Loading...</div>;
	}
	return (
		<>
			<DetailHeader />
			<Container>
				<ProfileWrap>
					<Profile>
						<ProfileUserImage src={profileImage} alt='userImg' />
						<ProfileId>{userName}</ProfileId>
					</Profile>
					{userData?.userName === userName ? (
						<DeleteButtonWrap>
							<DeleteButton onClick={deletePost}>
								<DeleteButtonIcon src={DeleteIcon} alt='삭제버튼' />
							</DeleteButton>
						</DeleteButtonWrap>
					) : (
						<span></span>
					)}
				</ProfileWrap>
				<PostWrap>
					{/* 게시글 큰 wrap */}
					<ImgWrap>
						{/* 사진 wrap */}
						<Slider {...settings}>
							{post?.images.map((image, index) => (
								<div key={index}>
									<PostImg src={image} alt={`post ${index}`} />
								</div>
							))}
						</Slider>
					</ImgWrap>
					<PostDetailWrap>
						{/* 좋아요버튼, 좋아요수, 시간 */}
						<LikeWrap>
							<LikeButton onClick={handleLikeButton}>
								<LikeButtonIcon
									src={isLiked ? likedIcon : likeIcon}
									alt='좋아요 버튼'
								/>
							</LikeButton>
							<LikeCountWrap>
								좋아요 <LikeCount>{likeCount}</LikeCount>
							</LikeCountWrap>
						</LikeWrap>
						<PostTime>{dayjs(post?.createdAt).format('YYYY-MM-DD')}</PostTime>
					</PostDetailWrap>
					<ContentWrap>
						{/* 게시글 내용 들어갈 자리 */}
						<Content>{post?.content}</Content>
					</ContentWrap>
					<hr />
				</PostWrap>
				<CommentWrap>
					<CommentTitle>댓글</CommentTitle>
					<CommentUl>
						{comments.map((comment, index) => (
							<Commentli key={index}>
								<CommentContentWrap>
									<CommentUserId
										onClick={() => {
											moveToUser(comment.userName);
										}}>
										{comment.userName}
									</CommentUserId>
									<CommentContent>{comment.comment}</CommentContent>
								</CommentContentWrap>
								{userData?._id === comment.userId && (
									<CommentDeleteButton
										onClick={() =>
											deleteComment(comment.postId, comment._id, comment.userId)
										}>
										<CommentDeleteImg
											src={CommentDeleteIcon}
											alt='댓글 삭제 버튼'></CommentDeleteImg>
									</CommentDeleteButton>
								)}
							</Commentli>
						))}
					</CommentUl>
					<form onSubmit={handleCommentSubmit}>
						<CommentInput
							type='text'
							value={commentInput}
							onChange={handleCommentInputChange}
							placeholder='댓글 남기기'
						/>
					</form>
				</CommentWrap>
			</Container>
			<Footer />
		</>
	);
};

export default Detail;
