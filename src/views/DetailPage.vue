<template>
	<div class="mx-5">
		<div v-if="results.length > 0" class="flex flex-row justify-around">
			<div class="w-1/4 mr-3">
				<div class="w-full aspect-square bg-stone-300 rounded-lg">
					<img
						:src="center.logo_url"
						alt="Center Image"
						class="w-full h-full object-cover rounded-lg"
					/>
				</div>
				<ul class="mt-5">
					<li
						v-for="center in results"
						:key="center.name"
						class="bg-emerald-300"
					>
						<div
							class="w-full aspect-square border-2 border-neutral-400 rounded-lg"
						>
							<img
								:src="center.logo_url"
								alt="Nearby Center Logo"
								class="w-full h-full object-cover rounded-lg"
							/>
						</div>
						<div class="border-2 border-neutral-400 text-xl font-semibold">
							{{ center.name }}
						</div>
						<div class="mt-1 border-2 border-neutral-400 text-lg font-normal">
							{{ center.address }}
						</div>
					</li>
				</ul>
			</div>
			<div class="w-[81%]">
				<KakaoMap
					:locations="searchLocations"
					class="mr-5 mb-3 h-1/2 bg-violet-300 rounded-lg"
				/>
				<div class="bg-blue-500 text-2xl font-bold">
					{{ center.name }}
				</div>
				<div class="bg-blue-500 text-lg font-medium">
					{{ center.address }}
				</div>
			</div>
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
			results: [],
		};
	},

	computed: {
		// KakaoMap에 전달할 위치 데이터를 계산
		searchLocations() {
			return this.results
				? [
						{
							name: this.center.name,
							address: this.center.address,
							position: [this.center.latitude, this.center.longitude],
						},
				  ]
				: [];
		},
	},

	mounted() {
		this.id = this.$route.params.id;
		this.fetchData();
	},

	methods: {
		async fetchData() {
			try {
				const res = await axios.get(
					`${process.env.VUE_APP_API_HOST}/climbing-info/${this.id}`
				);
				this.results = res.data;
				console.log(res.data);
			} catch (err) {
				console.log('error', err);
			}
		},
	},
};
</script>
