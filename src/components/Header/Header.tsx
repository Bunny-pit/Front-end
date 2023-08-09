import {
	HedearStyle,
	Logo,
	HeaderWrapper,
	MenuUl,
	MenuLi,
	Option,
} from './HeaderStyle';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../assets/icons/HedearLogo.png';
import HeaderOption from '../../assets/icons/HedearOption.png';
import handleLogout from '../../utils/logout';

const DefaultHeader = () => {
	return (
		<HedearStyle>
			<HeaderWrapper>
				<Link to='/post'>
					<Logo src={HeaderLogo} alt='로고' />
				</Link>
				<MenuUl>
					<MenuLi>
						<Link to='/mainhome/unknown'>익명의 버니들</Link>
					</MenuLi>
					<MenuLi>
						<Link to='/mainhome/friends'>친구 버니들</Link>
					</MenuLi>
					<MenuLi>
						<Link to='/chatting/*'>익명 버니톡</Link>
					</MenuLi>
					<MenuLi>
						<Link to='/friendchatting/*'>친구 버니톡</Link>
					</MenuLi>
				</MenuUl>
				<Option src={HeaderOption} alt='옵션' />
				<button onClick={() => { handleLogout() }}>로그아웃(임시)</button>
			</HeaderWrapper>
		</HedearStyle>
	);
};

export default DefaultHeader;
