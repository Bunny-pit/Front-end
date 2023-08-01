import styled from 'styled-components';

interface MessageBubbleProps {
	message: string;
	currentUser: boolean;
}

const Bubble = styled.div<{ width: string; currentUser: boolean }>`
	margin: 10px;
	padding: 10px;
	background-color: ${(props) => (props.currentUser ? '#cdc0fc' : '#ffff')};
	border-radius: 19.34px;
	border: ${(props) => (props.currentUser ? 'none' : '1px solid #cdc0fc')};
	display: inline-flex;
	flex-direcion: column;
	width: ${(props) => props.width}rem;
	max-width: 40%;
	white-space: pre-wrap;
	font-size: 2rem;
	justify-content: center;
	align-self: ${(props) => (props.currentUser ? 'flex-end' : 'flex-start')};
`;

const MessageBubble: React.FC<MessageBubbleProps> = ({
	message,
	currentUser,
}) => {
	const adjustedWidth = message.length * 2;
	return (
		<Bubble width={adjustedWidth.toString()} currentUser={currentUser}>
			{message}
		</Bubble>
	);
};

export default MessageBubble;
