import React, { useState } from 'react';
import MainLogo from '../../../assets/icons/MainLogo.png';
import { useNavigate } from 'react-router-dom';
import { post } from '../../../api/api';
import { UserDataType } from '../../../types/dataType';
import {
    emailValidation,
    passwordValidation,
    userNameValidation
} from '../../../utils/registerValidation';
import { AxiosResponse } from 'axios';
import { API_USER_REGISTER } from '../../../utils/constant';
import { onChangeInputSetter } from '../../../utils/inputStateSetter';
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


export default function RegisterPage() {
    const [userName, setUserName] = useState<string>('')
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [checkPassword, setCheckPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (password !== checkPassword) {
                // 비밀번호 불일치 알림창
                console.log('패스워드 불일치')
                alert('패스워드 불일치')
            } else if (
                emailValidation(email) &&
                passwordValidation(password) &&
                userNameValidation(userName)
            ) {
                await post(
                    API_USER_REGISTER,
                    {
                        userName,
                        email,
                        password
                    },
                    { headers: { 'Content-Type ': 'application/json' } }
                );
                alert("회원가입에 성공했습니다. 메인 페이지로 이동합니다!");
                navigate('/login');
            }
        } catch (error: any) {
            console.log('회원가입 post 오류', error.response.data.error)
            // console.error(error.response.data.error)
        }

    }
    return (
        <Page>
            <TitleAndLogoWrap>
                <LogoWrap>
                    <img src={MainLogo} alt="main-logo" />
                </LogoWrap>
                <TitleWrap>
                    회원가입
                </TitleWrap>
            </TitleAndLogoWrap>
            <FormWrap onSubmit={(e: React.FormEvent<HTMLFormElement>) => { handleSubmit(e) }}>
                <InputTitle>이름</InputTitle>
                <InputWrap>
                    <InputBar
                        type="text"
                        placeholder="엄준식"
                        value={userName}
                        onChange={onChangeInputSetter(setUserName)}
                    />
                </InputWrap>
                {/* <InputTitle>닉네임</InputTitle>
                <InputWrap>
                    <InputBar
                        type="text"
                        placeholder="엄마가준비한식사"
                        value={userName}
                        onChange={onChangeInputSetter(setUserName)}
                    />
                </InputWrap> */}
                <InputTitle>이메일</InputTitle>
                <InputWrap>
                    <InputBar
                        type="text"
                        placeholder="jennaryu@naver.com"
                        value={email}
                        onChange={onChangeInputSetter(setEmail)}
                    />
                </InputWrap>
                <InputTitle>비밀번호</InputTitle>
                <InputWrap>
                    <InputBar
                        type="password"
                        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                        value={password}
                        onChange={onChangeInputSetter(setPassword)}
                    />
                </InputWrap>
                <InputTitle>비밀번호 확인</InputTitle>
                <InputWrap>
                    <InputBar
                        type="password"
                        placeholder="위에서 입력한 비밀번호를 다시 입력해주세요"
                        value={checkPassword}
                        onChange={onChangeInputSetter(setCheckPassword)}
                    />
                </InputWrap>

                <ButtonWrap>
                    <BottomButton type='submit'>회원가입완료</BottomButton>
                    <BottomButton onClick={() => {
                        {
                            navigate('/login');
                        }
                    }}>로그인 페이지로</BottomButton>
                </ButtonWrap>

            </FormWrap>

        </Page>
    );
}