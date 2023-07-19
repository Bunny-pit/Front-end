import React, { useState } from 'react';
import MainLogo from '../../../assets/icons/MainLogo.png';

import { useNavigate } from 'react-router-dom';
import { post } from '../../../api/api';
import { DataType } from '../../../types/dataType';
import { 
    emailValidation, 
    passwordValidation, 
    nickNameValidation
} from '../../../utils/registerValidation';
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
} from '../Login/LoginStyle';


export default function RegisterPage() {
    const [name, setName] = useState<string>('')
    const [nickName, setNickName] = useState<string>('')
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [checkPassword, setCheckPassword] = useState<string>('');


    const navigate = useNavigate();

    const onChangeSetter =
        (setter: React.Dispatch<React.SetStateAction<string>>) =>
            (e: React.ChangeEvent<HTMLInputElement>) => {
                setter(e.target.value);
            };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (password !== checkPassword) {
            // 비밀번호 불일치 알림창
            alert('제출한 두 비밀번호가 일치하지 않습니다.')
        } else if (
            emailValidation(email) &&
            passwordValidation(password) &&
            nickNameValidation(nickName)
        ) {
            await post<DataType>('/api/user/register', {
                name,
                nickName,
                email,
                password
            });
            navigate('/login');
            // 로그인해달라는 알림창
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
            <FormWrap onSubmit={handleSubmit}>
                <InputTitle>이름</InputTitle>
                <InputWrap>
                    <InputBar
                        type="text"
                        placeholder="엄준식"
                        value={name}
                        onChange={onChangeSetter(setName)}
                    />
                </InputWrap>
                <InputTitle>닉네임</InputTitle>
                <InputWrap>
                    <InputBar
                        type="text"
                        placeholder="엄마가준비한식사"
                        value={nickName}
                        onChange={onChangeSetter(setNickName)}
                    />
                </InputWrap>
                <InputTitle>이메일</InputTitle>
                <InputWrap>
                    <InputBar
                        type="text"
                        placeholder="jennaryu@naver.com"
                        value={email}
                        onChange={onChangeSetter(setEmail)}
                    />
                </InputWrap>
                <InputTitle>비밀번호</InputTitle>
                <InputWrap>
                    <InputBar
                        type="password"
                        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                        value={password}
                        onChange={onChangeSetter(setPassword)}
                    />
                </InputWrap>
                <InputTitle>비밀번호 확인</InputTitle>
                <InputWrap>
                    <InputBar
                        type="password"
                        placeholder="위에서 입력한 비밀번호를 다시 입력해주세요"
                        value={password}
                        onChange={onChangeSetter(setCheckPassword)}
                    />
                </InputWrap>

                <ButtonWrap>
                    <BottomButton type='submit' onClick={() => { navigate('/') }}>회원가입완료</BottomButton>
                </ButtonWrap>

            </FormWrap>

        </Page>
    );
}