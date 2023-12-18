import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainHomeContent from '../../components/MainHomeContent/MainHomeContent';

import { Title } from './MainHomeStyle';

const MainHomeFriends = () => {
	return (
		<>
			<Header />

			<Title>Friend Bunnies</Title>

			<MainHomeContent />

			<Footer />
		</>
	);
};

export default MainHomeFriends;
