<template>
	<PageHeader />
	<router-view />
	<PageFooter />
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';

export default {
	name: 'App',
	components: {
		PageHeader,
		PageFooter,
	},
	data() {
		return {
			safeArea: {
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
			},
		};
	},
	computed: {
		// 동적으로 계산한 안전 영역 값을 스타일로 변환
		safeAreaStyles() {
			return {
				paddingTop: `${this.safeArea.top}px`,
				paddingBottom: `${this.safeArea.bottom}px`,
				paddingLeft: `${this.safeArea.left}px`,
				paddingRight: `${this.safeArea.right}px`,
			};
		},
	},
	mounted() {
		// CSS 변수에서 안전 영역 값을 읽어옴
		this.safeArea.top = parseInt(
			getComputedStyle(document.documentElement).getPropertyValue(
				'env(safe-area-inset-top)'
			) || '0'
		);
		this.safeArea.bottom = parseInt(
			getComputedStyle(document.documentElement).getPropertyValue(
				'env(safe-area-inset-bottom)'
			) || '0'
		);
		this.safeArea.left = parseInt(
			getComputedStyle(document.documentElement).getPropertyValue(
				'env(safe-area-inset-left)'
			) || '0'
		);
		this.safeArea.right = parseInt(
			getComputedStyle(document.documentElement).getPropertyValue(
				'env(safe-area-inset-right)'
			) || '0'
		);
	},
};
</script>
