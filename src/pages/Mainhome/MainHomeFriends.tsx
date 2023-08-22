import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainHomeContent from '../../components/MainHomeContent/MainHomeContent';
import MainHomeSendBox from '../../components/MainHomeSendBox/MainHomeSendBox';
import useMainHomeFriendsPost from '../../hooks/useMainHomeFriendsPost';

import { Title } from './MainHomeStyle';

const MainHomeFriends = () => {
	const mainHomePost = useMainHomeFriendsPost();

	return (
		<>
			<Header />
			<Title>Friend Bunnies</Title>

			<MainHomeContent mainHomePost={mainHomePost} />

			<MainHomeSendBox />

			<Footer />
		</>
	);
};

export default MainHomeFriends;
