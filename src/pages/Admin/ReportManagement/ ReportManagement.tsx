import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import DefaultFooter from '../../../components/Footer/Footer';

import SearchBar from '../../../components/SearchBar/SearchBar';

import { Container, Title } from './ReportManagementStyle';

interface UserData {
	_id: string;
	userName: string;
	email: string;
	createdAt: string;
}

const ReportManagement: React.FC = () => {
	const USER_DATA = 'http://localhost:3001/api/user/login';
	const [userData, setUserData] = useState<UserData[]>([]);
	const [filteredUserData, setFilteredUserData] = useState<UserData[]>([]); // 필터링된 데이터의 새 상태
	const [searchQuery, setSearchQuery] = useState<string>('');

	useEffect(() => {
		axios
			.get(USER_DATA)
			.then((response) => {
				const fetchedData: UserData[] = response.data.data;
				setUserData(fetchedData);
				setFilteredUserData(fetchedData); // 모든 데이터로 FilteredUserData 초기화
			})
			.catch((error) => {
				console.error('데이터를 가져오는 중 오류 발생:', error);
			});
	}, []);

	return (
		<>
			<AdminHeader />
			<Container>
				<Title>회원관리</Title>

				{/* <UserTable data={filteredUserData} /> */}
			</Container>
			<DefaultFooter />
		</>
	);
};
export default ReportManagement;
