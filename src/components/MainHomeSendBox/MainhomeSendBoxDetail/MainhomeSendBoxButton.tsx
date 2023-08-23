import React from 'react';
import { useLocation } from 'react-router-dom';
import useMainHomePost from '../../../hooks/useMainHomePost';

import sendIcon from '../../../assets/icons/Sendicon.png';
import { SendButton, SendIcon } from '../MainHomeSendBoxStyle';

const MainHomeSendBoxButton = () => {
	const location = useLocation();
	const { createPost } = useMainHomePost(location.pathname);

	return (
		<SendButton onClick={createPost}>
			<SendIcon src={sendIcon} alt='Send Icon' />
		</SendButton>
	);
};

export default MainHomeSendBoxButton;
