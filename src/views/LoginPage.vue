<template>
	<div class="w-full h-[55vh] flex justify-center items-center">
		<div
			class="w-1/2 h-3/4 pt-16 flex flex-col items-center gap-4 border-solid border-2 rounded-xl"
		>
			<div class="text-3xl font-bold">로그인</div>
			<input
				v-model="user_id"
				placeholder="아이디를 입력해주세요."
				class="w-1/2 mt-10 pl-3 py-2 rounded-md border-solid border-2 border-gray-300"
			/>
			<input
				v-model="user_password"
				placeholder="비밀번호를 입력해주세요."
				class="w-1/2 pl-3 py-2 rounded-md border-solid border-2 border-gray-300"
			/>
			<div class="w-full pt-10 mb-10 flex justify-center gap-10">
				<button
					@click="loginButton"
					class="px-5 py-3 bg-[#0077ff] text-white hover:bg-[#015ECC] rounded-lg text-xl font-bold"
				>
					로그인
				</button>
				<button
					@click="goSignUp"
					class="px-5 py-3 bg-[#0077ff] text-white hover:bg-[#015ECC] rounded-lg text-xl font-bold"
				>
					회원가입
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		goHome() {
			this.$router.push('/');
		},
	},
};
</script>
