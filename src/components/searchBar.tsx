import React, { useState, FormEvent } from 'react'; // FormEvent를 import합니다.
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: React.FC = () => {
	const [query, setQuery] = useState<string>('');

	const handleSearch = (event: FormEvent) => {
		// 페이지 새로 고침을 방지
		event.preventDefault();
		// 검색 버튼을 클릭했을 때 실행되는 함수
		// 여기에서 검색어(query)를 서버로 전송하거나 다른 작업을 수행가능

		// 검색 버튼을 클릭했을 때 실행되는 함수
		console.log('검색어:', query);
	};

	return (
		<div className="p-4">
			<form className="flex items-center" onSubmit={handleSearch}>
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
