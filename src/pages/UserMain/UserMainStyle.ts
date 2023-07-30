import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 auto;
	max-width: 50%;
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
	width: 31rem;
	border-radius: 200px;
`;
export const ProfileWrap = styled.div`
	margin-left: 2rem;
	width: 50%;
`;
export const Wrapper1 = styled.div`
	display: flex;
	align-items: center;
`;
export const UserId = styled.h4`
	font-size: 2.6rem;
`;
export const PlusIcon = styled.img`
	width: 3.1rem;
	margin-left: 2rem;
	cursor: pointer;
`;
export const Wrapper2 = styled.div`
	margin-bottom: 2rem;
`;
export const FriendButton = styled.button`
	width: 11.4rem;
	height: 3.9rem;
	font-size: 1.4rem;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.colors.lightpurple};
	color: ${({ theme }) => theme.colors.background};
	font-weight: 600;
	margin-right: 2rem;
	cursor: pointer;
	border: none;
`;
export const EditButton = styled.button`
	width: 11.4rem;
	cursor: pointer;
	height: 3.9rem;
	font-size: 1.4rem;
	border: none;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.colors.strongpurple};
	color: ${({ theme }) => theme.colors.background};
	font-weight: 600;
	margin-right: 2rem;
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
	height: 70rem;
`;
export const PostTitle = styled.h3`
	font-size: 2.4rem;
	font-weight: 500;
`;
export const PostUl = styled.ul`
	list-style: none;
	height: 80%;
	box-sizing: border-box;
	padding: 0;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	gap: 3rem;
	place-items: center;
	position: relative;
`;
export const PostLi = styled.li`
	height: 22rem;
	overflow: hidden;
	.link {
		width: 100%;
		height: auto;
		img {
			width: 100%;
		}
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
