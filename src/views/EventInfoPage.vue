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
				<div class="absolute" :style="overlayStyle">
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
					v-for="(rank, index) in remainingRanks"
					:key="rank.name"
					class="bg-white rounded-lg p-4 flex justify-between items-center mb-2"
				>
					<span>{{ index + 4 }}. {{ rank.name }}</span>
					<span class="font-bold text-gray-700">{{ rank.score }}점</span>
				</li>
			</ul>
			<div class="absolute bottom-20 right-5">
				<button
					class="w-10 bg-black text-red-600 text-2xl font-bold rounded-full aspect-square"
				>
					+
				</button>
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
			],
			showOverlay: false, // 오버레이 표시 여부
			overlayPosition: { x: 0, y: 0 }, // 오버레이 위치
			overlayContent: {
				title: '크루 랭킹 정보',
				content: '점수는 난이도 순서로 측정됩니다.',
			},
			animatedScores: [0, 0, 0], // Top 3 애니메이션 점수 초기화
			animatedHeights: [0, 0, 0], // 게이지 높이 퍼센트 초기화
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

		// Top 3
		topRanks() {
			return this.sortedRanks.slice(0, 3).map((rank, index) => ({
				...rank,
				duration: 2 + index * 0.5,
			}));
		},

		// Top 3 제외한 랭크
		remainingRanks() {
			return this.sortedRanks.slice(3);
		},
		overlayStyle() {
			// 오버레이 위치에 맞는 스타일
			return {
				top: `${this.overlayPosition.y}px`,
				left: `${this.overlayPosition.x}px`,
			};
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
	},
};
</script>
