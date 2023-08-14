import { useUser } from '../../utils/swrFetcher';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainHomeContent from '../../components/MainHomeContent/MainHomeContent';
import MainHomeSendBox from '../../components/MainHomeSendBox/MainHomeSendBox';
import useMainHomeFriendsPost from '../../hooks/useMainHomeFriendsPost';

import { Title } from './MainHomeStyle';

const MainHomeFriends = () => {
	const { userData, isError } = useUser();
	const mainHomePost = useMainHomeFriendsPost();

	if (isError) {
		console.log('유저 데이터를 불러오는데 실패했습니다.');
	} else if (!userData) {
		console.log('유저 데이터를 불러오는 중...');
	}

	return (
		<>
			<Header />
			<Title>Friend Bunnies</Title>

			<MainHomeContent userData={userData} mainHomePost={mainHomePost} />

			<MainHomeSendBox mainHomePost={mainHomePost} />

			<Footer />
		</>
	);
};

export default MainHomeFriends;
