import React, { useEffect, useRef } from 'react';

interface SearchLocationProps {
	searchLocation: { latitude: string; longitude: string }[];
}

const KakaoMap: React.FC<SearchLocationProps> = ({ searchLocation }) => {
	const mapRef = useRef(null);

	useEffect(() => {
		const loadMap = () => {
			if (searchLocation.length === 0 || !mapRef.current) return;

			const center = new kakao.maps.LatLng(
				parseFloat(searchLocation[0].latitude),
				parseFloat(searchLocation[0].longitude)
			);
			const options = {
				center,
				level: 3,
			};
			const map = new kakao.maps.Map(mapRef.current, options);

			// 검색한 각 위치에 대해 마커를 생성하고 지도에 추가
			searchLocation.forEach((location) => {
				const markerPosition = new kakao.maps.LatLng(
					parseFloat(location.latitude),
					parseFloat(location.longitude)
				);
				const marker = new kakao.maps.Marker({
					position: markerPosition,
				});
				marker.setMap(map);
			});
		};

		if (window.kakao && window.kakao.maps) {
			loadMap(); // 이미 카카오 맵 API가 로드된 경우 바로 loadMap 함수 실행
		}
	}, [searchLocation]);

	return (
		<div className="flex justify-center w-full h-96">
			<div className="mt-3 mb-10 w-3/4 h-auto" ref={mapRef} />
		</div>
	);
};

export default KakaoMap;
