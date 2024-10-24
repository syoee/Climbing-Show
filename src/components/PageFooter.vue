<template>
	<div class="mx-5 my-3 grid grid-cols-4 fixed bottom-0 left-0">
		<div class="flex justify-center">
			<img
				:src="selectedButton === 'home' ? homeClickedImage : homeDefaultImage"
				alt="home image"
				@click="goTo('home')"
				class="w-1/2"
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
				class="w-1/2"
			/>
		</div>
		<div class="flex justify-center">
			<img
				:src="selectedButton === 'gym' ? gymClickedImage : gymDefaultImage"
				alt="gym image"
				@click="goTo('gym')"
				class="w-1/2"
			/>
		</div>
		<div class="flex justify-center">
			<img
				:src="
					selectedButton === 'myPage' ? myPageClickedImage : myPageDefaultImage
				"
				alt="my page image"
				@click="goTo('myPage')"
				class="w-1/2"
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

			myPageDefaultImage: require('@/assets/icons/mypage.png'),
			myPageClickedImage: require('@/assets/icons/mypageclick.png'),
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
				case '/my-page':
					this.selectedButton = 'myPage';
					break;
				default:
					this.selectedButton = null;
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
					this.$router.push('/search');
					break;
				case 'myPage':
					this.$router.push('/my-page');
					break;
			}
		},
	},
};
</script>
