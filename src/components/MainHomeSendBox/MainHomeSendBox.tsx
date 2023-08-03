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

	const hanleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setNewPostContent(value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			const { value } = e.currentTarget;
			setNewPostContent(value);
			createPost();
		}
	};

	return (
		<TextBox>
			<TextWrapper>
				<TextArea
					placeholder='익명으로 글을 남기게 되면 프로필이 비공개 처리돼요!'
					value={newPostContent}
					onChange={hanleInputChange}
					onKeyDown={handleKeyDown}
				/>

				<SendButton onClick={createPost}>
					<SendIcon src={sendIcon} alt='Send Icon' />
				</SendButton>
			</TextWrapper>
		</TextBox>
	);
};

export default MainHomeSendBox;
