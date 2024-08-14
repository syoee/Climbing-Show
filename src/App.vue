<template>
	<PageHeader />
	<router-view />
</template>

<script>
import PageHeader from './components/PageHeader.vue';

export default {
	name: 'App',
	components: {
		PageHeader,
	},
};
</script>
