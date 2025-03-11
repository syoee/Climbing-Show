<template>
	<div>
		<div id="map" class="w-[40vh] h-[40vh] mb-10 sm:w-[40vh] md:w-[60vh]"></div>
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
		mapLevel: {
			type: Number,
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
			script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=78af9b82d5933bce119673559d97dd5d`;
			document.head.appendChild(script);
		}
	},

	methods: {
		initMap() {
			const container = document.getElementById('map');
			const options = {
				center: new kakao.maps.LatLng(37.5665, 126.978), // 기본 지도 중심: 서울
				level: this.mapLevel,
			};
			this.map = new kakao.maps.Map(container, options);

			// 지도 레벨이 달라지거나 움직일 때 Emit event
			kakao.maps.event.addListener(this.map, 'zoom_changed', () => {
				this.$emit('mapLevelChanged', this.map.getLevel());
			});
			kakao.maps.event.addListener(this.map, 'dragend', () => {
				this.$emit('mapMoved');
			});

			// locations prop이 변경될 때마다 마커와 커스텀 오버레이를 업데이트
			watch(
				() => this.locations,
				(newLocations) => {
					this.updateMarkers(newLocations);
				},
				{ immediate: true }
			);

			// mapLevel prop이 변경될 때마다 지도의 레벨을 업데이트
			watch(
				() => this.mapLevel,
				(newMapLevel) => {
					if (this.map) {
						this.map.setLevel(newMapLevel);
					}
				}
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

				// 위치의 종류에 따라 다른 이미지 사용
				let imageSrc;
				if (location.type === 'current') {
					// 현재 위치용 이미지
					imageSrc =
						'https://velog.velcdn.com/images/syo_ee/post/77cceb59-c82c-4506-9f9c-636a1053f269/image.png';
				} else {
					// 기본 마커 이미지
					imageSrc =
						'https://velog.velcdn.com/images/syo_ee/post/dfa84db3-a0e7-4e49-bb3a-419050ee70be/image.png';
				}

				const imageSize = new kakao.maps.Size(24, 35); // 마커 이미지의 크기
				const imageOption = { offset: new kakao.maps.Point(20, 35) }; // 마커 이미지 옵션

				// 마커 이미지 생성
				const markerImage = new kakao.maps.MarkerImage(
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

				let overlayContent;
				if (location.type === 'current') {
					// 현재 위치는 주소 없이 이름만 표시
					overlayContent = `
						<div style="margin-bottom:10px; margin-right:15px; padding:10px; background:#000000; border-radius:5px; box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); cursor:pointer;">
							<div style="font-weight:bold; font-size:14px; color:white;">${location.name}</div>
						</div>
					`;
				} else {
					// 클라이밍 센터는 주소와 이름 모두 표시
					overlayContent = `
						<div style="padding:10px; background:#000000; border-radius:5px; box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); cursor:pointer;">
							<div style="font-weight:bold; font-size:14px; color:white;">${location.name}</div>
							<div style="font-size:12px; color:white;">${location.address_road}</div>
						</div>
					`;
				}

				// 커스텀 오버레이 생성
				const overlay = new kakao.maps.CustomOverlay({
					content: overlayContent,
					position,
					xAnchor: 0.5,
					yAnchor: 1.65,
				});

				// 타이머 변수 선언
				let hideOverlayTimeout;

				// 마커에 마우스 오버 및 클릭 이벤트 추가
				kakao.maps.event.addListener(marker, 'mouseover', () => {
					overlay.setMap(toRaw(this.map));
				});
				kakao.maps.event.addListener(marker, 'mouseout', () => {
					overlay.setMap(null);
				});

				// 모바일 터치 이벤트 추가 (click으로 대체)
				kakao.maps.event.addListener(marker, 'click', () => {
					// 오버레이 표시
					overlay.setMap(toRaw(this.map));

					// 기존 타이머가 있다면 클리어
					if (hideOverlayTimeout) {
						clearTimeout(hideOverlayTimeout);
					}

					// 5초 후 오버레이 숨기기
					hideOverlayTimeout = setTimeout(() => {
						overlay.setMap(null);
					}, 5000);
				});

				// 지도 클릭 시 오버레이 닫기
				kakao.maps.event.addListener(this.map, 'click', () => {
					overlay.setMap(null);

					// 타이머 초기화
					if (hideOverlayTimeout) {
						clearTimeout(hideOverlayTimeout);
					}
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
