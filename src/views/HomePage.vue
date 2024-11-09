<template>
	<div>
		<img
			src="https://velog.velcdn.com/images/syo_ee/post/393dddb6-15db-4ddd-b1b9-fb0fd178861e/image.jpg"
			alt="goToHomePageIcon"
			@click="goHome"
			class="w-1/3 absolute top-2 left-3"
		/>
		<img
			src="https://velog.velcdn.com/images/syo_ee/post/42aee114-d0e8-4190-8b27-bd7a940872df/image.jpg"
			alt="homeImg"
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
