import React, { useState } from 'react';
import MainLogo from '../../../assets/icons/MainLogo.png';
import { useNavigate } from 'react-router-dom';

import {
  Page,
  TitleAndLogoWrap,
  TitleWrap,
  LogoWrap,
  FormWrap,
  InputTitle,
  InputWrap,
  EmailInput,
  PasswordInput,
  ErrorMessageWrap,
  BottomButton
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
      <FormWrap>
        <InputTitle>이메일</InputTitle>
        <InputWrap>
          <EmailInput
            type="text"
            placeholder="jennaryu@naver.com"
            value={email}
          />
        </InputWrap>
        {!checkForm ? ('') : (<ErrorMessageWrap>올바른 이메일을 입력해주세요</ErrorMessageWrap>)}
        <InputTitle>비밀번호</InputTitle>
        <InputWrap>
          <PasswordInput
            type="password"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={password}
          />
        </InputWrap>
        {!checkForm ? '' : <ErrorMessageWrap>영문, 숫자, 특수문자 포함 8자 이상을 입력해주세요</ErrorMessageWrap>}
        <BottomButton type='submit'>로그인하기</BottomButton>
        {/* register로 이동하게 로직 수정 필요 */}
        {/* <BottomButton to='/api/user/register'>회원가입하기</BottomButton>
         */}
      </FormWrap>

    </Page>

  );
};


