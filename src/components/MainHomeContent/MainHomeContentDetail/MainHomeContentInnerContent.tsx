import React from 'react';
import message from '../../../assets/icons/message.png';
import { Link, useLocation } from 'react-router-dom';
import Group from '../../../assets/icons/Group.png';
import Swal from 'sweetalert2';
import { Post, UserDataType } from '../../../types/dataType';

import {
	UserContainer,
	UserName,
	IconContainer,
	GoChat,
	GoProfile,
	InnerContent,
	ContentContainer,
	Content,
	EditContentArea,
	Date,
	ButtonWrapper,
	Edit,
	Delete,
	Report,
} from '../MainHomeContentStyle';

interface InnerContentProps {
	post: Post;
	userData: UserDataType | null;
	editingPostId: string;
	updatedContent: string;
	handleContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	moveToChatPage: (id1: string, id2: string, name: string) => void;
	updatePost: (id: string) => void;
	setEditingPostId: (id: string) => void;
	setUpdatedContent: (content: string) => void;
	deletePost: (id: string) => void;
	sendReport: (postId: string, reason: string) => Promise<void>;
}

const handleReport = (
	post: Post,
	userData: UserDataType | null,
	sendReport: (postId: string, reason: string) => Promise<void>,
) => {
	const hasUserAlreadyReported = post.reports.some(
		(report: { userId: string }) => report.userId === userData?._id,
	);

	if (hasUserAlreadyReported) {
		Swal.fire('알림', '이미 신고한 게시글입니다.', 'warning');
		return;
	}

	Swal.fire({
		title: '신고 사유 입력',
		input: 'text',
		inputPlaceholder: '신고 사유를 입력해주세요',
		showCancelButton: true,
		confirmButtonText: '신고하기',
		cancelButtonText: '취소하기',
		showLoaderOnConfirm: true,
		preConfirm: async (reason) => {
			if (!reason) {
				Swal.showValidationMessage('신고 사유를 입력해주세요');
				return;
			}
			try {
				await sendReport(post._id, reason);
				Swal.fire('성공', '신고가 접수되었습니다.', 'success');
			} catch (error) {
				Swal.fire('오류', '신고 접수 중 문제가 발생했습니다.', 'error');
			}
		},
	});
};

const MainHomeContentInnerContent = ({
	post,
	userData,
	editingPostId,
	updatedContent,
	handleContentChange,
	moveToChatPage,
	updatePost,
	setEditingPostId,
	setUpdatedContent,
	deletePost,
	sendReport,
}: InnerContentProps) => {
	const isOnFriendsPage = useLocation().pathname === '/mainhome/friends';
	return (
		<InnerContent>
			<UserContainer>
				<UserName>{post.name}</UserName>
				<IconContainer>
					{isOnFriendsPage && (
						<Link to={`/post/user/${post.name}`}>
							<GoProfile>
								<img src={Group} alt='해당 유저 프로필로 이동' />
							</GoProfile>
						</Link>
					)}
					{userData && userData?._id !== post.userId && (
						<GoChat
							onClick={() =>
								moveToChatPage(userData._id, post.userId, post.name)
							}>
							<img src={message} alt='해당 유저와 1대1 채팅' />
						</GoChat>
					)}
					{userData && userData?._id !== post.userId && (
						<Report onClick={() => handleReport(post, userData, sendReport)}>
							신고
						</Report>
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
					<Content>{post.content}</Content>
				)}
			</ContentContainer>
			<Date>
				<p>{post.createdAt}</p>
			</Date>
			<ButtonWrapper>
				{/* 수정하기 */}
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
							{/* 삭제하기 */}
							<Delete onClick={() => deletePost(post._id)}>삭제</Delete>
						</>
					))}
			</ButtonWrapper>
		</InnerContent>
	);
};

export default MainHomeContentInnerContent;
