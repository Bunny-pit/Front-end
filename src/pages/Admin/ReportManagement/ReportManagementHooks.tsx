import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
	Button,
	TableDiv,
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
} from './ReportManagementStyle';

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

const UserTable: React.FC<Props> = ({ data }) => {
	const [usersData, setUsersData] = useState<ApiData[]>(data);
	const [popupVisible, setPopupVisible] = useState<boolean>(false);
	const [selectedUser, setSelectedUser] = useState<ApiData | null>(null);

	const openPopup = (user: ApiData) => {
		setSelectedUser(user);
		setPopupVisible(true);
	};

	const closePopup = () => {
		setPopupVisible(false);
	};
	return (
		<>
			<TableDiv>
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
					<tbody>
						{data.map((user) => (
							<tr key={user.userId}>
								<Td>{user.name}</Td>
								<Td>{user.email}</Td>
								<Td>{user.content}</Td>
								<Td>
									<Button onClick={() => openPopup(user)}>신고내역</Button>
								</Td>
							</tr>
						))}
					</tbody>
				</Table>
			</TableDiv>

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

export default UserTable;
