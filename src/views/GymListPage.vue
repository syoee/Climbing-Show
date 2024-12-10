<template>
	<div>
		<div class="flex justify-center mt-5">
			<input
				type="text"
				@keyup.enter="performSearch"
				v-model="searchQuery"
				placeholder="검색어를 입력하세요."
				class="border border-red-600 rounded-lg p-2 w-1/2"
			/>
			<button
				@click="performSearch"
				class="ml-2 px-4 py-2 bg-black text-red-600 rounded-lg font-semibold"
			>
				검색
			</button>
		</div>

		<div class="flex justify-center mt-5">
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
			<div v-else>
				<KakaoMap
					:locations="mapLocations"
					:mapLevel="mapLevel"
					@mapLevelChanged="onMapLevelChanged"
					@mapMoved="onMapMoved"
				/>
			</div>
		</div>

		<div v-if="results.length > 0">
			<ul class="mx-5">
				<li
					v-for="center in results"
					:key="center.name"
					@click="goToDetail(center.id)"
					class="mb-5 pb-4 flex flex-col justify-start border-b-2 hover:cursor-pointer"
				>
					<img
						:src="center.logo_url"
						:alt="center.name"
						class="w-1/6 aspect-square object-cover"
					/>
					<div class="grid grid-rows-3">
						<div class="text-lg font-semibold">{{ center.name }}</div>
						<div class="text-sm font-medium">{{ center.address_road }}</div>
						<ul class="grid grid-cols-12">
							<li
								v-for="logo in center.climbing_level_list"
								:key="logo.level"
								class="relative flex items-center justify-center"
							>
								<img
									src="https://velog.velcdn.com/images/syo_ee/post/58892724-cf82-4d0b-ab7b-279874631845/image.png"
									class="w-full aspect-square object-cover"
								/>
								<div
									:style="{ backgroundColor: logo.color }"
									class="w-11/12 h-full absolute opacity-50 rounded-full"
								></div>
								<span class="absolute text-black font-semibold">
									{{ logo.level }}
								</span>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>

		<div
			v-if="showResults && results.length === 0 && searchQuery.length >= 2"
			class="mt-5 flex justify-center text-4xl text-red-600 font-semibold"
		>
			<p>검색 결과가 없습니다.</p>
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
			searchQuery: '', // 검색어
			results: [], // 검색 결과
			mapLocations: [], // 지도에 표시할 위치
			mapLevel: 6, // 100m 단위로 표시될 초기 지도 레벨
			currentLocation: null, // 현재 위치
			isLoading: true, // 로딩 상태
		};
	},

	mounted() {
		this.getCurrentLocation();
	},

	methods: {
		// 현재 위치 가져오기
		getCurrentLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						this.currentLocation = {
							latitude: position.coords.latitude,
							longitude: position.coords.longitude,
						};
						// 현재 위치 지도에 추가
						this.mapLocations.push({
							name: '현재 위치',
							position: [
								this.currentLocation.latitude,
								this.currentLocation.longitude,
							],
							type: 'current',
						});
						this.isLoading = false; // 위치 정보를 가져온 후 로딩 중지
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

		// 검색 기능
		async performSearch() {
			if (this.searchQuery.length < 2) {
				alert('2글자 이상 검색해주세요.');
				return;
			}
			try {
				const response = await axios.get(
					`${process.env.VUE_APP_API_HOST}/climbing-infos`,
					{
						params: {
							searchType: 'NAME',
							searchValue: this.searchQuery,
						},
					}
				);
				this.results = response.data;
				// 검색 결과를 지도에 반영
				this.mapLocations = this.results.map((center) => ({
					name: center.name,
					position: [center.latitude, center.longitude],
					address_road: center.address_road,
					type: 'center',
				}));
			} catch (error) {
				console.error('검색 중 오류 발생:', error);
			}
		},

		// 상세 페이지 이동
		goToDetail(centerId) {
			this.$router.push(`/gym/${centerId}`);
		},
	},
};
</script>
