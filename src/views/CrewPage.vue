<template>
	<div>
		<div v-if="crew && crew.name">
			<div>
				<label for="name">크루 이름:</label>
				<input
					v-if="isEditing"
					v-model="updatedCrew.name"
					type="text"
					id="name"
					class="border rounded-md"
				/>
				<span v-else>{{ crew.name }}</span>
			</div>
			<div>
				<label for="description">크루 설명:</label>
				<textarea
					v-if="isEditing"
					v-model="updatedCrew.description"
					id="description"
					class="border rounded-md"
				></textarea>
				<span v-else>{{ crew.description }}</span>
			</div>

			<div>최고 가능 인원: {{ crew.limit_member }}</div>
			<div>크루 창설 날짜: {{ formattedDate }}</div>
			<div>크루장: {{ crew.crew_owner_member.name }}</div>

			<button
				v-if="!isEditing"
				class="w-1/6 bg-blue-600 text-white rounded-xl"
				@click="startEditing"
			>
				수정
			</button>
			<button
				v-if="isEditing"
				class="w-1/6 bg-green-600 text-white rounded-xl"
				@click="saveChanges"
			>
				저장
			</button>
			<button
				v-if="isEditing"
				class="w-1/6 bg-red-600 text-white rounded-xl ml-2"
				@click="cancelEditing"
			>
				취소
			</button>

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
					this.formattedDate = `${date.getFullYear()}년 ${String(
						date.getMonth() + 1
					).padStart(2, '0')}월 ${String(date.getDate()).padStart(2, '0')}일`;
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
