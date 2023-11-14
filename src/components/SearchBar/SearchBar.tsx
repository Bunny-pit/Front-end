import {
	SearchBarForm,
	InputContainer,
	SearchLogo,
	SearchBarInput,
	SearchBarButton,
} from './SearchBarStyle';
import React, { useState } from 'react';
import searchLogo from '../../assets/icons/search.png';

interface SearchBarProps {
	onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
	const [query, setQuery] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSearch(query);
	};
	return (
		<SearchBarForm onSubmit={handleSubmit}>
			<InputContainer>
				<SearchLogo src={searchLogo} alt='searchlogo' />
				<SearchBarInput
					type='text'
					value={query}
					onChange={handleInputChange}
					placeholder='이름 검색'
				/>
			</InputContainer>
			<SearchBarButton type='submit'>검색</SearchBarButton>
		</SearchBarForm>
	);
};
export default SearchBar;
