import styled from 'styled-components';

export const ModalWrapper = styled.div`
	position: fixed;
	width: 50%;
	height: 50%;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 2rem;
	border: 1px solid ${({ theme }) => theme.colors.strongpurple};
	z-index: 999;
	top: 10%;
	left: 25%;
	@media (max-width: 390px) {
	}
`;
export const ExitImage = styled.img`
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 20px;
	z-index: 999;
`;
export const SearchBarContainer = styled.div`
	position: absolute;
	top: 0;
	margin-top: 0;
`;
export const SearchResult = styled.div`
	z-index: 9999;
	display: flex;
	flex-direction: column;
	max-height: 70vh;
	overflow-y: auto;
	width: 95%;
	margin-top: 15rem;
	align-items: center;
	border-left: 1px solid ${({ theme }) => theme.colors.gray200};
	border-right: 1px solid ${({ theme }) => theme.colors.gray200};
`;

export const ResultText = styled.p`
	font-size: 2rem;
	cursor: pointer;
	text-decoration: none;
	color: black;
	&:hover {
		background-color: #f5f5f5;
	}
`;
export const ProfileImage = styled.img`
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	margin-right: 2rem;
`;
export const NoResultText = styled.p`
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.strongpurple};
`;
export const ResultContainer = styled.div`
	display: flex;
	align-items: center;
`;