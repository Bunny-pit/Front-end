import React from 'react';
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

const Detail = () => {
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
						<PostImg>이미지 들어갈 자리</PostImg>
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
						<PostTime>시간 들어갈 자리</PostTime>
					</PostDetailWrap>
					<ContentWrap>
						{/* 게시글 내용 들어갈 자리 */}
						<Content>게시글 내용이 들어갈 자리입니다아아아아아아아앙</Content>
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
