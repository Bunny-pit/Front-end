import styled from 'styled-components';

export const TopContainer = styled.div`
	margin-top: 2rem;
	display: flex;
	align-items: center;
	& span {
		font-size: 2.5rem;
		font-weight: 700;
	}
`;

export const CollapseButton = styled.img.attrs<{ collapse: string }>(
	(props) => ({
		collapse: props.collapse ? 'true' : 'false',
	}),
)<{ collapse: string }>`
	background: transparent;
	border: none;
	width: 2rem;
	height: 2.6rem;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	color: white;
	margin-left: 2rem;
	margin-right: 2rem;
	cursor: pointer;
`;

export const MemberList = styled.div`
	margin-top: 5rem;
	font-size: 2rem;
	margin-bottom: 6rem;

	& a {
		margin-bottom: 5rem;
	}
`;
export const Nickname = styled.p``;
export const Profile = styled.img`
	border-radius: 50%;
	margin-right: 2rem;
	width: 12%;
`;
export const Exiticon = styled.img`
	margin-left: 3rem;
	cursor: pointer;
	width: 15%;
`;
