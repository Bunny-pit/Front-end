import sendBtn from '../../assets/icons/Sendicon.png';
import { Container, InputBar, SendButton } from './ChatBoxStyle';
import { useState } from 'react';

const ChatBox = () => {
	const [inputArea, setInputArea] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputArea(event.target.value);
	};

	const handleSendButtonClick = () => {
		console.log(inputArea);

		setInputArea('');
	};
	return (
		<>
			<Container>
				<InputBar
					value={inputArea}
					onChange={handleInputChange}
					placeholder='메시지 보내기'
				/>
				<SendButton
					src={sendBtn}
					alt='send-button'
					onClick={handleSendButtonClick}
				/>
			</Container>
		</>
	);
};
export default ChatBox;
