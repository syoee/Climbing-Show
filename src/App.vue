<template>
	<PageHeader />
	<router-view class="pb-[10vh]" />
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
