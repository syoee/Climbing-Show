<template>
	<div>
		<div v-if="crew">
			{{ crew.name }}
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			id: null,
			token: null,
			crew: null,
		};
	},

	created() {
		const userToken = localStorage.getItem('token');
		if (userToken) {
			this.token = userToken;
		}
	},

	mounted() {
		this.id = this.$route.params.id;
		this.crewData();
	},

	methods: {
		async crewData() {
			try {
				const res = await axios.get(
					`${process.env.VUE_APP_API_HOST}/crew-infos/${this.id}`,
					{
						headers: {
							Authorization: `Bearer ${this.token}`,
						},
					}
				);
				// API로부터 받은 데이터를 center 저장
				this.crew = res.data;
			} catch (err) {
				console.log('error', err);
			}
		},
	},
};
</script>
