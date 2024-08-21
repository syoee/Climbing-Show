<template>
	<div>
		<div class="flex justify-center">
			<KakaoMap v-if="results.length > 0" :locations="mapLocations" />
		</div>
		<div v-if="results.length > 0">
			<ul class="mx-5">
				<li
					v-for="center in results"
					:key="center.name"
					class="mb-5 pb-4 flex justify-start border-b-2 border-stone-300"
				>
					<img
						:src="center.logo_url"
						:alt="center.name"
						class="w-1/12 h-1/12 mr-3 object-contain"
					/>
					<div class="grid-rows-3">
						<div class="text-3xl font-semibold">
							{{ center.name }}
						</div>
						<div class="text-xl font-medium">{{ center.address_road }}</div>
						<ul class="grid grid-cols-12">
							<li
								v-for="logo in center.climbing_level_list"
								:key="logo.level"
								class="relative flex items-center justify-center"
								:style="{ width: '70%' }"
							>
								<img
									src="https://velog.velcdn.com/images/syo_ee/post/58892724-cf82-4d0b-ab7b-279874631845/image.png"
									class="w-full h-full object-cover"
								/>
								<div
									:style="{ backgroundColor: logo.color }"
									class="w-11/12 h-full absolute inset-1 opacity-50 rounded-full"
								></div>
								<span class="mb-1 mr-1 absolute text-black font-semibold">
									{{ logo.level }}
								</span>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
		<div
			v-else
			class="mt-5 flex justify-center text-5xl text-[#015ECC] font-semibold"
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
			// 검색 결과를 담을 배열
			results: [],
		};
	},

	computed: {
		// 검색 결과를 KakaoMap 컴포넌트에 전달할 데이터로 변환
		mapLocations() {
			return this.results.map((center) => ({
				name: center.name,
				address_road: center.address_road,
				position: [center.latitude, center.longitude],
			}));
		},
	},

	watch: {
		'$route.query.q': {
			immediate: true,
			handler() {
				this.search();
			},
		},
	},

	methods: {
		async search() {
			// 현재 라우트의 쿼리 매개변수에서 검색 쿼리(q)를 가져옴
			const searchQuery = this.$route.query.q || '';
			if (searchQuery) {
				try {
					const response = await axios.get(
						`${process.env.VUE_APP_API_HOST}/climbing-info`,
						{
							params: {
								searchKey: 'name',
								searchValue: searchQuery,
							},
						}
					);
					// 요청이 성공적으로 완료되면, 응답 데이터(response.data)를 컴포넌트의 results 데이터 속성에 저장
					this.results = response.data;
				} catch (error) {
					console.error('검색 중 오류 발생:', error);
				}
			}
		},
	},
};
</script>
