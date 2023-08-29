import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import DefaultFooter from '../../../components/Footer/Footer';
import { Link } from 'react-router-dom';

import SearchBar from '../../../components/SearchBar/SearchBar';
import { UserDataType, Post } from '../../../types/dataType';

import UserTable from './UserMembersHooks';

import { Container, Title, TableContainer } from './UserMembrsStyle';

const UserMembers: React.FC = () => {
	const USER_DATA = `${process.env.REACT_APP_API_URL}/api/user/login`;
	const [userData, setUserData] = useState<UserDataType[]>([]);
	const [filteredUserData, setFilteredUserData] = useState<UserDataType[]>([]); // 필터링된 데이터의 새 상태
	const [searchQuery, setSearchQuery] = useState<string>('');

	useEffect(() => {
		axios
			.get(USER_DATA)
			.then((response) => {
				const fetchedData: UserDataType[] = response.data.data;
				setUserData(fetchedData);
				setFilteredUserData(fetchedData); // 모든 데이터로 FilteredUserData 초기화
				console.log('성공', fetchedData);
			})
			.catch((error) => {
				console.error('데이터를 가져오는 중 오류 발생:', error);
			});
	}, []);

	const handleSearch = (query: string) => {
		setSearchQuery(query);
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
		<>
			<AdminHeader />
			<Container>
				<Title>회원관리</Title>

				<SearchBar onSearch={handleSearch} />
			</Container>
			<TableContainer>
				<UserTable data={filteredUserData} />
			</TableContainer>
			<DefaultFooter />
		</>
	);
};
export default UserMembers;
