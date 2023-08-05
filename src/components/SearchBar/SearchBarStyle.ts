import styled from 'styled-components';

export const SearchBarForm = styled.form`
	position: relative;
	display: flex;
	justify-content: center;
	width: 100%;
	height: 4rem;
	margin-top: 6.4rem;
	display: flex;
	margin-bottom: 3rem;
`;

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 3.5rem 0;
	border-radius: 2rem;
	width: 25rem;
	border: 1px solid ${({ theme }) => theme.colors.gray300};
`;

export const SearchBarInput = styled.input`
	margin-left: 2rem;
	box-sizing: border-box;
	height: 5rem;
	border: none;
	outline: none;
	font-size: 2rem;
	background-color: inherit;
`;

export const SearchLogo = styled.img`
	margin-left: 2rem;
	width: 2rem;
	height: 2rem;
`;
export const SearchBarBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 2rem;
	padding: 3.5rem 0;
	height: 2rem;
	width: 6rem;
	background-color: ${({ theme }) => theme.colors.pointcolor};
	border-radius: 1.2rem;
	color: white;
	font-weight: bold;
	border: none;
	cursor: pointer;
	font-size: 2rem;
`;
