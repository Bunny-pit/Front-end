import React from 'react';
import useMainHomePost from '../../hooks/useMainHomeFriendsPost';
import MainHomeSendBoxTextArea from './MainhomeSendBoxDetail/MainhomeSendBoxTextArea';
import MainHomeSendBoxButton from './MainhomeSendBoxDetail/MainhomeSendBoxButton';

import { TextBox, TextWrapper } from './MainHomeSendBoxStyle';

interface Props {
	mainHomePost: ReturnType<typeof useMainHomePost>;
}

const MainHomeSendBox = ({ mainHomePost }: Props) => {
	const { newPostContent, setNewPostContent, createPost } = mainHomePost;

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setNewPostContent(value);
	};

	const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
				<MainHomeSendBoxTextArea
					placeholder='익명으로 글을 남기게 되면 프로필이 비공개 처리돼요!'
					value={newPostContent}
					onChange={handleInputChange}
					onKeyUp={handleKeyUp}
				/>
				<MainHomeSendBoxButton createPost={createPost} />
			</TextWrapper>
		</TextBox>
	);
};

export default MainHomeSendBox;
