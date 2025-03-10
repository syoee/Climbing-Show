<template>
	<div v-if="climbingEvents && climbingEvents.length > 0">
		<div v-for="event in climbingEvents" :key="event.id">
			<!-- 미션 -->
			<div class="grid grid-rows-2 gap-1 justify-items-center">
				<div class="text-xl font-bold">이번 주 mission</div>
				<div class="text-3xl">
					'<span class="text-red-500 font-semibold">{{ event.title }}</span
					>'
					<span>를 잡아라!</span>
				</div>
			</div>

			<!-- 크루 랭킹 -->
			<div class="pt-12">
				<div class="flex justify-center items-center px-4">
					<div class="text-xl font-bold">크루 랭킹</div>
				</div>

				<!-- 오버레이 버튼 -->
				<div class="relative">
					<button
						@click="toggleOverlay"
						class="w-[1.2rem] bg-gray-400 text-white text-xs rounded-full absolute right-8 aspect-square"
					>
						?
					</button>
				</div>

				<!-- 랭크 설명 -->
				<div
					v-if="showOverlay"
					@click.self="closeOverlay"
					class="fixed inset-0 z-50"
				>
					<div
						class="absolute"
						:style="{
							top: `${overlayPosition.y}px`,
							left: `${overlayPosition.x}px`,
						}"
					>
						<div class="p-1 rounded-lg border">
							<div class="font-medium text-sm text-black">
								{{ overlayContent.title }}
							</div>
							<div class="text-xs text-gray-500">
								{{ overlayContent.content }}
							</div>
						</div>
					</div>
				</div>

				<!-- Top 3 -->
				<div
					class="mt-24 flex justify-center items-end text-center gap-3"
					v-if="topRanks.length > 0"
				>
					<!-- Rank 2 -->
					<div class="flex flex-col items-center" v-if="topRanks.length > 1">
						<div class="relative h-24 w-12 bg-transparent rounded-t-lg">
							<div
								class="bg-[#DDDDDE] w-full rounded-t-lg absolute bottom-0"
								:style="{
									animationDuration: `${topRanks[1]?.duration || 2}s`,
									height: `${animatedHeights[1]}%`,
								}"
							></div>
							<p
								class="absolute w-full text-gray-700 font-bold"
								:style="{ bottom: `${animatedHeights[1]}%` }"
							>
								{{ animatedScores[1] }}
							</p>
						</div>
						<p class="mt-2 text-gray-700 font-bold">
							🥈{{ topRanks[1]?.crew_info.name || '' }}
						</p>
					</div>

					<!-- Rank 1 -->
					<div class="flex flex-col items-center" v-if="topRanks.length > 0">
						<div class="relative h-32 w-16 bg-transparent rounded-t-lg">
							<div
								class="bg-[#FFD812] w-full rounded-t-lg absolute bottom-0"
								:style="{
									animationDuration: `${topRanks[0]?.duration || 2}s`,
									height: `${animatedHeights[0]}%`,
								}"
							></div>
							<p
								class="absolute w-full text-gray-700 font-bold"
								:style="{ bottom: `${animatedHeights[0]}%` }"
							>
								{{ animatedScores[0] }}
							</p>
						</div>
						<p class="mt-2 text-gray-700 font-bold">
							🥇{{ topRanks[0]?.crew_info.name || '' }}
						</p>
					</div>

					<!-- Rank 3 -->
					<div class="flex flex-col items-center" v-if="topRanks.length > 2">
						<div class="relative h-20 w-12 bg-transparent rounded-t-lg">
							<div
								class="bg-[#CE7A28] w-full rounded-t-lg absolute bottom-0"
								:style="{
									animationDuration: `${topRanks[2]?.duration || 2}s`,
									height: `${animatedHeights[2]}%`,
								}"
							></div>
							<p
								class="absolute w-full text-gray-700 font-bold"
								:style="{ bottom: `${animatedHeights[2]}%` }"
							>
								{{ animatedScores[2] }}
							</p>
						</div>
						<p class="mt-2 text-gray-700 font-bold">
							🥉{{ topRanks[2]?.crew_info.name || '' }}
						</p>
					</div>
				</div>

				<!-- 랭크 리스트 -->
				<div class="space-y-4">
					<div
						v-for="(crew, index) in paginatedRanks"
						:key="crew.crew_info.id"
						class="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
					>
						<div class="flex items-center space-x-4">
							<span class="text-lg font-semibold w-12">
								{{ index + currentPage * pageSize + 4 }}위
							</span>
							<img
								:src="crew.crew_info.profile"
								:alt="crew.crew_info.name"
								class="w-12 h-12 rounded-full object-cover"
								loading="lazy"
							/>
							<div>
								<div class="font-bold">{{ crew.crew_info.name }}</div>
								<div class="text-sm text-gray-500">
									크루장: {{ crew.crew_info.crew_owner_member.name }}
								</div>
							</div>
						</div>
						<div class="text-xl font-bold text-blue-600">
							{{ crew.score }}점
						</div>
					</div>
				</div>

				<!-- 페이지네이션 -->
				<div class="mt-8 flex flex-col justify-between items-center">
					<div class="flex space-x-2">
						<button
							@click="changePage(currentPage - 1)"
							:disabled="currentPage === 0"
							class="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
						>
							이전
						</button>

						<button
							v-for="page in displayedPages"
							:key="page"
							@click="changePage(page - 1)"
							:class="[
								'px-4 py-2 rounded-lg',
								currentPage === page - 1
									? 'bg-blue-500 text-white'
									: 'bg-gray-100 hover:bg-gray-200',
							]"
						>
							{{ page }}
						</button>

						<button
							@click="changePage(currentPage + 1)"
							:disabled="currentPage === totalPages - 1"
							class="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
						>
							다음
						</button>
					</div>
				</div>

				<!-- 점수 기록 버튼 -->
				<div class="fixed bottom-20 right-5">
					<button
						@click="togglePopup"
						class="w-10 bg-black text-red-600 text-2xl font-bold rounded-full aspect-square"
					>
						+
					</button>
				</div>

				<!-- 점수 기록 팝업 -->
				<div
					v-if="isPopupVisible"
					class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
				>
					<div @click.stop class="bg-white p-6 rounded-lg shadow-lg w-80">
						<h2 class="text-lg font-bold mb-4">점수 기록</h2>

						<!-- 암장 체크  -->
						<div>
							<label class="block mb-1 text-md font-medium text-gray-700">
								방문한 클라이밍장을 선택해주세요!
							</label>
							<div
								v-for="gym in event.climbing_info_list"
								:key="gym.id"
								class="flex items-center"
							>
								<input
									type="checkbox"
									:value="gym.id"
									:checked="selectedGyms === gym.id"
									@click="selectSingleGym(gym.id)"
									class="h-5 w-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
								/>
								<label class="ml-2 text-sm font-medium text-gray-900">
									{{ gym.name }}
								</label>
							</div>
						</div>

						<!-- 난이도 점수 입력 -->
						<div class="mb-4">
							<!--Sort-->
							<div
								class="grid grid-cols-3 mb-3 font-medium text-md text-center"
							>
								<div class="flex justify-start">난이도</div>
								<div>개수</div>
								<div class="flex justify-end">점수</div>
							</div>
						</div>
						<div
							v-for="info in event.climbing_info_list.slice(0, 1)"
							:key="info.id"
						>
							<div v-for="grade in info.climbing_level_list" :key="grade.id">
								<div class="mb-2 grid grid-cols-8 items-center">
									<!-- 난이도 색상 표시 -->
									<div
										class="w-1/2 ml-1 flex aspect-square rounded-full border col-span-2"
										:style="{ backgroundColor: grade?.color }"
									></div>

									<!-- 개수 조정 -->
									<div class="flex justify-evenly items-center col-span-4">
										<button
											type="button"
											class="w-1/4 bg-black text-white px-2 py-1 rounded-lg"
											@click.prevent="decreaseCount(grade?.level)"
											style="touch-action: manipulation"
											:disabled="solvedCounts[grade?.level] === 0"
										>
											-
										</button>
										<span class="mx-2">{{
											solvedCounts[grade?.level] || 0
										}}</span>
										<button
											type="button"
											class="w-1/4 bg-black text-white px-2 py-1 rounded-lg"
											@click.prevent="increaseCount(grade?.level)"
											style="touch-action: manipulation"
											:disabled="solvedCounts[grade?.level] >= 30"
										>
											+
										</button>
									</div>

									<!-- 난이도 총합 -->
									<div class="text-right mr-1 items-center col-span-2">
										{{ solvedCounts[grade?.level] * grade?.level }}점
									</div>
								</div>
							</div>
						</div>

						<!-- 총합 점수 -->
						<div class="mt-8 mb-3 text-right text-lg">
							<span class="text-gray-700 font-bold">총합 점수: </span>
							<span class="text-red-500 font-black">
								{{ totalUserScore }}점
							</span>
						</div>

						<!-- 저장 버튼 -->
						<div class="flex justify-end">
							<button
								@click="saveScore"
								class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
							>
								저장
							</button>
							<button
								@click="togglePopup"
								class="ml-2 bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
							>
								취소
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			climbingEvents: [], // API에서 받은 데이터
			selectedGyms: null, // 체크된 암장 ID 배열
			solvedCounts: {}, // 암장별 난이도 개수
			allRanks: [], // 전체 랭킹 데이터
			currentPage: 0,
			pageSize: 3,
			totalPages: 0,
			savedHistory: [], // 저장된 기록을 저장할 배열
			showOverlay: false, // 오버레이 표시 여부
			overlayPosition: { x: 0, y: 0 }, // 오버레이 위치
			overlayContent: {
				title: '크루 랭킹 정보',
				content: '점수는 난이도 순서로 측정됩니다.',
			},
			animatedScores: [0, 0, 0], // Top 3 애니메이션 점수 초기화
			animatedHeights: [0, 0, 0], // 게이지 높이 퍼센트 초기화
			isPopupVisible: false,
		};
	},

	async mounted() {
		// 먼저 데이터를 가져온 후 애니메이션 시작
		await this.eventData();
		await this.fetchRanks();

		// content 데이터가 있고 topRanks가 유효한 경우에만 애니메이션 실행
		if (this.topRanks && this.topRanks.length > 0) {
			this.topRanks.forEach((rank, index) => {
				if (rank) {
					this.animateScore(index, rank.score, rank.duration || 2);
				}
			});
		}
	},

	computed: {
		// 점수 측정
		sortedRanks() {
			return this.content && Array.isArray(this.content)
				? [...this.content].sort((a, b) => b.score - a.score)
				: [];
		},

		// Top 3 랭킹
		topRanks() {
			return this.allRanks.slice(0, 3).map((rank, index) => ({
				...rank,
				rank: index + 1,
			}));
		},

		paginatedRanks() {
			const start = this.currentPage * this.pageSize; // 현재 페이지에 따라 시작 인덱스 계산
			const end = start + this.pageSize;
			return this.allRanks.slice(3 + start, 3 + end); // 4위 이후 데이터
		},

		displayedPages() {
			const range = 2;
			let start = Math.max(1, this.currentPage - range);
			let end = Math.min(this.totalPages, this.currentPage + range + 1);

			if (start === 1) end = Math.min(5, this.totalPages);
			if (end === this.totalPages) start = Math.max(1, this.totalPages - 4);

			return Array.from({ length: end - start + 1 }, (_, i) => start + i);
		},

		// 난이도 별로 id가 높기 때문에 id 대신 level 사용
		// 전체 점수 합산
		totalUserScore() {
			let totalScore = 0;

			// solvedCounts 객체의 각 난이도별로 점수 계산
			Object.entries(this.solvedCounts).forEach(([level, count]) => {
				const score = count * Number(level);
				totalScore += score;
			});
			return totalScore;
		},
	},

	methods: {
		// 랭킹 시스템
		async fetchRanks() {
			try {
				const response = await this.$axios.get(
					`${process.env.VUE_APP_API_HOST}/climbing-events/rank`,
					{
						params: {
							climbing_event_id: 1,
							size: 50, // 전체 데이터 가져오기
							page: 0, // 첫 페이지
						},
					}
				);

				const { content } = response.data;

				// API 응답 데이터 검증
				if (Array.isArray(content)) {
					this.allRanks = content; // 전체 랭킹 데이터 저장
					// 전체 데이터 수에서 3을 빼고 페이지당 항목 수로 나누기
					this.totalPages = Math.ceil((content.length - 3) / this.pageSize);
				} else {
					console.error('Invalid API response format:', response.data);
				}
			} catch (error) {
				console.error('랭킹 조회 실패:', error);
			}
		},

		changePage(page) {
			if (page < 0 || page >= this.totalPages) return;
			this.currentPage = page; // 현재 페이지 업데이트
		},

		// 이벤트 암장 정보
		async eventData() {
			try {
				const res = await axios.get(
					`${process.env.VUE_APP_API_HOST}/climbing-events/during`
				);

				this.climbingEvents = res.data;

				// solvedCounts 초기화
				this.climbingEvents.forEach((event) => {
					event.climbing_info_list.forEach((info) => {
						info.climbing_level_list.forEach((grade) => {
							if (!this.solvedCounts[grade.level]) {
								this.solvedCounts[grade.level] = 0;
							}
						});
					});
				});
			} catch (error) {
				console.error('요청 설정 오류', error.message);
				this.climbingEvents = []; // 에러 시 빈 배열로 초기화
			}
		},

		toggleOverlay(event) {
			// 클릭한 위치 기준으로 오버레이 표시
			this.showOverlay = !this.showOverlay;

			if (this.showOverlay) {
				// 오버레이 위치 설정
				this.overlayPosition = {
					x: event.clientX - 180,
					y: event.clientY + 10,
				};

				// 5초 뒤 오버레이 숨김
				setTimeout(() => {
					this.closeOverlay();
				}, 3000);
			}
		},

		closeOverlay() {
			// 오버레이 닫기
			this.showOverlay = false;
		},

		// 점수 애니메이션
		animateScore(index, targetScore, duration) {
			if (targetScore === undefined || targetScore === null) {
				console.warn(`Target score is undefined for index ${index}`);
				return;
			}

			const stepTime = (duration * 1000) / targetScore;
			let currentScore = 0;

			const interval = setInterval(() => {
				if (currentScore >= targetScore) {
					clearInterval(interval);
					this.animatedScores[index] = targetScore;
					this.animatedHeights[index] = 100;
				} else {
					currentScore += 1;
					this.animatedScores[index] = currentScore;
					this.animatedHeights[index] = (currentScore / targetScore) * 100;
				}
			}, Math.max(stepTime, 10)); // 최소 10ms 간격으로 제한
		},

		// 팝업 표시/숨기기
		async togglePopup() {
			this.isPopupVisible = !this.isPopupVisible;

			if (this.isPopupVisible && this.climbingEvents.length > 0) {
				const currentEvent = this.climbingEvents[0];

				try {
					const response = await axios.get(
						`${process.env.VUE_APP_API_HOST}/climbing-events/history`,
						{
							params: {
								climbing_event_id: currentEvent.id,
							},
							headers: {
								Authorization: `Bearer ${localStorage.getItem('token')}`,
							},
						}
					);

					this.savedHistory = response.data;

					if (this.savedHistory.length > 0) {
						// solvedCounts 초기화
						this.solvedCounts = {};

						// 먼저 solved_count가 0보다 큰 첫 번째 기록을 찾아 암장 선택
						const firstNonZeroRecord = this.savedHistory.find(
							(record) => record.solved_count > 0
						);

						if (firstNonZeroRecord) {
							// 해당 레벨이 속한 암장 찾기
							for (const gym of currentEvent.climbing_info_list) {
								const hasLevel = gym.climbing_level_list.some(
									(level) => level.id === firstNonZeroRecord.climbing_level.id
								);
								if (hasLevel) {
									this.selectedGyms = gym.id;
									break;
								}
							}
						}

						// 선택된 암장의 레벨별 solved_count 매핑
						this.updateSolvedCountsForGym(this.selectedGyms);
					}
				} catch (error) {
					console.error('기록 조회 실패:', error);
					this.resetPopupData();
				}
			} else {
				this.resetPopupData();
			}
		},

		// 암장 선택
		selectSingleGym(gymId) {
			this.selectedGyms = gymId;
			// 암장 변경 시 해당 암장의 레벨별 solved_count 업데이트
			this.updateSolvedCountsForGym(gymId);
		},

		// 개수 업데이트
		updateSolvedCountsForGym(gymId) {
			if (!this.climbingEvents.length) return;

			const currentEvent = this.climbingEvents[0];
			const selectedGym = currentEvent.climbing_info_list.find(
				(gym) => gym.id === gymId
			);

			if (!selectedGym) return;

			// solvedCounts 초기화
			this.solvedCounts = {};

			// 선택된 암장의 모든 레벨을 0으로 초기화
			selectedGym.climbing_level_list.forEach((level) => {
				this.solvedCounts[level.level] = 0;
			});

			// 저장된 기록에서 현재 선택된 암장의 레벨에 해당하는 solved_count 찾기
			if (this.savedHistory && Array.isArray(this.savedHistory)) {
				selectedGym.climbing_level_list.forEach((gymLevel) => {
					const record = this.savedHistory.find(
						(history) =>
							history.climbing_level &&
							history.climbing_level.id === gymLevel.id
					);
					if (record) {
						this.solvedCounts[gymLevel.level] = record.solved_count;
					}
				});
			}
		},

		// 취소 버튼
		resetPopupData() {
			this.selectedGyms = null;
			this.solvedCounts = {};

			// solvedCounts 초기화
			if (this.climbingEvents.length > 0) {
				this.climbingEvents.forEach((event) => {
					event.climbing_info_list.forEach((info) => {
						info.climbing_level_list.forEach((grade) => {
							this.solvedCounts[grade.level] = 0;
						});
					});
				});
			}
		},

		// 개수 증가 버튼
		increaseCount(level) {
			if (!this.solvedCounts[level]) {
				this.solvedCounts[level] = 0;
			}
			if (this.solvedCounts[level] < 30) {
				this.solvedCounts[level]++;
			}
		},

		// 개수 감소 버튼
		decreaseCount(level) {
			if (this.solvedCounts[level] > 0) {
				this.solvedCounts[level]--;
			}
		},

		// 점수 저장
		async saveScore() {
			if (!this.climbingEvents.length || !this.selectedGyms) {
				alert('암장을 선택해주세요.');
				return;
			}

			try {
				const currentEvent = this.climbingEvents[0];
				const selectedGym = currentEvent.climbing_info_list.find(
					(info) => info.id === this.selectedGyms
				);

				if (!selectedGym) {
					alert('선택된 암장 정보를 찾을 수 없습니다.');
					return;
				}

				// climbing_level_list 구성 - solved_count가 0보다 큰 항목만 포함
				const climbing_level_list = [];
				selectedGym.climbing_level_list.forEach((level) => {
					const solved_count = this.solvedCounts[level.level] || 0;
					if (solved_count > 0) {
						climbing_level_list.push({
							climbing_level_id: level.id,
							solved_count: solved_count,
						});
					}
				});

				if (climbing_level_list.length === 0) {
					alert('저장할 점수가 없습니다.');
					return;
				}

				// 요청 데이터 구성
				const requestData = {
					climbing_event_id: currentEvent.id, // 이벤트 ID 추가
					climbing_info_list_id: this.selectedGyms,
					climbing_level_list,
				};

				const response = await axios.post(
					`${process.env.VUE_APP_API_HOST}/climbing-events/history`,
					requestData,
					{
						headers: {
							Authorization: `Bearer ${localStorage.getItem('token')}`,
							'Content-Type': 'application/json',
						},
					}
				);

				if (response.status === 200 || response.status === 201) {
					alert('점수가 성공적으로 저장되었습니다!');
					this.togglePopup();
				}
			} catch (error) {
				console.error('점수 저장 실패:', error.response?.data || error);
				if (error.response?.data?.message) {
					alert(error.response.data.message);
				} else {
					alert('점수 저장에 실패했습니다. 입력 데이터를 확인해주세요.');
				}
			}
		},
	},
};
</script>
