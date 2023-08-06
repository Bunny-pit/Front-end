import React, { useState, useEffect } from 'react';
import MainLogo from '../../../assets/icons/MainLogo.png';
import { useNavigate } from 'react-router-dom';
import { emailValidation, passwordValidation } from '../../../utils/registerValidation';
import { post } from '../../../api/api';
import { setToken } from '../../../api/token';
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
import { AxiosResponse } from 'axios'
import { onChangeInputSetter } from '../../../utils/inputStateSetter';
import { API_USER_LOGIN } from '../../../utils/constant';

interface LoginFormState {
	email: string;
	password: string;
	isEmailValid: boolean;
	isPasswordValid: boolean;
	isFormValid: boolean;
}

const initialLoginFormState: LoginFormState = {
	email: '',
	password: '',
	isEmailValid: true,
	isPasswordValid: true,
	isFormValid: true,
};

export default function LoginPage() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [loginForm, setLoginForm] = useState<LoginFormState>(initialLoginFormState);
	const navigate = useNavigate();

	useEffect(() => {
		return () => {
			// 컴포넌트가 언마운트될 때 상태 초기화
			setLoginForm(initialLoginFormState);
		};
	}, []);


	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const isEmailValid = emailValidation(email);
		const isPasswordValid = passwordValidation(password);
		const isFormValid = isEmailValid && isPasswordValid;
		if (isFormValid) {
			try {
				setLoginForm({
					email,
					password,
					isEmailValid,
					isPasswordValid,
					isFormValid,
				});
				const response: AxiosResponse<{ accessToken: string }> = await post(
					API_USER_LOGIN,
					{
						email,
						password
					},
					{ headers: { 'Content-Type ': 'application/json' } }
				);
				const accessToken: string = response.data.accessToken;
				setToken(accessToken);
				alert("환영해요 버니!")
				navigate("/");
			} catch (error: any) {
				if (error.response.data.fullError) {
					alert(error.response.data.fullError)
				}
				console.log('로그인 post 오류', error.response.data.fullError)
			}

		} else {
			// 유효하지 않은 입력에 대한 사용자 알림 등 추가 로직
			alert('입력 정보를 확인해주세요!')
		}
	};

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
					<BottomButton type='submit'>로그인</BottomButton>
					<BottomButton
						onClick={() => {
							{
								navigate('/register');
							}
						}}>
						회원가입
					</BottomButton>
				</ButtonWrap>
			</FormWrap>
		</Page>
	);
}