import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import userImage from '../../assets/images/userimage.png';
import plusIcon from '../../assets/icons/UserPlus.png';
import { Link, useParams } from 'react-router-dom';
import { useUser } from '../../utils/swrFetcher';
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
	NothingWrap,
	NothingPost,
	PostButton,
} from './UserMainStyle';

interface Post {
	_id: string;
	userId: string;
	profileImage: string;
	images: string[];
	content: string;
	createdAt: Date;
}

const UserMain = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [postCount, setPostCount] = useState(0);
	const [userName, setUserName] = useState('');
	const { email } = useParams();
	const { userData, isError } = useUser();

	if (isError) {
		console.log('유저 데이터를 불러오는데 실패했습니다.');
	} else if (!userData) {
		console.log('유저 데이터를 불러오는 중...');
	}
	console.log('userData!!!!!!!', userData?._id);
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const token = localStorage.getItem('accessToken');
				const config = {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				};
				const response = await axios.get(
					`http://localhost:4000/api/post`,
					config,
				);
				setPosts(response.data.posts);
				setUserName(response.data.userName);
				setPostCount(response.data.length);
			} catch (error) {
				console.error('Error fetching posts:', error);
			}
		};

		const fetchOtherUserPosts = async () => {
			try {
				const token = localStorage.getItem('accessToken');
				const config = {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				};
				const response = await axios.get(
					`http://localhost:4000/api/post/user/${email}`,
					config,
				);
				setPosts(response.data.posts);
				setUserName(response.data.user);
				setPostCount(response.data.length);
			} catch (error) {
				console.error('Error fetching posts:', error);
			}
		};

		if (email) {
			fetchOtherUserPosts();
		} else {
			fetchPosts();
		}
	}, [email]);

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
							<UserId>{userName}</UserId>
							<PlusIcon
								src={plusIcon}
								onClick={() => {
									alert('친구 추가하기 버튼!');
								}}
							/>
							<FriendButton
								onClick={() => {
									alert('친구초대하기');
								}}>
								친구초대하기
							</FriendButton>
						</Wrapper1>
						<Wrapper2>
							<PostButton>
								<Link to={`/post/upload`}>게시글 등록</Link>
							</PostButton>
							<EditButton
								onClick={() => {
									alert('프로필 편집하기');
								}}>
								프로필 편집
							</EditButton>
						</Wrapper2>
						<Wrapper3>
							<p>
								게시물 <span>{postCount}</span>
							</p>

							<p>
								나를 좋아하는 버니들 <span>0</span>
							</p>
						</Wrapper3>
						<Wrapper4>
							<ProfileUl>
								<ProfileLi>#블랙덕후</ProfileLi>
								<ProfileLi>#개발자</ProfileLi>
								<ProfileLi>#소통</ProfileLi>
							</ProfileUl>
							<Email href='#'>{userData?.email}</Email>
						</Wrapper4>
					</ProfileWrap>
				</Sec1>
				<hr />
				<PostContainer>
					<PostTitle>게시물</PostTitle>
					<PostUl>
						{posts.length > 0 ? (
							posts.map((post: Post, i: number) => (
								<PostLi key={post._id}>
									<Link className='link' to={`/post/${post._id}`}>
										<img key={i} src={post.images[0]} alt={`post ${i}`} />
									</Link>
								</PostLi>
							))
						) : (
							<NothingWrap>
								<NothingPost>게시글이 없습니다</NothingPost>
							</NothingWrap>
						)}
					</PostUl>
				</PostContainer>
			</Container>
			<Footer />
		</>
	);
};

export default UserMain;
