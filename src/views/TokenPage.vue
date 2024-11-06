<template>
	<div>
		<h1>토큰 수신 페이지</h1>
		<p>로그인 중입니다. 잠시 기다려 주세요...</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			token: null,
		};
	},

	created() {
		const token = this.$route.query.token; // URL 쿼리에서 토큰 생성

		if (token) {
			// 토큰을 로컬 스토리지에 저장
			localStorage.setItem('token', token);
			this.token = token;

			window.close();
		} else {
			alert('로그인에 실패했습니다.');
			window.close();
		}
	},
};
</script>
