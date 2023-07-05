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
import InputBar from '../../components/Input/InputBar';

const userProfile = [
  { username: 'cute_hyeon', id: 1 },
  { username: 'navi_rabbit3', id: 2 },
  { username: 'lets_drinkwine', id: 3 },
  { username: 'cartoon_writer', id: 4 },
  { username: 'cute_hansome_gang', id: 5 },
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
              <ProfileCard key={userData.id}>
                <ProfileImg src={userimage} alt="userimage" />
                <UserNickName>{userData.username}</UserNickName>
              </ProfileCard>
            ))}
          </DmList>
        </DmContainer>
        <ChattingContainer>
          <InputBar />
        </ChattingContainer>
      </Container>
      <Footer />
    </>
  );
};
export default Chatting;
