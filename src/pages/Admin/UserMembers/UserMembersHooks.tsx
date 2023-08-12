import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Button, TableDiv, Th, Td, Table, Thead } from './UserMembrsStyle';

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
				// 데이터에서 삭제된 사용자를 필터링합니다.
				const teatData: UserData[] = response.data.data;
				const updatedData = teatData.filter((user) => user.email !== email);
				setUsersData(updatedData);
			})
			.catch((error) => {
				console.error('유저 정보 찾기 실패:', error);
				console.log('실패:');
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
					<tbody>
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
					</tbody>
				</Table>
			</TableDiv>
		</>
	);
};

export default UserTable;
