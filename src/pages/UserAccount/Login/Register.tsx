import React, { useState } from 'react';
import BunnyTalkTitle from '../../../assets/icons/BunnyTalkTitle.png';
import BunnyTalkLogo from '../../../assets/icons/BunnyTalkLogo.png';
import { useNavigate } from 'react-router-dom';
import { post } from '../../../api/api';
import {
    emailValidation,
    passwordValidation,
    userNameValidation
} from '../../../utils/registerValidation';
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
import alertList from '../../../utils/swal';
import Swal from 'sweetalert2';


export default function RegisterPage() {
    const [userName, setUserName] = useState<string>('')
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [checkPassword, setCheckPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (userName === '' || email === '' || password === '') {
            await Swal.fire(alertList.errorMessage(`회원가입 양식을 준수해주세요!`))
            return;
        }

        try {
            if (password !== checkPassword) {
                // 비밀번호 불일치 알림창
                console.log('패스워드 불일치')
                await Swal.fire(alertList.errorMessage(`패스워드가 불일치합니다!`))
            } else if (
                emailValidation(email) &&
                passwordValidation(password) &&
                userNameValidation(userName)
            ) {
                const response = await post(
                    API_USER_REGISTER,
                    {
                        userName,
                        email,
                        password
                    },
                    { headers: { 'Content-Type ': 'application/json' } }
                );
                if (response) {
                    await Swal.fire(alertList.infoMessage(`회원가입 성공! 
                
                    로그인 페이지로 이동합니다.
    
                    `))
                    // navigate('/login');
                } 
            }
        } catch (error: any) {
            await Swal.fire(alertList.errorMessage(error.response.data.error))
            console.log('회원가입 post 오류:', error.response.data.error)
            // console.error(error.response.data.error)
        }

    }
    return (
        <Page>
            <TitleAndLogoWrap>

                <TitleWrap>
                    회원가입
                </TitleWrap>
            </TitleAndLogoWrap>
            <FormWrap onSubmit={handleSubmit}>
                <InputTitle>닉네임</InputTitle>
                <InputWrap>
                    <InputBar
                        type="text"
                        placeholder="2 ~ 8 글자의 개성있는 이름을 지어보세요!"
                        value={userName}
                        onChange={onChangeInputSetter(setUserName)}
                        maxLength={8}
                    />
                </InputWrap>
                <div style={{ color: '#f05650', fontSize: '12px' }}>*닉네임은 한 번 결정되면 바꿀 수 없습니다. 신중하게 선택해주세요.</div>
                <InputTitle>이메일</InputTitle>
                <InputWrap>
                    <InputBar
                        type="text"
                        placeholder="bunny001@email.com"
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
                        minLength={8}
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
                    }}>로그인</BottomButton>
                </ButtonWrap>

            </FormWrap>

        </Page>
    );
}