<template>
	<PageHeader />
	<router-view />
	<!-- <ClimbingCenter /> -->
</template>

<script>
import PageHeader from './components/PageHeader.vue';
// import ClimbingCenter from './components/ClimbingCenter.vue';

export default {
	name: 'App',
	components: {
		PageHeader,
		// ClimbingCenter,
	},
};
</script>
