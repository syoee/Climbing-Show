<template>
	<div class="flex flex-col items-center">
		<ul>
			<li>1. 별더링 클라이밍</li>
			<li>2. 뉴비 클라이밍</li>
		</ul>
		<div class="absolute bottom-5 right-5">
			<button
				@click="redirectToGoogleForm"
				class="px-3 py-2 bg-[#0077ff] text-white rounded-lg hover:bg-[#015ECC]"
			>
				등록하기
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			googleFormUrl: 'https://docs.google.com/forms/d/구글폼아이디/viewform', // 구글 폼 URL
		};
	},
	methods: {
		redirectToGoogleForm() {
			window.location.href = this.googleFormUrl; // 구글 폼으로 이동
		},
	},
};
</script>
