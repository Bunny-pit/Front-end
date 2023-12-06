import styled from 'styled-components';

interface MessageBubbleProps {
	message: string;
	currentUser: boolean;
}

interface BubbleProps {
	$width: number;
	$currentUser: boolean;
}

const Bubble = styled.div<BubbleProps>`
	margin: 10px;
	padding: 10px;
	background-color: ${({ $currentUser }) =>
		$currentUser ? '#cdc0fc' : '#fff'};
	border-radius: 19.34px;
	border: ${({ $currentUser }) =>
		$currentUser ? 'none' : '1px solid #cdc0fc'};
	display: inline-flex;
	width: ${({ $width }) => `${$width}rem`};
	max-width: 40%;
	white-space: pre-wrap;
	word-break: break-all;
	font-size: 2rem;
	justify-content: center;
	align-self: ${({ $currentUser }) =>
		$currentUser ? 'flex-end' : 'flex-start'};
`;

const MessageBubble = ({ message, currentUser }: MessageBubbleProps) => {
	const adjustedWidth = message.length * 1.8;
	return (
		<Bubble $width={adjustedWidth} $currentUser={currentUser}>
			{message}
		</Bubble>
	);
};

export default MessageBubble;
