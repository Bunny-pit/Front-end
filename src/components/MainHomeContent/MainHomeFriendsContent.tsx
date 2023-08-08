import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import useMainHomeFriendsPost from '../../hooks/useMainHomeUnknownPost';
import MainHomeContentImage from './MainHomeContentDetail/MainHomeContentImage';
import MainHomeContentInnerContent from './MainHomeContentDetail/MainHomeContentInnerContent';

import { Container, ContentBox } from './MainHomeContentStyle';

dayjs.extend(utc);
dayjs.extend(timezone);

interface FriendsProps {
	userData: any;
	mainHomePost: ReturnType<typeof useMainHomeFriendsPost>;
}

const MainHomeFriendsContent = ({ userData, mainHomePost }: FriendsProps) => {
	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setUpdatedContent(e.target.value);
	};

	const {
		posts,
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
			{posts.map((post, index) => {
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
			})}
		</Container>
	);
};

export default MainHomeFriendsContent;
