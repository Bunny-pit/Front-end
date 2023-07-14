import styled from 'styled-components';

export const HedearStyle = styled.div`
	border-bottom: 0.1rem solid ${({ theme }) => theme.colors.logocolor};
	position: relative;
`;
export const BackButton = styled.button`
	position: absolute;
	border: none;
	left: 2rem;
	cursor: pointer;
	background: ${({ theme }) => theme.colors.background};
`;
export const BackImage = styled.img``;
export const Title = styled.h3`
	font-size: 3.1rem;
	text-align: center;
`;
