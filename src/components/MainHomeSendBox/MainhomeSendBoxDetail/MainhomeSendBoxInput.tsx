import React, { KeyboardEvent } from 'react';
import { useLocation } from 'react-router-dom';
import useMainHomePost from '../../../hooks/useMainHomePost';
import { TextInput } from '../MainHomeSendBoxStyle';

const MainhomeSendBoxInput = ({ placeholder }: { placeholder: string }) => {
	const location = useLocation();
	const { newPostContent, setNewPostContent, createPost } = useMainHomePost(
		location.pathname,
	);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setNewPostContent(value);
	};

	const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			createPost();
			setNewPostContent('');
		}
	};

	return (
		<TextInput
			placeholder={placeholder}
			value={newPostContent}
			onChange={handleInputChange}
			onKeyUp={handleKeyUp}
		/>
	);
};

export default MainhomeSendBoxInput;
