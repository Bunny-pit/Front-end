import {
	CollapseButton,
	MemberList,
	Nickname,
	TopContainer,
	Profile,
	Exiticon,
} from './DMListStyle';
import { useState, useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import toggleBtn from '../../assets/icons/downarrow.png';
import gravatar from 'gravatar';
import { useUser, fetcher } from '../../utils/swrFetcher';
import { del } from '../../api/api';
import { DmListType } from '../../types/chatType';
import deleteicon from '../../assets/icons/DeleteIcon.png';
import alertList from '../../utils/swal';
import Swal from 'sweetalert2';
import useSWR, { mutate } from 'swr';

const DMList = () => {
	const { userData, isError } = useUser();

	if (isError) {
		console.log('유저 데이터를 불러오는데 실패했습니다.');
	} else if (!userData) {
		console.log('유저 데이터를 불러오는 중...');
	}

	const userId = userData?.user?._id;

	const [channelCollapse, setChannelCollapse] = useState(false);
	const { data: dmList, error } = useSWR<DmListType[]>(
		`http://localhost:3000/api/chat/${userId}`,
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
				'채팅방을 나가면 대화 내용은 복구할 수 없습니다.',
			),
		);
		if (result.isConfirmed) {
			await del<DmListType[]>(`/api/chat/${chatId}`);
			mutate(`http://localhost:3000/api/chat/${userId}`);
			mutate(`http://localhost:3000/api/chat/${chatId}/messages`);
		}
	};

	const toggleChannelCollapse = useCallback(() => {
		setChannelCollapse((prev) => !prev);
	}, []);

	return (
		<>
			<TopContainer>
				<CollapseButton
					collapse={channelCollapse ? 'true' : 'false'}
					onClick={toggleChannelCollapse}
					src={toggleBtn}
					alt='toggle-button'></CollapseButton>
				<span>bunnies</span>
			</TopContainer>
			<MemberList>
				{!channelCollapse &&
					dmList?.map((chatRoom: DmListType) => {
						const otherUser = chatRoom.users.find(
							(user) => user._id !== userId,
						);
						if (otherUser) {
							const otherUserEmail = otherUser.email;
							const otherUserName = otherUser.secretName;
							const profileSrc = otherUserEmail
								? gravatar.url(otherUserEmail, {
										s: '24px',
										d: 'identicon',
								  })
								: undefined;

							return (
								<NavLink key={chatRoom._id} to={`/chatting/dm/${chatRoom._id}`}>
									{profileSrc && (
										<Profile src={profileSrc} alt={otherUserName} />
									)}
									<Nickname>{otherUserName}</Nickname>
									<Exiticon
										src={deleteicon}
										alt='x-icon'
										onClick={() => exitChattingRoom(chatRoom._id)}></Exiticon>
								</NavLink>
							);
						}
					})}
			</MemberList>
		</>
	);
};

export default DMList;
