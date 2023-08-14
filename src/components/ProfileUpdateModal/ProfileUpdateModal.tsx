import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import arrowBack from './arrow_back_icon.svg';
import media from './media_icon.svg';
import {
	customModalStyles,
	Box,
	ModalHeader,
	ModalCloseButton,
	ModalTitle,
	ModalMain,
	ModalUploadFile,
	ModalUploadImg,
	ModalPostButton,
} from './ProfileUpdateModalStyle';

function UserProfile() {
	const [imgFile, setImgFile] = useState<string | ArrayBuffer | null>('');
	const [selectedImg, setSelectedImg] = useState<string | ArrayBuffer | null>(
		'',
	);
	const imgRef = useRef<HTMLInputElement>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleModalClose = () => {
		if (window.confirm('게시물 작성을 취소하시겠습니까?')) {
			closeModal();
		}
	};

	const saveImgFile = () => {
		const fileInput = imgRef.current;
		if (fileInput && fileInput.files && fileInput.files[0]) {
			const file = fileInput.files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				setImgFile(reader.result);
				setSelectedImg(reader.result);
			};
		}
	};
	const handleSelect = () => {
		const fileInput = imgRef.current;
		if (
			fileInput &&
			fileInput.files &&
			fileInput.files[0] &&
			imgFile &&
			selectedImg
		) {
			const file = fileInput.files[0];
			closeModal();
		} else {
			alert('이미지를 등록해 주세요.');
		}
	};

	return (
		<div>
			<button onClick={openModal}>수정하기</button>

			<Modal
				isOpen={isModalOpen}
				onRequestClose={handleModalClose}
				style={customModalStyles}>
				<Box>
					<ModalHeader>
						<ModalCloseButton onClick={handleModalClose}>
							<img width='22px' height='22px' src={arrowBack} alt='닫기' />
						</ModalCloseButton>
						<ModalTitle>이미지 올리기</ModalTitle>
					</ModalHeader>
					<ModalMain>
						<ModalUploadFile>
							<ModalUploadImg
								src={imgFile ? imgFile.toString() : media}
								width={imgFile ? `100%` : `50%`}
								height={imgFile ? `100%` : `50%`}
								alt='미리보기'
							/>
						</ModalUploadFile>
						<input
							type='file'
							accept='image/*'
							ref={imgRef}
							onChange={saveImgFile}
						/>
						<ModalPostButton onClick={handleSelect}>
							이미지 선택 완료
						</ModalPostButton>
					</ModalMain>
				</Box>
			</Modal>
		</div>
	);
}

export default UserProfile;
