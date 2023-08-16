import { ImageWrap, UserImage } from '../MainHomeContentStyle';
import { Post, UserDataType } from '../../../types/dataType';
import { useLocation } from 'react-router-dom';

interface ImageProps {
	userData: UserDataType | null;
	post: Post;
}

const MainHomeContentImage = ({ userData, post }: ImageProps) => {
	const location = useLocation();
	const email: string = post.email;
	let userImage: string;

	if (location.pathname === '/mainhome/friends' && userData?.profileImg) {
		userImage = userData.profileImg;
	} else {
		userImage = `https://www.gravatar.com/avatar/${email}?d=identicon`;
	}

	return (
		<ImageWrap>
			<UserImage src={userImage} alt='User Image' />
		</ImageWrap>
	);
};

export default MainHomeContentImage;
