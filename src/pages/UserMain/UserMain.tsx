import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import userImage from '../../assets/images/userimage.png';
import plusIcon from '../../assets/icons/UserPlus.png';
import { Link } from 'react-router-dom';
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
	PostUl,
	PostLi,
} from './UserMainStyle';

interface Post {
	_id: string;
	userId: string;
	profileImage: string;
	images: string[];
	content: string;
}
const backUrl = 'https://port-0-back-end-kvmh2mljxnw03c.sel4.cloudtype.app/api';

const UserMain = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	useEffect(() => {
		// MongoDB에서 데이터 가져오는 함수
		const fetchPosts = async () => {
			try {
				const response = await axios.get(`http://localhost:4000/api/post`);
				setPosts(response.data);
			} catch (error) {
				console.error('Error fetching posts:', error);
			}
		};

		fetchPosts();
	}, []);

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
					<PostUl>
						{posts.map((post, i) => (
							<PostLi key={post._id}>
								<Link className='link' to={`/post/${post._id}`}>
									{/* <p>{post.content}</p> */}
									<img key={i} src={post.images[0]} alt={`post ${i}`} />
								</Link>
							</PostLi>
						))}
					</PostUl>
				</PostContainer>
			</Container>
			<Footer />
		</>
	);
};

export default UserMain;
