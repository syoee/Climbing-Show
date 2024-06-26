import React, { useEffect, useRef } from 'react';

const KakaoMap = () => {
	const mapRef = useRef(null);

	useEffect(() => {
		kakao.maps.load(() => {
			const center = new kakao.maps.LatLng(37.5665, 126.978);
			const options = {
				center,
				level: 3,
			};
			const map = new kakao.maps.Map(mapRef.current, options);
		});
	}, []);

	return (
		<div className="w-full h-screen">
			<div className="w-3/4 h-3/4" ref={mapRef} />
		</div>
	);
};

export default KakaoMap;
