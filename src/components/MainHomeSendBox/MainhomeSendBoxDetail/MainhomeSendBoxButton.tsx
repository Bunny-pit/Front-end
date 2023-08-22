import React from 'react';
import sendIcon from '../../../assets/icons/Sendicon.png';
import useMainHomeUnknownPost from '../../../hooks/useMainHomeUnknownPost';

import { SendButton, SendIcon } from '../MainHomeSendBoxStyle';

const MainHomeSendBoxButton = () => {
	const { createPost } = useMainHomeUnknownPost();

	return (
		<SendButton onClick={createPost}>
			<SendIcon src={sendIcon} alt='Send Icon' />
		</SendButton>
	);
};

export default MainHomeSendBoxButton;
