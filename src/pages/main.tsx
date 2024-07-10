import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/searchBar';
import Gyms from '../components/gyms';

const Main = () => {
	const [query, setQuery] = useState<string>('');
	const [data, setData] = useState<any[]>([]);

	const handleSearch = async () => {
		try {
			const res = await axios.get('http://localhost:8080/climbing-info', {
				params: {
					searchKey: 'name',
					searchValue: query,
				},
			});
			console.log('서버 응답 데이터:', res.data);
			setData(res.data);
		} catch (error) {
			console.error('데이터를 가져오는 중 에러 발생:', error);
		}
	};

	return (
		<div>
			<SearchBar
				query={query}
				setQuery={setQuery}
				handleSearch={handleSearch}
			/>
			<Gyms data={data} />
		</div>
	);
};

export default Main;
