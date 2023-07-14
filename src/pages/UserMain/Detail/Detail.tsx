import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import DetailHeader from '../../../components/Header/DetailHeader/DetailHeader';
import Footer from '../../../components/Footer/Footer';
import ProfileImg from '../../../assets/images/userimagesmall.png';
import DeleteIcon from '../../../assets/icons/DeleteIcon.png';
import likeIcon from '../../../assets/icons/like.png';
import CommentDeleteIcon from '../../../assets/icons/CommentDeleteIcon.png';
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

const backUrl = 'https://port-0-back-end-kvmh2mljxnw03c.sel4.cloudtype.app/api';

interface Post {
	_id: string;
	userId: string;
	profileImage: string;
	images: string[];
	content: string;
	createdAt: string;
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
	dots: false, // dot navigation을 보여줄지에 대한 여부
	infinite: true, // 무한으로 슬라이드가 돌아가는지에 대한 여부
	speed: 500, // 슬라이드가 넘어가는 속도(ms 단위)
	slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
	slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수
};

const Detail = () => {
	const { postId } = useParams();
	const [post, setPost] = useState<Post | null>(null); // 초기 상태를 null로 설정
	const [comments, setComments] = useState<Comment[]>([]); // 댓글 상태를 추가
	const [commentInput, setCommentInput] = useState(''); // Add this line

	useEffect(() => {
		// MongoDB에서 데이터 가져오는 함수
		//게시글 가져옴
		const fetchPosts = async () => {
			try {
				const response = await axios.get(
					`http://localhost:4000/api/post/${postId}`,
				);
				setPost(response.data);
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
	}, [postId]);
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
					// You should also send the user id and username here, for example:
					userId: 'jonguk@gamil.com',
					userName: '프론트 종욱',
					// userId: currentUser.id,
					// userName: currentUser.name,
				},
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
			console.log(postId, `<br/>`, commentId);
			const response = await axios.delete(
				`http://localhost:4000/api/comment/${postId}/${commentId}`,
			);

			console.log(response.data);

			// 삭제된 댓글을 제외한 댓글들로 상태를 업데이트합니다.
			setComments(comments.filter((comment) => comment._id !== commentId));
		} catch (error) {
			console.error('Error deleting comment:', error);
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
						<ProfileUserImage src={ProfileImg} alt='userImg' />
						<ProfileId>유저 아이디</ProfileId>
					</Profile>
					<DeleteButtonWrap>
						<DeleteButton>
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
							<LikeButton>
								<LikeButtonIcon src={likeIcon} alt='좋아요 버튼' />
							</LikeButton>
							<LikeCountWrap>
								좋아요 수 <LikeCount>0</LikeCount>
							</LikeCountWrap>
						</LikeWrap>
						<PostTime>{post?.createdAt}</PostTime>
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
