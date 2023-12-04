import { useState } from 'react';

import Swal from 'sweetalert2';
import { del } from '../../../api/api';
import alertList from '../../../utils/swal';
import { UserDataType, Post } from '../../../types/dataType';

import { API_ADMIN_DELETE_TALK_SECRET } from '../../../utils/constant';

import {
	Button,
	Th,
	Td,
	Table,
	Thead,
	PopupOverlay,
	PopupContent,
	CloseButton,
	PopupH1,
	PopupUL,
	PopupLI,
	PopupSpan,
	Tbody,
} from './ReportDetailStyle';

interface ApiData {
	_id: string;
	userId: string;
	email: string;
	name: string;
	content: string;
	reports: Report[];
	createdAt: string;
	updatedAt: string;
	__v: number;
}

interface Props {
	data: ApiData[];
}

type Report = {
	reportedBy: string;
	userId: string;
	reason: string;
	_id: string;
	createdAt: string;
};

const UserTableSecret = ({ data }: Props) => {
	const [popupVisible, setPopupVisible] = useState<boolean>(false);
	const [selectedUser, setSelectedUser] = useState<ApiData | null>(null);

	const [posts, setPosts] = useState<Post[]>([]);

	const openPopup = (user: ApiData) => {
		setSelectedUser(user);
		setPopupVisible(true);
	};

	const closePopup = () => {
		setSelectedUser(null);
		setPopupVisible(false);
	};

	const deletePost = async (postId: string) => {
		const result = await Swal.fire(
			alertList.doubleCheckTitkeMsg(
				'게시글을 삭제하시겠습니까?',
				'한번 삭제한 게시글은 복구할 수 없습니다.',
			),
		);
		if (result.isConfirmed) {
			try {
				await del<UserDataType>(`${API_ADMIN_DELETE_TALK_SECRET}/${postId}`, {
					withCredentials: true,
				});

				setPosts(posts.filter((post) => post._id !== postId));
			} catch (err) {
				Swal.fire(alertList.errorMessage('삭제를 실패하였습니다.'));
				return;
			}
		}
	};

	return (
		<>
			<Table>
				<Thead>
					<tr>
						<Th>익명닉네임</Th>
						<Th>이메일</Th>
						<Th>내용</Th>
						<Th></Th>
						<Th></Th>
					</tr>
				</Thead>
				<Tbody>
					{data.map((user) => (
						<tr key={user._id}>
							<Td>{user.name}</Td>
							<Td>{user.email} </Td>
							<Td>{user.content}</Td>
							<Td>
								<Button onClick={() => openPopup(user)}>신고내역</Button>
							</Td>
							<Td>
								<Button onClick={() => deletePost(user._id)}>삭제</Button>
							</Td>
						</tr>
					))}
				</Tbody>
			</Table>

			{popupVisible && (
				<PopupOverlay className='popup'>
					<PopupContent>
						<PopupH1>신고내역</PopupH1>
						<PopupUL>
							{selectedUser?.reports.map((report) => (
								<PopupLI key={report._id}>
									<PopupSpan>신고자: </PopupSpan>
									{report.reportedBy}
									<br />
									<PopupSpan>신고 이유: </PopupSpan>
									{report.reason}
									<br /> {report.createdAt.slice(0, 10)}
								</PopupLI>
							))}
						</PopupUL>
						<CloseButton onClick={closePopup}>Close</CloseButton>
					</PopupContent>
				</PopupOverlay>
			)}
		</>
	);
};

export default UserTableSecret;
