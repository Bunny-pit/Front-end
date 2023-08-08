import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import DefaultFooter from '../../../components/Footer/Footer';
import { Link } from 'react-router-dom';

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
const UserMembers = () => {
	return (
		<>
			<AdminHeader />
			<Container>
				<Title>회원관리</Title>
				<SearchBarDiv>
					<SearchBarForm>
						<SearchBarInput placeholder='이메일을 입력해주세요'></SearchBarInput>
					</SearchBarForm>
				</SearchBarDiv>

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
							<Td>ㅇㅇㅇ</Td>
							<Td>ㅇㅇㅇ</Td>
							<Td>ㅇㅇㅇ</Td>
						</tbody>
					</Table>
				</TableDiv>
			</Container>
			<DefaultFooter />
		</>
	);
};
export default UserMembers;
