<template>
	<div>
		<ul class="grid gap-4 text-xl">
			<li
				v-for="item in paginatedItems"
				:key="item.id"
				@click="goToCrewPage(item.id)"
				class="mx-5 pb-3 border-solid border-b-2 cursor-pointer"
			>
				<div class="grid grid-cols-5">
					<img
						:src="item.profile"
						alt="profile img"
						class="aspect-square object-cover rounded-full"
					/>
					<div class="pl-3 col-span-3">
						<div class="text-xl font-bold">
							{{ item.name }}
						</div>
						<div class="text-sm text-gray-400">{{ item.description }}</div>
					</div>
				</div>
			</li>
		</ul>

		<div class="flex justify-center space-x-2 mt-4">
			<button
				v-for="page in totalPages"
				:key="page"
				@click="currentPage = page"
				:class="{
					'bg-black text-red-600': currentPage === page,
					'bg-gray-200': currentPage !== page,
				}"
				class="px-3 py-2 rounded-lg"
			>
				{{ page }}
			</button>
		</div>

		<div class="absolute bottom-20 right-5">
			<button
				@click="redirectToGoogleForm"
				class="px-2 py-1 bg-black text-red-600 font-semibold rounded-lg"
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
			items: [], // items를 배열로 초기화
			pageInfo: {
				total_pages: 1,
				total_elements: 0,
				size: 5,
				number: 0,
			},
			currentPage: 1, // 현재 페이지 (1부터 시작)
			googleFormUrl:
				'https://docs.google.com/forms/d/e/1FAIpQLSfngNNiG1K-6cCTRDJwhC_EROtq-RlZ1euRXddUepd5xfo08Q/viewform?usp=sf_link',
		};
	},

	created() {
		// 컴포넌트가 생성될 때 API 호출
		this.getData();
		const userToken = localStorage.getItem('token');
		if (userToken) {
			this.token = userToken;
		}
	},

	computed: {
		// 현재 페이지에 맞는 아이템 리스트 반환
		paginatedItems() {
			const start = (this.currentPage - 1) * this.pageInfo.size;
			const end = start + this.pageInfo.size;
			// items가 배열일 때만 slice 사용
			return Array.isArray(this.items) ? this.items.slice(start, end) : [];
		},
		// 총 페이지 수 반환
		totalPages() {
			return this.pageInfo.total_pages;
		},
	},

	methods: {
		// 구글 폼으로 리디렉션
		redirectToGoogleForm() {
			if (!this.token) {
				alert('로그인이 필요합니다');
				this.$router.push('/login');
				return;
			} else {
				window.location.href = this.googleFormUrl;
			}
		},

		// 크루 페이지로 이동
		goToCrewPage(crewId) {
			this.$router.push({ path: `/crew-infos/${crewId}` });
		},

		// API를 통해 데이터 가져오기
		async getData() {
			// 현재 라우트의 쿼리 매개변수에서 검색 쿼리(q)를 가져옴
			const crewSearch = this.$route.query.q || '';

			try {
				const response = await axios.get(
					`${process.env.VUE_APP_API_HOST}/crew-infos`,
					{
						params: {
							searchType: 'NAME',
							searchValue: crewSearch,
						},
					}
				);
				// API에서 데이터를 받아서 items에 저장 (배열 타입인지 확인)
				this.items = Array.isArray(response.data.crew_info_list)
					? response.data.crew_info_list
					: []; // 배열이 아닌 경우 빈 배열 할당

				// 페이지 정보 업데이트
				this.pageInfo = response.data.page_info;
				this.currentPage = this.pageInfo.number + 1; // 현재 페이지 번호 설정 (1부터 시작)
			} catch (error) {
				console.error('데이터 가져오는 중 오류 발생:', error);
			}
		},

		// 페이지 변경
		changePage(page) {
			this.currentPage = page;
			this.getData(page - 1); // API에서 페이지 번호는 0부터 시작하므로 1을 뺌
		},
	},
};
</script>
