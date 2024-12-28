<template>
	<div>
		<!-- 미션 -->
		<div class="grid grid-rows-2 gap-1 justify-items-center">
			<div class="text-xl font-bold">이번 주 mission</div>
			<div class="text-3xl">
				'<span class="text-red-500 font-semibold">피커스</span>'
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

					<!-- 이름 입력 -->
					<div class="mb-4">
						<label class="block text-sm font-medium text-gray-700">이름</label>
						<input
							v-model="popupData.name"
							type="text"
							class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<!-- 난이도 점수 입력 -->
					<div class="mb-4">
						<div
							v-for="grade in popupData.grades"
							:key="grade.id"
							class="flex items-center justify-between mb-2"
						>
							<!-- 난이도 색상 표시 -->
							<div
								class="w-6 h-6 rounded-full"
								:style="{ backgroundColor: grade.color }"
							></div>

							<!-- 개수 조정 -->
							<div class="flex items-center">
								<button
									class="bg-black text-white px-2 py-1 rounded-md"
									@click="decreaseCount(grade.id)"
								>
									-
								</button>
								<span class="mx-2">{{ popupData.count }}</span>
								<button
									class="bg-black text-white px-2 py-1 rounded-md"
									@click="increaseCount(grade.id)"
									:disabled="popupData.count >= 30"
								>
									+
								</button>
							</div>

							<!-- 난이도 총합 -->
							<div>{{ popupData.count * grade.score }}점</div>
						</div>
					</div>

					<!-- 총합 점수 -->
					<div class="text-right">
						<span class="text-gray-700 font-bold">총합 점수: </span>
						<span class="text-red-500">{{ totalUserScore }}</span>
					</div>

					<!-- 버튼 -->
					<div class="flex justify-end mt-4">
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
</template>

<script>
export default {
	data() {
		return {
			ranks: [
				{ name: '크루 A', score: 95 },
				{ name: '크루 B', score: 85 },
				{ name: '크루 C', score: 70 },
				{ name: '크루 D', score: 60 },
				{ name: '크루 E', score: 50 },
				{ name: '크루 F', score: 40 },
				{ name: '크루 G', score: 40 },
				{ name: '크루 H', score: 40 },
				{ name: '크루 I', score: 40 },
				{ name: '크루 J', score: 30 },
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
			popupData: {
				name: '',
				count: 0,
				grades: [
					{ id: 1, color: '#F20530', score: 1 },
					{ id: 2, color: '#DF922B', score: 2 },
					{ id: 3, color: '#F2D129', score: 3 },
					{ id: 4, color: '#59A13E', score: 4 },
					{ id: 5, color: '#0583F2', score: 5 },
					{ id: 6, color: '#24245E', score: 6 },
					{ id: 7, color: '#933199', score: 7 },
					{ id: 8, color: '#BFBFBD', score: 8 },
					{ id: 9, color: '#FFFFFF', score: 9 },
					{ id: 10, color: '#0D0D0D', score: 10 },
				],
			},
		};
	},

	mounted() {
		// 애니메이션 시작
		this.topRanks.forEach((rank, index) => {
			this.animateScore(index, rank.score, rank.duration);
		});
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

		// 각 난이도 점수 합산
		gradeTotalScore() {
			return this.popupData.grades.score * this.popupData.count;
		},

		// 전체 점수 합산
		totalUserScore() {
			return this.popupData.grades.reduce(
				(total, grade) => total + grade.score * this.popupData.count,
				0
			);
		},
	},

	methods: {
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

		// 팝업 데이터 초기화
		resetPopupData() {
			this.popupData.name = '';
			this.popupData.grades.forEach((grade) => {
				grade.count = 0;
			});
		},

		// 개수 증가 버튼
		increaseCount(gradeId) {
			const grade = this.popupData.grades.find((g) => g.id === gradeId);
			if (grade && this.popupData.count < 30) {
				this.popupData.count++;
			}
		},

		// 개수 감소 버튼
		decreaseCount(gradeId) {
			const grade = this.popupData.grades.find((g) => g.id === gradeId);
			if (grade && this.popupData.count >= 0) {
				this.popupData.count--;
			}
		},

		// 점수 저장
		saveScore() {
			if (!this.popupData.name) {
				alert('이름을 입력하세요.');
				return;
			}

			const totalScore = this.totalUserScore;
			alert(`이름: ${this.popupData.name}, 총합 점수: ${totalScore}`);
			this.ranks.push({ name: this.popupData.name, score: totalScore });
			this.togglePopup();
		},
	},
};
</script>
