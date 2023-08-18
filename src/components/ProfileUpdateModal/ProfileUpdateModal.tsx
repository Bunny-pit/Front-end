import React, { useState, useRef, FormEvent } from 'react';
import Modal from 'react-modal';
import arrowBack from './arrow_back_icon.svg';
import media from './media_icon.svg';
import axios from 'axios';
import alertList from '../../utils/swal';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
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

type UserProfileProps = {
	isModalOpen: boolean;
	closeModal: () => void;
	handleModalClose: () => void;
};
function UserProfile({
	isModalOpen,
	closeModal,
	handleModalClose,
}: UserProfileProps) {
	const [imgFile, setImgFile] = useState<string | ArrayBuffer | null>('');
	const [selectedImg, setSelectedImg] = useState<string | ArrayBuffer | null>(
		'',
	);

	const imgRef = useRef<HTMLInputElement>(null);
	// const [isModalOpen, setIsModalOpen] = useState(false);

	// const openModal = () => {
	// 	setIsModalOpen(true);
	// };

	// const closeModal = () => {
	// 	setIsModalOpen(false);
	// };

	// const handleModalClose = () => {
	// 	if (window.confirm('이미지 수정을 취소하시겠습니까?')) {
	// 		closeModal();
	// 	}
	// };

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
	const handleSelect = async (e: FormEvent) => {
		e.preventDefault();
		const fileInput = imgRef.current;
		const token = localStorage.getItem('accessToken');

		if (
			fileInput &&
			fileInput.files &&
			fileInput.files[0] &&
			imgFile &&
			selectedImg
		) {
			const file = fileInput.files[0];
			const formData = new FormData();
			formData.append('file', file);
			try {
				await axios.patch(
					`${process.env.REACT_APP_API_URL}/api/user/profile/img`,
					formData,
					{
						headers: {
							Authorization: `Bearer ${token}`, // attach the token as a bearer token
						},
					},
				);
				await Swal.fire(alertList.successMessage(`프로필 사진 등록!`));
				// navigate('/post');
			} catch (error) {
				console.error('Error creating post:', error);
				await Swal.fire(
					alertList.errorMessage('프로필 사진 등록에 실패하였습니다.'),
				);
			}
			closeModal();
		} else {
			alert('이미지를 등록해 주세요.');
		}
	};

	return (
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
	);
}

export default UserProfile;
