import React, { useState, useEffect } from 'react';
import BunnyTalkTitle from '../../../assets/icons/BunnyTalkTitle.png';
import BunnyTalkLogo from '../../../assets/icons/BunnyTalkLogo.png';
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
import alertList from '../../../utils/swal';
import Swal from 'sweetalert2';

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
				const response: AxiosResponse<{ accessToken: string, refreshToken: string }> = await post(
					API_USER_LOGIN,
					{
						email,
						password
					},
					{ headers: { 'Content-Type': 'application/json' } }
				);

				const accessToken: string = response.data.accessToken;
				const refreshToken: string = response.data.refreshToken;

				setToken('accessToken', accessToken);
				setToken('refreshToken', refreshToken);
				await Swal.fire(alertList.successMessage(`환영해요 버니!`))
				navigate("/post");
			} catch (error: any) {
				if (error.response.data.fullError) {
					await Swal.fire(alertList.errorMessage(error.response.data.fullError))
				}
				console.log('로그인 post 오류', error.response.data.fullError)
			}

		} else {
			// 유효하지 않은 입력에 대한 사용자 알림 등 추가 로직
			await Swal.fire(alertList.errorMessage(`입력 정보를 확인해주세요!`))
		}
	};

	return (
		<Page>
			<TitleAndLogoWrap>
				<LogoWrap>
					<img src={BunnyTalkLogo} alt="logo" />
					<img src={BunnyTalkTitle} alt="title" />
				</LogoWrap>
				<TitleWrap>환영해요 버니!</TitleWrap>
			</TitleAndLogoWrap>
			<FormWrap onSubmit={handleSubmit}>
				<InputTitle>이메일</InputTitle>
				<InputWrap>
					<InputBar
						type='text'
						placeholder="bunny001@email.com"
						value={email}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInputSetter(setEmail)(e)}
					/>
				</InputWrap>
				<InputTitle>비밀번호</InputTitle>
				<InputWrap>
					<InputBar
						type='password'
						placeholder='영문, 숫자, 특수문자 포함 8자 이상'
						value={password}
						minLength={8}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInputSetter(setPassword)(e)}
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