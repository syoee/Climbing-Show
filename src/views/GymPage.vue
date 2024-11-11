<template>
	<div class="mx-5">
		<div class="w-[40vh]">
			<KakaoMap :locations="searchLocations" />
		</div>
		<div v-if="center">
			<div class="w-1/3">
				<img
					:src="center.logo_url"
					alt="Center Image"
					class="mb-2 rounded-lg"
				/>
			</div>
			<div class="text-2xl font-bold">
				{{ center.name }}
			</div>
			<div class="mb-5 text-lg">
				{{ center.address_road }}
			</div>

			<ul class="mt-7">
				<li class="mb-3 text-xl text-red-600 font-bold">
					실내 클라이밍장 조회 순위
				</li>
				<li
					class="font-semibold"
					v-for="(sortedCenter, index) in sortedCenters"
					:key="index"
				>
					{{ index + 1 }}. {{ sortedCenter.name }}: {{ sortedCenter.hit }}
				</li>
			</ul>
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
			id: null,
			center: null,
			token: null,
			centers: [], // 여러 센터의 데이터를 저장
		};
	},

	created() {
		const userToken = localStorage.getItem('token');
		if (userToken) {
			this.token = userToken;
		}
	},

	computed: {
		// KakaoMap에 전달할 위치 데이터를 계산
		searchLocations() {
			return this.center
				? [
						{
							name: this.center.name,
							address: this.center.address_road,
							position: [this.center.latitude, this.center.longitude],
						},
				  ]
				: [];
		},

		// 조회수에 따라 센터 리스트를 정렬하는 computed 속성
		sortedCenters() {
			return this.centers.slice().sort((a, b) => b.hit - a.hit);
		},
	},

	mounted() {
		this.id = this.$route.params.id;
		this.fetchData();
		this.fetchCenters(); // 여러 센터 데이터를 가져오는 함수 호출
	},

	methods: {
		async fetchData() {
			try {
				const res = await axios.get(
					`${process.env.VUE_APP_API_HOST}/climbing-infos/${this.id}`,
					{
						headers: {
							Authorization: `Bearer ${this.token}`,
						},
					}
				);
				// API로부터 받은 데이터를 center 저장
				this.center = res.data;
			} catch (err) {
				console.error('error', err);
			}
		},
		async fetchCenters() {
			try {
				const res = await axios.get(
					`${process.env.VUE_APP_API_HOST}/dashboards/top-rank`,
					{
						headers: {
							Authorization: `Bearer ${this.token}`,
						},
					}
				);
				// API로부터 받은 여러 센터 데이터를 centers에 저장
				this.centers = res.data;
			} catch (err) {
				console.error('error', err);
			}
		},
	},
};
</script>
