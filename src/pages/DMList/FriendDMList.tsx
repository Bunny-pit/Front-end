import {
	MemberList,
	Nickname,
	TopContainer,
	Profile,
	Exiticon,
} from './DMListStyle';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useUser, fetcher } from '../../utils/swrFetcher';
import { del } from '../../api/api';
import { DmListType } from '../../types/chatType';
import deleteicon from '../../assets/icons/DeleteIcon_11zon.webp';
import alertList from '../../utils/swal';
import Swal from 'sweetalert2';
import useSWR, { mutate } from 'swr';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useState } from 'react';

const FriendDMList = () => {
	const [filteredDmList, setFilteredDmList] = useState<DmListType[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>('');
	const { userData, isError } = useUser();

	if (isError) {
		console.log('유저 데이터를 불러오는데 실패했습니다.');
	}

	const userId = userData?._id;
	const { data: dmList, error } = useSWR<DmListType[]>(
		`${process.env.REACT_APP_API_URL}/api/chat/friend/${userId}`,
		fetcher,
	);

	useEffect(() => {
		if (error) {
			console.error('Error saveDMList:', error);
		}
	}, [error]);

	const exitChattingRoom = async (chatId: string) => {
		const result = await Swal.fire(
			alertList.doubleCheckTitkeMsg(
				'채팅방을 나가시겠습니까?',
				'채팅방을 나가면 친구의 대화목록에서도 채팅방이 삭제됩니다.',
			),
		);
		if (result.isConfirmed) {
			await del<DmListType[]>(`/api/chat/friend/${chatId}`);
			mutate(`${process.env.REACT_APP_API_URL}/api/chat/friend/${userId}`);
			mutate(
				`${process.env.REACT_APP_API_URL}/api/chat/${chatId}/friend/messages`,
			);
		}
	};
	useEffect(() => {
		if (dmList) {
			const filteredList = dmList.filter((chatRoom: DmListType) => {
				const otherUser = chatRoom.users.find((user) => user._id !== userId);
				if (otherUser) {
					return (
						otherUser.userName !== undefined &&
						otherUser.userName.includes(searchQuery)
					);
				}
				return false;
			});
			setFilteredDmList(filteredList);
		}
	}, [dmList, searchQuery, userId]);
	const handleSearch = (query: string) => {
		setSearchQuery(query);
	};

	return (
		<>
			<TopContainer>
				<SearchBar onSearch={handleSearch}></SearchBar>
			</TopContainer>
			<MemberList>
				{filteredDmList?.map((chatRoom: DmListType) => {
					const otherUser = chatRoom.users.find((user) => user._id !== userId);
					if (otherUser) {
						const otherUserName = otherUser.userName;
						const profile = otherUser.profileImg;

						return (
							<NavLink
								key={chatRoom._id}
								to={`friendchatting/dm/${chatRoom._id}`}
								style={{ textDecoration: 'none' }}>
								{profile && <Profile src={profile} alt={otherUserName} />}
								<Nickname>{otherUserName}</Nickname>
								<Exiticon
									src={deleteicon}
									alt='x-icon'
									onClick={() => exitChattingRoom(chatRoom._id)}></Exiticon>
							</NavLink>
						);
					}
					return null;
				})}
			</MemberList>
		</>
	);
};

export default FriendDMList;
