import React, { KeyboardEvent } from 'react';
import useMainHomeUnknownPost from '../../../hooks/useMainHomeUnknownPost';
import { TextInput } from '../MainHomeSendBoxStyle';

const MainhomeSendBoxInput = ({ placeholder }: { placeholder: string }) => {
	const { newPostContent, setNewPostContent, createPost } =
		useMainHomeUnknownPost();

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
