import { ImageWrap, UserRandomImage } from '../MainHomeContentStyle';

interface ImageProps {
	avataUrl: string;
}

const MainHomeContentImage = ({ avataUrl }: ImageProps) => {
	return (
		<ImageWrap>
			<UserRandomImage src={avataUrl} alt='User Random Image' />
		</ImageWrap>
	);
};

export default MainHomeContentImage;
