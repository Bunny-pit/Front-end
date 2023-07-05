import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	min-height: 170rem;
`;
export const DmContainer = styled.div`
	width: 30%;
	background: rgba(252, 155, 249, 0.29);
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const Dmtitle = styled.p`
	font-size: 2.5rem;
	font-weight: 700;
	margin-top: 5rem;
`;
export const DmList = styled.div`
	width: 100%;
	margin-top: 2rem;
	cursor: pointer;
`;
export const ProfileCard = styled.div`
	height: 10rem;
	display: flex;
	align-item: center;
	padding: 2rem 2rem;
`;
export const ProfileImg = styled.img`
	width: 22%;
	margin-right: 3rem;
`;
export const UserNickName = styled.p`
	font-size: 2.5rem;
`;
export const ChattingContainer = styled.div`
	width: 70%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const InputContainer = styled.div`
	width: 70%;
	display: flex;
	align-items: center;
	margin-top: 150rem;
`;
export const InputArea = styled.input`
	width: 80rem;
	height: 7rem;
	border-radius: 2rem;
	background: ${({ theme }) => theme.colors.gray300};
	border: none;
	padding: 0 2rem;
	margin-right: 2rem;
`;
export const SendIcon = styled.img`
	width: 5%;
	height: 5%;
	cursor: pointer;
`;
