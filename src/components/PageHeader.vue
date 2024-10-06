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
			searchQuery: '',
			token: null,
			currentQuery: null, // 현재 페이지의 쿼리를 저장할 변수
		};
	},

	created() {
		this.token = localStorage.getItem('token');
	},

	watch: {
		token(newValue) {
			// token 값이 변할 때마다 localStorage에 저장
			if (newValue === null) {
				localStorage.removeItem('token');
			} else {
				localStorage.setItem('token', newValue);
			}
		},
	},

	computed: {
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
			if (this.token === null) {
				const path = this.$route.path;
				const query = this.$route.query;
				// query 객체를 URLSearchParams로 변환
				const queryString = query ? new URLSearchParams(query).toString() : '';

				// 쿼리 문자열을 포함한 현재 경로를 로컬 스토리지에 저장
				const fullPath = queryString
					? `${path}?${decodeURIComponent(queryString)}`
					: path;

				localStorage.setItem('currentQuery', fullPath);

				this.$router.push('/login');
			} else {
				this.token = null;
				localStorage.removeItem('token');
				alert('로그아웃 되었습니다.');
			}
		},
		goSearch() {
			if (this.searchQuery.trim() !== '') {
				this.$router.push({ path: '/search', query: { q: this.searchQuery } });
			}
		},
	},
};
</script>
