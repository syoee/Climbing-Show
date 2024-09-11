<template>
	<div class="flex flex-col items-center justify-center">
		<div
			class="mb-8 text-[#0077ff] text-3xl font-semibold sm:text-xl md:text-2xl lg:text-6xl"
		>
			지금 나의 주위에 있는 암장은?
		</div>
		<!-- 로딩 스피너 -->
		<div
			v-if="isLoading"
			class="w-[90vh] h-[50vh] mb-10 flex items-center justify-center"
		>
			<div
				class="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"
			></div>
		</div>
		<!-- 지도 -->
		<div v-else class="w-[90vh] h-[50vh] mb-10 sm:w-[50vh] md:w-[70vh]">
			<KakaoMap
				v-if="mapLocations.length > 0"
				:locations="mapLocations"
				:mapLevel="mapLevel"
				@mapLoaded="onMapLoaded"
				@mapLevelChanged="onMapLevelChanged"
				@mapMoved="onMapMoved"
			/>
		</div>

		<!-- 재검색 버튼 -->
		<button
			v-if="showReSearchButton"
			@click="reSearchNearbyClimbingCenters"
			class="bg-blue-500 text-white px-4 py-2 rounded"
		>
			재검색
		</button>
	</div>
</template>

<script>
import KakaoMap from '@/components/KakaoMap.vue';
import axios from 'axios';

export default {
	components: {
		KakaoMap,
	},

	data() {
		return {
			currentLocation: null, // 사용자의 현재 위치를 저장
			mapLocations: [], // 지도에 표시할 위치 데이터
			isLoading: true, // 로딩 상태
			mapLevel: 2, // 초기 지도 레벨
			initialMapLevel: 2, // 초기 mapLevel 값을 저장
			showReSearchButton: false, // 재검색 버튼 표시 여부
			mapCenterLocation: null, // 현재 지도의 중심 좌표를 저장
			scaleToMapLevel: {
				1: 0.02,
				2: 0.03,
				3: 0.05,
				4: 0.1,
				5: 0.25,
				6: 0.5,
				7: 1,
				8: 2,
				9: 4,
				10: 8,
				11: 16,
				12: 32,
				13: 64,
				14: 128,
			},
		};
	},

	mounted() {
		this.getCurrentLocation();
	},

	watch: {
		mapLevel(newMapLevel) {
			if (newMapLevel !== this.initialMapLevel) {
				this.showReSearchButton = true; // mapLevel 변경 시 재검색 버튼 표시
			}
		},
	},

	methods: {
		// 사용자의 현재 위치 가져오기
		getCurrentLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						this.currentLocation = {
							latitude: position.coords.latitude,
							longitude: position.coords.longitude,
						};

						this.mapLocations = [
							{
								name: '현재 위치',
								position: [
									this.currentLocation.latitude,
									this.currentLocation.longitude,
								],
								type: 'current', // 현재 위치 구분
							},
						];

						// 초기 지도 중심을 현재 위치로 설정
						this.mapCenterLocation = this.currentLocation;

						// 근처 클라이밍 센터 검색
						this.searchNearbyClimbingCenters(this.mapCenterLocation);
					},
					(error) => {
						console.error('현재 위치를 가져오는 중 오류 발생:', error);
						this.isLoading = false; // 오류가 발생한 경우 로딩 중지
					}
				);
			} else {
				console.error('Geolocation을 지원하지 않는 브라우저입니다.');
				this.isLoading = false; // Geolocation을 지원하지 않는 경우 로딩 중지
			}
		},

		// 근처 클라이밍 센터 검색
		async searchNearbyClimbingCenters(location) {
			if (location) {
				try {
					const scale = this.scaleToMapLevel[this.mapLevel];

					// 지도 중심 좌표(location)를 기준으로 클라이밍 센터 검색
					const response = await axios.get(
						`${process.env.VUE_APP_API_HOST}/climbing-infos`,
						{
							params: {
								searchType: 'POSITION',
								latitude: location.latitude,
								longitude: location.longitude,
								distance: scale, // 현재 scale 값 전송
							},
						}
					);

					const nearbyCenters = response.data.map((center) => ({
						name: center.name,
						position: [center.latitude, center.longitude],
						address_road: center.address_road,
						type: 'center',
					}));

					this.mapLocations = [
						{
							name: '현재 지도 중심 위치',
							position: [location.latitude, location.longitude],
							type: 'center',
						},
						...nearbyCenters,
					];
				} catch (error) {
					console.error('근처 클라이밍 센터 검색 중 오류 발생:', error);
				} finally {
					this.isLoading = false; // 로딩 완료
				}
			}
		},

		// KakaoMap이 로드된 후 호출
		onMapLoaded() {
			this.isLoading = false; // 지도가 완전히 로드되면 로딩 중지
		},

		// Map level 변경 인식
		onMapLevelChanged(newMapLevel) {
			this.mapLevel = newMapLevel;
			this.showReSearchButton = true; // mapLevel 변경 시 재검색 버튼 표시
		},

		// Map 움직임 인식
		onMapMoved(newCenter) {
			this.mapCenterLocation = newCenter; // 지도의 중심 좌표 저장
			this.showReSearchButton = true; // 지도 이동 시 재검색 버튼 표시
		},

		// 근처 재검색
		reSearchNearbyClimbingCenters() {
			this.isLoading = true; // 재검색 시 로딩 상태로 변경
			this.searchNearbyClimbingCenters(this.mapCenterLocation).then(() => {
				this.showReSearchButton = false; // 재검색 후 버튼 숨기기
			});
		},
	},
};
</script>
