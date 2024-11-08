<template>
	<div>
		<img
			src="https://velog.velcdn.com/images/syo_ee/post/5d775166-fdd0-4b37-a889-243751283386/image.jpg"
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
	},
};
</script>
