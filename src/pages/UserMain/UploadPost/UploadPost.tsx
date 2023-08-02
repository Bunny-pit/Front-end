import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../../components/Header/DetailHeader/DetailHeader';
import Footer from '../../../components/Footer/Footer';
import {
	Container,
	StyledTextArea,
	StyledFileInput,
	StyledFileInputLabel,
	UploadWrap,
	StyledForm,
	SubmitButton,
} from './UploadPostStyle';
import { useUser } from '../../../utils/swrFetcher';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const settings = {
	dots: true, // dot navigation을 보여줄지에 대한 여부
	infinite: true, // 무한으로 슬라이드가 돌아가는지에 대한 여부
	speed: 500, // 슬라이드가 넘어가는 속도(ms 단위)
	slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
	slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수
};

const UserMain = () => {
	const [content, setContent] = useState<string>('');
	const [files, setFiles] = useState<FileList | null>(null);
	const [previewURLs, setPreviewURLs] = useState<string[]>([]);
	const { userData, isError } = useUser();
	const [fileSelected, setFileSelected] = useState<boolean>(false); // 사진이 선택되었는지 여부를 추적하는 상태 변수 추가
	const navigate = useNavigate();

	if (isError) {
		console.log('유저 데이터를 불러오는데 실패했습니다.');
	} else if (!userData) {
		console.log('유저 데이터를 불러오는 중...');
	}
	console.log(userData?.userName);

	const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.target.value);
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFiles(e.target.files);
		if (e.target.files) {
			setFileSelected(true); // 파일이 선택되면 fileSelected를 true로 설정
			const fileArray = Array.from(e.target.files).map((file) =>
				URL.createObjectURL(file),
			);

			// file blob url 저장
			setPreviewURLs((prevUrls) => prevUrls.concat(fileArray));

			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file as unknown as string), // cleanup function
			);
		}
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('content', content);

		if (files) {
			Array.from(files).forEach((file) => {
				formData.append('files', file);
			});
		}

		const token = localStorage.getItem('accessToken');

		try {
			const response = await axios.post(
				'http://localhost:4000/api/post',
				formData,
				{
					headers: {
						Authorization: `Bearer ${token}`, // attach the token as a bearer token
					},
				},
			);
			console.log(response);
			navigate('/post');
		} catch (error) {
			console.error('Error creating post:', error);
		}
	};
	return (
		<>
			<Header />
			<Container>
				<UploadWrap>
					<StyledForm onSubmit={handleSubmit}>
						{!fileSelected && ( // fileSelected가 false일 때만 StyledFileInputLabel 및 StyledFileInput 렌더링
							<StyledFileInputLabel htmlFor='fileUpload'>
								<StyledFileInput
									id='fileUpload'
									type='file'
									onChange={handleFileChange}
									multiple
								/>
							</StyledFileInputLabel>
						)}
						<Slider {...settings} className='Slider'>
							{previewURLs.map((url, index) => (
								<img src={url} alt={`preview ${index}`} key={url} />
							))}
						</Slider>
						<StyledTextArea
							placeholder='문구 입력...'
							value={content}
							onChange={handleContentChange}
						/>
						<SubmitButton type='submit' value='공유하기' />
					</StyledForm>
				</UploadWrap>
			</Container>
			<Footer />
		</>
	);
};

export default UserMain;
