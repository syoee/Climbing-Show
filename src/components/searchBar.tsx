import React, { useState, FormEvent } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const SearchBar: React.FC = () => {
	const [query, setQuery] = useState<string>(''); // 검색어 상태를 관리

	const handleSearch = async (event: FormEvent) => {
		event.preventDefault(); // 페이지 새로 고침을 방지합니다.

		try {
			// 서버로 GET 요청을 보냅니다.
			const response = await axios.get('http://localhost:8080/climbing-info', {
				params: {
					searchKey: 'name',
					searchValue: query, // 검색어(query)를 서버로 전송
				},
			});

			console.log('서버 응답 데이터:', response.data);
			// 여기에서 서버 응답 데이터를 처리하거나 다른 작업을 수행 가능
		} catch (error) {
			console.error('데이터를 가져오는 중 에러 발생:', error);
		}
	};

	return (
		<div className="py-5 flex items-center justify-center">
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
