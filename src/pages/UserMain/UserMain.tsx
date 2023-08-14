import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import userImage from '../../assets/images/userimage.png';
import plusIcon from '../../assets/icons/UserPlus.png';
import FollowingIcon from '../../assets/icons/FollowingIcon.png';
import { Link, useParams } from 'react-router-dom';
import { useUser } from '../../utils/swrFetcher';
import { PostType } from '../../types/postType';
import alertList from '../../utils/swal';
import Swal from 'sweetalert2';
import useSWR, { mutate } from 'swr';
import { post } from '../../api/api';
import UserProfile from '../../components/ProfileUpdateModal/ProfileUpdateModal';
import Modal from 'react-modal';
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
	PostUlEmpty,
} from './UserMainStyle';

type ApiResponse = {
	message: string;
	followed: boolean;
};

const UserMain = () => {
	const [posts, setPosts] = useState<PostType[]>([]);
	const [postCount, setPostCount] = useState(0);
	const [userName, setUserName] = useState('');
	const [profileImage, setProfileImage] = useState('');
	const [getEmail, setEmail] = useState('');
	const [follower, setFollower] = useState('');
	const [following, setFollowing] = useState('');
	const [isFollowed, setIsFollowed] = useState(false);
	const { userId } = useParams();
	const { userData, isError } = useUser();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleModalClose = () => {
		if (window.confirm('이미지 수정을 취소하시겠습니까?')) {
			closeModal();
		}
	};

	if (isError) {
		console.log('유저 데이터를 불러오는데 실패했습니다.');
	} else if (!userData) {
		console.log('유저 데이터를 불러오는 중...');
	}

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
					`${process.env.REACT_APP_API_URL}/api/post`,
					config,
				);
				setPosts(response.data.posts);
				setUserName(response.data.userName);
				setProfileImage(userData?.profileImg || '');
				setPostCount(response.data.posts.length);
				getFollowers(response.data.userName);
				getFollowings(userData?.userName);
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
					`${process.env.REACT_APP_API_URL}/api/post/user/${userId}`,
					config,
				);

				setPosts(response.data.posts);
				setUserName(response.data.user[0].userName);
				setPostCount(response.data.posts.length);
				setEmail(response.data.user[0].email);
				setProfileImage(response.data.user[0].profileImg);
				getFollowers(response.data.user[0].userName);
				getFollowings(userData?.userName);
			} catch (error) {
				console.error('Error fetching posts:', error);
			}
		};

		if (userId) {
			fetchOtherUserPosts();
		} else {
			fetchPosts();
		}
	}, [userId, follower]);
	//-----------------팔로우 기능------------------
	const followToggle = async () => {
		try {
			getFollowings(userName);
			const response = await post<ApiResponse>(
				`${process.env.REACT_APP_API_URL}/api/user/toggleFollow`,
				{ followeeName: userId },
				getToken(),
			);
			setIsFollowed(response.data.followed);
			mutate(`${process.env.REACT_APP_API_URL}/api/user/followings`);
			if (!isFollowed) {
				await Swal.fire(alertList.successMessage('팔로우 하였습니다.'));
			} else {
				await Swal.fire(alertList.infoMessage('팔로우를 취소하였습니다.'));
			}
		} catch (error) {
			console.error('Error updating follow:', error);
			await Swal.fire(alertList.errorMessage('팔로우 실패하였습니다.'));
		}
	};
	//--------------------팔로워 가져오기------------------
	const getFollowers = async (userName: string) => {
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_API_URL}/api/user/followers?userName=${userName}`,
			);
			setFollower(response.data.length);
		} catch (error) {
			console.error('Error fetching getFollowers:', error);
		}
	};
	//--------------------팔로잉 가져오기------------------
	const getFollowings = async (nickName: string | undefined) => {
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_API_URL}/api/user/followings?userName=${nickName}`,
			);
			setFollowing(response.data);
			const hasUserName = response.data.some((user: any) => user === userName);
			setIsFollowed(hasUserName);
		} catch (error) {
			console.error('Error fetching getFollowers:', error);
		}
	};
	const getToken = () => {
		const token = localStorage.getItem('accessToken');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		return config;
	};
	return (
		<>
			<Header />
			<Container>
				<Sec1>
					<ImageWrap>
						<UserImage src={profileImage} onClick={openModal}></UserImage>
						{userData?.userName == userName ? (
							<UserProfile
								isModalOpen={isModalOpen}
								closeModal={closeModal}
								handleModalClose={handleModalClose}
							/>
						) : (
							<span></span>
						)}
					</ImageWrap>
					<ProfileWrap>
						<Wrapper1>
							<UserId>{userName}</UserId>
							{isFollowed ? (
								<PlusIcon src={FollowingIcon} onClick={followToggle} />
							) : (
								<PlusIcon src={plusIcon} onClick={followToggle} />
							)}
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
							<EditButton>
								<Link to={'/user/edit'}>프로필 편집</Link>
							</EditButton>
						</Wrapper2>
						<Wrapper3>
							<p>
								게시물 <span>{postCount}</span>
							</p>

							<p>
								나를 좋아하는 버니들 <span>{follower ? follower : 0}</span>
							</p>
						</Wrapper3>
						<Wrapper4>
							<ProfileUl>
								<ProfileLi>#블랙덕후</ProfileLi>
								<ProfileLi>#개발자</ProfileLi>
								<ProfileLi>#소통</ProfileLi>
							</ProfileUl>
							<Email href='#'>{userId ? getEmail : userData?.email}</Email>
						</Wrapper4>
					</ProfileWrap>
				</Sec1>
				<hr />
				<PostContainer>
					<PostTitle>게시물</PostTitle>
					{posts.length > 0 ? (
						<PostUl>
							{posts.map((post: PostType, i: number) => (
								<PostLi key={post._id}>
									<Link className='link' to={`/post/${post._id}`}>
										<img key={i} src={post.images[0]} alt={`post ${i}`} />
									</Link>
								</PostLi>
							))}
						</PostUl>
					) : (
						<PostUlEmpty>
							<NothingWrap>
								<NothingPost>게시글이 없습니다</NothingPost>
							</NothingWrap>
						</PostUlEmpty>
					)}
				</PostContainer>
			</Container>
			<Footer />
		</>
	);
};

export default UserMain;
