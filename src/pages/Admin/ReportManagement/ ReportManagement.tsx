import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import DefaultFooter from '../../../components/Footer/Footer';

import {
	Container,
	Title,
	ChangeButtonDiv,
	ButtonAnonymous,
	Buttonfriends,
} from './ReportManagementStyle';

import UserTable from './ReportManagementHooks';

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

const ReportManagement: React.FC = () => {
	const USER_DATA = 'http://localhost:3001/api/mainhome/unknown/reported';
	const [userData, setUserData] = useState<ApiData[]>([]);
	const [filteredUserData, setFilteredUserData] = useState<ApiData[]>([]); // 필터링된 데이터의 새 상태

	useEffect(() => {
		axios
			.get(USER_DATA)
			.then((response) => {
				const fetchedData: ApiData[] = response.data;
				setUserData(fetchedData);
				setFilteredUserData(fetchedData); // 모든 데이터로 FilteredUserData 초기화
				console.log('성공', fetchedData);
			})
			.catch((error) => {
				console.error('데이터를 가져오는 중 오류 발생:', error);
			});
	}, []);

	return (
		<>
			<AdminHeader />
			<Container>
				<Title>신고 관리</Title>
				<ChangeButtonDiv>
					<ButtonAnonymous>익명 한마디</ButtonAnonymous>
					<Buttonfriends>친구 한마디</Buttonfriends>
				</ChangeButtonDiv>
				<UserTable data={filteredUserData} />
			</Container>
			<DefaultFooter />
		</>
	);
};

export default ReportManagement;
