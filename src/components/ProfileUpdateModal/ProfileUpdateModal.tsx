import React, { useState, useRef, useEffect, FormEvent } from 'react';
import Modal from 'react-modal';
import arrowBack from './arrow_back_icon.svg';
import media from './media_icon.svg';
import axios from 'axios';
import alertList from '../../utils/swal';
import Swal from 'sweetalert2';
import { mutate } from 'swr';
import { API_USER_ACCESS_TOKEN } from '../../utils/constant';
import { onChangeInputSetter } from '../../utils/inputStateSetter';
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
	InputTitle,
	InputWrap,
	InputBar,
} from './ProfileUpdateModalStyle';

type UserProfileProps = {
	isModalOpen: boolean;
	closeModal: () => void;
	handleModalClose: () => void;
};
function UserProfile({ isModalOpen, closeModal }: UserProfileProps) {
	const [imgFile, setImgFile] = useState<string | ArrayBuffer | null>('');
	const [newIntroduction, setNewIntroduction] = useState<string>('');

	const imgRef = useRef<HTMLInputElement>(null);

	const handleModalClose = async () => {
		if (
			await Swal.fire(alertList.doubleCheckMessage(`수정을 취소하시겠습니까?`))
		) {
			closeModal();
		}
	};

	useEffect(() => {
		Modal.setAppElement('#root');
	}, []);

	const saveImgFile = () => {
		const fileInput = imgRef.current;
		if (fileInput && fileInput.files && fileInput.files[0]) {
			const file = fileInput.files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				setImgFile(reader.result);
			};
		}
	};

	const handleSelect = async (e: FormEvent) => {
		e.preventDefault();
		const fileInput = imgRef.current;
		const token = sessionStorage.getItem('accessToken');

		// 둘 다 없을 때의 검증
		if (
			!newIntroduction &&
			(!fileInput || !(fileInput.files && fileInput.files[0]))
		) {
			await Swal.fire(alertList.errorMessage('정보를 입력해주세요.'));
			return;
		}

		const formData = new FormData();

		if (fileInput && fileInput.files && fileInput.files[0]) {
			const file = fileInput.files[0];
			formData.append('file', file);
		}

		if (newIntroduction) {
			formData.append('introduction', newIntroduction);
		}

		try {
			await axios.patch(
				`${process.env.REACT_APP_API_URL}/api/user/profile/edit`,
				formData,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);
			const fetchingURL = `${process.env.REACT_APP_API_URL}${API_USER_ACCESS_TOKEN}`;
			mutate(fetchingURL);

			await Swal.fire(alertList.successMessage(`정보 변경 성공!`));
		} catch (error) {
			console.error('Error updating profile:', error);
			await Swal.fire(alertList.errorMessage('정보 변경에 실패하였습니다.'));
		}

		closeModal();
	};

	const triggerFileInput = () => {
		if (imgRef.current) {
			imgRef.current.click();
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
					<ModalTitle>정보 수정</ModalTitle>
				</ModalHeader>
				<ModalMain>
					<ModalUploadFile onClick={triggerFileInput}>
						<ModalUploadImg
							src={imgFile ? imgFile.toString() : media}
							width={imgFile ? `100%` : `50%`}
							height={imgFile ? `100%` : `50%`}
							alt='미리보기'
						/>
					</ModalUploadFile>
					<input
						className='dspl-none'
						type='file'
						accept='image/*'
						ref={imgRef}
						onChange={saveImgFile}
					/>
					<InputTitle>간단한 자기소개를 추가해주세요!</InputTitle>
					<InputWrap>
						<InputBar
							type='text'
							placeholder='ex)안녕하세요. 버니핏입니다.'
							value={newIntroduction}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								onChangeInputSetter(setNewIntroduction)(e)
							}
						/>
					</InputWrap>
				</ModalMain>
				<ModalPostButton onClick={handleSelect}>수정완료</ModalPostButton>
			</Box>
		</Modal>
	);
}

export default UserProfile;
