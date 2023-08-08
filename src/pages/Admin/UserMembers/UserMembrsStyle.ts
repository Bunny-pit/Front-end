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

export const SearchBarDiv = styled.div`
	width: 60%;
	border: 1px solid #d4d4d4;
	margin-top: 2%;
	padding: 1%;
	box-sizing: border-box;
	border-radius: 100px;
	margin: 0 auto;
`;
export const SearchBarForm = styled.form`
	width: 100%;
	display: flex;
`;
export const SearchBarInput = styled.input`
	font-size: 24px;
	border: none;
	width: 100%;
`;

export const TableDiv = styled.div`
	margin: 20px auto;
	width: 80%;

	box-sizing: border-box;
`;
export const Thead = styled.thead`
	background-color: #7954f8;
	color: #fff;
	font-size: 22px;
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
	font-size: 20px;
`;
