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
					@click="togglePopup"
					class="w-6 h-6 bg-gray-400 text-white text-xs rounded-full absolute right-8"
				>
					?
				</button>
			</div>

			<!-- 랭크 설명 -->
			<div
				v-if="showPopup"
				class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
			>
				<div class="bg-white p-6 rounded-lg shadow-md">
					<p class="text-lg font-bold mb-4">랭킹 정보</p>
					<p class="text-gray-600">
						크루 랭킹은 점수에 따라 결정됩니다. 상위 3위는 특별히 강조됩니다!
					</p>
					<div class="mt-4 flex justify-end">
						<button
							@click="togglePopup"
							class="px-4 py-2 bg-blue-500 text-white rounded"
						>
							닫기
						</button>
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
							class="bg-transparent w-full rounded-t-lg absolute bottom-0 animate-fill-height"
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
							class="bg-transparent w-full rounded-t-lg absolute bottom-0 animate-fill-height"
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
							class="bg-transparent w-full rounded-t-lg absolute bottom-0 animate-fill-height"
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
		};
	},
	computed: {
		sortedRanks() {
			return [...this.ranks].sort((a, b) => b.score - a.score);
		},
		topRanks() {
			return this.sortedRanks.slice(0, 3).map((rank, index) => ({
				...rank,
				duration: 2 + index * 0.5,
			}));
		},
		remainingRanks() {
			return this.sortedRanks.slice(3);
		},
	},
	methods: {
		togglePopup() {
			this.showPopup = !this.showPopup; // 팝업 열기/닫기
		},
	},
};
</script>
