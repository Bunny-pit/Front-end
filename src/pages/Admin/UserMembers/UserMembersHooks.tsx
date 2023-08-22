import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
	Button,
	TableDiv,
	Th,
	Td,
	Table,
	Thead,
	Tbody,
} from './UserMembrsStyle';

interface UserData {
	_id: string;
	userName: string;
	email: string;
	createdAt: string;
}

interface Props {
	data: UserData[];
}

const UserTable: React.FC<Props> = ({ data }) => {
	const [usersData, setUsersData] = useState<UserData[]>(data);
	const deleteUser = (email: string) => {
		axios
			.delete(`http://localhost:3001/api/user/admin/deleteUser/`, {
				data: { email: email },
			})
			.then((response) => {
				console.log(response.data);

				if (response.status === 200) {
					// 사용자가 성공적으로 삭제되었을때 상태 업데이트 추가하기
					const updatedData = usersData.filter((user) => user.email !== email);
					setUsersData(updatedData);
				} else {
					console.log('사용자 삭제를 실패하였습니다.');
				}
			})
			.catch((error) => {
				console.error('사용자 삭제를 실패하였습니다.:', error);
			});
	};

	return (
		<>
			<TableDiv>
				<Table>
					<Thead>
						<tr>
							<Th>가입날짜</Th>
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
			</TableDiv>
		</>
	);
};

export default UserTable;
