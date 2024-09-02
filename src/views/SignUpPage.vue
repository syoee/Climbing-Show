<template>
	<div class="w-full h-[70vh] flex justify-center items-center">
		<div
			class="w-5/6 h-3/4 py-16 flex flex-col items-center gap-10 border-solid border-2 rounded-xl"
		>
			<div class="text-4xl font-bold">회원가입</div>
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
			<button
				@click="signUp"
				class="px-5 py-3 mt-10 text-white hover:bg-blue-800 bg-blue-600 rounded-lg text-4xl font-bold"
			>
				회 원 가 입
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user_id: '',
			user_password: '',
		};
	},
	methods: {
		signUp() {
			if (!this.user_id) {
				alert('ID가 비어있습니다.');
				return;
			}
			if (!this.user_password) {
				alert('Password가 비어있습니다.');
				return;
			}
		},
	},
};
</script>
