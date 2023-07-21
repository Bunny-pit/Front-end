import styled from 'styled-components';

interface MessageBubbleProps {
	message: string;
}

const Bubble = styled.div<{ width: string }>`
	margin: 10px;
	padding: 10px;
	background-color: #cdc0fc;
	border-radius: 19.34px;
	display: inline-flex;
	flex-direcion: column;
	width: ${(props) => props.width}px;
	max-width: 40%;
	white-space: pre-wrap;
	font-size: 2rem;
`;

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
	const adjustedWidth = message.length * 12;
	return <Bubble width={adjustedWidth.toString()}>{message}</Bubble>;
};

export default MessageBubble;
