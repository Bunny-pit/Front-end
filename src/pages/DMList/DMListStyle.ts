import styled from 'styled-components';

export const TopContainer = styled.div`
	margin-top: 2rem;
	width: 100%;
	display: flex;
	align-items: center;
	& span {
		font-size: 2.5rem;
		font-weight: 700;
	}
`;

export const MemberList = styled.div`
	margin-top: 5rem;
	font-size: 2rem;
	margin-bottom: 6rem;

	& a {
		margin-bottom: 5rem;
	}
`;
export const Nickname = styled.p`
	width: 100%;
`;
export const Profile = styled.img`
	border-radius: 50%;
	margin-right: 2rem;
	width: 12%;
`;
export const Exiticon = styled.img`
	margin-left: 3rem;
	margin-right: 2rem;
	cursor: pointer;
	width: 6%;
`;
