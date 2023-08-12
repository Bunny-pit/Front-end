import React from 'react';

import {
	Container,
	Title,
	SearchBarInput,
	SearchBarForm,
	SearchBarDiv,
	TableDiv,
	Th,
	Td,
	Table,
	Thead,
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
								<Td>{user.createdAt}</Td>
								<Td>{user.userName}</Td>
								<Td>{user.email}</Td>
							</tr>
						))}
					</tbody>
				</Table>
			</TableDiv>
		</>
	);
};

export default UserTable;
