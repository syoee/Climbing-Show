import React, { useEffect, useRef } from 'react';
import axios from 'axios'; // Axios를 가져옵니다

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

			// Axios를 사용하여 위도와 경도 데이터 가져오기
			axios
				.get(
					'https://api.climbing-show.com/climbing-info?searchKey=name&searchValue=구'
				)
				.then((response) => {
					// 응답이 클라이밍 체육관 데이터 배열을 포함한다고 가정합니다
					const gyms = response.data;

					// 각 체육관에 대해 가져온 좌표를 사용하여 마커를 지도에 추가합니다
					gyms.forEach((gym: any) => {
						const latLng = new kakao.maps.LatLng(gym.latitude, gym.longitude);
						const marker = new kakao.maps.Marker({ position: latLng });
						marker.setMap(map);
					});
				})
				.catch((error) => {
					console.error('데이터 가져오기 오류:', error);
				});
		});
	}, []);

	return (
		<div className="flex justify-center w-full h-screen">
			<div className="w-3/4 h-3/4" ref={mapRef} />
		</div>
	);
};

export default KakaoMap;
