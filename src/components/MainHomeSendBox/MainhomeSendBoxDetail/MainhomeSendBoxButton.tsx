import React from 'react';

import sendIcon from '../../../assets/icons/Sendicon.png';
import { SendButton, SendIcon } from '../MainHomeSendBoxStyle';

const MainHomeSendBoxButton = ({ onSubmit }: { onSubmit: () => void }) => {
	return (
		<SendButton type='button' onClick={onSubmit}>
			<SendIcon src={sendIcon} alt='Send Icon' />
		</SendButton>
	);
};

export default MainHomeSendBoxButton;
