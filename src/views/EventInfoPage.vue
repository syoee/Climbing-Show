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
		<div class="pt-16">
			<div class="flex justify-center items-center px-4">
				<div class="text-xl font-bold">크루 랭킹</div>
			</div>

			<!-- 팝업 버튼 -->
			<div class="relative">
				<button
					@click="toggleOverlay"
					class="w-6 h-6 bg-gray-400 text-white text-xs rounded-full absolute right-8"
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
					<div class="p-1/12 bg-transparent rounded-lg shadow-sm">
						<div class="font-medium text-base text-black">
							{{ overlayContent.title }}
						</div>
						<div class="text-xs text-gray-500">
							{{ overlayContent.content }}
						</div>
					</div>
				</div>
			</div>

			<!-- Top 3 -->
			<div class="flex justify-center items-end gap-4 mt-6">
				<!-- Rank 2 -->
				<div class="flex flex-col items-center">
					<p>{{ topRanks[1].score }}점</p>
					<div
						class="bg-gray-300 h-24 w-16 rounded-t-lg relative overflow-hidden"
					>
						<div
							class="bg-gray-400 w-full rounded-t-lg absolute bottom-0 animate-fill-height"
							:style="{ animationDuration: `${topRanks[1].duration}s` }"
						></div>
					</div>
					<p class="text-center mt-2 text-gray-700 font-bold">
						{{ topRanks[1].name }}
					</p>
				</div>

				<!-- Rank 1 -->
				<div class="flex flex-col items-center">
					<p>{{ topRanks[0].score }}점</p>
					<div
						class="bg-yellow-300 h-32 w-20 rounded-t-lg relative overflow-hidden"
					>
						<div
							class="bg-yellow-400 w-full rounded-t-lg absolute bottom-0 animate-fill-height"
							:style="{ animationDuration: `${topRanks[0].duration}s` }"
						></div>
					</div>
					<p class="text-center mt-2 text-gray-700 font-bold">
						{{ topRanks[0].name }}
					</p>
				</div>

				<!-- Rank 3 -->
				<div class="flex flex-col items-center">
					<p>{{ topRanks[2].score }}점</p>
					<div
						class="bg-gray-300 h-20 w-16 rounded-t-lg relative overflow-hidden"
					>
						<div
							class="bg-gray-500 w-full rounded-t-lg absolute bottom-0 animate-fill-height"
							:style="{ animationDuration: `${topRanks[2].duration}s` }"
						></div>
					</div>
					<p class="text-center mt-2 text-gray-700 font-bold">
						{{ topRanks[2].name }}
					</p>
				</div>
			</div>

			<!-- 랭크 리스트 -->
			<ul class="mt-6 px-4">
				<li
					v-for="(rank, index) in remainingRanks"
					:key="rank.name"
					class="bg-white shadow-md rounded-lg p-4 flex justify-between items-center mb-2"
				>
					<span>{{ index + 4 }}. {{ rank.name }}</span>
					<span class="font-bold text-gray-700">{{ rank.score }}점</span>
				</li>
			</ul>
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
			],
			showPopup: false, // 팝업 표시 상태
			showOverlay: false, // 오버레이 표시 여부
			overlayPosition: { x: 0, y: 0 }, // 오버레이 위치
			overlayContent: {
				title: '크루 랭킹 정보',
				content: '점수는 난이도별로 측정됩니다.',
			},
		};
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
			if (this.showOverlay) {
				this.overlayPosition = {
					x: event.clientX + 10, // 클릭 위치 오른쪽으로 약간 이동
					y: event.clientY + 10, // 클릭 위치 아래로 약간 이동
				};
			}
		},
		closeOverlay() {
			// 오버레이 닫기
			this.showOverlay = false;
		},
	},
};
</script>
