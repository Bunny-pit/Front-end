import { useParams } from 'react-router-dom';
import {
	Content,
	Container,
	ChatBoxConatiner,
} from '../../components/Chat/ChatStyle';
import ChatBox from '../ChatBox/ChatBox';

const Chat = () => {
	const { nickname } = useParams();
	const chatId = '64b5f1cfe121bc3f9001eb41';
	const userId = '64b2bbd49ac9b031f09b302a';

	return (
		<>
			<Container>
				<Content>이 대화방은 나와 {nickname} 님과의 대화방입니다</Content>
				<ChatBoxConatiner>
					<ChatBox chatId={chatId} userId={userId}></ChatBox>
				</ChatBoxConatiner>
			</Container>
		</>
	);
};

export default Chat;
