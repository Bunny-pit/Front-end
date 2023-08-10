import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 auto;
	box-sizing: border-box;
	@media only screen and (min-width: 390px) and (max-width: 550px) {
		width: 100%;
	}
	@media only screen and (min-width: 1280px) and (max-width: 1980px) {
		width: 40%;
	}
`;
export const Sec1 = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 10rem 0;
`;
export const ImageWrap = styled.div`

  width: 50%;
  orange;
  text-align: right;
  margin-right: 2rem;
`;
export const UserImage = styled.img`
	border-radius: 200px;
	@media only screen and (min-width: 390px) and (max-width: 550px) {
		width: 20rem;
	}
	@media only screen and (min-width: 1280px) and (max-width: 1980px) {
		width: 31rem;
	}
`;
export const ProfileWrap = styled.div`
	margin-left: 2rem;
	width: 50%;
`;
export const Wrapper1 = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
export const UserId = styled.h4`
	font-size: 2.6rem;
	margin-right: 2rem;
`;
export const PlusIcon = styled.img`
	width: 3.1rem;
	cursor: pointer;
	margin-right: 2rem;
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
	@media only screen and (min-width: 390px) and (max-width: 1279px) {
		gap: 0;
	}
	@media only screen and (min-width: 1280px) and (max-width: 1980px) {
		gap: 1rem;
	}
`;
export const PostUlEmpty = styled(PostUl)`
	height: 70rem;
`;
export const PostLi = styled.li`
	// height: 22rem;
	overflow: hidden;
	box-sizing: border-box;
	.link {
		width: 100%;
		height: auto;
		img {
			width: 100%;
			height: auto;
		}
	}
	@media only screen and (min-width: 390px) and (max-width: 1279px) {
		height: 21rem;
	}
	@media only screen and (min-width: 1280px) and (max-width: 1980px) {
		height: 25rem;
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
