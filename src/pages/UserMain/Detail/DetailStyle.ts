import styled from 'styled-components';

export const Container = styled.div`
	width: 50%;
	margin: 0 auto;
	box-sizing: border-box;

	@media only screen and (min-width: 769px) and (max-width: 1980px) {
		width: 50%;
	}
	@media only screen and (min-width: 391px) and (max-width: 768px) {
		width: 60%;
	}
	@media only screen and (min-width: 0px) and (max-width: 390px) {
		width: 100%;
	}
`;
export const ProfileWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 8rem 0 2rem;
	@media only screen and (min-width: 0px) and (max-width: 390px) {
		margin: 2rem 0;
	}
`;
export const Profile = styled.div`
	display: flex;
	align-items: center;
	margin-left: 1rem;
`;
export const ProfileUserImage = styled.img`
	width: 10rem;
	height: 10rem;
	border-radius: 50rem;
	@media only screen and (min-width: 391px) and (max-width: 768px) {
		width: 7rem;
		height: 7rem;
		border-radius: 50rem;
	}
`;
export const ProfileId = styled.p`
	font-size: 2.7rem;
	margin-left: 3rem;
`;
export const DeleteButtonWrap = styled.div`
	border: none;
`;
export const DeleteButton = styled.button`
	border: none;
	background: #fff;
	cursor: pointer;
`;
export const DeleteButtonIcon = styled.img`
	width: 3.3rem;
	background: #fff;
	margin: 0 auto;
`;

export const PostWrap = styled.div``;
export const ContentWrap = styled.div`
	margin: 2rem 0;
	font-size: 2rem;
`;
export const Content = styled.div`
	color: ${({ theme }) => theme.colors.text};

	@media only screen and (min-width: 0px) and (max-width: 390px) {
		margin-left: 1rem;
	}
`;

export const ImgWrap = styled.div`
	width: 100%;
`;
export const PostImg = styled.img`
	width: 100%;
`;
export const PostDetailWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const LikeWrap = styled.div`
	display: flex;
	align-items: center;
`;
export const LikeButton = styled.button`
	border: none;
	cursor: pointer;
	background: #fff;
`;
export const LikeCountWrap = styled.div`
	font-size: 2rem;
	display: flex;
	align-items: center;
`;
export const LikeCount = styled.p`
	font-weight: 600;
	margin-left: 1rem;
`;
export const PostTime = styled.p`
	font-size: 1.8rem;
	color: ${({ theme }) => theme.colors.gray600};
	@media only screen and (min-width: 0px) and (max-width: 390px) {
		margin-right: 1rem;
	}
`;
export const LikeButtonIcon = styled.img`
	width: 3.6rem;
`;
export const CommentWrap = styled.div``;
export const CommentTitle = styled.h3`
	text-align: center;
	font-size: 2rem;
`;
export const CommentUl = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: column;
	li:hover {
		border-radius: 3rem;
		background-color: rgba(251, 155, 249, 0.3);
	}
	li:hover button {
		display: block;
	}
`;
export const Commentli = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 1rem 0 1rem 1.5rem;
	position: relative;
`;

export const CommentContentWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between
	align-items: center;
`;

export const CommentDeleteButton = styled.button`
	display: none;
	position: absolute;
	right: 3rem;
	cursor: pointer;
	background-color: transparent;
	border-color: transparent;
`;
export const CommentDeleteImg = styled.img`
	width: 1.7rem;
`;
export const CommentUserId = styled.h4`
	font-size: 1.8rem;
	margin: 0 2rem 0 0;
`;
export const CommentContent = styled.p`
	font-size: 1.8rem;
	margin: 0px;
`;
export const CommentInput = styled.input`
	width: 100%;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	margin: 2rem 0 6rem;
	padding: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.gray400};
	border-radius: 0.5rem;
`;
