<template>
	<div class="pt-3 w-full grid grid-cols-3 fixed bottom-0 left-0 bg-white">
		<div class="grid grid-rows-2 justify-items-center items-center">
			<img
				:src="selectedButton === 'gym' ? gymClickedImage : gymDefaultImage"
				alt="gym image"
				@click="goTo('gym')"
				class="w-1/6"
			/>
			<div
				:class="{
					'text-black font-semibold': selectedButton === 'gym',
					'text-gray-400': selectedButton !== 'gym',
				}"
				class="text-sm"
			>
				지도
			</div>
		</div>
		<div class="grid grid-rows-2 justify-items-center items-center">
			<img
				:src="
					selectedButton === 'crewList'
						? crewListClickedImage
						: crewListDefaultImage
				"
				alt="crew list image"
				@click="goTo('crewList')"
				class="w-1/6"
			/>
			<div
				:class="{
					'text-black font-semibold': selectedButton === 'crewList',
					'text-gray-400': selectedButton !== 'crewList',
				}"
				class="text-sm"
			>
				크루
			</div>
		</div>
		<div class="grid grid-rows-2 justify-items-center items-center">
			<img
				:src="
					selectedButton === 'eventInfo' ? eventClickedImage : eventDefaultImage
				"
				alt="crew list image"
				@click="goTo('eventInfo')"
				class="w-1/6"
			/>
			<div
				:class="{
					'text-black font-semibold': selectedButton === 'eventInfo',
					'text-gray-400': selectedButton !== 'eventInfo',
				}"
				class="text-sm"
			>
				이벤트
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedButton: null,

			// 이미지 경로
			gymDefaultImage:
				'https://velog.velcdn.com/images/syo_ee/post/a2e3d16e-37c4-49c3-afc6-739386bc33dd/image.png',
			gymClickedImage:
				'https://velog.velcdn.com/images/syo_ee/post/d69ef046-3fba-48ff-ac47-6baf3c7b0810/image.png',

			crewListDefaultImage:
				'https://velog.velcdn.com/images/syo_ee/post/e24749f5-c5a5-429d-9633-62a8977e1789/image.png',
			crewListClickedImage:
				'https://velog.velcdn.com/images/syo_ee/post/7f5af893-567e-424c-8170-5fa5e796f3e8/image.png',

			eventDefaultImage:
				'https://velog.velcdn.com/images/syo_ee/post/47293437-58b0-451e-91eb-c0e94a0809f1/image.png',
			eventClickedImage:
				'https://velog.velcdn.com/images/syo_ee/post/a85a7bf6-6ffc-4bd3-8c67-79afb8886713/image.png',
		};
	},

	watch: {
		// 경로가 변경될 때마다 selectedButton 업데이트
		'$route.path'(newPath) {
			switch (newPath) {
				case '/search':
					this.selectedButton = 'gym';
					break;
				case '/crew-infos':
					this.selectedButton = 'crewList';
					break;
				case '/event-infos':
					this.selectedButton = 'eventInfo';
					break;
			}
		},
	},

	methods: {
		goTo(page) {
			this.selectedButton = page; // 클릭된 버튼을 선택된 상태로 변경
			switch (page) {
				case 'gym':
					this.$router.push('/gymList');
					break;
				case 'crewList':
					this.$router.push('/crew-infos');
					break;
				case 'eventInfo':
					this.$router.push('/event-infos');
					break;
			}
		},
	},
};
</script>
