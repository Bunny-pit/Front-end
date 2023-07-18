import styled from 'styled-components';

interface MessageBubbleProps {
	message: string;
}

const Bubble = styled.div`
	margin: 10px;
	padding: 10px;
	background-color: #f0f0f0;
	border-radius: 5px;
	display: inline-block;
	max-width: 70%;
`;
const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
	return <Bubble>{message}</Bubble>;
};

export default MessageBubble;
