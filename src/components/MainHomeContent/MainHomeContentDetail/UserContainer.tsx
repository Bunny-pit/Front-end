import message from '../../../assets/icons/message.png';

import { UserContainer, UserName, GoChat } from '../MainHomeContentStyle';

interface UserSecretContainerProps {
	userData: any;
	post: any;
	moveToChatPage: (userId: string, postId: string, name: string) => void;
}

const MainHomeContentUserContainer = ({
	userData,
	post,
	moveToChatPage,
}: UserSecretContainerProps) => {
	return (
		<UserContainer>
			<UserName>{post.name}</UserName>
			{userData && userData?._id !== post.userId && (
				<GoChat
					src={message}
					alt='message Icon'
					onClick={() => moveToChatPage(userData._id, post.userId, post.name)}
				/>
			)}
		</UserContainer>
	);
};

export default MainHomeContentUserContainer;
