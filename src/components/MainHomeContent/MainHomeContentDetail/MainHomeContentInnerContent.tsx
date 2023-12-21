import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Post } from '../../../types/dataType';
import useMainHomePost from '../../../hooks/useMainHomePost';
import { useUser } from '../../../utils/swrFetcher';

import {
	UserContainer,
	UserName,
	IconContainer,
	GoChat,
	GoProfile,
	InnerContent,
	ContentContainer,
	Content,
	SliderContainer,
	ImageContainer,
	Image,
	DotsContainer,
	Dot,
	TextArea,
	EditContentArea,
	BottomContainer,
	Date,
	ButtonWrapper,
	Edit,
	Delete,
	Report,
} from '../MainHomeContentStyle';
import MainHomeContentImage from './MainHomeContentImage';

interface InnerContentProps {
	post: Post;
}

const MainHomeContentInnerContent = ({ post }: InnerContentProps) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const sliderRef = useRef<HTMLDivElement>(null);
	const { userData, isError, error } = useUser();
	const location = useLocation();
	const {
		editingPostId,
		setEditingPostId,
		updatedContent,
		setUpdatedContent,
		moveToChatPage,
		updatePost,
		deletePost,
		sendReport,
	} = useMainHomePost(location.pathname);

	if (isError && error) {
		const errorMessage =
			typeof error === 'object' && 'message' in error
				? error.message
				: String(error);
		console.error(errorMessage);
	}

	const navigateToSlide = (index: number) => {
		setActiveIndex(index);
		const slider = sliderRef.current;
		if (slider) {
			const scrollX = slider.clientWidth * index;
			slider.scrollTo({ left: scrollX, behavior: 'smooth' });
		}
	};

	const handleScroll = () => {
		const slider = sliderRef.current;
		if (slider) {
			const scrollX = slider.scrollLeft;
			const index = Math.round(scrollX / slider.clientWidth);
			setActiveIndex(index);
		}
	};

	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setUpdatedContent(e.target.value);
	};

	const isOnFriendsPage = location.pathname === '/mainhome/friends';

	return (
		<InnerContent>
			<UserContainer>
				<MainHomeContentImage post={post} />
				<UserName>{post.name}</UserName>
				<IconContainer>
					{isOnFriendsPage && (
						<Link to={`/post/user/${post.name}`}>
							<GoProfile />
						</Link>
					)}
					{userData && userData?._id !== post.userId && (
						<GoChat
							onClick={() =>
								moveToChatPage(userData._id, post.userId, post.name)
							}></GoChat>
					)}
					{userData && userData?._id !== post.userId && (
						<Report onClick={() => sendReport(post, userData)} />
					)}
				</IconContainer>
			</UserContainer>

			<ContentContainer>
				{editingPostId === post._id ? (
					<EditContentArea
						value={updatedContent}
						onChange={handleContentChange}
					/>
				) : (
					<Content>
						<SliderContainer ref={sliderRef} onScroll={handleScroll}>
							{post.images &&
								post.images.map((image, index) => (
									<ImageContainer key={index}>
										<Image src={image} alt={`Post Image ${index}`} />
									</ImageContainer>
								))}
						</SliderContainer>
						{post.images && post.images.length > 1 && (
							<DotsContainer>
								{post.images.map((_, index) => (
									<Dot
										key={index}
										className={activeIndex === index ? 'active' : ''}
										onClick={() => navigateToSlide(index)}
									/>
								))}
							</DotsContainer>
						)}
						<TextArea>{post.content}</TextArea>
					</Content>
				)}
			</ContentContainer>
			<BottomContainer>
				<Date>
					<p>{post.createdAt}</p>
				</Date>
				<ButtonWrapper>
					{userData?._id === post.userId &&
						(editingPostId === post._id ? (
							<>
								<Edit onClick={() => updatePost(post._id)}>저장</Edit>
								<Edit
									onClick={() => {
										setEditingPostId('');
										setUpdatedContent('');
									}}>
									취소
								</Edit>
							</>
						) : (
							<>
								<Edit
									onClick={() => {
										setEditingPostId(post._id);
										setUpdatedContent(post.content);
									}}>
									수정
								</Edit>
								<Delete onClick={() => deletePost(post._id)}>삭제</Delete>
							</>
						))}
				</ButtonWrapper>
			</BottomContainer>
		</InnerContent>
	);
};

export default MainHomeContentInnerContent;
