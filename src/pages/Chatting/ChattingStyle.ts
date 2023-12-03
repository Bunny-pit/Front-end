import styled from 'styled-components';

export const WorkSpaceWrapper = styled.div`
	display: flex;
	flex: 1;
`;

export const Channels = styled.nav<{ $isRoot: boolean }>`
	width: 35rem;
	padding: 5rem;
	display: inline-flex;
	flex-direction: column;
	background: rgba(252, 155, 249, 0.29);
	color: ${({ theme }) => theme.colors.text};
	min-height: ${({ $isRoot }) => ($isRoot ? '100vh' : '100vh')};
	overflow-y: auto;
	vertical-align: top;
	& a {
		color: inherit;
		text-decoration: none;
		height: 28px;
		line-height: 28px;
		display: flex;
		align-items: center;
	}
	@media (max-width: 768px) {
		max-width: 33rem;
	}
	@media (max-width: 628px) {
		min-height: 1200px;
	}
`;

export const FriendChannels = styled.nav<{ $isRoot: boolean }>`
	width: 35rem;
	padding: 5rem;
	display: inline-flex;
	flex-direction: column;
	background: ${({ theme }) => theme.colors.gray200};
	color: ${({ theme }) => theme.colors.text};
	min-height: ${({ $isRoot }) => ($isRoot ? '100vh' : '100vh')};
	vertical-align: top;
	& a {
		color: inherit;
		text-decoration: none;
		height: 28px;
		line-height: 28px;
		display: flex;
		align-items: center;
	}
	@media (max-width: 768px) {
		max-width: 33rem;
	}
`;

export const WorkspaceName = styled.button`
	line-height: 64px;
	border: none;
	width: 100%;
	text-align: center;
	font-weight: 900;
	font-size: 24px;
	background: transparent;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	color: ${({ theme }) => theme.colors.text};
	cursor: pointer;
`;

export const PlaceHoldContent = styled.div`
	margin: 5rem;
	font-size: 2.5rem;
	color: ${({ theme }) => theme.colors.gray500};
`;
export const ButtonWrapper = styled.div`
	@media (max-width: 628px) {
		min-height: 200rem;
	}
`;

export const DMButton = styled.button`
	padding: 1rem 2rem;
	font-size: 1.6rem;
	background-color: ${({ theme }) => theme.colors.strongpurple};
	color: white;
	border: none;
	cursor: pointer;
	border-radius: 0.5rem;
	position: absolute;
	top: 10rem;
	right: 0;
`;

export const ModalBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalContent = styled.div`
	background-color: white;
	padding: 2rem;
	border-radius: 0.5rem;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	max-width: 90%;
	max-height: 90vh;
	overflow-y: auto;
	width: 40rem;
`;
export const ExitButton = styled.img`
	margin-left: 35rem;
`;
