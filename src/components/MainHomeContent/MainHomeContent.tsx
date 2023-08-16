import React from 'react';
import useMainHomePost from '../../hooks/useMainHomeUnknownPost';
import MainHomeContentImage from './MainHomeContentDetail/MainHomeContentImage';
import MainHomeContentInnerContent from './MainHomeContentDetail/MainHomeContentInnerContent';

import { Container, ContentBox, EmptyArea } from './MainHomeContentStyle';
import { Post, UserDataType } from '../../types/dataType';

interface MainHomeProps {
	userData: UserDataType | null;
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
		sendReport,
	} = mainHomePost;

	return (
		<Container>
			{posts.length === 0 ? (
				<EmptyArea>게시글이 없어요!</EmptyArea>
			) : (
				posts.map((post: Post, index: number) => {
					return (
						<ContentBox
							key={post._id}
							ref={index == posts.length - 1 ? lastPostElementRef : null}>
							<MainHomeContentImage post={post} userData={userData} />
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
								sendReport={sendReport}
							/>
						</ContentBox>
					);
				})
			)}
		</Container>
	);
};

export default MainHomeContent;
