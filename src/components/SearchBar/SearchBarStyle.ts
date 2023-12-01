import styled from 'styled-components';

export const SearchBarForm = styled.form`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 4rem;
	margin-top: 6rem;
	margin-bottom: 6rem;
	display: flex;
`;

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 3rem 10px;
	border: 1px solid ${({ theme }) => theme.colors.gray300};
	@media (max-width: 390px) {
		width: 20rem;
	}
	border-radius: 1.2rem;
`;

export const SearchBarInput = styled.input`
	width: 80%;
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
export const SearchBarButton = styled.button`
	margin-left: 1rem;
	width: 7rem;
	height: 6rem;
	background-color: ${({ theme }) => theme.colors.pointcolor};
	border-radius: 1.2rem;
	color: white;
	font-weight: bold;
	border: none;
	cursor: pointer;
	font-size: 1.5rem;
`;
