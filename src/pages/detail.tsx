import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchResult from '../components/searchResult';
import KakaoMap from '../components/kakaoMap';

const Detail = () => {
	const location = useLocation();
	const searchResults = location.state?.searchResults || [];
	const searchLocation = location.state?.searchLocation || [];

	return (
		<div>
			<KakaoMap searchLocation={searchLocation} />
			<SearchResult searchResults={searchResults} />
		</div>
	);
};

export default Detail;
