import React, { useState } from 'react';
import {
	Container,
	TopButtonWrap,
	TopButton,
	FormWrap,
	InputTitle,
	InputWrap,
	InputBar,
	BottomButton,
} from '../EditDeleteAccountStyle';
import { onChangeInputSetter } from '../../../utils/inputStateSetter';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../../../api/token';
import { API_USER_DELETE } from '../../../utils/constant';
import { del, post } from '../../../api/api';
import { API_USER_LOGOUT } from '../../../utils/constant';
import { useUser } from '../../../utils/swrFetcher';
import alertList from '../../../utils/swal';
import Swal from 'sweetalert2';

const DeleteAccountContent = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [passwordCheck, setPasswordCheck] = useState<string>('');
	const { userData } = useUser();
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (email === '' || password === '' || !(password === passwordCheck)) {
			Swal.fire(alertList.errorMessage(`양식을 준수해주세요!`));
		} else if (userData?.email !== email) {
			Swal.fire(alertList.errorMessage(`계정 이메일이 일치하지 않습니다.`));
		}

		try {
			const withdrawalData = {
				email,
				password,
				passwordCheck,
			};
			await del(API_USER_DELETE, {
				withdrawalData,
				headers: { 'Content-Type': 'application/json' },
			});
			await post(API_USER_LOGOUT);
			removeToken('accessToken');
			removeToken('refreshToken');
			await Swal.fire(alertList.successMessage(`성공적으로 탈퇴 되었습니다.`));
			navigate('/');
		} catch (error) {
			await Swal.fire(
				alertList.errorMessage(`입력하신 유저 정보가 올바르지 않습니다. 
            다시 시도해주세요.`),
			);
			console.error(error);
		}
	};

	return (
		<Container>
			<TopButtonWrap>
				<TopButton
					onClick={() => {
						navigate('/user/edit');
					}}>
					정보 수정
				</TopButton>
				<TopButton style={{ borderBottom: 'none' }}>회원 탈퇴</TopButton>
			</TopButtonWrap>
			<InputTitle style={{ textAlign: 'center', margin: '4rem 0 1rem 0' }}>
				회원 탈퇴를 위해 정보를 입력해주세요
			</InputTitle>
			<FormWrap onSubmit={handleSubmit}>
				<InputTitle>이메일</InputTitle>
				<InputWrap>
					<InputBar
						type='text'
						placeholder='bunnytalk@gmail.com'
						value={email}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							onChangeInputSetter(setEmail)(e)
						}
					/>
				</InputWrap>
				<InputTitle>현재 비밀번호</InputTitle>
				<InputWrap>
					<InputBar
						type='password'
						placeholder='********'
						value={password}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							onChangeInputSetter(setPassword)(e)
						}
					/>
				</InputWrap>
				<InputTitle>현재 비밀번호 확인</InputTitle>
				<InputWrap>
					<InputBar
						type='password'
						placeholder='********'
						value={passwordCheck}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							onChangeInputSetter(setPasswordCheck)(e)
						}
					/>
				</InputWrap>
				<BottomButton type='submit'>계정탈퇴</BottomButton>
			</FormWrap>
			<BottomButton
				onClick={async () => {
					const result = await Swal.fire(
						alertList.doubleCheckMessage(`돌아가시겠어요?`),
					);
					if (result.isConfirmed) {
						navigate('/');
					}
				}}>
				홈으로
			</BottomButton>
		</Container>
	);
};

export default DeleteAccountContent;
