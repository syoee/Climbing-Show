<template>
	<div class="py-3 w-full grid grid-cols-3 fixed bottom-0 left-0 bg-white">
		<div class="flex justify-center">
			<img
				:src="selectedButton === 'home' ? homeClickedImage : homeDefaultImage"
				alt="home image"
				@click="goTo('home')"
				class="w-1/3"
			/>
		</div>
		<div class="flex justify-center">
			<img
				:src="
					selectedButton === 'crewList'
						? crewListClickedImage
						: crewListDefaultImage
				"
				alt="crew list image"
				@click="goTo('crewList')"
				class="w-1/3"
			/>
		</div>
		<div class="flex justify-center">
			<img
				:src="selectedButton === 'gym' ? gymClickedImage : gymDefaultImage"
				alt="gym image"
				@click="goTo('gym')"
				class="w-1/3"
			/>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedButton: null,

			// 이미지 경로
			homeDefaultImage:
				'https://velog.velcdn.com/images/syo_ee/post/5df04b0d-9677-44a8-b33c-391e814492ae/image.png',
			homeClickedImage:
				'https://velog.velcdn.com/images/syo_ee/post/01c10b6a-55c9-470b-8880-67350ae3fea1/image.png',

			crewListDefaultImage:
				'https://velog.velcdn.com/images/syo_ee/post/e24749f5-c5a5-429d-9633-62a8977e1789/image.png',
			crewListClickedImage:
				'https://velog.velcdn.com/images/syo_ee/post/7f5af893-567e-424c-8170-5fa5e796f3e8/image.png',

			gymDefaultImage:
				'https://velog.velcdn.com/images/syo_ee/post/a2e3d16e-37c4-49c3-afc6-739386bc33dd/image.png',
			gymClickedImage:
				'https://velog.velcdn.com/images/syo_ee/post/d69ef046-3fba-48ff-ac47-6baf3c7b0810/image.png',
		};
	},

	watch: {
		// 경로가 변경될 때마다 selectedButton 업데이트
		'$route.path'(newPath) {
			switch (newPath) {
				case '/':
					this.selectedButton = 'home';
					break;
				case '/crew-infos':
					this.selectedButton = 'crewList';
					break;
				case '/search':
					this.selectedButton = 'gym';
					break;
			}
		},
	},

	methods: {
		goTo(page) {
			this.selectedButton = page; // 클릭된 버튼을 선택된 상태로 변경
			switch (page) {
				case 'home':
					this.$router.push('/');
					break;
				case 'crewList':
					this.$router.push('/crew-infos');
					break;
				case 'gym':
					this.$router.push('/gymList');
					break;
			}
		},
	},
};
</script>
