import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import DefaultFooter from '../../../components/Footer/Footer';

import {
	Container,
	Title,
	ChangeButtonDiv,
	ButtonUser,
	ButtonHospital,
} from './ReportManagementStyle';

import UserTable from './ReportManagementHooks';

interface ApiData {
	userId: string;
	name: string;
	content: string;
	createdAt: string;

	reportedBy: string;
	reason: string;
}

const ReportManagement: React.FC = () => {
	const Report_DATA = 'http://localhost:3001/api/mainhome/friends/reported';
	const [apiData, setApiData] = useState<ApiData[]>([]);

	const fetchData = async () => {
		try {
			const response = await axios.get<ApiData[]>(Report_DATA);
			const fetchedData: ApiData[] = response.data;
			setApiData(fetchedData);
			console.log('성공:');
		} catch (error) {
			console.error('Error fetching data:', error);
			console.log('실패');
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<AdminHeader />
			<Container>
				<Title>신고 관리</Title>
				<ChangeButtonDiv>
					<ButtonUser>친구 한마디</ButtonUser>
					<ButtonHospital>익명 한마디</ButtonHospital>
				</ChangeButtonDiv>
				<UserTable data={apiData} />
			</Container>
			<DefaultFooter />
		</>
	);
};

export default ReportManagement;
