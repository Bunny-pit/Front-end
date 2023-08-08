import { Link } from 'react-router-dom';
import HeaderLogo from '../../assets/icons/HedearLogo.png';
import AdminHome from '../../assets/icons/AdminHome.png';
import AdminExite from '../../assets/icons/AdminExite.png';

import {
	HedearStyle,
	Logo,
	HeaderWrapper,
	MenuUl,
	MenuLi,
	Icon,
} from './AdminHeaderStyle';

const AdminHeader = () => {
	return (
		<HedearStyle>
			<HeaderWrapper>
				<Link to='/post'>
					<Logo src={HeaderLogo} alt='로고' />
				</Link>
				<MenuUl>
					<MenuLi>
						<Link to='/mainhome/unknown'>
							<Icon src={AdminHome} alt='홈' />
						</Link>
					</MenuLi>
					<MenuLi>
						<Link to='/mainhome/friends'>
							<Icon src={AdminExite} alt='나가기' />
						</Link>
					</MenuLi>
				</MenuUl>
			</HeaderWrapper>
		</HedearStyle>
	);
};
export default AdminHeader;
