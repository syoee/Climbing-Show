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
			<div class="flex justify-between items-center px-4">
				<div class="text-xl font-bold">크루 랭킹</div>
				<button
					@click="rankInfo"
					class="w-[1rem] bg-gray-400 text-white text-xs opacity-50 rounded-full aspect-square"
				>
					?
				</button>
			</div>

			<!-- Top 3 -->
			<div class="flex justify-center items-end gap-4 mt-6">
				<!-- Rank 2 -->
				<div class="flex flex-col items-center">
					<div class="bg-gray-300 h-24 w-16 rounded-t-lg relative">
						<div
							class="bg-gray-400 h-full w-full rounded-t-lg absolute bottom-0"
							:style="{ height: `${topRanks[1].score}%` }"
						></div>
					</div>
					<p class="text-center mt-2 text-gray-700 font-bold">
						{{ topRanks[1].name }}
					</p>
				</div>

				<!-- Rank 1 -->
				<div class="flex flex-col items-center">
					<div class="bg-yellow-300 h-32 w-20 rounded-t-lg relative">
						<div
							class="bg-yellow-400 h-full w-full rounded-t-lg absolute bottom-0"
							:style="{ height: `${topRanks[0].score}%` }"
						></div>
					</div>
					<p class="text-center mt-2 text-gray-700 font-bold">
						{{ topRanks[0].name }}
					</p>
				</div>

				<!-- Rank 3 -->
				<div class="flex flex-col items-center">
					<div class="bg-gray-300 h-20 w-16 rounded-t-lg relative">
						<div
							class="bg-gray-500 h-full w-full rounded-t-lg absolute bottom-0"
							:style="{ height: `${topRanks[2].score}%` }"
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
		};
	},
	computed: {
		sortedRanks() {
			// 원본 배열 복사 및 정렬
			return [...this.ranks].sort((a, b) => b.score - a.score);
		},
		topRanks() {
			// 정렬된 배열에서 상위 3명 추출
			return this.sortedRanks.slice(0, 3);
		},
		remainingRanks() {
			// 정렬된 배열에서 나머지 추출
			return this.sortedRanks.slice(3);
		},
	},

	methods: {
		rankInfo() {
			alert('랭킹 정보에 대한 팁입니다!');
		},
	},
};
</script>
