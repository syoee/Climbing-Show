import React, { FormEvent } from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
	query: string;
	setQuery: (query: string) => void;
	handleSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
	query,
	setQuery,
	handleSearch,
}) => {
	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
		handleSearch();
	};

	return (
		<div className="py-5 flex items-center justify-center">
			<form className="flex items-center" onSubmit={onSubmit}>
				<div className="px-4 py-2 border rounded-md mr-2 flex items-center">
					<SearchIcon className="text-[#9BA3AF]" />
					<input
						type="text"
						placeholder="검색어를 입력하세요"
						className="ml-2"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded-md"
				>
					검색
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
