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
			const url = `${process.env.VUE_APP_API_HOST}/oauth2/authorization/kakao?redirect_uri=${process.env.VUE_APP_APP_DOMAIN}/token`;
			window.open(url, '_self'); // "_self"를 사용하여 동일한 창에서 탐색
		},
	},
};
</script>
