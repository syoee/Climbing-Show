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

	// 컴포넌트가 생성될 때 URL에서 토큰을 가져와 저장
	created() {
		const token = this.$route.query.token; // URL 쿼리에서 토큰 생성

		if (token) {
			// 토큰을 로컬 스토리지에 저장합니다.
			localStorage.setItem('token', token);
			this.token = token;

			this.$router.push('/');
		} else {
			console.error('토큰을 받을 수 없습니다');
		}
	},
};
</script>
