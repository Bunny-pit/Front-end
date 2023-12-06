import { ImageWrap, UserImage, OtherUserImage } from './style';
import UserProfile from '../../ProfileUpdateModal/ProfileUpdateModal';
import { useState } from 'react';

interface ImageWrapCompProps {
	currentName: string;
	userName: string;
	profileImage: string;
}

const ImageWrapComp = ({
	currentName,
	userName,
	profileImage,
}: ImageWrapCompProps) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleModalClose = () => {
		if (window.confirm('이미지 수정을 취소하시겠습니까?')) {
			closeModal();
		}
	};

	return (
		<>
			{currentName === userName ? (
				<ImageWrap>
					<UserImage
						src={profileImage}
						onClick={openModal}
						alt='userProfileImage'></UserImage>
					<UserProfile
						isModalOpen={isModalOpen}
						closeModal={closeModal}
						handleModalClose={handleModalClose}
					/>
				</ImageWrap>
			) : (
				<ImageWrap>
					<OtherUserImage src={profileImage}></OtherUserImage>
				</ImageWrap>
			)}
		</>
	);
};

export default ImageWrapComp;
