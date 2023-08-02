import React from 'react';
import sendIcon from '../../assets/icons/Sendicon.png';
import useMainHomePost from '../../hooks/useMainHomePost';

import {
	TextBox,
	TextWrapper,
	TextArea,
	SendButton,
	SendIcon,
} from './MainHomeSendBoxStyle';

interface Props {
	mainHomePost: ReturnType<typeof useMainHomePost>;
}

const MainHomeSendBox = ({ mainHomePost }: Props) => {
	const { newPostContent, setNewPostContent, createPost } = mainHomePost;
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
