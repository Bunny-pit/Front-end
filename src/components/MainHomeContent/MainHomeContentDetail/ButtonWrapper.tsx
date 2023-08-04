import { Wrapper, Edit, Delete } from '../MainHomeContentStyle';

interface WrapperProps {
	userData: any;
	post: any;
	editingPostId: string;
	setEditingPostId: (id: string) => void;
	setUpdatedContent: (content: string) => void;
	updatePost: (id: string) => void;
	deletePost: (id: string) => void;
}

const MainHomeContentButtonWrapper = ({
	userData,
	post,
	editingPostId,
	setEditingPostId,
	setUpdatedContent,
	updatePost,
	deletePost,
}: WrapperProps) => {
	return (
		<Wrapper>
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

						<Delete
							onClick={() => {
								{
									deletePost(post._id);
								}
							}}>
							삭제
						</Delete>
					</>
				))}
		</Wrapper>
	);
};

export default MainHomeContentButtonWrapper;
