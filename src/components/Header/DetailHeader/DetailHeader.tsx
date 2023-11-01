import { HedearStyle, BackButton, Title, BackImage } from './DetailHeaderStyle';
import Back from '../../../assets/icons/Back.png';
import { useNavigate, useParams } from 'react-router-dom';

const DefaultHeader = () => {
	const { postId } = useParams();
	const post = '게시물';
	const uploadPost = '게시물 올리기';
	let navigate = useNavigate();

	let title;
	if (postId === undefined) {
		title = uploadPost; // 없으면 '게시물 올리기' 출력
	} else {
		title = post; // id가 있으면 '게시물' 출력
	}

	return (
		<HedearStyle>
			<BackButton onClick={() => navigate(-1)}>
				<BackImage src={Back} alt='뒤로가기 버튼' />
			</BackButton>
			<Title>{title}</Title>
		</HedearStyle>
	);
};

export default DefaultHeader;
