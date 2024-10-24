<template>
	<div>
		<div v-if="crew">
			<div>
				{{ crew.profile }}
			</div>
			<div>
				{{ crew.name }}
			</div>
			<div>
				{{ crew.description }}
			</div>
			<div>최고 가능 인원: {{ crew.limit_member }}</div>
			<div>크루 창설 날짜: {{ formattedDate }}</div>
			<div>크루장: {{ crew.crew_owner_member.name }}</div>
			<button class="w-1/6 bg-blue-600 text-white rounded-xl">수정</button>
			<p>
				<button class="w-1/6 bg-blue-600 text-white rounded-xl">가입</button>
			</p>
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
			formattedDate: null,
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

				// crew 생성일 년월일 나오게 해주는 함수
				if (this.crew.created_at) {
					const date = new Date(this.crew.created_at);
					this.formattedDate = `${date.getFullYear()}년 ${String(
						date.getMonth() + 1
					).padStart(2, '0')}월 ${String(date.getDate()).padStart(2, '0')}일`;
				}
			} catch (err) {
				console.log('error', err);
			}
		},
	},
};
</script>
