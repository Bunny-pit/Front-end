import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import DetailHeader from '../../../components/Header/DetailHeader/DetailHeader';
import Footer from '../../../components/Footer/Footer';
import ProfileImg from '../../../assets/images/userimagesmall.png';
import DeleteIcon from '../../../assets/icons/DeleteIcon.png';
import likeIcon from '../../../assets/icons/like.png';
import likedIcon from '../../../assets/icons/liked.png';
import CommentDeleteIcon from '../../../assets/icons/CommentDeleteIcon.png';
import { useUser } from '../../../utils/swrFetcher';
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

interface Post {
	_id: string;
	userId: string;
	profileImage: string;
	images: string[];
	content: string;
	createdAt: string;
	likeCount: number; // 추가된 부분
}
interface Comment {
	comment: string;
	_id: string;
	postId: string;
	userId: string;
	userName: string;
	createdAt: Date;
	updatedAt: Date;
}

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
	const [post, setPost] = useState<Post | null>(null); // 초기 상태를 null로 설정
	const [comments, setComments] = useState<Comment[]>([]); // 댓글 상태를 추가
	const [commentInput, setCommentInput] = useState('');
	const [userName, setUserName] = useState(''); // userName 게시글 기준으로 추가해야됨
	const [likeCount, setLikeCount] = useState<number>(0);
	const [isLiked, setIsLiked] = useState<boolean>(false);
	const { userData, isError } = useUser();
	if (isError) {
		console.log('유저 데이터를 불러오는데 실패했습니다.');
	} else if (!userData) {
		console.log('유저 데이터를 불러오는 중...');
	}

	useEffect(() => {
		const token = localStorage.getItem('accessToken');
		// 헤더에 토큰을 추가하는 config 객체를 만듭니다.
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		// MongoDB에서 데이터 가져오는 함수
		//게시글 가져옴
		const fetchPosts = async () => {
			try {
				const response = await axios.get(
					`http://localhost:4000/api/post/${postId}`,
					config,
				);
				setPost(response.data.post);
				if (response.data.like && response.data.like.userId) {
					setLikeCount(response.data.like.userId.length);
					const currentUser = userData?._id;
					const isUserLiked = response.data.like.userId.includes(currentUser);
					setIsLiked(isUserLiked);
					// console.log('userId = ', response.data.like.userId);
					// console.log('currentUser = ', currentUser);
					// console.log('count = ', response.data.like.userId.length);
					// console.log('liked = ', isUserLiked);
					console.log(response.data);
					setUserName(response.data.post.userName);
				} else {
					setLikeCount(0);
					setIsLiked(false);
					setUserName(response.data.post.userName);
				}
				// console.log(response.data.post);
			} catch (error) {
				console.error('Error fetching posts:', error);
			}
		};
		//댓글 가져옴
		const fetchComments = async () => {
			// 댓글을 가져오는 함수
			try {
				const response = await axios.get(
					`http://localhost:4000/api/comment/${postId}`,
				);
				setComments(response.data);
			} catch (error) {
				console.error('Error fetching comments:', error);
			}
		};

		fetchPosts();
		fetchComments();
	}, [postId, isLiked]);
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
	const handleDeletePostButton = async () => {
		const confirmed = window.confirm('정말로 삭제하시겠습니까?');
		if (confirmed) {
			try {
				await axios.delete(
					`http://localhost:4000/api/post/${postId}`,
					getToken(),
				);
				navigate('/post');
			} catch (error) {
				console.error('Error deleting post:', error);
			}
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
				`http://localhost:4000/api/comment/${postId}`,
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
	//-----댓글 삭제 코드 -----
	const deleteComment = async (postId: string, commentId: string) => {
		try {
			await axios.delete(
				`http://localhost:4000/api/comment/${postId}/${commentId}`,
				getToken(),
			);

			// 삭제된 댓글을 제외한 댓글들로 상태를 업데이트합니다.
			setComments(comments.filter((comment) => comment._id !== commentId));
		} catch (error) {
			console.error('Error deleting comment:', error);
		}
	};
	// --------좋아요 기능 ----------
	const handleLikeButton = async () => {
		try {
			const response = await axios.post(
				`http://localhost:4000/api/like/${postId}`,
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
	if (post === null) {
		// post가 null일 때 로딩 상태로 처리
		return <div>Loading...</div>;
	}
	console.log('유저데이터는!!!', userData);
	return (
		<>
			<DetailHeader />
			<Container>
				<ProfileWrap>
					<Profile>
						<ProfileUserImage src={ProfileImg} alt='userImg' />
						<ProfileId>{userName}</ProfileId>
					</Profile>
					<DeleteButtonWrap>
						<DeleteButton onClick={handleDeletePostButton}>
							<DeleteButtonIcon src={DeleteIcon} alt='삭제버튼' />
						</DeleteButton>
					</DeleteButtonWrap>
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
									<CommentUserId>{comment.userName}</CommentUserId>
									<CommentContent>{comment.comment}</CommentContent>
								</CommentContentWrap>
								<CommentDeleteButton
									onClick={() => deleteComment(comment.postId, comment._id)}>
									<CommentDeleteImg
										src={CommentDeleteIcon}
										alt='댓글 삭제 버튼'></CommentDeleteImg>
								</CommentDeleteButton>
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
