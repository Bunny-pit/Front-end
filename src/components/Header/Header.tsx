import {
	HedearStyle,
	Logo,
	HeaderWrapper,
	MenuUl,
	MenuLi,
	Option,
	SearchImage,
} from './HeaderStyle';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../assets/icons/HedearLogo.png';
import HeaderOption from '../../assets/icons/HedearOption.png';
import { useNavigate } from 'react-router-dom';
import searchicon from '../../assets/icons/search.png';
import SearchModal from '../../pages/SearchModal/SearchModal';
import { useState } from 'react';

const DefaultHeader = () => {
	const navigate = useNavigate();
	const [isSearchModalOpen, setSearchModalOpen] = useState(false);
	const openSearchModal = () => {
		setSearchModalOpen(true);
	};
	const closeSearchModal = () => {
		setSearchModalOpen(false);
	};

	const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
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
				<MenuUl>
					<MenuLi>
						<Link to='/mainhome/unknown'>익명의 한마디</Link>
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
					<MenuLi>
						<SearchImage
							src={searchicon}
							alt='search'
							onClick={openSearchModal}
						/>
					</MenuLi>
				</MenuUl>
				{/* 아래 navigate 현재 정보수정 및 탈퇴 페이지(마이 페이지 하위 기능)로 넘어감. */}
				<Option
					onClick={() => {
						navigate('/user/edit');
					}}
					src={HeaderOption}
					alt='옵션'
				/>
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
