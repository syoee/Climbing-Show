<template>
	<div class="flex justify-center text-red-500 text-9xl font-black">
		DetailPage
	</div>
</template>

<script>
export default {
	data() {
		return {
			id: null,
		};
	},
	mounted() {
		this.id = this.$route.params.id;
	},
};
</script>
