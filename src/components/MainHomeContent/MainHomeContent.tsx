import React from 'react';
import MainHomeContentImage from './MainHomeContentDetail/MainHomeContentImage';
import MainHomeContentInnerContent from './MainHomeContentDetail/MainHomeContentInnerContent';
import { Container, ContentBox, EmptyArea } from './MainHomeContentStyle';
import useMainHomePost from '../../hooks/useMainHomePost';
import { useLocation } from 'react-router-dom';

const MainHomeContent = () => {
	const location = useLocation();
	const mainHomePost = useMainHomePost(location.pathname);
	const { posts, lastPostElementRef } = mainHomePost;

	return (
		<Container>
			{posts.length === 0 ? (
				<EmptyArea>게시글이 없어요!</EmptyArea>
			) : (
				posts.map((post, index) => {
					return (
						<ContentBox
							key={post._id}
							ref={index === posts.length - 1 ? lastPostElementRef : null}>
							<MainHomeContentImage post={post} />
							<MainHomeContentInnerContent post={post} />
						</ContentBox>
					);
				})
			)}
		</Container>
	);
};

export default MainHomeContent;
