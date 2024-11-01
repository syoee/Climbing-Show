<template>
	<div>
		<div class="mx-3" v-if="crew && crew.name">
			<img
				:src="crew.profile"
				alt="profile"
				class="w-1/4 mb-5 aspect-square object-cover rounded-full"
			/>
			<div class="mb-2">
				<input
					v-if="isEditing"
					v-model="updatedCrew.name"
					type="text"
					id="name"
					class="text-3xl font-bold border rounded-md"
				/>
				<span v-else class="text-3xl font-bold">{{ crew.name }}</span>
			</div>
			<div class="mb-7">
				<textarea
					v-if="isEditing"
					v-model="updatedCrew.description"
					id="description"
					class="w-full text-xl border rounded-md"
				></textarea>
				<span v-else class="text-xl">{{ crew.description }}</span>
			</div>

			<div class="text-lg">
				크루장:
				<span class="font-bold text-[#0077ff]">
					{{ crew.crew_owner_member.name }}
				</span>
			</div>

			<div>크루 창설일: {{ formattedDate }}</div>

			<div
				v-if="!isEditing"
				class="mt-5 h-[4vh] grid grid-cols-2 justify-items-center button-container"
			>
				<button
					@click="startEditing"
					class="w-1/2 bg-[#0077ff] text-white rounded-3xl"
				>
					수 정
				</button>
				<button
					v-if="status !== 'APPLY' && !crew.crew_member"
					@click="crewReception"
					:disabled="crewMember"
					:class="[
						'w-1/2 rounded-3xl text-white',
						crewMember
							? 'bg-gray-300 text-gray-500 cursor-not-allowed'
							: 'bg-[#0077ff]',
					]"
				>
					가 입
				</button>
				<button
					v-else
					@click="cancelReception"
					class="w-1/2 bg-red-600 text-white rounded-3xl"
				>
					취 소
				</button>
			</div>
			<div
				v-if="isEditing"
				class="mt-5 h-[4vh] grid grid-cols-2 justify-items-center button-container"
			>
				<button
					@click="saveChanges"
					class="w-1/2 bg-green-600 text-white rounded-3xl"
				>
					저 장
				</button>
				<button
					@click="cancelEditing"
					class="w-1/2 bg-red-600 text-white rounded-3xl ml-3"
				>
					취 소
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			id: null, // 크루 ID
			token: null, // 인증 토큰
			crew: null, // 크루 정보
			formattedDate: null, // 형식화된 날짜
			isEditing: false, // 수정 모드 여부
			status: null, // 신청 상태
			crewMember: false, // 크루 멤버 여부
			updatedCrew: {
				// 수정된 크루 정보를 임시 저장
				name: '',
				description: '',
			},
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
		this.receptionCheck();
	},

	methods: {
		// 크루 가입 신청
		async crewReception() {
			try {
				await axios.post(
					`${process.env.VUE_APP_API_HOST}/crew/receptions/${this.id}`,
					{},
					{
						headers: {
							Authorization: `Bearer ${this.token}`, // 헤더에 토큰 설정
						},
					}
				);

				alert(
					'신청이 완료되었습니다.\n크루장, 부크루장의 승인이 되면 크루 가입이 완료됩니다.'
				);
				this.status = 'APPLY';
			} catch (err) {
				if (err.response && err.response.status === 400) {
					alert('이미 신청한 크루입니다.');
					this.status = 'APPLY';
				} else {
					console.error('API 호출 중 오류 발생:', err);
					alert('가입 신청 중 오류가 발생했습니다.');
				}
			}
		},

		// 크루 가입 취소 요청
		async cancelReception() {
			try {
				await axios.delete(
					`${process.env.VUE_APP_API_HOST}/crew/receptions/${this.id}`,
					{
						headers: {
							Authorization: `Bearer ${this.token}`,
						},
					}
				);
				alert('가입이 취소되었습니다.');
				this.status = null;
			} catch (err) {
				console.error('가입 취소 중 오류 발생:', err);
				alert('가입 취소 중 오류가 발생했습니다.');
			}
		},

		// 크루 가입 신청 유무
		async receptionCheck() {
			try {
				const check = await axios.get(
					`${process.env.VUE_APP_API_HOST}/crew/receptions/${this.id}/check`,
					{
						headers: {
							Authorization: `Bearer ${this.token}`,
						},
					}
				);
				this.status = check.data.status;
				this.crewMember = check.data.crew_member;
			} catch (err) {
				console.error('가입 확인 중 오류 발생:', err);
			}
		},

		// 크루 데이터 가져오기
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
				this.crew = res.data;
				this.updatedCrew = { ...this.crew };
				if (this.crew.created_at) {
					const date = new Date(this.crew.created_at);
					this.formattedDate = `${date.getFullYear()}. ${String(
						date.getMonth() + 1
					).padStart(2, '0')}. ${String(date.getDate()).padStart(2, '0')}`;
				}
			} catch (err) {
				console.error('API 호출 중 오류 발생:', err);
				this.crew = null; // 데이터 로드 실패 시 crew를 null로 설정
			}
		},

		// 수정 모드 시작
		startEditing() {
			this.isEditing = true;
		},

		// 수정 모드 취소
		cancelEditing() {
			this.isEditing = false;
			this.updatedCrew = { ...this.crew }; // 원래 데이터로 복원
		},

		// 크루 정보 수정
		async saveChanges() {
			try {
				await axios.put(
					`${process.env.VUE_APP_API_HOST}/crew-infos/${this.id}`,
					{
						name: this.updatedCrew.name,
						description: this.updatedCrew.description,
					},
					{
						headers: {
							Authorization: `Bearer ${this.token}`,
						},
					}
				);
				// 수동으로 crew 데이터를 업데이트
				this.crew = {
					...this.crew,
					name: this.updatedCrew.name,
					description: this.updatedCrew.description,
				};
				this.isEditing = false; // 수정 모드 해제
			} catch (err) {
				console.log('error', err);
			}
		},
	},
};
</script>
