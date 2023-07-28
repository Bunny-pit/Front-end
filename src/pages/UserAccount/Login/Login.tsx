import React, { useState } from 'react';
import MainLogo from '../../../assets/icons/MainLogo.png';
import { useNavigate } from 'react-router-dom';
import { emailValidation } from '../../../utils/registerValidation';
import { post } from '../../../api/api';
import { setToken } from '../../../api/token';
import { UserDataType } from '../../../types/dataType';

import {
	Page,
	TitleAndLogoWrap,
	TitleWrap,
	LogoWrap,
	FormWrap,
	InputTitle,
	InputWrap,
	InputBar,
	ButtonWrap,
	BottomButton,
} from './LoginStyle';
import { useUser } from '../../../utils/swrFetcher';
import { AxiosResponse } from 'axios'
import { onChangeInputSetter } from '../../../utils/inputStateSetter';

import { API_USER_LOGIN, API_USER_ACCESS_TOKEN } from '../../../utils/constant';

export default function LoginPage() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [checkEmail, setCheckEmail] = useState<boolean>(true);
	const [checkPassword, setCheckPassword] = useState<boolean>(true);
	const [checkForm, setCheckForm] = useState<boolean>(true);
	const navigate = useNavigate();
	const { userData, isError } = useUser();
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (email === '' || password === '') {
			return setCheckForm(false);
		} else if (!emailValidation(email)) {
			setCheckEmail(false);
			return setCheckForm(false);
		}
		setCheckForm(true);

		try {
			const response: AxiosResponse<{ accessToken: string }> = await post(
				API_USER_LOGIN,
				{
					email,
					password
				},
				{ headers: { 'Content-Type': 'application/json' } }
			);
			const accessToken: string = response.data.accessToken;
			setToken(accessToken);
			window.location.reload();
			// navigate('/')
		} catch (error) {
			console.log('로그인 post 오류', error)
		}


	}

	return (
		<Page>
			<TitleAndLogoWrap>
				<LogoWrap>
					<img src={MainLogo} alt='main-logo' style={{ marginTop: '10rem' }} />
				</LogoWrap>
				<TitleWrap>환영해요 버니!</TitleWrap>
			</TitleAndLogoWrap>
			<FormWrap onSubmit={handleSubmit}>
				<InputTitle>이메일</InputTitle>
				<InputWrap>
					<InputBar
						type='text'
						placeholder='jennaryu@naver.com'
						value={email}
						onChange={onChangeInputSetter(setEmail)}
					/>
				</InputWrap>
				<InputTitle>비밀번호</InputTitle>
				<InputWrap>
					<InputBar
						type='password'
						placeholder='영문, 숫자, 특수문자 포함 8자 이상'
						value={password}
						onChange={onChangeInputSetter(setPassword)}
					/>
				</InputWrap>
				<ButtonWrap>
					<BottomButton type='submit'>로그인하기</BottomButton>
					<BottomButton
						onClick={() => {
							{
								navigate('/register');
							}
						}}>
						회원가입하기
					</BottomButton>
				</ButtonWrap>
			</FormWrap>
		</Page>
	);
}
