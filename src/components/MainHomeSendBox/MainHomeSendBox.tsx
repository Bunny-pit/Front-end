import React, { FC } from 'react';
import sendIcon from '../../assets/icons/Sendicon.png';

import {
	TextBox,
	TextWrapper,
	TextArea,
	SendButton,
	SendIcon,
} from './MainHomeSendBoxStyle';

type Props = {
	newPostContent: string;
	setNewPostContent: (content: string) => void;
	createPost: () => void;
};

const MainHomeSendBox: FC<Props> = ({
	newPostContent,
	setNewPostContent,
	createPost,
}) => {
	return (
		<TextBox>
			<TextWrapper>
				<TextArea
					placeholder='익명으로 글을 남기게 되면 프로필이 비공개 처리돼요!'
					value={newPostContent}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setNewPostContent(e.target.value)
					}
				/>

				<SendButton onClick={createPost}>
					<SendIcon src={sendIcon} alt='Send Icon' />
				</SendButton>
			</TextWrapper>
		</TextBox>
	);
};

export default MainHomeSendBox;
