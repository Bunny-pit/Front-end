import styled from 'styled-components';
import unknown from '../../assets/icons/icons8-secret.png';
import unknownChatting from '../../assets/icons/icons8-secretchat.png';
import friends from '../../assets/icons/icons8-friend.png';
import friendsChatting from '../../assets/icons/icons8-friendchat.png';

export const HedearStyle = styled.div`
	border-bottom: 0.1rem solid ${({ theme }) => theme.colors.logocolor};
	width: 100%;
`;
export const HeaderWrapper = styled.div`
	margin: 0 4rem;
	height: 10rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	.iconWrap {
		width: 10rem;
		display: flex;
		justify-content: space-between;
	}
	@media (min-width: 0px) and (max-width: 391px) {
		margin: 0;
		width: 100%;
		justify-content: space-evenly;
		ul {
			padding: 0;
			align-items: center;
			align-content: center;
			li {
				padding: 0;
				margin: 0 2rem;

				img {
					width: 24px;
					cursor: pointer;
				}
			}
		}
	}
	@media (min-width: 391px) and (max-width: 768px) {
		margin: 0 1rem;
		padding: 0;

		ul {
			flex-wrap: wrap;
			align-content: space-evenly;
			li {
				flex: 1 1 40%;
				margin: 0.5rem 0;
				text-align: center;
			}
		}
	}
`;

export const Logo = styled.img`
	width: 6.3rem;
`;
export const MenuUl = styled.ul`
	padding: 0 3rem;
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
export const MenuLi = styled.li`
	margin: 0 3rem;
	a {
		text-decoration: none;
		font-size: 2rem;
		color: black;
		padding: 1rem 1.5rem;
	}
`;

export const AnonymousIcon = styled.div`
	width: 24px;
	height: 24px;
	background-image: url(${unknown});
	background-size: cover;
	cursor: pointer;
`;

export const ChattingIcon = styled.div`
	width: 24px;
	height: 24px;
	background-image: url(${unknownChatting});
	background-size: cover;
	cursor: pointer;
`;

export const FriendsIcon = styled.div`
	width: 24px;
	height: 24px;
	background-image: url(${friends});
	background-size: cover;
	cursor: pointer;
`;

export const FriendChattingIcon = styled.div`
	width: 24px;
	height: 24px;
	background-image: url(${friendsChatting});
	background-size: cover;
	cursor: pointer;
`;

export const Option = styled.img`
	width: 3.4rem;
	height: 3.4rem;
	cursor: pointer;
`;
export const SearchImage = styled.img`
	cursor: pointer;
	width: 3.4rem;
	height: 3.4rem;
`;
