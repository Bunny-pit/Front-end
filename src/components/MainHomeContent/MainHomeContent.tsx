import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MainHomeContentImage from './MainHomeContentDetail/MainHomeContentImage';
import MainHomeContentInnerContent from './MainHomeContentDetail/MainHomeContentInnerContent';
import MainHomeSendBox from '../MainHomeSendBox/MainHomeSendBox';
import {
	Container,
	InnerContainer,
	AddContentButton,
	ContentBox,
	EmptyArea,
} from './MainHomeContentStyle';
import Swal from 'sweetalert2';
import alertList from '../../utils/swal';

import useMainHomePost from '../../hooks/useMainHomePost';

const MainHomeContent = () => {
	const location = useLocation();
	const mainHomePost = useMainHomePost(location.pathname);
	const { posts, lastPostElementRef } = mainHomePost;
	const [showSendBox, setShowSendBox] = useState(false);

	const handleAddContentClick = () => {
		setShowSendBox(true);
	};

	const handleBackClick = () => {
		Swal.fire(
			alertList.doubleCheckMessage('게시글 작성을 취소하시겠습니까?'),
		).then((result) => {
			if (result.isConfirmed) {
				setShowSendBox(false);
			}
		});
	};

	const handlePostCreated = () => {
		setShowSendBox(false);
	};

	return (
		<Container>
			{showSendBox ? (
				<AddContentButton onClick={handleBackClick}>돌아가기</AddContentButton>
			) : (
				<AddContentButton onClick={handleAddContentClick}>
					게시글 작성
				</AddContentButton>
			)}
			<InnerContainer>
				{showSendBox ? (
					<MainHomeSendBox onPostCreated={handlePostCreated} />
				) : posts.length === 0 ? (
					<EmptyArea>게시글이 없어요!</EmptyArea>
				) : (
					posts.map((post, index) => (
						<ContentBox
							key={post._id}
							ref={index === posts.length - 1 ? lastPostElementRef : null}>
							<MainHomeContentImage post={post} />
							<MainHomeContentInnerContent post={post} />
						</ContentBox>
					))
				)}
			</InnerContainer>
		</Container>
	);
};

export default MainHomeContent;
