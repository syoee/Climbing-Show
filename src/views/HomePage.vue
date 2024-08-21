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
				:mapLevel="5"
				@mapLoaded="onMapLoaded"
			/>
		</div>
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
			isLoading: true, // 로딩 상태 추가
		};
	},

	mounted() {
		this.getCurrentLocation();
	},

	methods: {
		// 두 지점 간의 거리를 계산하는 함수 (Haversine formula)
		calculateDistance(lat1, lon1, lat2, lon2) {
			const R = 6371; // 지구 반지름 (km)
			const dLat = this.deg2rad(lat2 - lat1);
			const dLon = this.deg2rad(lon2 - lon1);
			const a =
				Math.sin(dLat / 2) * Math.sin(dLat / 2) +
				Math.cos(this.deg2rad(lat1)) *
					Math.cos(this.deg2rad(lat2)) *
					Math.sin(dLon / 2) *
					Math.sin(dLon / 2);
			const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
			const distance = R * c; // Distance in km
			return distance;
		},

		deg2rad(deg) {
			return deg * (Math.PI / 180);
		},

		// 사용자의 현재 위치 가져오기
		getCurrentLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						// 사용자의 현재 위치 설정
						this.currentLocation = {
							latitude: position.coords.latitude,
							longitude: position.coords.longitude,
						};

						// 현재 위치를 지도에 표시할 위치 목록에 추가
						this.mapLocations.push({
							name: '현재 위치',
							position: [
								this.currentLocation.latitude,
								this.currentLocation.longitude,
							],
							type: 'current', // 현재 위치 구분
						});

						// 현재 위치를 기준으로 근처 클라이밍 센터 검색
						this.searchNearbyClimbingCenters();
					},
					(error) => {
						console.error('현재 위치를 가져오는 중 오류 발생:', error);
						this.isLoading = false; // 오류가 발생한 경우 로딩을 중지합니다.
					}
				);
			} else {
				console.error('Geolocation을 지원하지 않는 브라우저입니다.');
				this.isLoading = false; // Geolocation을 지원하지 않는 경우 로딩을 중지합니다.
			}
		},

		// 현재 위치를 기준으로 근처의 클라이밍 센터 검색
		async searchNearbyClimbingCenters() {
			if (this.currentLocation) {
				try {
					const response = await axios.get(
						'http://125.241.173.9:8080/climbing-info',
						{
							params: {
								latitude: this.currentLocation.latitude,
								longitude: this.currentLocation.longitude,
							},
						}
					);

					// 검색 결과를 지도에 표시할 수 있는 형식으로 변환 및 필터링
					const nearbyCenters = response.data
						.map((center) => ({
							name: center.name,
							position: [center.latitude, center.longitude],
							address_road: center.address_road, // 주소 추가
							type: 'center', // 클라이밍 센터 구분
							distance: this.calculateDistance(
								this.currentLocation.latitude,
								this.currentLocation.longitude,
								center.latitude,
								center.longitude
							),
						}))
						.filter((center) => center.distance <= 5); // 5km 이내로 필터링

					// 클라이밍 센터 위치 추가
					this.mapLocations.push(...nearbyCenters);
				} catch (error) {
					console.error('근처 클라이밍 센터 검색 중 오류 발생:', error);
				} finally {
					this.isLoading = false; // 로딩 완료
				}
			}
		},

		// KakaoMap이 로드된 후 호출
		onMapLoaded() {
			this.isLoading = false; // 지도가 완전히 로드되면 로딩을 중지합니다.
		},
	},
};
</script>
