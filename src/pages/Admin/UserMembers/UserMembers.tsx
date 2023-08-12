import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import DefaultFooter from '../../../components/Footer/Footer';
import { Link } from 'react-router-dom';

import SearchBar from '../../../components/SearchBar/SearchBar';
import { Post } from '../../../types/dataType';
import { API_USER_LOGIN } from '../../../utils/constant';

import UserTable from './UserMembersHooks';

import {
	Container,
	Title,
	SearchBarInput,
	SearchBarForm,
	SearchBarDiv,
} from './UserMembrsStyle';

interface UserData {
	_id: string;
	userName: string;
	email: string;
	createdAt: string;
}

const UserMembers: React.FC = () => {
	const USER_DATA = 'http://localhost:3001/api/user/login';
	const [userData, setUserData] = useState<UserData[]>([]);

	const handleSearch = (searchText: string) => {
		// Your search logic here
	};

	useEffect(() => {
		axios
			.get(USER_DATA)
			.then((response) => {
				const fetchedData: UserData[] = response.data.data;
				setUserData(fetchedData);
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

				<SearchBar onSearch={handleSearch} />
				{/* <SearchBarDiv>
					<SearchBarForm>
						<SearchBarInput placeholder='이메일을 입력해주세요'></SearchBarInput>
					</SearchBarForm>
				</SearchBarDiv> */}

				<UserTable data={userData} />
			</Container>
			<DefaultFooter />
		</>
	);
};
export default UserMembers;
