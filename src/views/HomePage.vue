<template>
	<div class="flex flex-col items-center justify-center">
		<div
			class="mb-8 text-[#0077ff] text-3xl font-semibold sm:text-xl md:text-2xl lg:text-6xl"
		>
			클라이밍
		</div>
		show
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
