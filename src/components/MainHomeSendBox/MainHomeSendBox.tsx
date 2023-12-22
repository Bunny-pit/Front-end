import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useMainHomePost from '../../hooks/useMainHomePost';
import {
	Container,
	Content,
	ImageUploadArea,
	ImageContainer,
	ImageUploadInput,
	Image,
	DeleteButton,
	ImageUploadButtonArea,
	ImageUploadButton,
	ImageUploadIntroText,
	TextAreaAndButtonContainer,
	TextAreaInput,
	SendButton,
	SendIcon,
	TextCountArea,
	TextCount,
} from './MainHomeSendBoxStyle';
import sendIcon from '../../assets/icons/Vector.png';

interface MainHomeSendBoxProps {
	onPostCreated: () => void;
}

const MainHomeSendBox = ({ onPostCreated }: MainHomeSendBoxProps) => {
	const [imageFiles, setImageFiles] = useState<File[]>([]);
	const [imagePreviews, setImagePreviews] = useState<string[]>([]);
	const [postLength, setPostLength] = useState(0);

	const location = useLocation();
	const { createPost, newPostContent, setNewPostContent } = useMainHomePost(
		location.pathname,
		false,
	);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		createPost(imageFiles, onPostCreated);
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const newFilesArray = Array.from(e.target.files);
			const updatedImageFiles = [...imageFiles, ...newFilesArray];
			setImageFiles(updatedImageFiles);

			const newImagePreviews = newFilesArray.map((file) =>
				URL.createObjectURL(file),
			);
			const updatedImagePreviews = [...imagePreviews, ...newImagePreviews];
			setImagePreviews(updatedImagePreviews);
		}
	};

	const removeImage = (index: number) => {
		const newImageFiles = [...imageFiles];
		newImageFiles.splice(index, 1);
		setImageFiles(newImageFiles);

		const newImagePreviews = [...imagePreviews];
		newImagePreviews.splice(index, 1);
		setImagePreviews(newImagePreviews);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = e.target;
		setNewPostContent(value);
		setPostLength(value.length);
	};

	const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault();
		}
	};

	const triggerFileInput = (event: React.MouseEvent) => {
		event.preventDefault();
		document.getElementById('file-upload')?.click();
	};

	return (
		<Container>
			<Content onSubmit={handleSubmit}>
				<ImageUploadArea>
					<ImageUploadInput
						type='file'
						onChange={handleFileChange}
						multiple
						accept='image/*'
						id='file-upload'
					/>
					{imagePreviews.map((preview, index) => (
						<ImageContainer key={index} style={{ position: 'relative' }}>
							<Image src={preview} alt={`Uploaded Image ${index + 1}`} />
							<DeleteButton onClick={() => removeImage(index)}>X</DeleteButton>
						</ImageContainer>
					))}
				</ImageUploadArea>

				<ImageUploadButtonArea>
					{imageFiles.length < 3 && (
						<ImageUploadButton
							onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
								triggerFileInput(e)
							}>
							이미지 추가
						</ImageUploadButton>
					)}
					<ImageUploadIntroText>
						*이미지 파일은 업로드 이후 수정이 불가능합니다*
					</ImageUploadIntroText>
				</ImageUploadButtonArea>
				<TextAreaAndButtonContainer>
					<TextAreaInput
						placeholder='게시글을 작성해주세요'
						value={newPostContent}
						onChange={handleInputChange}
						onKeyUp={handleKeyUp}
					/>

					<SendButton type='submit'>
						<SendIcon src={sendIcon} alt='Send Icon' />
					</SendButton>
				</TextAreaAndButtonContainer>
				<TextCountArea>
					최대 300자 이하&nbsp;|&nbsp;
					<TextCount
						style={{
							color: postLength > 300 ? 'red' : '#999',
						}}>
						현재 글자 수: {postLength}
					</TextCount>
				</TextCountArea>
			</Content>
		</Container>
	);
};

export default MainHomeSendBox;
