import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef, useCallback } from 'react';
import Swal from 'sweetalert2';
import { get, post, patch, del, delAd } from '../../../api/api';
import alertList from '../../../utils/swal';
import { UserDataType, Post } from '../../../types/dataType';
import { API_ADMIN_DELETE_USER } from '../../../utils/constant';
import {
	Button,
	TableDiv,
	Th,
	Td,
	Table,
	Thead,
	Tbody,
} from './UserMembrsStyle';

interface Props {
	data: UserDataType[];
}

const UserTable: React.FC<Props> = ({ data }) => {
	const [usersData, setUsersData] = useState<UserDataType[]>(data);

	const deleteUser1 = (email: string) => {
		axios
			.delete(`${process.env.REACT_APP_API_URL}/api/user/admin/deleteUser/`, {
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

	const deleteUser2 = async (email: string) => {
		const result = await Swal.fire(
			alertList.doubleCheckTitkeMsg(
				'해당 유저를 삭제하시겠습니까?',
				'한번 삭제한 유저는 복구할 수 없습니다.',
			),
		);
		if (result.isConfirmed) {
			try {
				await del<UserDataType>(`${API_ADMIN_DELETE_USER}`, {
					data: { email: email },
					withCredentials: true,
				});

				const updatedData = usersData.filter((user) => user.email !== email);
				setUsersData(updatedData);
			} catch (err) {
				Swal.fire(alertList.errorMessage('삭제를 실패하였습니다.'));
				return;
			}
		}
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
									<Button onClick={() => deleteUser1(user.email)}>삭제</Button>
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
