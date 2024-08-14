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
			infowindows: [],
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
				'//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=55e35ba521bf534633dce3114256d719';
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

			// locations prop이 변경될 때마다 마커와 인포윈도우를 업데이트
			watch(
				() => this.locations,
				(newLocations) => {
					this.updateMarkers(newLocations);
				},
				{ immediate: true }
			);
		},
		updateMarkers(locations) {
			if (this.markers.length > 0) {
				this.markers.forEach((marker) => marker.setMap(null));
				this.infowindows.forEach((infowindow) => infowindow.close());
			}
			this.markers = [];
			this.infowindows = [];

			const bounds = new kakao.maps.LatLngBounds();

			// 새 위치 데이터에 따라 마커와 인포윈도우 생성
			locations.forEach((location) => {
				const position = new kakao.maps.LatLng(...location.position);
				bounds.extend(position);

				// marker와 infowindow 변수를 선언
				const marker = new kakao.maps.Marker({
					map: toRaw(this.map),
					position,
				});

				// location.name의 길이에 따라 인포윈도우 스타일 설정
				const nameLength = location.name.length;
				const width = Math.max(100, Math.min(300, nameLength * 15)); // 최소 100px, 최대 300px로 설정

				const content = `
					<div style="padding:5px; width:${width}px; white-space: nowrap;">
						${location.name}
					</div>
				`;

				const infowindow = new kakao.maps.InfoWindow({
					content,
					removable: true,
				});

				// 마커에 마우스 오버 시 인포윈도우 열기
				kakao.maps.event.addListener(marker, 'mouseover', () => {
					infowindow.open(toRaw(this.map), marker);
				});

				// 마커에 마우스 아웃 시 인포윈도우 닫기
				kakao.maps.event.addListener(marker, 'mouseout', () => {
					infowindow.close();
				});

				this.markers.push(marker);
				this.infowindows.push(infowindow);
			});

			// 지도를 새 위치에 맞게 조정
			this.map.setBounds(bounds);
		},
	},
};
</script>
