<template>
	<div class="m-5 grid grid-cols-3">
		<div class="flex justify-start">
			<button @click="goHome" class="text-[#E93A79] text-3xl font-bold">
				Climbing Show
			</button>
		</div>
		<div class="flex justify-center">
			<input
				v-model="searchQuery"
				type="text"
				placeholder="암장을 검색해보세요!"
				class="w-3/5 pl-2 border-2 border-gray-400 rounded-lg"
			/>
		</div>
		<div class="flex justify-end">
			<button
				@click="goLogin"
				class="w-1/4 px-3 flex justify-center items-center bg-[#E93A79] text-white rounded-lg hover:bg-[ff0059]"
			>
				로그인
			</button>
		</div>
	</div>
	<hr />
</template>

<script>
export default {
	methods: {
		goHome() {
			this.$router.push('/');
		},
		goLogin() {
			this.$router.push('/login');
		},
	},
};
</script>
