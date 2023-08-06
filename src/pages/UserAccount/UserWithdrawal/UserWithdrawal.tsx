import React, { useState, useCallback, useEffect } from 'react';
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
} from '../UserEdit/UserEditStyle';
import { onChangeInputSetter } from '../../../utils/inputStateSetter';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../../../api/token';
import { API_USER_DELETE} from '../../../utils/constant';
import {  del } from '../../../api/api';

export default function UserWithdrawalPage() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordCheck, setPasswordCheck] = useState<string>('')
    const [formCheck, setFormCheck] = useState<boolean>(false)
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password && (password === passwordCheck)) {
            setFormCheck(true);
        }
        try {
            const userData = {
                email,
                password,
                passwordCheck
            }
            await del(API_USER_DELETE, {
                userData,
                headers: { 'Content-Type': 'application/json' },
            })
            removeToken();
            alert('성공적으로 탈퇴 되었습니다.')
            navigate('/');
        } catch (error) {

        }
    }

    return (
        <Page>
            <TopButtonWrap>
                <TopButton onClick={() => { navigate('/user/edit') }}>
                    정보 수정
                </TopButton>
                <TopButton>
                    회원 탈퇴
                </TopButton>
            </TopButtonWrap>
            <InputTitle style={{ textAlign: 'center', margin: '4rem 0 1rem 0' }}>회원 탈퇴를 위해 정보를 입력해주세요</InputTitle>
            <FormWrap onSubmit={handleSubmit}>
                <InputTitle>이메일</InputTitle>
                <InputWrap>
                    <InputBar
                        type='text'
                        placeholder='bunnytalk@gmail.com'
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInputSetter(setEmail)(e)}
                    />
                </InputWrap>
                <InputTitle>현재 비밀번호</InputTitle>
                <InputWrap>
                    <InputBar
                        type='password'
                        placeholder='********'
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInputSetter(setPassword)(e)}
                    />
                </InputWrap>
                <InputTitle>현재 비밀번호 확인</InputTitle>
                <InputWrap>
                    <InputBar
                        type='password'
                        placeholder='********'
                        value={passwordCheck}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInputSetter(setPasswordCheck)(e)}
                    />
                </InputWrap>
                <ButtonWrap>
                    <BottomButton onClick={() => { navigate('/') }}>돌아가기</BottomButton>
                    <BottomButton type='submit' style={formCheck ? { backgroundColor: '#E384FF' } : { backgroundColor: '#FFA3FD', opacity: 0.65 }}>계정탈퇴</BottomButton>
                </ButtonWrap>
            </FormWrap>
        </Page >

    )
}