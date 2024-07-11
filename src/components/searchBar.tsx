import React, { useState, FormEvent } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

interface Level {
	level: number;
	color: string;
}

interface SearchResult {
	name: string;
	addressRoad: string;
	addressLot: string;
	latitude: string;
	longitude: string;
	levelList: Level[];
	logoUrl: string;
}

const SearchBar = () => {
	const [query, setQuery] = useState<string>(''); // 검색어 상태를 관리
	const [data, setData] = useState<SearchResult[] | null>(null); // 데이터를 관리
	const [error, setError] = useState<string | null>(null); // 에러 상태를 관리

	const handleSearch = async (event: FormEvent) => {
		event.preventDefault(); // 페이지 새로 고침을 방지

		setError(null); // 기존 에러 초기화

		try {
			const res = await axios.post('http://localhost:8080/climbing-info', {
				searchKey: 'name',
				searchValue: query, // 검색어(query)를 서버로 전송
			});

			console.log('서버 응답 데이터:', res.data);
			setData(res.data);
		} catch (err) {
			console.error('데이터를 가져오는 중 에러 발생:', err);
			setError('데이터를 가져오는 중 에러가 발생했습니다.');
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

			<div className="mt-5">
				{error && <p className="text-red-500">{error}</p>}
				{data && data.length > 0 ? (
					<ul>
						{data.map((item) => (
							<li key={item.name}>
								<div className="flex items-center">
									<img
										src={item.logoUrl}
										alt={item.name}
										className="w-16 h-16 mr-4"
									/>
									<div>
										<p className="font-bold">{item.name}</p>
										<p>{item.addressRoad}</p>
										<p>{item.addressLot}</p>
										<div className="flex">
											{item.levelList.map((level) => (
												<div
													key={level.level}
													style={{ backgroundColor: level.color }}
													className="w-4 h-4 rounded-full mr-1"
												/>
											))}
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				) : (
					<p>검색 결과가 없습니다.</p>
				)}
			</div>
		</div>
	);
};

export default SearchBar;
