<template>
	<div class="w-full h-[55vh] flex justify-center items-center">
		<button @click="goKakaoLogin">
			<img src="../assets/kakao_login_medium_wide.png" alt="login Img" />
		</button>
	</div>
</template>

<script>
export default {
	methods: {
		// 카카오 로그인 메소드
		goKakaoLogin() {
			// 카카오 로그인 창 열기
			window.open(
				`${process.env.VUE_APP_API_HOST}/oauth2/authorization/kakao?redirect_uri=${process.env.VUE_APP_APP_DOMAIN}/token`
			);

			// 저장된 쿼리를 가져와서 원래 페이지로 리디렉션
			const currentQuery = localStorage.getItem('currentQuery');
			if (currentQuery) {
				this.$router.push(currentQuery); // 저장된 쿼리로 이동
				localStorage.removeItem('currentQuery'); // 사용 후 쿼리 제거
			}
		},
	},
};
</script>
