import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainHomeContent from '../../components/MainHomeContent/MainHomeContent';

import { Title } from './MainHomeStyle';

const MainHomeSecret = () => {
	return (
		<>
			<Header />

			<Title>Secret Bunnies</Title>

			<MainHomeContent />

			<Footer />
		</>
	);
};

export default MainHomeSecret;
