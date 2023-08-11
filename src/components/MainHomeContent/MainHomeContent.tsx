import React from 'react';

import useMainHomePost from '../../hooks/useMainHomeFriendsPost';
import MainHomeContentImage from './MainHomeContentDetail/MainHomeContentImage';
import MainHomeContentInnerContent from './MainHomeContentDetail/MainHomeContentInnerContent';

import { Container, ContentBox, EmptyArea } from './MainHomeContentStyle';

interface MainHomeProps {
	userData: any;
	mainHomePost: ReturnType<typeof useMainHomePost>;
}

const MainHomeContent = ({ userData, mainHomePost }: MainHomeProps) => {
	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setUpdatedContent(e.target.value);
	};

	const {
		posts = [],
		editingPostId,
		setEditingPostId,
		updatedContent,
		setUpdatedContent,
		lastPostElementRef,
		updatePost,
		deletePost,
		moveToChatPage,
	} = mainHomePost;

	return (
		<Container>
			{posts.length === 0 ? (
				<EmptyArea>친구들을 팔로우하고 글을 남겨보세요!</EmptyArea>
			) : (
				posts.map((post, index) => {
					const email: string = post.email;
					const avataUrl: string = `https://www.gravatar.com/avatar/${email}?d=identicon`;
					return (
						<ContentBox
							key={post._id}
							ref={index == posts.length - 1 ? lastPostElementRef : null}>
							<MainHomeContentImage avataUrl={avataUrl} />
							<MainHomeContentInnerContent
								post={post}
								userData={userData}
								editingPostId={editingPostId}
								updatedContent={updatedContent}
								handleContentChange={handleContentChange}
								moveToChatPage={moveToChatPage}
								updatePost={updatePost}
								setEditingPostId={setEditingPostId}
								setUpdatedContent={setUpdatedContent}
								deletePost={deletePost}
							/>
						</ContentBox>
					);
				})
			)}
		</Container>
	);
};

export default MainHomeContent;
