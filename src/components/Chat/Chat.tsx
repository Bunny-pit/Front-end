import { useParams } from 'react-router-dom';
import {
	Content,
	Container,
	ChatBoxConatiner,
} from '../../components/Chat/ChatStyle';
import ChatBox from '../ChatBox/ChatBox';

const Chat = () => {
	const { nickname } = useParams();
<<<<<<< HEAD
	const chatId = '64b5f1cfe121bc3f9001eb41';
	const userId = '64b2bbd49ac9b031f09b302a';
=======
>>>>>>> 18a779824403ebb79acea112617f12beb1464b0e

	return (
		<>
			<Container>
				<Content>이 대화방은 나와 {nickname} 님과의 대화방입니다</Content>
				<ChatBoxConatiner>
<<<<<<< HEAD
					<ChatBox chatId={chatId} userId={userId}></ChatBox>
=======
					<ChatBox></ChatBox>
>>>>>>> 18a779824403ebb79acea112617f12beb1464b0e
				</ChatBoxConatiner>
			</Container>
		</>
	);
};

export default Chat;
