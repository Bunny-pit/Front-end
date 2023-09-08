import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 1280px;
	margin: 0 auto;
	text-align: center;
	box-sizing: border-box;
`;

export const Title = styled.p`
	font-size: 5rem;
	font-weight: 700;

	@media (max-width: 768px) {
		font-size: 4rem;
	}

	@media (max-width: 390px) {
		font-size: 3rem;
	}
`;

export const MenuFlex = styled.div`
	display: flex;
	padding: 1%;
	width: 70rem;
	margin: 8% auto;

	@media (max-width: 768px) {
		width: 45rem;
		margin: 6% auto;
	}

	@media (max-width: 390px) {
		width: 30rem;
		padding: 10%;
		margin: 6% auto;
	}
`;
export const Menu = styled.div`
	border: 1px solid #7954f8;
	padding: 1.8%;
	border-radius: 15px;

	width: 44%;
	margin: 5px;
	display: flex;
	flex-direction: column;
`;

export const H2 = styled.p`
	font-size: 3.4rem;
	color: #7954f8;
	font-weight: 700;

	@media (max-width: 768px) {
		font-size: 2.6rem;
	}

	@media (max-width: 390px) {
		font-size: 2.3rem;
	}
`;
