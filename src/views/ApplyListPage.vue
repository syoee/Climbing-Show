<template>
	<div>
		<ul v-if="list && list.length" class="grid gap-4 text-xl">
			<li
				v-for="item in list"
				:key="item.id"
				class="grid grid-cols-5 mx-5 pb-5 border-solid border-b-2"
			>
				<div class="col-span-3">
					<div class="text-2xl">{{ item.member.name }}</div>
					<div class="text-lg">
						{{ formatItemDate(item.created_at) }}
					</div>
				</div>
				<div class="pt-3 col-span-2 flex justify-evenly items-center">
					<button
						@click="applyBtn(item.id)"
						class="w-1/3 bg-[#0077ff] text-white aspect-square object-cover rounded-xl"
					>
						O
					</button>
					<button
						@click="refuseBtn(item.id)"
						class="w-1/3 bg-red-500 text-white aspect-square object-cover rounded-xl"
					>
						X
					</button>
				</div>
			</li>
		</ul>
		<div v-else>
			<p>데이터가 없습니다.</p>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			id: null,
			list: [],
			token: null,
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
		this.applyData();
	},
	methods: {
		//신청 정보
		async applyData() {
			try {
				const manage = await axios.get(
					`${process.env.VUE_APP_API_HOST}/crew/receptions/manages/${this.id}`,
					{
						headers: {
							Authorization: `Bearer ${this.token}`,
						},
					}
				);

				this.list = manage.data;
			} catch (error) {
				console.error('에러 발생', error);
			}
		},

		// 승인 버튼
		async applyBtn(itemId) {
			try {
				await axios.post(
					`${process.env.VUE_APP_API_HOST}/crew/receptions/manages/${itemId}`,
					{},
					{
						headers: {
							Authorization: `Bearer ${this.token}`,
						},
					}
				);

				alert('승인 완료되었습니다.');
			} catch (error) {
				console.error('에러 발생', error);
			}
		},

		// 거절 버튼
		async refuseBtn(itemId) {
			try {
				await axios.delete(
					`${process.env.VUE_APP_API_HOST}/crew/receptions/manages/${itemId}`,
					{
						headers: {
							Authorization: `Bearer ${this.token}`,
						},
					}
				);
				alert('거절 완료되었습니다.');
			} catch (error) {
				console.error('에러 발생', error);
			}
		},
		formatItemDate(dateString) {
			if (!dateString) return '';
			const date = new Date(dateString);
			return `${date.getFullYear()}. ${String(date.getMonth() + 1).padStart(
				2,
				'0'
			)}. ${String(date.getDate()).padStart(2, '0')}`;
		},
	},
};
</script>
