import React, { useEffect, useRef } from "react";

const MapComponent = ({ latitude, longitude }) => {
	const container = useRef(null); // 지도를 담을 영역의 DOM 레퍼런스

	useEffect(() => {
		const script = document.createElement("script");
		script.async = true;
		script.src =
			"https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false";
		document.head.appendChild(script);

		script.onload = () => {
			kakao.maps.load(() => {
				// v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
				const options = {
					// 지도를 생성할 때 필요한 기본 옵션
					center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표.
					level: 3, // 지도의 레벨(확대, 축소 정도)
				};

				const map = new kakao.maps.Map(container.current, options); // 지도 생성 및 객체 리턴

				const markerPosition = new kakao.maps.LatLng(latitude, longitude);
				const marker = new kakao.maps.Marker({
					position: markerPosition,
				});
				marker.setMap(map);
			});
		};
	}, [latitude, longitude]);

	return (
		<div
			id="map"
			style={{ width: "500px", height: "400px" }}
			ref={container}
		></div>
	);
};

export default MapComponent;
