import React from 'react';
import sendIcon from '../../../assets/icons/Sendicon.png';

import { SendButton, SendIcon } from '../MainHomeSendBoxStyle';

interface SendButtonProps {
	createPost: () => void;
}

const MainHomeSendBoxButton = ({ createPost }: SendButtonProps) => {
	return (
		<SendButton onClick={createPost}>
			<SendIcon src={sendIcon} alt='Send Icon' />
		</SendButton>
	);
};

export default MainHomeSendBoxButton;
