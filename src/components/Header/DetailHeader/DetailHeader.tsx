import { HedearStyle, BackButton, Title, BackImage } from './DetailHeaderStyle';
import Back from '../../../assets/icons/Back.png';
import { useNavigate } from 'react-router-dom';

const DefaultHeader = () => {
	const post = '게시물';
	const uploadPost = '게시물 올리기';
	let navigate = useNavigate();
	return (
		<HedearStyle>
			<BackButton onClick={() => navigate(-1)}>
				<BackImage src={Back} alt='뒤로가기 버튼' />
			</BackButton>
			<Title>{post}</Title>
		</HedearStyle>
	);
};

export default DefaultHeader;
