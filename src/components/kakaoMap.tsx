import React, { useEffect, useRef } from 'react';

declare global {
	const kakao: any;
}

interface Location {
	name: string;
	addressRoad: string;
	addressLot: string;
	latitude: string;
	longitude: string;
	levelList: Array<{ level: number; color: string }>;
	logoUrl: string;
}

const Map: React.FC<Location> = (props) => {
	const {
		name,
		addressRoad,
		addressLot,
		latitude,
		longitude,
		levelList,
		logoUrl,
	} = props;
	const mapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!mapRef.current) return;
		const options = {
			center: new kakao.maps.LatLng(Number(latitude), Number(longitude)),
			level: 3,
		};

		const map = new kakao.maps.Map(mapRef.current, options);

		const markerPosition = new kakao.maps.LatLng(
			Number(latitude),
			Number(longitude)
		);
		const marker = new kakao.maps.Marker({
			position: markerPosition,
		});
		marker.setMap(map);
	}, []);

	return <div ref={mapRef} style={{ width: '500px', height: '400px' }}></div>;
};

export default Map;
