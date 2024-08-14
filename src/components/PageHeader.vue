<template>
	<div class="m-5 grid grid-cols-3">
		<div class="flex justify-start">
			<button @click="goHome" class="text-[#E93A79] text-3xl font-bold">
				Climbing Show
			</button>
		</div>
		<div class="flex justify-center">
			<input
				@keyup.enter="goSearch"
				v-model="searchQuery"
				type="text"
				placeholder="암장을 검색해보세요!"
				class="w-2/3 pl-2 border-2 border-gray-400 rounded-lg"
			/>
			<button
				@click="goSearch"
				class="ml-3 px-3 py-2 flex justify-center items-center bg-[#E93A79] text-white rounded-lg hover:bg-[ff0059]"
			>
				검 색
			</button>
		</div>
		<div class="flex justify-end">
			<button
				@click="goLogin"
				class="w-1/4 p-2 flex justify-center items-center bg-[#E93A79] text-white rounded-lg hover:bg-[ff0059]"
			>
				로그인
			</button>
		</div>
	</div>
	<hr class="mb-5" />
</template>

<script>
export default {
	data() {
		return {
			searchQuery: '', // 검색어를 저장할 변수
		};
	},

	methods: {
		goHome() {
			this.$router.push('/');
		},
		goLogin() {
			this.$router.push('/login');
		},
		goSearch() {
			if (this.searchQuery.trim() !== '') {
				// 검색어가 비어있지 않을 때만 검색 실행
				this.$router.push({ path: '/search', query: { q: this.searchQuery } });
			}
		},
	},
};
</script>
