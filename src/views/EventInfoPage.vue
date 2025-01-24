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
							top: `${this.overlayPosition.y}px`,
							left: `${this.overlayPosition.x}px`,
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
				<div class="mt-24 flex justify-center items-end text-center gap-3">
					<!-- Rank 2 -->
					<div class="flex flex-col items-center">
						<div class="relative h-24 w-12 bg-transparent rounded-t-lg">
							<div
								class="bg-[#DDDDDE] w-full rounded-t-lg absolute bottom-0"
								:style="{
									animationDuration: `${topRanks[1].duration}s`,
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
						<p class="mt-2 text-gray-700 font-bold">🥈{{ topRanks[1].name }}</p>
					</div>

					<!-- Rank 1 -->
					<div class="flex flex-col items-center">
						<div class="relative h-32 w-16 bg-transparent rounded-t-lg">
							<div
								class="bg-[#FFD812] w-full rounded-t-lg absolute bottom-0"
								:style="{
									animationDuration: `${topRanks[0].duration}s`,
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
						<p class="mt-2 text-gray-700 font-bold">🥇{{ topRanks[0].name }}</p>
					</div>

					<!-- Rank 3 -->
					<div class="flex flex-col items-center">
						<div class="relative h-20 w-12 bg-transparent rounded-t-lg">
							<div
								class="bg-[#CE7A28] w-full rounded-t-lg absolute bottom-0"
								:style="{
									animationDuration: `${topRanks[2].duration}s`,
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
						<p class="mt-2 text-gray-700 font-bold">🥉{{ topRanks[2].name }}</p>
					</div>
				</div>

				<!-- 랭크 리스트 -->
				<ul class="mt-6 px-4">
					<li
						v-for="rank in remainingRanks"
						:key="rank.name"
						class="p-4 flex justify-between items-center mb-2 bg-white rounded-lg shadow-md"
					>
						<span>{{ rank.rank }}. {{ rank.name }}</span>
						<span class="font-bold text-gray-700">{{ rank.score }}점</span>
					</li>
				</ul>

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
					<div class="bg-white p-6 rounded-lg shadow-lg w-80">
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
											class="w-1/4 bg-black text-white px-2 py-1 rounded-lg"
											@click="decreaseCount(grade?.level)"
											:disabled="solvedCounts[grade?.level] === 0"
										>
											-
										</button>
										<span class="mx-2">{{ solvedCounts[grade?.level] }}</span>
										<button
											class="w-1/4 bg-black text-white px-2 py-1 rounded-lg"
											@click="increaseCount(grade?.level)"
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
			ranks: [
				{ name: '크루 A', score: 95 },
				{ name: '크루 B', score: 85 },
				{ name: '크루 C', score: 70 },
				{ name: '크루 D', score: 60 },
				{ name: '크루 E', score: 50 },
				{ name: '크루 F', score: 40 },
				{ name: '크루 G', score: 40 },
				{ name: '크루 H', score: 40 },
				{ name: '크루 J', score: 30 },
				{ name: '크루 I', score: 40 },
			],
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

	mounted() {
		// 애니메이션 시작
		this.topRanks.forEach((rank, index) => {
			this.animateScore(index, rank.score, rank.duration);
		});
		this.eventData();
	},

	computed: {
		// 점수 측정
		sortedRanks() {
			return [...this.ranks].sort((a, b) => b.score - a.score);
		},

		// Top 3 랭킹
		topRanks() {
			let rank = 1; // 초기 등수
			return this.sortedRanks.slice(0, 3).map((item, index, ranks) => {
				// 동일 점수일 경우 이전 등수를 유지
				if (index > 0 && item.score === ranks[index - 1].score) {
					item.rank = ranks[index - 1].rank;
				} else {
					item.rank = rank;
				}
				rank++;
				return { ...item, duration: 2 + index * 0.5 }; // 애니메이션 지속 시간
			});
		},

		// Top 3 제외한 나머지 랭킹
		remainingRanks() {
			let rank = 4; // 4위부터 시작
			return this.sortedRanks.slice(3).map((item, index, ranks) => {
				// 동일 점수일 경우 이전 등수를 유지
				if (index > 0 && item.score === ranks[index - 1].score) {
					item.rank = ranks[index - 1].rank;
				} else {
					item.rank = rank;
				}
				rank++;
				return { ...item };
			});
		},

		// 난이도 별로 id가 높기 때문에 id 대신 level 사용
		// 전체 점수 합산
		totalUserScore() {
			// 클라이밍 이벤트를 순회하면서 점수계산
			let totalScore = 0;
			this.climbingEvents.forEach((event) => {
				event.climbing_info_list.forEach((gym) => {
					gym.climbing_level_list.forEach((level) => {
						const count = this.solvedCounts[level.level] || 0;
						totalScore += count * level.level;
					});
				});
			});
			return totalScore;
		},
	},

	methods: {
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
			}
		},

		toggleOverlay(event) {
			// 클릭한 위치 기준으로 오버레이 표시
			this.showOverlay = !this.showOverlay;

			let hideOverlayTimeout = null; // 오버레이 숨김 타이머

			if (this.showOverlay) {
				// 오버레이 위치 설정
				this.overlayPosition = {
					x: event.clientX - 180,
					y: event.clientY + 10,
				};

				// 기존 타이머 초기화
				if (hideOverlayTimeout) {
					clearTimeout(hideOverlayTimeout);
				}

				// 5초 뒤 오버레이 숨김
				hideOverlayTimeout = setTimeout(() => {
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
			}, stepTime);
		},

		// 팝업 표시/숨기기
		togglePopup() {
			this.isPopupVisible = !this.isPopupVisible;
			if (!this.isPopupVisible) {
				this.resetPopupData();
			}
		},

		// 추가: 서버 응답 데이터 처리
		processEventHistory(history) {
			this.solvedCounts = history.reduce((acc, item) => {
				acc[item.climbing_level.id] = item.solved_count || 0;
				return acc;
			}, {});
			console.log('업데이트된 solvedCounts:', this.solvedCounts);
		},

		// 취소 버튼
		resetPopupData() {
			this.selectedGyms = null;
			this.solvedCounts = {};
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
		},

		// 개수 증가 버튼
		increaseCount(level) {
			// 해당 level의 카운트를 증가
			this.solvedCounts[level]++;
		},

		// 개수 감소 버튼
		decreaseCount(level) {
			// 카운트가 0 이하로 내려가지 않도록 확인
			if (this.solvedCounts[level] > 0) {
				this.solvedCounts[level]--;
			}
		},

		// 점수 저장
		async saveScore() {
			const climbingEventId = this.climbingEvents[0]?.id; // 이벤트 ID
			const climbingInfo = this.climbingEvents[0]?.climbing_info_list?.[0]; // 클라이밍 정보

			if (!climbingEventId || !climbingInfo) {
				alert('유효한 이벤트 ID 또는 클라이밍 정보를 찾을 수 없습니다.');
				return;
			}

			try {
				// 요청 데이터 구성
				const requestData = {
					climbing_event_id: climbingEventId, // 이벤트 ID
					climbing_level_list: climbingInfo.climbing_level_list.map(
						(level) => ({
							climbing_level_id: level.id, // 클라이밍 레벨 ID
							solved_count: this.solvedCounts[level.id] || 0, // 해결한 문제 개수
						})
					),
				};

				// 디버깅: 요청 데이터 확인
				console.log('Request Payload:', JSON.stringify(requestData, null, 2));

				// 서버 요청
				await axios.post(
					`${process.env.VUE_APP_API_HOST}/climbing-events/history`,
					requestData,
					{
						headers: {
							Authorization: `Bearer ${localStorage.getItem('token')}`, // 토큰
						},
					}
				);

				alert('점수가 성공적으로 저장되었습니다!');
				this.togglePopup(); // 팝업 닫기
			} catch (error) {
				console.error('점수 저장 실패:', error.response?.data || error.message);
				alert(
					error.response?.data?.message ||
						'점수 저장에 실패했습니다. 입력 데이터를 확인해주세요.'
				);
			}
		},

		// 암장 하나만 선택
		selectSingleGym(id) {
			this.selectedGyms = id;
		},
	},
};
</script>
