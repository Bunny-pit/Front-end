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
} from './ReportManagementStyle';

interface ApiData {
	userId: string;
	name: string;
	content: string;
	createdAt: string;

	reportedBy: string;
	reason: string;
}

interface Props {
	data: ApiData[];
}

const UserTable: React.FC<Props> = ({ data }) => {
	return (
		<>
			<TableDiv>
				<Table>
					<Thead>
						<tr>
							<Th>유저아이디</Th>
							<Th>닉네임</Th>
							<Th>게시글</Th>
							<Th></Th>
						</tr>
					</Thead>
					<tbody>
						{data.map((user) => (
							<tr key={user.userId}>
								<Td>{user.userId}</Td>
								<Td>{user.name}</Td>
								<Td>{user.content}</Td>
								<Td>
									{/* <Button onClick={() => deleteUser(user.email)}>speak</Button> */}
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
