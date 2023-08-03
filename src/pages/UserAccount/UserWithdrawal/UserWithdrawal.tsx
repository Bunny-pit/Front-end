import React, { useState, useCallback, useEffect } from 'react';
import {
    Page,
    TopButtonWrap,
    TopButton,
    // TitleAndLogoWrap,
    // TitleWrap,
    // LogoWrap,
    FormWrap,
    InputTitle,
    InputWrap,
    InputBar,
    ButtonWrap,
    BottomButton,
} from '../UserEdit/UserEditStyle';
import { onChangeInputSetter } from '../../../utils/inputStateSetter';
import { useNavigate } from 'react-router-dom';

export default function UserWithdrawalPage() {
    const [email, setEmail] = useState<string>('')
    const [prevPassword, setPrevPassword] = useState<string>('')
    const [prevPasswordCheck, setPrevPassWordCheck] = useState<string>('')
    const [formCheck, setFormCheck] = useState<boolean>(false)
    const navigate = useNavigate();

    if (prevPassword && (prevPassword === prevPasswordCheck)) {
        setFormCheck(true);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    return (
            <Page>
            <TopButtonWrap>
                <TopButton>
                    정보 수정
                </TopButton>
                <TopButton>
                    회원 탈퇴
                </TopButton>
            </TopButtonWrap>
            <InputTitle style={{textAlign:'center', margin : '4rem 0 1rem 0'}}>회원 탈퇴를 위해 정보를 입력해주세요</InputTitle>
            <FormWrap onSubmit={handleSubmit}>
                <InputTitle>이메일</InputTitle>
                <InputWrap>
                    <InputBar
                        type='text'
                        placeholder='bunnytalk@gmail.com'
                        value={email}
                        onChange={onChangeInputSetter(setEmail)}
                    />
                </InputWrap>
                <InputTitle>현재 비밀번호</InputTitle>
                <InputWrap>
                    <InputBar
                        type='password'
                        placeholder='********'
                        value={prevPassword}
                        onChange={onChangeInputSetter(setPrevPassword)}
                    />
                </InputWrap>
                <InputTitle>현재 비밀번호 확인</InputTitle>
                <InputWrap>
                    <InputBar
                        type='password'
                        placeholder='********'
                        value={prevPasswordCheck}
                        onChange={onChangeInputSetter(setPrevPassWordCheck)}
                    />
                </InputWrap>
                <ButtonWrap>
                    <BottomButton>돌아가기</BottomButton>
                    <BottomButton type='submit' style={formCheck ? { backgroundColor: '#E384FF' } : { backgroundColor: '#FFA3FD', opacity: 0.65 }}>계정탈퇴</BottomButton>
                </ButtonWrap>
            </FormWrap>
        </Page >
        
    )
}