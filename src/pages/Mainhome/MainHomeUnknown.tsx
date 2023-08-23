import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainHomeContent from '../../components/MainHomeContent/MainHomeContent';
import MainHomeSendBox from '../../components/MainHomeSendBox/MainHomeSendBox';

import { Title } from './MainHomeStyle';

const MainHomeUnknown = () => {
	return (
		<>
			<Header />
			<Title>Unknown Bunnies</Title>

			<MainHomeContent />

			<MainHomeSendBox />

			<Footer />
		</>
	);
};

export default MainHomeUnknown;
