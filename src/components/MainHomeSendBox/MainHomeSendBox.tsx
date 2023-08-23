import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useMainHomePost from '../../hooks/useMainHomePost';
import {
	TextBox,
	TextWrapper,
	TextInput,
	SendButton,
	SendIcon,
} from './MainHomeSendBoxStyle';
import sendIcon from '../../assets/icons/Sendicon.png';

const MainHomeSendBox = () => {
	const [placeholderText, setPlaceholderText] = useState<string>('');
	const location = useLocation();
	const { createPost, newPostContent, setNewPostContent } = useMainHomePost(
		location.pathname,
	);

	useEffect(() => {
		const updatePlaceholder = () => {
			if (window.innerWidth <= 390) {
				setPlaceholderText('여긴 익명 게시판이에요!');
			} else {
				setPlaceholderText('글을 남기게 되면 프로필이 비공개 처리돼요!');
			}
		};

		updatePlaceholder();
		window.addEventListener('resize', updatePlaceholder);

		return () => {
			window.removeEventListener('resize', updatePlaceholder);
		};
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		createPost();
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setNewPostContent(value);
	};

	const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault();
		}
	};

	return (
		<TextBox>
			<TextWrapper onSubmit={handleSubmit}>
				<TextInput
					placeholder={placeholderText}
					value={newPostContent}
					onChange={handleInputChange}
					onKeyUp={handleKeyUp}
				/>
				<SendButton type='submit'>
					<SendIcon src={sendIcon} alt='Send Icon' />
				</SendButton>
			</TextWrapper>
		</TextBox>
	);
};

export default MainHomeSendBox;
