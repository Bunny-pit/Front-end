import { useState } from 'react';
import { UserDataType } from '../../../types/dataType';
import { Table, Thead, Tbody, Th, Td, Button } from './MemberDetailStyle';
import { delAd } from '../../../api/api';

interface Props {
	data: UserDataType[];
}

const UserTable = ({ data }: Props) => {
	const [usersData, setUsersData] = useState<UserDataType[]>(data);

	const deleteUser = (email: string) => {
		delAd(`${process.env.REACT_APP_API_URL}/api/user/admin/deleteUser`, {
			email,
		})
			.then(() => {
				const updatedData = usersData.filter((user) => user.email !== email);
				setUsersData(updatedData);
				console.log('사용자 삭제 성공');
			})
			.catch((error) => {
				console.error('사용자 삭제를 실패하였습니다.:', error);
			});
	};

	return (
		<Table>
			<Thead>
				<tr>
					<Th>가입일</Th>
					<Th>닉네임</Th>
					<Th>이메일</Th>
					<Th></Th>
				</tr>
			</Thead>
			<Tbody>
				{data.map((user) => (
					<tr key={user._id}>
						<Td>{user.createdAt.slice(0, 10)}</Td>
						<Td>{user.userName}</Td>
						<Td>{user.email}</Td>
						<Td>
							<Button onClick={() => deleteUser(user.email)}>삭제</Button>
						</Td>
					</tr>
				))}
			</Tbody>
		</Table>
	);
};

export default UserTable;
