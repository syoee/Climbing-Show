<template>
	<div class="m-5 grid grid-cols-3">
		<div class="flex justify-start">
			<button
				@click="goHome"
				class="text-[#0077ff] text-4xl sm:text-sm md:text-xl font-bold"
			>
				Climbing Show
			</button>
		</div>
		<div class="flex justify-center sm:h-10 sm:text-xs sm:justify-between">
			<input
				@keyup.enter="goSearch"
				v-model="searchQuery"
				type="text"
				placeholder="암장을 검색해보세요!"
				class="w-2/3 pl-2 border-2 border-gray-400 rounded-lg sm:w-32"
			/>
			<button
				@click="goSearch"
				class="ml-3 px-3 py-2 flex justify-center items-center bg-[#0077ff] text-white rounded-lg hover:bg-[#015ECC] sm:w-1/6"
			>
				검 색
			</button>
		</div>
		<div class="flex justify-end">
			<button
				@click="goLogin"
				class="px-3 py-2 bg-[#0077ff] text-white rounded-lg hover:bg-[#015ECC]"
			>
				{{ tokenButton }}
			</button>
		</div>
	</div>
	<hr class="mb-5" />
</template>

<script>
export default {
	data() {
		return {
			// 검색어를 저장할 변수
			searchQuery: '',
			token: null,
		};
	},

	computed: {
		// token의 상태에 따라 버튼 텍스트를 결정하는 계산된 속성
		tokenButton() {
			return this.token === null ? '로그인' : '로그아웃';
		},
	},

	methods: {
		goHome() {
			this.searchQuery = '';
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
