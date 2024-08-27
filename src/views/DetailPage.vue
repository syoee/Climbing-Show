<template>
	<div class="mx-5">
		<div class="flex flex-row justify-around">
			<div class="w-1/4 mr-3">
				<div class="w-full aspect-square bg-stone-300 rounded-lg">
					사진들어갈 자리
				</div>
				<ul class="mt-5">
					<li class="bg-emerald-300">
						<div
							class="w-full aspect-square border-2 border-neutral-400 rounded-lg"
						>
							해당 센터 주위 암장 로고
						</div>
						<div class="border-2 border-neutral-400 text-xl font-semibold">
							해당 센터 주위 암장 이름
						</div>
						<div class="mt-1 border-2 border-neutral-400 text-lg font-normal">
							해당 센터 주위 암장 주소
						</div>
						<!-- <img
							:src="center.logo_url"
							:alt="center.name"
							class="w-1/12 h-1/12 mr-3 object-contain"
						/> -->
					</li>
				</ul>
			</div>
			<div class="w-3/4">
				<div class="mb-3 h-1/2 bg-violet-300 rounded-lg">KakaoMap</div>
				<div class="bg-blue-500 text-2xl font-bold">검색 센터 암장 이름</div>
				<div class="bg-blue-500 text-lg font-medium">검색 센터 암장 주소</div>
			</div>
			<!-- <KakaoMap /> -->
		</div>
	</div>
</template>

<script>
// import KakaoMap from '@/components/KakaoMap.vue';

export default {
	// components: {
	// 	KakaoMap,
	// },

	data() {
		return {
			id: null,
		};
	},

	mounted() {
		this.id = this.$route.params.id;
	},
};
</script>
