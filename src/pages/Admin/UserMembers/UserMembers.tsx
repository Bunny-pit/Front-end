import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import DefaultFooter from '../../../components/Footer/Footer';
import { Link } from 'react-router-dom';

import SearchBar from '../../../components/SearchBar/SearchBar';
import { Post } from '../../../types/dataType';
import { API_USER_LOGIN } from '../../../utils/constant';

import UserTable from './UserMembersHooks';

import { Container, Title } from './UserMembrsStyle';

interface UserData {
	_id: string;
	userName: string;
	email: string;
	createdAt: string;
}

const UserMembers: React.FC = () => {
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

				<UserTable data={filteredUserData} />
			</Container>
			<DefaultFooter />
		</>
	);
};
export default UserMembers;
