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
const settings = {
	dots: true, // dot navigation을 보여줄지에 대한 여부
	infinite: true, // 무한으로 슬라이드가 돌아가는지에 대한 여부
	speed: 500, // 슬라이드가 넘어가는 속도(ms 단위)
	slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
	slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수
};

const Detail = () => {
	const { postId } = useParams();
	const [post, setPost] = useState<Post | null>(null); // 초기 상태를 null로 설정
	useEffect(() => {
		// MongoDB에서 데이터 가져오는 함수
		const fetchPosts = async () => {
			try {
				const response = await axios.get(
					`http://localhost:4000/api/post/${postId}`,
				);
				setPost(response.data);
				console.log('response', response);
			} catch (error) {
				console.error('Error fetching posts:', error);
			}
		};

		fetchPosts();
	}, [postId]);

	console.log('postId : ', postId);
	console.log('post : ', post);

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
						<Commentli>
							<CommentUserId>UserName</CommentUserId>
							<CommentContent>댓글 내용이다 깽깽이들아!!!</CommentContent>
						</Commentli>
						<Commentli>
							<CommentUserId>UserName</CommentUserId>
							<CommentContent>댓글 내용이다 깽깽이들아!!!</CommentContent>
						</Commentli>
						<Commentli>
							<CommentUserId>UserName</CommentUserId>
							<CommentContent>댓글 내용이다 깽깽이들아!!!</CommentContent>
						</Commentli>
						<Commentli>
							<CommentUserId>UserName</CommentUserId>
							<CommentContent>댓글 내용이다 깽깽이들아!!!</CommentContent>
						</Commentli>
					</CommentUl>
					<CommentInput type='text' placeholder='댓글 남기기'></CommentInput>
				</CommentWrap>
			</Container>
			<Footer />
		</>
	);
};

export default Detail;
