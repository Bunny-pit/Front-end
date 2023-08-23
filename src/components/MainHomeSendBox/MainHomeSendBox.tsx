import { useState, useEffect } from 'react';
import MainHomeSendBoxInput from './MainhomeSendBoxDetail/MainhomeSendBoxInput';
import MainHomeSendBoxButton from './MainhomeSendBoxDetail/MainhomeSendBoxButton';

import { TextBox, TextWrapper } from './MainHomeSendBoxStyle';

const MainHomeSendBox = () => {
	const [placeholderText, setPlaceholderText] = useState<string>('');

	useEffect(() => {
		const updatePlaceholder = () => {
			if (window.innerWidth <= 390) {
				setPlaceholderText('여긴 익명 게시판이에요!');
			} else {
				setPlaceholderText('글을 남기게 되면 프로필이 비공개 처리돼요!');
			}
		};

		updatePlaceholder();
		window.addEventListener('resize', updatePlaceholder);

		return () => {
			window.removeEventListener('resize', updatePlaceholder);
		};
	}, []);

	return (
		<TextBox>
			<TextWrapper>
				<MainHomeSendBoxInput placeholder={placeholderText} />
				<MainHomeSendBoxButton />
			</TextWrapper>
		</TextBox>
	);
};

export default MainHomeSendBox;
