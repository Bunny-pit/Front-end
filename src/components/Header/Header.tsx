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
import { useNavigate } from 'react-router-dom';

const DefaultHeader = () => {
	const navigate = useNavigate();
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
				{/* 아래 navigate 현재 정보수정 및 탈퇴 페이지(마이 페이지 하위 기능)로 넘어감. */}
				<Option onClick={() => { navigate('/user/edit') }} src={HeaderOption} alt='옵션' />
			</HeaderWrapper>
		</HedearStyle>
	);
};

export default DefaultHeader;
