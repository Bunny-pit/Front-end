import {
	HedearStyle,
	Logo,
	HeaderWrapper,
	MenuUl,
	MenuLi,
	Option,
	SearchImage,
	AnonymousIcon,
	FriendsIcon,
	ChattingIcon,
	FriendChattingIcon,
} from './HeaderStyle';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../assets/icons/HedearLogo_11zon.webp';
import HeaderOption from '../../assets/icons/HedearOption_11zon.webp';
import { useNavigate } from 'react-router-dom';
import searchicon from '../../assets/icons/search.png';
import SearchModal from '../SearchModal/SearchModal';
import { useState, useEffect } from 'react';

const DefaultHeader = () => {
	const navigate = useNavigate();
	const [isSearchModalOpen, setSearchModalOpen] = useState(false);
	const openSearchModal = () => {
		setSearchModalOpen(true);
	};
	const closeSearchModal = () => {
		setSearchModalOpen(false);
	};
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
		console.log('Clicked element:', event.target);
		console.log('Current target:', event.currentTarget);

		if (event.target === event.currentTarget) {
			closeSearchModal();
		}
	};

	return (
		<HedearStyle>
			<HeaderWrapper>
				<Link to='/post'>
					<Logo src={HeaderLogo} alt='로고' />
				</Link>
				{windowWidth > 391 ? (
					<MenuUl>
						<MenuLi>
							<Link to='/mainhome/secret'>익명의 한마디</Link>
						</MenuLi>
						<MenuLi>
							<Link to='/chatting/*'>익명 버니톡</Link>
						</MenuLi>
						<MenuLi>
							<Link to='/mainhome/friends'>친구의 한마디</Link>
						</MenuLi>
						<MenuLi>
							<Link to='/friendchatting/*'>친구 버니톡</Link>
						</MenuLi>
					</MenuUl>
				) : (
					<MenuUl>
						<MenuLi onClick={() => navigate('/mainhome/secret')}>
							<AnonymousIcon />
						</MenuLi>
						<MenuLi onClick={() => navigate('/chatting/*')}>
							<ChattingIcon />
						</MenuLi>
						<MenuLi onClick={() => navigate('/mainhome/friends')}>
							<FriendsIcon />
						</MenuLi>
						<MenuLi onClick={() => navigate('/friendchatting/*')}>
							<FriendChattingIcon />
						</MenuLi>
					</MenuUl>
				)}
				<div className='iconWrap'>
					<SearchImage
						src={searchicon}
						alt='search'
						onClick={openSearchModal}
					/>

					<Option
						onClick={() => {
							navigate('/user/edit');
						}}
						src={HeaderOption}
						alt='옵션'
					/>
				</div>
			</HeaderWrapper>
			{isSearchModalOpen && (
				<div onClick={handleModalClick}>
					<SearchModal onClose={closeSearchModal} />
				</div>
			)}
		</HedearStyle>
	);
};

export default DefaultHeader;
