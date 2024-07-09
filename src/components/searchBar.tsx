import React, { useState, useEffect, FormEvent } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const SearchBar = () => {
	const [query, setQuery] = useState<string>(''); // 검색어 상태를 관리
	const [data, setData] = useState<any>();

	const fetchData = async (searchQuery: string) => {
		try {
			const res = await axios.get(`http://localhost:8080/climbing-info`, {
				params: {
					searchKey: 'name',
					searchValue: searchQuery, // 검색어(query)를 서버로 전송
				},
			});

			console.log('서버 응답 데이터:', res.data);
			setData(res.data); // 서버 응답 데이터를 상태로 설정
		} catch (error) {
			console.error('데이터를 가져오는 중 에러 발생:', error);
		}
	};

	const handleSearch = (event: FormEvent) => {
		event.preventDefault(); // 페이지 새로 고침을 방지
		fetchData(query); // 입력된 검색어로 데이터 가져오기
	};

	useEffect(() => {
		fetchData(''); // 초기 빈 검색어로 데이터 가져오기
	}, []);

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
			<div>
				{data && (
					<ul>
						{data.map((item: any) => (
							<li key={item.id}>{item.name}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default SearchBar;
