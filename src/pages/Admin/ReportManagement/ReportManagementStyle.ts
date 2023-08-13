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
	font-size: 2.5rem;
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
`;

export const ChangeButtonDiv = styled.div`
	width: 50%;
	margin: 0 auto;
`;

export const ButtonUser = styled.button`
	/* 일반 버튼 스타일 */
	border: none;

	font-size: 2.8rem;
	background-color: #fff;
	font-weight: 600;
	color: #121212;
	width: 50%;
	cursor: pointer;
	padding: 5%;
	border-bottom: 4px solid #7954f8;

	/* 활성 버튼 스타일 */
	&.active {
		font-size: 2.8rem;
		font-weight: 600;
		color: #2d2d2d;
		width: 50%;
		cursor: pointer;
		padding: 5%;
	}
`;

export const ButtonHospital = styled.button`
	/* 일반 버튼 스타일 */
	border: none;

	font-size: 2.8rem;
	font-weight: 600;
	color: #121212;
	width: 50%;
	background-color: white;
	cursor: pointer;
	padding: 5%;

	/* 활성 버튼 스타일 */
	&.active {
		font-size: 2.8rem;
		font-weight: 600;
		color: white;
		width: 50%;
		border: 1px solid #2d2d2d;
		border-bottom: none;
		background-color: #222222;
		cursor: pointer;
		padding: 5%;
	}
`;
