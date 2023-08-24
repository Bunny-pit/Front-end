import styled from 'styled-components';

export const HedearStyle = styled.div`
	border-bottom: 0.1rem solid ${({ theme }) => theme.colors.logocolor};
`;
export const HeaderWrapper = styled.div`
	margin: 0 4rem;
	height: 10rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
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

export const Icon = styled.img`
	width: 3.7rem;
	height: 3.4rem;
`;
