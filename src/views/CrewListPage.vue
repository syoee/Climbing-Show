<template>
	<div>
		<ul class="grid gap-4 text-xl">
			<li
				v-for="(item, index) in paginatedItems"
				:key="index"
				@click="goToCrewPage(index)"
				class="mx-5 pb-5 border-solid border-b-2"
			>
				{{ item }}
			</li>
		</ul>

		<div class="flex justify-center space-x-2 mt-4">
			<button
				v-for="page in totalPages"
				:key="page"
				@click="currentPage = page"
				:class="{
					'bg-blue-500 text-white': currentPage === page,
					'bg-gray-200': currentPage !== page,
				}"
				class="px-3 py-2 rounded-lg"
			>
				{{ page }}
			</button>
		</div>

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
			// 전체 데이터 (크루 리스트)
			items: [
				'별더링 크루',
				'뉴비 크루',
				'산타 크루',
				'나이키 크루',
				'프로 크루',
				'걸스온탑 크루',
				'서울숲 크루',
				'더클라임 크루',
				'알레 크루',
				'피커스 크루',
				'스타벅스 크루',
				'손상원 크루',
				'오프더월 크루',
			],
			itemsPerPage: 10, // 페이지당 아이템 수
			currentPage: 1, // 현재 페이지
			googleFormUrl: 'https://docs.google.com/forms/d/구글폼아이디/viewform', // 구글 폼 URL
		};
	},
	computed: {
		// 현재 페이지에 맞는 아이템 리스트 반환
		paginatedItems() {
			const start = (this.currentPage - 1) * this.itemsPerPage;
			const end = start + this.itemsPerPage;
			return this.items.slice(start, end);
		},
		// 총 페이지 수 계산
		totalPages() {
			return Math.ceil(this.items.length / this.itemsPerPage);
		},
	},
	methods: {
		// 구글 폼으로 리디렉션
		redirectToGoogleForm() {
			window.location.href = this.googleFormUrl;
		},

		goToCrewPage(index) {
			this.$router.push(`/crew/${index}`);
		},
	},
};
</script>
