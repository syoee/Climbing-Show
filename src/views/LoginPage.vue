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
		goKakaoLogin() {
			this.$router.push('/');
		},
	},
};
</script>
