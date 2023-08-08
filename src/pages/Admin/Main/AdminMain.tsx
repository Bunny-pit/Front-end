import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import DefaultFooter from '../../../components/Footer/Footer';
import { Link } from 'react-router-dom';

import { Container, Title, Menu, H2, MenuFlex } from './AdminMainStyle';

const AdminMain = () => {
	return (
		<>
			<AdminHeader />
			<Container>
				<Title>관리자 페이지</Title>
				<MenuFlex>
					<Menu>
						<Link to=''>
							<H2>회원관리</H2>
						</Link>
					</Menu>
					<Menu>
						<Link to=''>
							<H2>신고관리</H2>
						</Link>
					</Menu>
				</MenuFlex>
			</Container>
			<DefaultFooter />
		</>
	);
};
export default AdminMain;
