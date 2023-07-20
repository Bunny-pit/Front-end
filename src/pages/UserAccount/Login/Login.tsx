import React, { useState } from 'react';
import MainLogo from '../../../assets/icons/MainLogo.png';
import { useNavigate } from 'react-router-dom';
import { emailValidation } from '../../../utils/registerValidation';
import { post } from '../../../api/api';
import { UserDataType } from '../../../types/dataType'
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

import {
  API_USER_REGISTER,
  API_USER_LOGIN,
  API_USER_LOGOUT,
  API_USER_EDIT,
  API_USER_DELETE
} from '../../../utils/constant'

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checkEmail, setCheckEmail] = useState<boolean>(true);
  const [checkPassword, setCheckPassword] = useState<boolean>(true);
  const [checkForm, setCheckForm] = useState<boolean>(true);
  const navigate = useNavigate();

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCheckEmail(true);

    if (email === '' || password === '') {
      return setCheckForm(false);
    } else if (!emailValidation(email)) {
      setCheckEmail(false)
      return setCheckForm(false)
    }
    setCheckForm(true);

    try {
      await post<UserDataType>('/api/user/login', {
        email,
        password,
      }, {
        withCredentials: true,
      })
    } catch (error) {
      console.log('로그인 post 오류', error)
    }
  }

  return (
    <Page>
      <TitleAndLogoWrap>
        <LogoWrap>
          <img src={MainLogo} alt="main-logo" style={{ marginTop: "10rem" }} />
        </LogoWrap>
        <TitleWrap>
          환영해요 버니!
        </TitleWrap>
      </TitleAndLogoWrap>
      <FormWrap onSubmit={handleSubmit}>
        <InputTitle>이메일</InputTitle>
        <InputWrap>
          <InputBar
            type="text"
            placeholder="jennaryu@naver.com"
            value={email}
            onChange={onChangeEmail}
          />
        </InputWrap>
        <InputTitle>비밀번호</InputTitle>
        <InputWrap>
          <InputBar
            type="password"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={password}
            onChange={onChangePassword}
          />
        </InputWrap>
        <ButtonWrap>
          <BottomButton type='submit'>로그인하기</BottomButton>
          <BottomButton onClick={() => { { navigate('/register'); } }}>회원가입하기</BottomButton>
        </ButtonWrap>

      </FormWrap>

    </Page>

  );
};


