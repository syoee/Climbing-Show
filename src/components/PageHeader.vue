<template>
	<div
		class="px-5 pt-3 pb-5 grid grid-cols-2 fixed top-0 right-0 z-10 bg-white"
	>
		<div class="flex justify-start">
			<img
				src="https://velog.velcdn.com/images/syo_ee/post/9ca1e775-7412-4abf-98e5-fd15bd082f17/image.jpg"
				alt="logo"
				@click="goHome"
				class="w-1/2"
			/>
		</div>

		<div class="flex justify-end">
			<button
				@click="goLogin"
				class="h-[4vh] px-2 py-1 bg-black text-red-600 font-semibold rounded-lg"
			>
				{{ tokenButton }}
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchQuery: '',
			token: localStorage.getItem('token') || null, // 토큰을 데이터에서 초기화하여 반응성 확보
			currentQuery: null, // 현재 페이지의 쿼리를 저장할 변수
		};
	},

	created() {
		// 컴포넌트가 생성될 때 로컬 스토리지에서 토큰을 가져와 설정
		this.token = localStorage.getItem('token');
		this.updateTokenButton(); // 토큰 값에 따라 버튼 텍스트 업데이트
	},

	watch: {
		// 토큰 값이 변경될 때마다 호출
		token() {
			this.updateTokenButton();
		},
	},

	computed: {
		// 토큰 값에 따라 버튼 텍스트를 동적으로 반환
		tokenButton() {
			return this.token === null ? '로그인' : '로그아웃';
		},
	},

	methods: {
		// 버튼 텍스트를 업데이트하는 메소드
		updateTokenButton() {
			this.tokenButton = this.token === null ? '로그인' : '로그아웃';
		},

		// 홈으로 이동하는 메소드
		goHome() {
			this.searchQuery = '';
			this.$router.push('/');
		},

		// 로그인, 로그아웃 메소드
		goLogin() {
			if (this.token === null) {
				// 현재 경로와 쿼리 저장
				const path = this.$route.path;
				const query = this.$route.query;
				// query 객체를 URLSearchParams로 변환
				const queryString = query ? new URLSearchParams(query).toString() : '';

				// 쿼리 문자열을 포함한 현재 경로를 로컬 스토리지에 저장
				const fullPath = queryString
					? `${path}?${decodeURIComponent(queryString)}`
					: path;

				localStorage.setItem('currentQuery', fullPath);

				this.$router.push('/login'); // 로그인 페이지로 이동
			} else {
				this.token = null; // 토큰 값 제거
				localStorage.removeItem('token'); // 로컬 스토리지에서 토큰 제거
				alert('로그아웃 되었습니다.'); // 로그아웃 알림
				window.location.reload(); // 새로고침을 통해 상태 업데이트
			}
		},
	},
};
</script>
