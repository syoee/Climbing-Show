<template>
	<div class="mx-5">
		<div v-if="center" class="flex flex-row justify-around">
			<div class="w-1/6 mr-3">
				<div class="w-full aspect-square bg-stone-300 rounded-lg">
					<img
						:src="center.logo_url"
						alt="Center Image"
						class="w-full h-full object-cover rounded-lg"
					/>
				</div>
			</div>
			<div class="w-5/6">
				<KakaoMap :locations="searchLocations" />
				<div class="text-2xl font-bold">
					{{ center.name }}
				</div>
				<div class="text-lg font-medium">
					{{ center.address_road }}
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
			center: null,
		};
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
	},

	mounted() {
		this.id = this.$route.params.id;
		this.fetchData();
	},

	methods: {
		async fetchData() {
			try {
				const res = await axios.get(
					`${process.env.VUE_APP_API_HOST}/climbing-infos/${this.id}`
				);
				// API로부터 받은 데이터를 center 저장
				this.center = res.data;
			} catch (err) {
				console.log('error', err);
			}
		},
	},
};
</script>
