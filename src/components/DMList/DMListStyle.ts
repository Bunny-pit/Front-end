import styled from 'styled-components';

export const TopContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	& span {
		font-size: 2.5rem;
		font-weight: 700;
	}
`;

export const MemberList = styled.div`
	font-size: 2rem;

	& a {
		margin-bottom: 5rem;
	}
	@media (max-width: 628px) {
		& a {
			display: flex;
			align-items: center;
			color: black;
		}
	}
`;

export const Nickname = styled.p`
	width: 100%;
`;

export const Profile = styled.img`
	border-radius: 50%;
	margin-right: 2rem;
	width: 12%;
	@media (max-width: 628px) {
		width: 5rem;
		height: 5rem;
	}
`;
export const Exiticon = styled.img`
	margin-left: 3rem;
	cursor: pointer;
	width: 6%;
	@media (max-width: 628px) {
		width: 2rem;
		height: 3rem;
	}
`;
export const Modal = styled.div`
	position: fixed;
	width: 50%;
	height: 50%;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 2rem;
	border: 1px solid ${({ theme }) => theme.colors.strongpurple};
	z-index: 999;
	top: 10%;
	left: 25%;
`;
