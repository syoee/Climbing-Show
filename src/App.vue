<template>
	<PageHeader />
	<router-view class="my-24" />
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
};
</script>
