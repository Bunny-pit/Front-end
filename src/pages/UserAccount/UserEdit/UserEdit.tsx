import React, { useState, useMemo } from 'react';
import {
    Page,
    TopButtonWrap,
    TopButton,
    FormWrap,
    InputTitle,
    InputWrap,
    InputBar,
    ButtonWrap,
    BottomButton,
} from './UserEditStyle';
import { onChangeInputSetter } from '../../../utils/inputStateSetter';
import { useNavigate } from 'react-router-dom';
import { post, patch } from '../../../api/api';
import { API_USER_EDIT, API_USER_LOGOUT } from '../../../utils/constant';
import { useUser } from '../../../utils/swrFetcher';
import { removeToken } from '../../../api/token';
import alertList from '../../../utils/swal';
import Swal from 'sweetalert2';
import handleLogout from '../../../utils/logout';

export default function UserEditPage() {
    const [email, setEmail] = useState<string>('')
    const [prevPassword, setPrevPassword] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [newPasswordCheck, setNewPassWordCheck] = useState<string>('')
    const [formCheck, setFormCheck] = useState<boolean>(false)
    const { userData, isError } = useUser();
    const navigate = useNavigate();
    const formChecker = useMemo(() => {

    }, [formCheck])

    const handleLogout = async () => {
        try {
            await post(API_USER_LOGOUT)
            removeToken('accessToken');
            removeToken('refreshToken');
            Swal.fire(alertList.successMessage(`로그아웃 성공! 

                홈 페이지로 이동합니다.

                `))
                navigate('/');
        } catch (error) {
            console.error(error)
        }
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (prevPassword && (newPassword === newPasswordCheck)) {
            setFormCheck(true);
        } else {
            setFormCheck(false);
        }

        if (userData?.email === email) {
            try {
                await patch(API_USER_EDIT, {
                    email,
                    prevPassword,
                    newPassword,
                    newPasswordCheck
                },
                    { headers: { 'Content-Type': 'application/json' } }
                );
            } catch (error: any) {
                console.error(error)
                console.log('유저 데이터 변경 submit 오류')
            }
        }
    }

    return (
        <Page>
            <TopButtonWrap>
                <TopButton style={{ borderBottom: 'none' }}>
                    정보 수정
                </TopButton>
                <TopButton onClick={() => { navigate('/user/withdrawal') }}>
                    회원 탈퇴
                </TopButton>
            </TopButtonWrap>
            <FormWrap onSubmit={(e: React.FormEvent<HTMLFormElement>) => { handleSubmit(e) }}>
                <InputTitle>이메일</InputTitle>
                <InputWrap>
                    <InputBar
                        type='text'
                        placeholder='jennaryu1234@gmail.com'
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInputSetter(setEmail)(e)}
                    />
                </InputWrap>
                <InputTitle>현재 비밀번호</InputTitle>
                <InputWrap>
                    <InputBar
                        type='password'
                        placeholder='********'
                        value={prevPassword}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInputSetter(setPrevPassword)(e)}
                    />
                </InputWrap>
                <InputTitle>새 비밀번호</InputTitle>
                <InputWrap>
                    <InputBar
                        type='password'
                        placeholder='********'
                        value={newPassword}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInputSetter(setNewPassword)(e)}
                    />
                </InputWrap>
                <InputTitle>새 비밀번호 확인</InputTitle>
                <InputWrap>
                    <InputBar
                        type='password'
                        placeholder='********'
                        value={newPasswordCheck}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInputSetter(setNewPassWordCheck)(e)}
                    />
                </InputWrap>

                <ButtonWrap>
                    <BottomButton onClick={() => { handleLogout() }}>로그아웃</BottomButton>
                    <BottomButton type='submit'>수정완료</BottomButton>
                </ButtonWrap>
            </FormWrap>
        </Page >

    )
}