import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { post } from '../../api/api';
import { API_CHATTING_START } from '../../utils/constant';
import { UserDataType } from '../../types/dataType';
import { useUser } from '../../utils/swrFetcher';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainHomeContent from '../../components/MainHomeContent/MainHomeContent';
import MainHomeSendBox from '../../components/MainHomeSendBox/MainHomeSendBox';

import { Title } from './MainHomeStyle';

const Mainhome: FC = () => {
	const { userData, isError } = useUser();

	if (isError) {
		console.log('유저 데이터를 불러오는데 실패했습니다.');
	} else if (!userData) {
		console.log('유저 데이터를 불러오는 중...');
	}

	const navigate = useNavigate();

	const moveToChatPage = async (_id: string, userId: string, name: string) => {
		try {
			await post<UserDataType>(
				API_CHATTING_START,
				{ userId: _id, anonymousUserId: userId, anonymousUserName: name },
				{
					withCredentials: true,
				},
			);
			navigate(`/chatting`);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<Header />
			<Title>Unknown Bunnies</Title>

			<MainHomeContent userData={userData} moveToChatPage={moveToChatPage} />
			<MainHomeSendBox />
			<Footer />
		</>
	);
};

export default Mainhome;
