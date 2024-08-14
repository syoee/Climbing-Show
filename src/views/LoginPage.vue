<template>
	<div class="w-full h-[55vh] flex justify-center items-center">
		<div
			class="w-1/2 h-3/4 pt-16 flex flex-col items-center gap-4 border-solid border-2 rounded-xl"
		>
			<div class="text-3xl font-bold">로그인</div>
			<input
				placeholder="아이디를 입력해주세요."
				class="w-1/2 mt-10 pl-3 py-2 rounded-md border-solid border-2 border-gray-300"
			/>
			<input
				placeholder="비밀번호를 입력해주세요."
				class="w-1/2 pl-3 py-2 rounded-md border-solid border-2 border-gray-300"
			/>
			<div class="w-full pt-10 mb-10 flex justify-center gap-10">
				<button
					@click="loginButton"
					class="px-5 py-3 bg-[#0077ff] text-white rounded-lg hover:bg-[#015ECC] text-xl font-semibold"
				>
					로그인
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			user_id: '',
			user_password: '',
		};
	},

	// 컴포넌트가 생성될 때 localStorage에서 토큰을 불러옴
	created() {
		const userToken = localStorage.getItem('token');
		if (userToken) {
			this.token = userToken;
		}
	},

	methods: {
		loginButton() {
			if (!this.user_id) {
				alert('ID가 비어있습니다.');
				return;
			}
			if (!this.user_password) {
				alert('Password가 비어있습니다.');
				return;
			}
			axios
				.post(`http://localhost:8080/accounts/login`, {
					user_id: this.user_id,
					user_password: this.user_password,
				})
				.then((res) => {
					// 서버에서 받은 토큰을 localStorage에 저장
					localStorage.setItem('token', res.data.token);
					// goHome(this.$router);
				})
				.catch((err) => {
					console.log(err);
					alert('다시 확인해주세요.');
				});
		},
		goSignUp() {
			this.$router.push('/signup');
		},
	},
};
</script>
