import {
	CollapseButton,
	MemberList,
	Nickname,
	TopContainer,
	Profile,
} from './DMListStyle';
import { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import toggleBtn from '../../assets/icons/downarrow.png';
import gravatar from 'gravatar';

const memberData = [
	{
		id: 1,
		nickname: '자고있는 버니',
		email: 'rks85227@gmail.com',
	},
	{
		id: 2,
		nickname: '노래하는 버니',
		email: 'rabbit545@gmail.com',
	},
	{
		id: 3,
		nickname: '귀여운 버니',
		email: 'cute9687@gmail.com',
	},
	{
		id: 4,
		nickname: '사랑스러운 버니',
		email: 'dltjchlrh@gmail.com',
	},
];
const DMList = () => {
	const [channelCollapse, setChannelCollapse] = useState(false);

	const toggleChannelCollapse = useCallback(() => {
		setChannelCollapse((prev) => !prev);
	}, []);

	return (
		<>
			<TopContainer>
				<CollapseButton
					collapse={channelCollapse}
					onClick={toggleChannelCollapse}
					src={toggleBtn}
					alt='toggle-button'></CollapseButton>
				<span>bunnies</span>
			</TopContainer>
			<MemberList>
				{!channelCollapse &&
					memberData?.map((member) => {
						return (
							<NavLink key={member.id} to={`/chatting/dm/${member.nickname}`}>
								<Profile
									src={gravatar.url(member.email, {
										s: '24px',
										d: 'identicon',
									})}
									alt={member.nickname}
								/>
								<Nickname>{member.nickname}</Nickname>
							</NavLink>
						);
					})}
			</MemberList>
		</>
	);
};

export default DMList;
