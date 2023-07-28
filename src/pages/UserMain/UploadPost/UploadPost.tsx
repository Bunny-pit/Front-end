import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../../components/Header/DetailHeader/DetailHeader';
import Footer from '../../../components/Footer/Footer';
import { Container } from './UploadPostStyle';

const backUrl = 'https://port-0-back-end-kvmh2mljxnw03c.sel4.cloudtype.app/api';

const UserMain = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	return (
		<>
			<Header />
			<Container>
				<div className='uploadImg'>
					<form action='' method='post'>
						<input type='file' accept='image/*' onChange={() => {}} />
						<input type='text' placeholder='문구 입력...' />
						<button type='submit'>공유하기</button>
					</form>
				</div>
			</Container>
			<Footer />
		</>
	);
};

export default UserMain;
