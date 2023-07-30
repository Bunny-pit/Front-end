import {
	CollapseButton,
	MemberList,
	Nickname,
	TopContainer,
	Profile,
} from './DMListStyle';
import { useState, useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import toggleBtn from '../../assets/icons/downarrow.png';
import gravatar from 'gravatar';
import { useUser } from '../../utils/swrFetcher';
import { get } from '../../api/api';
import { DataType } from '../../types/dataType';
import { DmListType } from '../../types/chatType';
const memberList = [
	{
		id: 1,
		nickname: '사자',
		email: 'rekdk',
	},
];
const DMList = () => {
	const { userData, isError } = useUser();

	if (isError) {
		console.log('유저 데이터를 불러오는데 실패했습니다.');
	} else if (!userData) {
		console.log('유저 데이터를 불러오는 중...');
	}

	const userId = userData?._id;
	const [channelCollapse, setChannelCollapse] = useState(false);
	const [dmList, setDmList] = useState<DmListType[] | null>(null);

	useEffect(() => {
		const saveDMList = async () => {
			try {
				const response = await get<DmListType[]>(`/api/chat/${userId}`);
				setDmList(response.data);
				console.log('여기다', response.data);
			} catch (error) {
				console.error('Error saveDMList:', error);
			}
		};
		saveDMList();
	}, [userId]);

	const toggleChannelCollapse = useCallback(() => {
		setChannelCollapse((prev) => !prev);
	}, []);

	const babo = dmList?.map((list) => {
		list.users.forEach((user) => {
			console.log('진짜', user.secretName);
		});
	});
	console.log('babo', babo);
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
					dmList?.map((list: any) => {
						if (list.users.length > 1) {
							return (
								<NavLink key={list._id} to={`/chatting/dm/${list._id}`}>
									<Profile
										src={gravatar.url(list.users[1].email, {
											s: '24px',
											d: 'identicon',
										})}
										alt={list.users[1].secretName}
									/>
									<Nickname>{list.users[1].secretName}</Nickname>
								</NavLink>
							);
						}
					})}
			</MemberList>
		</>
	);
};

export default DMList;
