import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import DefaultFooter from '../../../components/Footer/Footer';

import {
	Container,
	Title,
	ChangeButtonDiv,
	ButtonAnonymous,
	Buttonfriends,
	TableContainer,
} from './ReportManagementStyle';

import UserTableFriends from './FriendsHooks';
import UserTableSecret from './SecretHooks';

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

type Report = {
	reportedBy: string;
	userId: string;
	reason: string;
	_id: string;
	createdAt: string;
};

const ReportManagement = () => {
	const SECRET_DATA = `${process.env.REACT_APP_API_URL}/api/mainhome/secret/reported`;
	const FRIEND_DATA = `${process.env.REACT_APP_API_URL}/api/mainhome/friends/reported`;

	const [activeButton, setActiveButton] = useState<'anonymous' | 'friends'>(
		'anonymous',
	);
	const [showSecretUserTable, setShowSecretUserTable] = useState(true);

	const handleButtonClick = (buttonType: 'anonymous' | 'friends') => {
		setActiveButton(buttonType);
		if (buttonType === 'anonymous') {
			setShowSecretUserTable(true);
		} else {
			setShowSecretUserTable(false);
		}
	};

	const [secretUserData, setSecretUserData] = useState<ApiData[]>([]);
	const [filteredUserData, setFilteredUserData] = useState<ApiData[]>([]);

	useEffect(() => {
		const fetchSecretData = async () => {
			try {
				const response = await axios.get(SECRET_DATA);
				const fetchedData: ApiData[] = response.data;
				setSecretUserData(fetchedData);
				console.log('익명 데이터 가져오기 성공', fetchedData);
			} catch (error) {
				console.error('익명 데이터를 가져오는 중 오류 발생:', error);
			}
		};

		const fetchFriendData = async () => {
			try {
				const response = await axios.get(FRIEND_DATA);
				const fetchedData: ApiData[] = response.data;
				setFilteredUserData(fetchedData);
				console.log('친구 데이터 가져오기 성공', fetchedData);
			} catch (error) {
				console.error('친구 데이터를 가져오는 중 오류 발생:', error);
			}
		};

		fetchSecretData();
		fetchFriendData();
	}, [FRIEND_DATA, SECRET_DATA]);

	return (
		<>
			<AdminHeader />
			<Container>
				<Title>신고 관리</Title>
				<ChangeButtonDiv>
					<ButtonAnonymous
						className={activeButton === 'anonymous' ? 'active' : ''}
						onClick={() => handleButtonClick('anonymous')}>
						익명 한마디 신고내역
					</ButtonAnonymous>
					<Buttonfriends
						className={activeButton === 'friends' ? 'active' : ''}
						onClick={() => handleButtonClick('friends')}>
						친구 한마디 신고내역
					</Buttonfriends>
				</ChangeButtonDiv>
			</Container>
			<TableContainer>
				{activeButton === 'anonymous' ? (
					showSecretUserTable && <UserTableSecret data={secretUserData} />
				) : (
					<UserTableFriends data={filteredUserData} />
				)}
			</TableContainer>

			<DefaultFooter />
		</>
	);
};

export default ReportManagement;
