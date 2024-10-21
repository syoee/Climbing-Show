<template>
	<div>
		<ul class="grid gap-4 text-xl">
			<li
				v-for="item in paginatedItems"
				:key="item.id"
				@click="goToCrewPage(item.id)"
				class="mx-5 pb-5 border-solid border-b-2 cursor-pointer"
			>
				{{ item.name }}
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
import axios from 'axios';

export default {
	data() {
		return {
			items: [], // API에서 받아올 데이터를 저장할 배열
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

	created() {
		// 컴포넌트가 생성될 때 API 호출
		this.getData();
	},

	methods: {
		// 구글 폼으로 리디렉션
		redirectToGoogleForm() {
			window.location.href = this.googleFormUrl;
		},

		// 크루 페이지로 이동
		goToCrewPage(boardId) {
			this.$router.push({ path: `/boards/${boardId}` });
		},

		// API를 통해 데이터 가져오기
		async getData() {
			try {
				const response = await axios.get(
					`${process.env.VUE_APP_API_HOST}/boards`
				);
				// API에서 데이터를 받아서 items에 저장
				this.items = response.data;
			} catch (error) {
				console.error('데이터 가져오는 중 오류 발생:', error);
			}
		},
	},
};
</script>
