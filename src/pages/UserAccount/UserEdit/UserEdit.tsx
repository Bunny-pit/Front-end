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
} from './UserEditStyle';
import { onChangeInputSetter } from '../../../utils/inputStateSetter';

export default function UserEditPage() {
    const [userName, setUserName] = useState<string>('')
    const [prevPassword, setPrevPassword] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [newPasswordCheck, setNewPassWordCheck] = useState<string>('')
    const [formCheck, setFormCheck] = useState<boolean>(false)

    if (prevPassword && (newPassword === newPasswordCheck)) {
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
            <FormWrap onSubmit={handleSubmit}>
                <InputTitle>이름</InputTitle>
                <InputWrap>
                    <InputBar
                        type='text'
                        placeholder='엄준식'
                        value={userName}
                        onChange={onChangeInputSetter(setUserName)}
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
                <InputTitle>새 비밀번호</InputTitle>
                <InputWrap>
                    <InputBar
                        type='password'
                        placeholder='********'
                        value={newPassword}
                        onChange={onChangeInputSetter(setNewPassword)}
                    />
                </InputWrap>
                <InputTitle>새 비밀번호 확인</InputTitle>
                <InputWrap>
                    <InputBar
                        type='password'
                        placeholder='********'
                        value={newPasswordCheck}
                        onChange={onChangeInputSetter(setNewPassWordCheck)}
                    />
                </InputWrap>
                <ButtonWrap>
                    <BottomButton>로그아웃</BottomButton>
                    <BottomButton type='submit' style={formCheck ? { backgroundColor: '#E384FF' } : { backgroundColor: '#FFA3FD', opacity: 0.65 }}>수정완료</BottomButton>
                </ButtonWrap>
            </FormWrap>
        </Page >
        
    )
}