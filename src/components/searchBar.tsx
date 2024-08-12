import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const SearchBar = () => {
	// 검색어 상태 관리
	const [query, setQuery] = useState<string>('');
	const [isEmpty, setIsEmpty] = useState<boolean>(false);
	const navigate = useNavigate();

	const handleSearch = async (event: FormEvent) => {
		event.preventDefault(); // 기본 폼 동작 방지

		try {
			const res = await axios.get('http://localhost:8080/climbing-info', {
				params: {
					searchKey: 'name',
					searchValue: query,
				},
			});

			console.log('서버 응답 데이터', res.data);

			const searchResults = res.data;
			const searchLocation = res.data;

			// 검색 결과가 비어 있는지 확인
			if (!searchResults || searchResults.length === 0) {
				setIsEmpty(true);
			} else {
				setIsEmpty(false);
				// 검색 결과를 detail 페이지로 네비게이션
				navigate('/detail', {
					state: { searchResults, searchLocation },
				});
			}
		} catch (err) {
			console.error('데이터를 가져오는 중 에러 발생:', err);
			setIsEmpty(true);
		}
	};

	return (
		<div className="py-5 flex items-center justify-center">
			<form className="flex items-center" onSubmit={handleSearch}>
				<div className="px-4 py-2 border rounded-md mr-2 flex items-center">
					<SearchIcon className="text-[#9BA3AF]" />
					<input
						type="text"
						placeholder="검색어를 입력하세요."
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
			{isEmpty && <div className="mt-4 text-red-500">검색결과가 없습니다</div>}
		</div>
	);
};

export default SearchBar;
