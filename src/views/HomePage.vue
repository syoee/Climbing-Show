<template>
	<div class="flex justify-center items-center">
		<img
			src="https://velog.velcdn.com/images/syo_ee/post/393dddb6-15db-4ddd-b1b9-fb0fd178861e/image.jpg"
			alt="goToHomePageIcon"
			@click="goHome"
			class="w-1/4 absolute top-2 left-3"
		/>
		<img
			src="https://velog.velcdn.com/images/syo_ee/post/963ce5ab-aec2-4750-b69e-908789de39a2/image.png"
			alt="homeImg"
			class="w-[40vh] h-[80vh] object-contain"
		/>
	</div>
</template>

<script>
export default {
	methods: {
		// 검색 메소드
		goSearch() {
			if (this.searchQuery.trim() !== '') {
				this.$router.push({ path: '/search', query: { q: this.searchQuery } });
			}
		},

		goHome() {
			this.$router.push('/');
		},
	},
};
</script>
