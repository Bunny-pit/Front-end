import React from 'react';
import { Page, TitleAndLogoWrap, TitleWrap, LogoWrap, ContentWrap, InputTitle, InputWrap, InputBar, ErrorMessageWrap, BottomButton } from './LoginStyle';
import MainLogo from '../../assets/icons/MainLogo.png';


export default function LoginPage() {
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
      <ContentWrap>
        <InputTitle>이메일</InputTitle>
        <InputWrap>
          <InputBar type="text" placeholder="jennaryu@naver.com" />
        </InputWrap>
        <ErrorMessageWrap>올바른 이메일을 입력해주세요</ErrorMessageWrap>
        <InputTitle>비밀번호</InputTitle>
        <InputWrap>
          <InputBar type="password" placeholder="영문, 숫자, 특수문자 포함 8자 이상" />
        </InputWrap>
        <ErrorMessageWrap>영문, 숫자, 특수문자 포함 8자 이상을 입력해주세요</ErrorMessageWrap>
        <BottomButton>
          로그인하기
        </BottomButton>
        <BottomButton>
          회원가입하기
        </BottomButton>
      </ContentWrap>

    </Page>

  );
};


