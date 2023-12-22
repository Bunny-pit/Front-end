import styled from 'styled-components';

export const ModalWrapper = styled.div`
	position: absolute;
	width: 450px;
	height: 50%;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 2rem;
	z-index: 999;
	right: 5%;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

	@media (max-width: 768px) {
		width: 60%;
		right: 10%;
	}

	@media (max-width: 500px) {
		width: 100%;
		right: 0;
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

export const Result = styled.div`
	width: 80%;
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
export const NoResultText = styled.div`
	text-align: center;
	font-size: 2rem;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.strongpurple};
`;
export const ResultContainer = styled.div`
	display: flex;
	align-items: center;
`;
