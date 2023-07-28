import styled from 'styled-components';

export const FooterStyle = styled.div`
	width: 100%;
	background: #181820;
	color: #fff;
	font-size: 1.8rem;
`;
export const Wrapper = styled.div`
	height: 20rem;
	margin: 0 4rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const Sec1 = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const Logo = styled.img`
	width: 7.6rem;
	height: 10.5rem;
`;
export const Line = styled.img`
	margin: 0 0 0 5rem;
	height: 10rem;
`;
export const Sec2 = styled.div`
	width: 35rem;
	text-align: right;
`;
export const Title = styled.p`
	color: #fb9bf9;
	font-weight: 600;
	margin-bottom: 6rem;
`;
export const MemberList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-between;
	padding: 0;
`;
export const List = styled.li``;
export const MemberLink = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.background};
	padding: 0.2rem 0 0.2rem 0.8rem;
`;
export const ProjectLink = styled.a`
	color: #b3b3b3;
	padding: 0.2rem 0 0.2rem 0.8rem;
	text-decoration: none;
`;
