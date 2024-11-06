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
			homeDefaultImage: require('@/assets/icons/home.png'),
			homeClickedImage: require('@/assets/icons/homeclick.png'),

			crewListDefaultImage: require('@/assets/icons/crew.png'),
			crewListClickedImage: require('@/assets/icons/crewclick.png'),

			gymDefaultImage: require('@/assets/icons/gym.png'),
			gymClickedImage: require('@/assets/icons/gymclick.png'),
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
