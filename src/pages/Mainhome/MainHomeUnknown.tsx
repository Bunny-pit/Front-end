import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainHomeContent from '../../components/MainHomeContent/MainHomeContent';
import MainHomeSendBox from '../../components/MainHomeSendBox/MainHomeSendBox';
import useMainHomeUnknownPost from '../../hooks/useMainHomeUnknownPost';

import { Title } from './MainHomeStyle';

const MainHomeUnknown = () => {
	const mainHomePost = useMainHomeUnknownPost();

	return (
		<>
			<Header />
			<Title>Unknown Bunnies</Title>

			<MainHomeContent mainHomePost={mainHomePost} />

			<MainHomeSendBox />

			<Footer />
		</>
	);
};

export default MainHomeUnknown;
