<template>
	<div>
		<div class="mx-3" v-if="crew && crew.name">
			<div class="w-1/4 relative">
				<!-- 프로필 이미지 -->
				<img
					:src="profileImage"
					alt="profile"
					class="mb-5 aspect-square object-cover rounded-full"
				/>

				<!-- + 버튼 (파일 선택) -->
				<label
					v-if="isEditing"
					for="file-input"
					class="absolute left-16 bottom-1 w-1/4 h-1/4 flex items-center justify-center bg-black text-red-600 font-semibold rounded-full"
				>
					+
				</label>
				<input
					id="file-input"
					type="file"
					@change="onFileSelected"
					class="hidden"
				/>
			</div>

			<!-- 크루 이름 -->
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

			<!-- 크루 설명 -->
			<div class="mb-7">
				<textarea
					v-if="isEditing"
					v-model="updatedCrew.description"
					id="description"
					class="w-full text-xl border rounded-md"
				></textarea>
				<span v-else class="text-xl whitespace-pre-wrap">
					{{ crew.description }}
				</span>
			</div>

			<div class="text-lg">
				크루장:
				<span class="font-bold">
					{{ crew.crew_owner_member.name }}
				</span>
			</div>

			<div>크루 생성일: {{ formattedDate }}</div>

			<!-- 저장 및 취소 버튼 -->
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

			<!-- 가입 신청 버튼 -->
			<div class="mt-5">
				<button
					v-if="status === 'APPLY' && !crewMember"
					@click="cancelReception"
					class="w-full h-[5vh] bg-red-600 text-xl text-black rounded-3xl"
				>
					취 소
				</button>
				<button
					v-if="
						status !== 'APPLY' &&
						!crewMember &&
						leader !== 'OWNER' &&
						leader !== 'MAINTAINER'
					"
					@click="crewReception"
					class="w-full h-[5vh] bg-black text-red-600 text-xl font-semibold rounded-3xl"
				>
					가 입
				</button>
			</div>

			<!-- 수정 및 신청 현황 버튼 -->
			<div
				v-if="!isEditing"
				class="mt-5 h-[4vh] grid grid-cols-2 justify-items-center button-container"
			>
				<button
					v-if="
						leader.authorization === 'OWNER' ||
						leader.authorization === 'MAINTAINER'
					"
					@click="startEditing"
					class="w-1/2 bg-black text-red-600 rounded-3xl"
				>
					수 정
				</button>
				<button
					v-if="
						leader.authorization === 'OWNER' ||
						leader.authorization === 'MAINTAINER'
					"
					@click="goApplyList"
					class="w-1/2 bg-black text-red-600 rounded-3xl"
				>
					신청 현황
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
			leader: {}, // 크루장, 부크루장 여부
			updatedCrew: {
				// 수정된 크루 정보를 임시 저장
				name: '',
				description: '',
			},
			selectedFile: null, // 사용자가 선택한 파일
			previewProfile: null, // 이미지 프리뷰 URL
		};
	},

	created() {
		const userToken = localStorage.getItem('token');
		if (userToken) {
			this.token = userToken;
		}

		// // console.error  비활성화
		// console.error = function () {};
	},

	mounted() {
		this.id = this.$route.params.id;
		this.crewData();
		this.receptionCheck();
		this.authorityCheck();
	},

	computed: {
		profileImage() {
			// 프리뷰 이미지 우선 표시, 없으면 서버 이미지
			return (
				this.previewProfile || this.crew?.profile || '/default-image-url.jpg'
			);
		},
	},

	methods: {
		// 크루 가입 신청
		async crewReception() {
			// 로그인 여부 확인
			if (!this.token) {
				alert('로그인이 필요합니다.');
				this.$router.push('/login');
				return;
			}

			try {
				await axios.post(
					`${process.env.VUE_APP_API_HOST}/crew/receptions/${this.id}`,
					{},
					{
						headers: {
							Authorization: `Bearer ${this.token}`,
						},
					}
				);

				alert(
					'신청이 완료되었습니다.\n크루장, 부크루장의 승인이 되면 크루 가입이 완료됩니다.'
				);
				this.status = 'APPLY';
			} catch (err) {
				if (err.response && err.response.status === 401) {
					alert(
						'일정시간이 지나 로그인이 만료되었습니다. 다시 로그인해주세요.'
					);
					this.$router.push('/login');
				} else if (err.response && err.response.status === 400) {
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

		// 크루장, 부크루장 유무 체크
		async authorityCheck() {
			try {
				const authority = await axios.get(
					`${process.env.VUE_APP_API_HOST}/crew-infos/${this.id}/check`,
					{
						headers: {
							Authorization: `Bearer ${this.token}`,
						},
					}
				);

				this.leader = authority.data;
			} catch (error) {
				console.error('error', error);
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

				// 캐시 방지 쿼리 추가
				if (this.crew.profile) {
					this.crew.profile += `?t=${Date.now()}`;
				}

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

		// 신청 접수 페이지로 이동
		goApplyList() {
			this.$router.push(`/crew/receptions/manages/${this.id}`);
		},

		// 수정 모드 시작
		startEditing() {
			this.isEditing = true;
			this.selectedFile = null; // 파일 초기화
		},

		// 수정 모드 취소
		cancelEditing() {
			this.isEditing = false;
			this.updatedCrew = { ...this.crew }; // 원래 데이터로 복원
			this.selectedFile = null; // 파일 초기화
		},

		// 프로필 이미지 선택
		onFileSelected(event) {
			const file = event.target.files[0];
			if (file) {
				this.selectedFile = file;

				// 선택된 이미지 미리보기 설정
				const reader = new FileReader();
				reader.onload = (e) => {
					this.previewProfile = e.target.result; // 미리보기용 변수에 저장
				};
				reader.readAsDataURL(file);
			}
		},

		// 저장 버튼 클릭 시 데이터 저장
		async saveChanges() {
			try {
				// 이미지 업로드
				if (this.selectedFile) {
					const formData = new FormData();
					formData.append('profile', this.selectedFile);

					const response = await axios.post(
						`${process.env.VUE_APP_API_HOST}/crew-infos/${this.id}/profile`,
						formData,
						{
							headers: {
								Authorization: `Bearer ${this.token}`,
								'Content-Type': 'multipart/form-data',
							},
						}
					);

					// 서버에서 새 이미지 경로를 응답으로 받아온 경우
					if (response.data.profile) {
						// 캐싱 방지 쿼리 추가
						this.crew.profile = `${response.data.profile}?t=${Date.now()}`;
					}
					this.previewProfile = null;
					this.selectedFile = null;

					this.previewProfile = null;
					this.selectedFile = null;
				}

				// 이름/설명 업데이트
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

				// 수정 반영
				this.crew.name = this.updatedCrew.name;
				this.crew.description = this.updatedCrew.description;
				this.isEditing = false;

				alert('크루 정보가 성공적으로 수정되었습니다.');
			} catch (err) {
				console.error('저장 중 오류 발생:', err);
				alert('저장 중 오류가 발생했습니다.');
			}
		},
	},
};
</script>
