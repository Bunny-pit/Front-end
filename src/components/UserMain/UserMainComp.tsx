import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import plusIcon from '../../assets/icons/UserPlus_11zon.webp';
import FollowingIcon from '../../assets/icons/FollowingIcon_11zon.webp';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useUser } from '../../utils/swrFetcher';
import { PostType } from '../../types/postType';
import alertList from '../../utils/swal';
import Swal from 'sweetalert2';
import { mutate } from 'swr';
import { post } from '../../api/api';
import UserProfile from '../ProfileUpdateModal/ProfileUpdateModal';
import ImageWrapComp from './ImageWrapComponent/ImageWrapComp';

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
	OtherUserImage,
} from './style';

type ApiResponse = {
	message: string;
	followed: boolean;
};

const UserMainComp = () => {
	const [posts, setPosts] = useState<PostType[]>([]);
	const [postCount, setPostCount] = useState<number>(0);
	const [userName, setUserName] = useState<string>('');
	const [profileImage, setProfileImage] = useState<string>('');
	const [getEmail, setEmail] = useState<string>('');
	const [follower, setFollower] = useState<string>('');
	const [isFollowed, setIsFollowed] = useState<boolean>(false);
	const { userId } = useParams();
	const { userData } = useUser();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [introduction, setIntroduction] = useState<string>('');

	const location = useLocation();

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

	//-----------------팔로우 기능------------------
	const followToggle = async () => {
		try {
			getFollowings(userName);
			const response = await post<ApiResponse>(
				`${process.env.REACT_APP_API_URL}/api/user/toggleFollow`,
				{ followeeName: userId },
				getToken(),
			);
			mutate(
				`${process.env.REACT_APP_API_URL}/api/user/followers?userName=${userName}`,
			);
			if (!isFollowed) {
				await Swal.fire(alertList.successMessage('팔로우 하였습니다.'));
				setIsFollowed(response.data.followed);
			} else {
				await Swal.fire(alertList.infoMessage('팔로우를 취소하였습니다.'));
				setIsFollowed(response.data.followed);
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
	const getFollowings = useCallback(
		async (nickName: string | undefined) => {
			try {
				if (nickName !== undefined) {
					const response = await axios.get(
						`${process.env.REACT_APP_API_URL}/api/user/followings?userName=${nickName}`,
						getToken(),
					);
					const hasUserName = response.data.some(
						(user: any) => user === userName,
					);
					setIsFollowed(hasUserName);
				}
			} catch (error) {
				console.error('Error fetching getFollowers:', error);
			}
		},
		[userName],
	);
	const getToken = () => {
		const token = localStorage.getItem('accessToken');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		return config;
	};
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
				setIntroduction(userData?.introduction || '');
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
				setIntroduction(response.data.user[0].introduction || '');
			} catch (error) {
				console.error('Error fetching posts:', error);
			}
		};

		if (userId) {
			fetchOtherUserPosts();
		} else {
			fetchPosts();
		}
	}, [
		userId,
		follower,
		isFollowed,
		introduction,
		getFollowings,
		userData?.introduction,
		userData?.profileImg,
		userData?.userName,
	]);

	return (
		<>
			<Header />
			<Container>
				<Sec1>
					<ImageWrapComp
						currentName={userData?.userName || ''}
						userName={userName}
						profileImage={profileImage}></ImageWrapComp>

					<ProfileWrap>
						<Wrapper1>
							<UserId>{userName}</UserId>
							{userData?.userName === userName ? (
								<span></span>
							) : isFollowed ? (
								<PlusIcon src={FollowingIcon} onClick={followToggle} />
							) : (
								<PlusIcon src={plusIcon} onClick={followToggle} />
							)}
						</Wrapper1>

						{location.pathname === '/post' && (
							<Wrapper2>
								<PostButton>
									<Link to={`/post/upload`}>게시글 등록</Link>
								</PostButton>
								<EditButton>
									<Link to={'/user/edit'}>프로필 편집</Link>
								</EditButton>
							</Wrapper2>
						)}
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
								<ProfileLi>{introduction}</ProfileLi>
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

export default UserMainComp;
