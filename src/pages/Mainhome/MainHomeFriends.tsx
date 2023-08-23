import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainHomeContent from '../../components/MainHomeContent/MainHomeContent';
import MainHomeSendBox from '../../components/MainHomeSendBox/MainHomeSendBox';

import { Title } from './MainHomeStyle';

const MainHomeFriends = () => {
	return (
		<>
			<Header />
			<Title>Friend Bunnies</Title>

			<MainHomeContent />

			<MainHomeSendBox />

			<Footer />
		</>
	);
};

export default MainHomeFriends;
