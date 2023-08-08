import {
	ContentContainer,
	Content,
	EditContentArea,
} from '../MainHomeContentStyle';

interface ContentContainerProps {
	editingPostId: string;
	post: any;
	updatedContent: string;
	handleContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MainHomeContentContainer = ({
	editingPostId,
	post,
	updatedContent,
	handleContentChange,
}: ContentContainerProps) => {
	return (
		<ContentContainer>
			{editingPostId === post._id ? (
				<EditContentArea
					value={updatedContent}
					onChange={handleContentChange}
				/>
			) : (
				<Content>{post.content}</Content>
			)}
		</ContentContainer>
	);
};

export default MainHomeContentContainer;
