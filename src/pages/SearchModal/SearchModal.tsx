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
} from '../SearchModal/SearchModalStyle';
import exitmodal from '../../assets/icons/CommentDeleteIcon.png';
import { get } from '../../api/api';

interface SearchModalProps {
	onClose: () => void;
}
interface userSearchData {
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
			const searchData = [response.data.user];
			setSearchResults(searchData);
			setNoResults(searchData.length === 0);
		} catch (error) {
			console.error('검색실패', error);
			setSearchResults([]);
			setNoResults(true);
		}
	};
	const closeModal = () => {
		onClose();
	};

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
					searchResults.map((result) => (
						<React.Fragment key={result._id}>
							<ProfileImage />
							<ResultText>{result.userName}</ResultText>
						</React.Fragment>
					))
				)}
			</SearchResult>
		</ModalWrapper>
	);
};

export default SearchModal;
