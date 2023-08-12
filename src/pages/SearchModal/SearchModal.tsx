import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import {
	ModalWrapper,
	SearchResult,
	SearchBarContainer,
	ExitImage,
	ResultText,
	ProfileImage,
	NoResultText,
	ResultContainer,
} from '../SearchModal/SearchModalStyle';
import exitmodal from '../../assets/icons/CommentDeleteIcon.png';
import { get } from '../../api/api';
import { Link } from 'react-router-dom';
interface SearchModalProps {
	onClose: () => void;
}
interface userSearchData {
	map: any;
	_id: string;
	createdAt: string;
	email: string;
	followers: any[];
	followings: any[];
	password: string;
	profileImg: string | null;
	role: number;
	secretName: string;
	updatedAt: string;
	userId: string;
	userName: string;
	__v: number;
}

interface SearchResponse {
	user: userSearchData;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
	const [searchResults, setSearchResults] = useState<userSearchData[]>([]);
	const [noResults, setNoResults] = useState(false);

	const handleSearch = async (query: string) => {
		try {
			const response = await get<SearchResponse>(
				`/api/user/search?userName=${query}`,
			);
			if (response.data.user) {
				setSearchResults([response.data.user]);
				setNoResults(false);
			} else {
				setSearchResults([]);
				setNoResults(true);
			}
		} catch (error) {
			console.error('검색실패', error);
			setSearchResults([]);
			setNoResults(true);
		}
	};
	const closeModal = () => {
		onClose();
	};
	console.log('here', searchResults);
	return (
		<ModalWrapper>
			<ExitImage src={exitmodal} alt='exit' onClick={closeModal} />
			<SearchBarContainer>
				<SearchBar onSearch={handleSearch} />
			</SearchBarContainer>
			<SearchResult>
				{noResults ? (
					<NoResultText>찾는 사용자가 없습니다.</NoResultText>
				) : (
					searchResults[0]?.map((result: any) => (
						<ResultContainer key={result._id}>
							<ProfileImage src={exitmodal} alt='profile' />
							<Link
								to={`/post/user/${result.userName}`}
								style={{ textDecoration: 'none' }}>
								<ResultText>{result.userName}</ResultText>
							</Link>
						</ResultContainer>
					))
				)}
			</SearchResult>
		</ModalWrapper>
	);
};

export default SearchModal;
