<template>
	<div>
		<ul class="grid gap-4 text-xl">
			<li class="mx-5 pb-5 border-solid border-b-2 cursor-pointer">
				<div class="text-3xl">
					{{ member.name }}
				</div>
			</li>
		</ul>
		<div>
			<button>111</button>
		</div>
	</div>
</template>
<script>
import axios from 'axios';

export default {
	mounted() {
		this.id = this.$route.params.id;
	},
	methods: {
		async applyData() {
			try {
				const manage = await axios.get(
					`${process.env.VUE_APP_API_HOST}/crew/receptions/manages/${this.id}`
				);

				this.member = manage.data;
			} catch (error) {
				console.error('에러 발생', error);
			}
		},
	},
};
</script>
