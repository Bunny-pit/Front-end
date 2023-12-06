import styled from 'styled-components';

export const Container = styled.div`
	max-width: 100vw;
	min-height: 100vh;
	margin: 0 auto;
	text-align: center;
	box-sizing: border-box;

	@media (max-width: 390px) {
		margin: 0;
		padding: 0;
`;

export const TableContainer = styled.div`
	@media (max-width: 390px) {
		width: 0;
	}
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

export const ChangeButtonDiv = styled.div`
	width: 50%;
	margin: 0 auto;
	margin-bottom: 6rem;
`;

export const ButtonAnonymous = styled.button`
	/* 일반 버튼 스타일 */
	border: none;
	font-size: 2.8rem;
	background-color: #fff;
	font-weight: 600;
	color: #121212;
	width: 50%;
	cursor: pointer;
	padding: 5%;

	@media (max-width: 768px) {
		font-size: 2.4rem;
	}
	@media (max-width: 390px) {
		font-size: 1.5rem;
	}

	/* 활성 버튼 스타일 */
	&.active {
		font-size: 2.8rem;
		font-weight: 600;
		color: #2d2d2d;
		width: 50%;
		cursor: pointer;
		padding: 5%;
		border-bottom: 4px solid #7954f8;

		@media (max-width: 768px) {
			font-size: 2.4rem;
		}
		@media (max-width: 390px) {
			font-size: 1.5rem;
		}
	}
`;

export const Buttonfriends = styled.button`
	/* 일반 버튼 스타일 */
	border: none;
	font-size: 2.8rem;
	font-weight: 600;
	color: #121212;
	width: 50%;
	background-color: white;
	cursor: pointer;
	padding: 5%;
	@media (max-width: 768px) {
		font-size: 2.4rem;
	}
	@media (max-width: 390px) {
		font-size: 1.5rem;
	}

	/* 활성 버튼 스타일 */
	&.active {
		font-size: 2.8rem;
		font-weight: 600;
		color: #2d2d2d;
		width: 50%;
		cursor: pointer;
		padding: 5%;
		border-bottom: 4px solid #7954f8;

		@media (max-width: 768px) {
			font-size: 2.4rem;
		}
		@media (max-width: 390px) {
			font-size: 1.5rem;
		}
	}
`;
