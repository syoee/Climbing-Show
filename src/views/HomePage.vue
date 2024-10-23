<template>
	<div class="flex flex-col items-center justify-center">
		<div
			class="mb-8 text-[#0077ff] text-3xl font-semibold sm:text-xl md:text-2xl lg:text-6xl"
		>
			클라이밍
		</div>
		show
		<!-- <div class="flex justify-center sm:h-10 sm:text-xs sm:justify-between">
			<input
				@keyup.enter="goSearch"
				v-model="searchQuery"
				type="text"
				placeholder="크루 검색"
				class="w-2/3 pl-2 border-2 border-gray-400 rounded-lg sm:w-32"
			/>
			<button
				@click="goSearch"
				class="w-1/12 h-1/6 rounded-full hover:bg-[#015ECC] sm:w-1/6"
			>
				<img
					src="https://velog.velcdn.com/images/syo_ee/post/31625dd1-f3a2-4155-b8ba-c435b898a535/image.ico"
					alt="logo"
				/>
			</button>
		</div> -->
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
