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
					class="w-1/2 bg-[#0077ff] text-white rounded-3xl"
					@click="startEditing"
				>
					수 정
				</button>
				<button class="w-1/2 bg-[#0077ff] text-white rounded-3xl">가 입</button>
			</div>
			<div
				v-if="isEditing"
				class="mt-5 h-[4vh] grid grid-cols-2 justify-items-center button-container"
			>
				<button
					class="w-1/2 bg-green-600 text-white rounded-3xl"
					@click="saveChanges"
				>
					저 장
				</button>
				<button
					class="w-1/2 bg-red-600 text-white rounded-3xl ml-3"
					@click="cancelEditing"
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
	},

	methods: {
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
