import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import DefaultFooter from '../../../components/Footer/Footer';

import {
	Container,
	Title,
	MenuFlex,
	MenuButton,
	LinkStyle,
	SubTitle,
} from './AdminMainStyle';

const AdminMain = () => {
	return (
		<>
			<AdminHeader />
			<Container>
				<Title>관리자 페이지</Title>
				<MenuFlex>
					<LinkStyle to='/userMembers'>
						<MenuButton>
							<SubTitle>회원관리</SubTitle>
						</MenuButton>
					</LinkStyle>
					<LinkStyle to='/reportManagement'>
						<MenuButton>
							<SubTitle>신고관리</SubTitle>
						</MenuButton>
					</LinkStyle>
				</MenuFlex>
			</Container>
			<DefaultFooter />
		</>
	);
};
export default AdminMain;
