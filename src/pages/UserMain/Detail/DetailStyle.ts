import styled from 'styled-components';

export const Container = styled.div`
	width: 75%;
	margin: 0 auto;
`;
export const ProfileWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 8rem 0 2rem;
`;
export const Profile = styled.div`
	display: flex;
	align-items: center;
`;
export const ProfileUserImage = styled.img`
	width: 10rem;
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
`;
export const LikeButtonIcon = styled.img`
	width: 3.6rem;
`;
export const CommentWrap = styled.div``;
export const CommentTitle = styled.h3`
	text-align: center;
`;
export const CommentUl = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: column;
`;
export const Commentli = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
export const CommentUserId = styled.h4`
	font-size: 1.8rem;
	margin-right: 2rem;
`;
export const CommentContent = styled.p`
	font-size: 1.8rem;
`;
export const CommentInput = styled.input`
	width: 99%;
	margin: 0;
	padding: 0;
	margin: 2rem 0 6rem;
	padding: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.gray400};
	border-radius: 0.5rem;
`;
