<template>
	<div class="flex flex-col items-center justify-center">
		<div
			class="mb-8 text-[#0077ff] text-3xl font-semibold sm:text-xl md:text-2xl lg:text-6xl"
		>
			지금 나의 주위에 있는 암장은?
		</div>
		<div>
			<KakaoMap
				v-if="mapLocations.length > 0"
				:locations="mapLocations"
				:mapLevel="5"
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
			mapLocations: [], // 지도에 표시할 클라이밍 센터 위치 데이터
		};
	},

	mounted() {
		this.getCurrentLocation();
	},

	methods: {
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
						});

						// 현재 위치를 기준으로 근처 클라이밍 센터 검색
						this.searchNearbyClimbingCenters();
					},
					(error) => {
						console.error('현재 위치를 가져오는 중 오류 발생:', error);
					}
				);
			} else {
				console.error('Geolocation을 지원하지 않는 브라우저입니다.');
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

					// 검색 결과를 지도에 표시할 수 있는 형식으로 변환
					const nearbyCenters = response.data.map((center) => ({
						name: center.name,
						position: [center.latitude, center.longitude],
					}));

					// 클라이밍 센터 위치 추가
					this.mapLocations.push(...nearbyCenters);
				} catch (error) {
					console.error('근처 클라이밍 센터 검색 중 오류 발생:', error);
				}
			}
		},
	},
};
</script>
