import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchResult from '../components/searchResult';

const Detail = () => {
	const location = useLocation();
	const searchResults = location.state?.searchResults || []; // 검색 결과를 가져옴

	return (
		<div>
			<SearchResult searchResults={searchResults} /> {/* 검색 결과 전달 */}
		</div>
	);
};

export default Detail;
