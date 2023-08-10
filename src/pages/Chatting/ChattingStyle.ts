import styled from 'styled-components';

export const WorkSpaceWrapper = styled.div`
	display: flex;
	flex: 1;
`;

export const Channels = styled.nav<{ isRoot: boolean }>`
	max-width: 44rem;
	display: inline-flex;
	flex-direction: column;
	background: rgba(252, 155, 249, 0.29);
	color: ${({ theme }) => theme.colors.text};
	min-height: ${({ isRoot }) => (isRoot ? '1200px' : 'auto')};
	max-height: 1200px;
	overflow-y: auto;
	vertical-align: top;
	& a {
		padding-left: 36px;
		color: inherit;
		text-decoration: none;
		height: 28px;
		line-height: 28px;
		display: flex;
		align-items: center;
	}
`;

export const FriendChannels = styled.nav<{ isRoot: boolean }>`
	max-width: 44rem;
	display: inline-flex;
	flex-direction: column;
	background: ${({ theme }) => theme.colors.gray200};
	color: ${({ theme }) => theme.colors.text};
	min-height: ${({ isRoot }) => (isRoot ? '1200px' : 'auto')};
	vertical-align: top;
	& a {
		padding-left: 36px;
		color: inherit;
		text-decoration: none;
		height: 28px;
		line-height: 28px;
		display: flex;
		align-items: center;
	}
`;
export const WorkspaceName = styled.button`
	height: 64px;
	line-height: 64px;
	border: none;
	width: 100%;
	text-align: left;
	font-weight: 900;
	font-size: 24px;
	background: transparent;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	padding: 0;
	padding-left: 16px;
	margin: 0;
	color: ${({ theme }) => theme.colors.text};
	cursor: pointer;
`;

export const PlaceHoldContent = styled.div`
	margin-top: 5rem;
	font-size: 2.5rem;
	margin-left: 5rem;
	color: ${({ theme }) => theme.colors.gray500};
`;
