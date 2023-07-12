import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import userImage from '../../assets/images/userimage.png';
import plusIcon from '../../assets/icons/UserPlus.png';
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
	PostContainer,
	PostTitle,
} from './UserMainStyle';

const UserMain = () => {
	const userdata = {
		userId: 'pretty_bunny_kim',
		postCount: 50,
		followerCount: 5000,
		email: 'prtty_bunny@naver.com',
	};

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
							<UserId>{userdata.userId}</UserId>
							<PlusIcon
								src={plusIcon}
								onClick={() => {
									alert('친구 추가하기 버튼!');
								}}
							/>
						</Wrapper1>
						<Wrapper2>
							<FriendButton
								onClick={() => {
									alert('친구초대하기');
								}}>
								친구초대하기
							</FriendButton>
							<EditButton
								onClick={() => {
									alert('프로필 편집하기');
								}}>
								프로필 편집
							</EditButton>
						</Wrapper2>
						<Wrapper3>
							<p>
								게시물 <span>{userdata.postCount}</span>
							</p>

							<p>
								나를 좋아하는 버니들 <span>{userdata.followerCount}</span>
							</p>
						</Wrapper3>
						<Wrapper4>
							<ProfileUl>
								<ProfileLi>#블랙덕후</ProfileLi>
								<ProfileLi>#개발자</ProfileLi>
								<ProfileLi>#소통</ProfileLi>
							</ProfileUl>
							<Email href='#'>{userdata.email}</Email>
						</Wrapper4>
					</ProfileWrap>
				</Sec1>
				<hr />
				<PostContainer>
					<PostTitle>게시물</PostTitle>
					<ul>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
					</ul>
				</PostContainer>
			</Container>
			<Footer />
		</>
	);
};

export default UserMain;
