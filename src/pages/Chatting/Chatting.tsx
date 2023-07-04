import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import {
  Container,
  DmContainer,
  ChattingContainer,
  Dmtitle,
  DmList,
  ProfileCard,
  ProfileImg,
  UserNickName,
} from './ChattingStyle';
import userimage from '../../assets/images/userimage.png';

const userProfile = [
  { username: 'cute_hyeon' },
  { username: 'navi_rabbit3' },
  { username: 'lets_drinkwine' },
  { username: 'cartoon_writer' },
  { username: 'cute_hansome_gang' },
];
const Chatting = () => {
  return (
    <>
      <Header />
      <Container>
        <DmContainer>
          <Dmtitle>다이렉트 메시지</Dmtitle>
          <DmList>
            {userProfile.map((userData) => (
              <ProfileCard>
                <ProfileImg src={userimage} alt="userimage" />
                <UserNickName>{userData.username}</UserNickName>
              </ProfileCard>
            ))}
          </DmList>
        </DmContainer>
        <ChattingContainer></ChattingContainer>
      </Container>
      <Footer />
    </>
  );
};
export default Chatting;
