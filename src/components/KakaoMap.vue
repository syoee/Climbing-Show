<template>
	<div>
		<div id="map" class="w-[90vh] h-[50vh] mb-10 sm:w-[50vh] md:w-[70vh]"></div>
	</div>
</template>

<script>
import { toRaw, watch } from 'vue';

export default {
	props: {
		locations: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			markers: [],
			overlays: [],
		};
	},
	mounted() {
		if (window.kakao && window.kakao.maps) {
			this.initMap();
		} else {
			const script = document.createElement('script');
			/* global kakao */
			script.onload = () => kakao.maps.load(this.initMap);
			script.src =
				'//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=4b4bbdc2911906be3ed2baeac649d46c';
			document.head.appendChild(script);
		}
	},
	methods: {
		initMap() {
			const container = document.getElementById('map');
			const options = {
				center: new kakao.maps.LatLng(37.5665, 126.978), // 기본 지도 중심: 서울
				level: 5,
			};
			this.map = new kakao.maps.Map(container, options);

			// locations prop이 변경될 때마다 마커와 커스텀 오버레이를 업데이트
			watch(
				() => this.locations,
				(newLocations) => {
					this.updateMarkers(newLocations);
				},
				{ immediate: true }
			);
		},

		updateMarkers(locations) {
			// 기존 마커와 오버레이 제거
			if (this.markers.length > 0) {
				this.markers.forEach((marker) => marker.setMap(null));
				this.overlays.forEach((overlay) => overlay.setMap(null));
			}
			this.markers = [];
			this.overlays = [];

			const bounds = new kakao.maps.LatLngBounds();

			// 새 위치 데이터에 따라 마커와 커스텀 오버레이 생성
			locations.forEach((location) => {
				const position = new kakao.maps.LatLng(...location.position);

				var imageSrc = require('@/assets/marker.png'), // 마커 이미지의 주소
					imageSize = new kakao.maps.Size(24, 35), // 마커 이미지의 크기
					imageOption = { offset: new kakao.maps.Point(20, 35) }; // 마커 이미지 옵션

				// 마커 이미지 생성
				var markerImage = new kakao.maps.MarkerImage(
					imageSrc,
					imageSize,
					imageOption
				);

				bounds.extend(position);

				// 마커 생성
				const marker = new kakao.maps.Marker({
					map: toRaw(this.map),
					position,
					image: markerImage,
				});

				// 커스텀 오버레이 내용 생성
				const overlayContent = `
					<div style="padding:10px; background:#000000; border-radius:5px; box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); cursor:pointer;">
						<div style="font-weight:bold; font-size:14px; color:white;">${location.name}</div>
						<div style="font-size:12px; color:white;">${location.address_road}</div>
					</div>
				`;

				// 커스텀 오버레이 생성
				const overlay = new kakao.maps.CustomOverlay({
					content: overlayContent,
					position,
					xAnchor: 0.5,
					yAnchor: 1.65,
				});

				// 마커에 마우스 오버 시 커스텀 오버레이 표시
				kakao.maps.event.addListener(marker, 'mouseover', () => {
					overlay.setMap(toRaw(this.map));
				});

				// 마커에 마우스 아웃 시 커스텀 오버레이 숨기기
				kakao.maps.event.addListener(marker, 'mouseout', () => {
					overlay.setMap(null);
				});

				this.markers.push(marker);
				this.overlays.push(overlay);
			});

			// 지도를 새 위치에 맞게 조정
			this.map.setBounds(bounds);
		},
	},
};
</script>
