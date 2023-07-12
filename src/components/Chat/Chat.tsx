import { useParams } from 'react-router-dom';
import {
	Content,
	Container,
	ChatBoxConatiner,
} from '../../components/Chat/ChatStyle';
import ChatBox from '../ChatBox/ChatBox';

const Chat = () => {
	const { nickname } = useParams();

	return (
		<>
			<Container>
				<Content>이 대화방은 나와 {nickname} 님과의 대화방입니다</Content>
				<ChatBoxConatiner>
					<ChatBox></ChatBox>
				</ChatBoxConatiner>
			</Container>
		</>
	);
};

export default Chat;
