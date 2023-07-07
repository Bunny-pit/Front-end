import { useParams } from 'react-router-dom';
import { Content } from '../../components/Chat/ChatStyle';

const Chat = () => {
	const { nickname } = useParams();

	return (
		<>
			<Content>이 대화방은 나와 {nickname} 님과의 대화방입니다</Content>
		</>
	);
};

export default Chat;
