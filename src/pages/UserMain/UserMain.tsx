import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import userImage from "../../assets/images/userimage.png";
import plusIcon from "../../assets/icons/UserPlus.png";
import {
  Container,
  Sec1,
  UserImage,
  ImageWrap,
  ProfileWrap,
  Wrapper1,
  Wrapper2,
  Wrapper3,
  Wrapper4,
  FriendButton,
  EditButton,
  ProfileUl,
  ProfileLi,
  Email,
  UserId,
  PlusIcon,
} from "./UserMainStyle";

const UserMainPage = () => {
  let postCount = 50;
  let followerCount = 5000;
  return (
    <>
      <Header />
      <Container>
        <Sec1>
          <ImageWrap>
            <UserImage src={userImage}></UserImage>
          </ImageWrap>
          <ProfileWrap>
            <Wrapper1>
              <UserId>Pretty_bunny_kim</UserId>
              <PlusIcon
                src={plusIcon}
                onClick={() => {
                  alert("친구 추가하기 버튼!");
                }}
              />
            </Wrapper1>
            <Wrapper2>
              <FriendButton
                onClick={() => {
                  alert("친구초대하기");
                }}
              >
                친구초대하기
              </FriendButton>
              <EditButton
                onClick={() => {
                  alert("프로필 편집하기");
                }}
              >
                프로필 편집
              </EditButton>
            </Wrapper2>
            <Wrapper3>
              <span>게시물 {postCount}</span>

              <span>나를 좋아하는 버니들 {followerCount}</span>
            </Wrapper3>
            <Wrapper4>
              <ProfileUl>
                <ProfileLi>#블랙덕후</ProfileLi>
                <ProfileLi>#개발자</ProfileLi>
                <ProfileLi>#소통</ProfileLi>
              </ProfileUl>
              <Email href="#">pretty_bunny@naver.com</Email>
            </Wrapper4>
          </ProfileWrap>
        </Sec1>
        <hr />
        <div>
          <h3>게시물</h3>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default UserMainPage;
