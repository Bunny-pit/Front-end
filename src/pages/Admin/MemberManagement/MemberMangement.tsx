import { useState, useEffect } from 'react';
import { get } from '../../../api/api';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import DefaultFooter from '../../../components/Footer/Footer';

import SearchBar from '../../../components/SearchBar/SearchBar';
import { UserDataType } from '../../../types/dataType';

import UserTable from '../../../components/AdminDetail/MemberDetail/MembersDetail';

import {
	Container,
	Content,
	Title,
	TableContainer,
} from './MemberManagementStyle';

interface ApiResponse {
	data: UserDataType[];
}

const MemberManagement = () => {
	const USER_DATA = `${process.env.REACT_APP_API_URL}/api/user/findAll`;
	const [userData, setUserData] = useState<UserDataType[]>([]);
	const [filteredUserData, setFilteredUserData] = useState<UserDataType[]>([]);

	useEffect(() => {
		get<ApiResponse>(USER_DATA)
			.then((response) => {
				const fetchedData = response.data.data;
				setUserData(fetchedData);
				setFilteredUserData(fetchedData);
				console.log('성공', fetchedData);
			})
			.catch((error) => {
				console.error('데이터를 가져오는 중 오류 발생:', error);
			});
	}, [USER_DATA]);

	const handleSearch = (query: string) => {
		const filteredData = userData.filter((user) =>
			user.userName.toLowerCase().includes(query.toLowerCase()),
		);

		if (filteredData.length === 0) {
			console.log('일치하는 닉네임이 없습니다.');
		}

		setFilteredUserData(filteredData);
		console.log('성공', filteredData);
	};

	return (
		<Container>
			<AdminHeader />
			<Content>
				<Title>회원관리</Title>
				<SearchBar onSearch={handleSearch} />
				<TableContainer>
					<UserTable data={filteredUserData} />
				</TableContainer>
			</Content>
			<DefaultFooter />
		</Container>
	);
};
export default MemberManagement;
