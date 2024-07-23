import React, { useEffect, useRef } from 'react';

interface SearchLocationProps {
	searchLocation: { latitude: string; longitude: string }[];
}

const KakaoMap: React.FC<SearchLocationProps> = ({ searchLocation }) => {
	const mapRef = useRef(null);

	useEffect(() => {
		kakao.maps.load(() => {
			const center = new kakao.maps.LatLng(37.5665, 126.978);
			const options = {
				center,
				level: 3,
			};
			const map = new kakao.maps.Map(mapRef.current, options);

			const bounds = new kakao.maps.LatLngBounds();

			searchLocation.forEach((location) => {
				const markerPosition = new kakao.maps.LatLng(
					location.latitude,
					location.longitude
				);
				const marker = new kakao.maps.Marker({
					position: markerPosition,
				});
				marker.setMap(map);
				// 범위에 마커 추가
				bounds.extend(markerPosition);
			});
			// 범위에 맞게 지도 조정
			map.setBounds(bounds);
		});
	}, [searchLocation]);

	return (
		<div className="flex justify-center w-full h-96">
			<div className="mt-3 mb-10 w-3/4 h-auto" ref={mapRef} />
		</div>
	);
};

export default KakaoMap;
