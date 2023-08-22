import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 1280px;
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

export const TableDiv = styled.div`
	margin: 60px auto;
	width: 80%;

	box-sizing: border-box;
`;
export const Thead = styled.thead`
	background-color: #7954f8;
	color: #fff;
	font-size: 2.6rem;

	@media (max-width: 768px) {
		font-size: 2.3rem;
	}
	@media (max-width: 390px) {
		font-size: 1.5rem;
	}
`;
export const Tbody = styled.tbody`
	font-size: 2.5rem;

	@media (max-width: 768px) {
		font-size: 2.2rem;
	}
	@media (max-width: 390px) {
		font-size: 1.4rem;
	}
`;
export const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
`;
export const Th = styled.th`
	text-align: center;
	padding: 20px;
`;
export const Td = styled.td`
	text-align: center;
	padding: 20px;
`;
export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 2rem;
	padding: 2rem 0;
	width: 10rem;
	background-color: ${({ theme }) => theme.colors.pointcolor};
	border-radius: 1.2rem;
	color: white;
	font-weight: bold;
	border: none;
	cursor: pointer;
	font-size: 1.8rem;

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
	@media (max-width: 390px) {
		font-size: 1rem;
		padding: 1.2rem 0;
		width: 6rem;
	}
`;

export const ChangeButtonDiv = styled.div`
	width: 50%;
	margin: 0 auto;
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

// 팝업창 스타일

export const PopupOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;
export const PopupContent = styled.div`
	background-color: white;
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
	width: 300px;
	max-width: 90%;
	text-align: center;
`;
export const CloseButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	margin-top: 3rem;
	padding: 1.5rem 0;
	width: 10rem;
	background-color: ${({ theme }) => theme.colors.pointcolor};
	border-radius: 1.2rem;
	color: white;
	font-weight: bold;
	border: none;
	cursor: pointer;
	font-size: 1.8rem;
`;

export const PopupH1 = styled.p`
	font-size: 3.6rem;
	font-weight: 900;
	color: ${({ theme }) => theme.colors.pointcolor};
`;
export const PopupUL = styled.ul`
	list-style: none;
	padding-left: 0;
`;
export const PopupLI = styled.li`
	font-size: 2.3rem;
	margin: 2rem;
	padding: 0;
`;
export const PopupSpan = styled.span`
	font-size: 2.6rem;
	font-weight: 600;
`;
