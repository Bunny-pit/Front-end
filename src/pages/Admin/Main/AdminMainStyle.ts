import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 100vw;
	min-height: 100vh;
	text-align: center;
	box-sizing: border-box;
`;

export const Title = styled.div`
	margin-top: 100px;
	font-size: 5rem;
	font-weight: bold;

	@media (max-width: 768px) {
		font-size: 4rem;
	}

	@media (max-width: 390px) {
		font-size: 3rem;
	}
`;

export const MenuFlex = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 100px;
	gap: 30px;

	width: @media (max-width: 768px) {
		width: 45rem;
	}

	@media (max-width: 390px) {
		width: 30rem;
	}
`;

export const LinkStyle = styled(Link)`
	text-decoration: none;
	:hover {
		background-color: #eee;
	}
`;

export const MenuButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid #7954f8;
	border-radius: 20px;
	flex-direction: column;
	width: 35rem;
	height: 10rem;
	cursor: pointer;
	background-color: #fff;
`;

export const SubTitle = styled.div`
	font-size: 3rem;
	color: #7954f8;
	font-weight: 700;

	@media (max-width: 768px) {
		font-size: 2.6rem;
	}

	@media (max-width: 390px) {
		font-size: 2.3rem;
	}
`;
