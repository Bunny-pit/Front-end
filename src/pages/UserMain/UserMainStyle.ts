import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 auto;
	box-sizing: border-box;
	@media only screen and (min-width: 769px) and (max-width: 1980px) {
		width: 50%;
	}
	@media only screen and (min-width: 391px) and (max-width: 768px) {
		width: 70%;
	}
	@media only screen and (min-width: 0px) and (max-width: 390px) {
		width: 100%;
	}
	height: 150rem;
`;
export const Sec1 = styled.div`
	width: 80%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10rem 0;
`;
export const ImageWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50%;
`;
export const UserImage = styled.img`
	border-radius: 50%;
	width: 31rem;
	height: 31rem;
	object-fit: cover;
	background-color: #fff;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	@media only screen and (min-width: 391px) and (max-width: 768px) {
		width: 18rem;
		height: 18rem;
	}
	@media only screen and (min-width: 0px) and (max-width: 390px) {
		width: 15rem;
		height: 15rem;
	}
`;
export const OtherUserImage = styled.img`
	border-radius: 200px;
	width: 31rem;
	height: 31rem;
	object-fit: cover;
	background-color: #fff;
	@media only screen and (min-width: 391px) and (max-width: 768px) {
		width: 18rem;
		height: 18rem;
	}
	@media only screen and (min-width: 0px) and (max-width: 390px) {
		width: 15rem;
		height: 15rem;
	}
`;
export const ProfileWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50%;
`;
export const Wrapper1 = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
export const UserId = styled.h4`
	font-size: 2.5rem;
`;

export const PlusIcon = styled.img`
	width: 3.1rem;
	cursor: pointer;
`;
export const FriendButton = styled.button`
	width: 10rem;
	height: 3.9rem;
	font-size: 1.4rem;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.colors.lightpurple};
	color: ${({ theme }) => theme.colors.background};
	font-weight: 600;
	cursor: pointer;
	border: none;
`;
export const Wrapper2 = styled.div`
	margin-bottom: 2rem;
	display: flex;
	justify-content: flex-start;
`;
export const EditButton = styled.button`
	width: 10rem;
	cursor: pointer;
	height: 3.9rem;
	font-size: 1.4rem;
	border: none;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.colors.strongpurple};
	a {
		color: ${({ theme }) => theme.colors.background};
		font-weight: 600;
		text-decoration: none;
	}
`;
export const PostButton = styled.button`
	width: 10rem;
	cursor: pointer;
	height: 3.9rem;
	font-size: 1.4rem;
	border: none;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.colors.lightpurple};
	font-weight: 600;
	margin-right: 2rem;
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.background};
	}
`;

export const Wrapper3 = styled.div`
	display: flex;
	p {
		margin: 0;
		font-size: 1.6rem;
		font-weight: 500;
		span {
			font-weight: 600;
		}
	}
	:nth-child(2) {
		margin-left: 2.5rem;
	}
`;
export const Wrapper4 = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-content: space-between;
	margin-top: 1.5rem;
`;

export const ProfileUl = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: row;
	align-items: center;
`;
export const ProfileLi = styled.li`
	font-size: 1.8rem;
`;

export const Email = styled.a`
	text-decoration: none;
	color: #000;
	font-size: 1.8rem;
`;

// 여기부터 게시글!!
export const PostContainer = styled.div`
	text-align: center;
`;
export const PostTitle = styled.h3`
	font-size: 2.4rem;
	font-weight: 500;
`;
export const PostUl = styled.ul`
	list-style: none;
	box-sizing: border-box;
	padding: 0;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	gap: 3rem;
	place-items: center;
	position: relative;
	@media only screen and (min-width: 769px) and (max-width: 1980px) {
		gap: 1rem;
	}
	@media only screen and (min-width: 391px) and (max-width: 768px) {
		gap: 1;
	}
	@media only screen and (min-width: 0px) and (max-width: 390px) {
		gap: 0;
	}
`;
export const PostUlEmpty = styled(PostUl)`
	height: 70rem;
`;
export const PostLi = styled.li`
	// height: 22rem;
	width: 100%;
	overflow: hidden;
	box-sizing: border-box;
	.link {
		width: 100%;
		height: auto;
		img {
			width: 100%;
			height: 26rem;
		}
	}
	@media only screen and (min-width: 1280px) and (max-width: 1980px) {
		height: 25rem;
	}
	@media only screen and (min-width: 391px) and (max-width: 768px) {
		height: 22rem;
	}
	@media only screen and (min-width: 0px) and (max-width: 390px) {
		gap: 0;
	}
`;
export const NothingWrap = styled.div`
	width: 100%;
	position: absolute;
`;
export const NothingPost = styled.p`
	font-size: 2rem;
	font-weight: 600;
`;
