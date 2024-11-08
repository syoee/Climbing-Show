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
				class="ml-2 px-4 py-2 bg-black text-red-600 rounded-lg"
			>
				검색
			</button>
		</div>

		<div class="flex justify-center mt-5">
			<KakaoMap
				v-if="results.length > 0 && showResults"
				:locations="mapLocations"
			/>
		</div>

		<div v-if="results.length > 0">
			<ul class="mx-5">
				<li
					v-for="center in results"
					:key="center.name"
					@click="goToDetail(center.id)"
					class="mb-5 pb-4 flex flex-col justify-start border-b-2 border-red-600 hover:cursor-pointer"
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
			results: [],
			searchQuery: this.$route.query.q || '', // 쿼리 파라미터로 초기값 설정
			showResults: false, // 검색 결과 상태 관리 변수
		};
	},

	computed: {
		// KakaoMap 컴포넌트에 전달할 위치 데이터
		mapLocations() {
			return this.results.map((center) => ({
				name: center.name,
				address_road: center.address_road,
				position: [center.latitude, center.longitude],
			}));
		},
	},

	methods: {
		goToDetail(centerId) {
			this.$router.push(`/gym/${centerId}`);
		},

		// 검색 함수
		async search() {
			// 검색어가 두 글자 미만일 경우 기존 결과 유지, 새 검색 수행하지 않음
			if (this.searchQuery.length < 2) {
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
				this.showResults = true;
			} catch (error) {
				console.error('검색 중 오류 발생:', error);
				this.showResults = false; // 오류 발생 시 결과를 숨김
			}
		},

		// 검색 버튼 클릭 또는 Enter 키 입력 시 호출
		performSearch() {
			if (this.searchQuery.length < 2) {
				alert('2글자 이상 검색해주세요.');
				return;
			}

			// URL의 쿼리 업데이트 후 검색 실행
			this.$router.push({ query: { q: this.searchQuery } });
			this.search();
		},
	},
};
</script>
