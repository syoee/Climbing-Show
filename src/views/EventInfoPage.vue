<template>
	<div>
		<div class="grid grid-rows-2 gap-1 justify-items-center">
			<div class="text-xl font-bold">이번 주 mission</div>
			<div class="text-3xl">
				'<span class="text-red-500 font-semibold">피커스</span>'
				<span>를 잡아라!</span>
			</div>
		</div>
		<div>
			<div class="pt-16 grid grid-cols-2 gap-1 justify-items-center">
				<div class="text-xl font-bold">크루 랭킹</div>
				<button
					@click="rankInfo"
					class="w-[1rem] bg-gray-400 text-white text-xs opacity-50 rounded-full aspect-square"
				>
					?
				</button>
			</div>
			<ul>
				<li>
					<div>1</div>
					<div>크루 이름</div>
				</li>
			</ul>
		</div>
		<div>기록하기</div>
	</div>
</template>

<script>
export default {
	methods: {},
};
</script>
