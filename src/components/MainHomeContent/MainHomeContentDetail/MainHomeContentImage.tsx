import { ImageWrap, UserImage } from '../MainHomeContentStyle';
import { Post } from '../../../types/dataType';
import { useLocation } from 'react-router-dom';
import { useUser } from '../../../utils/swrFetcher';

interface ImageProps {
	post: Post;
}

const MainHomeContentImage = ({ post }: ImageProps) => {
	const location = useLocation();
	const { userData } = useUser();
	const email: string = post.email;
	let userImage: string;

	if (location.pathname === '/mainhome/friends' && userData?.profileImg) {
		userImage = post.profileImage;
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
