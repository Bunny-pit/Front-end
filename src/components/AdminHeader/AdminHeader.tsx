import { Link } from 'react-router-dom';
import HeaderLogo from '../../assets/icons/HedearLogo_11zon.webp';
import AdminHome from '../../assets/icons/AdminHome_11zon.webp';
import AdminExite from '../../assets/icons/AdminExite_11zon.webp';

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
						<Link to='/adminMain'>
							<Icon src={AdminHome} alt='홈' />
						</Link>
					</MenuLi>
					<MenuLi>
						<Link to='/register'>
							<Icon src={AdminExite} alt='나가기' />
						</Link>
					</MenuLi>
				</MenuUl>
			</HeaderWrapper>
		</HedearStyle>
	);
};
export default AdminHeader;
