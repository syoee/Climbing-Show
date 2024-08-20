<template>
	<div
		class="flex flex-col items-center text-[#0077ff] text-4xl font-semibold sm:text-xl md:text-2xl lg:text-6xl"
	>
		<div v-for="climbingCenter in climbingCenters" :key="climbingCenter.id">
			<h2>{{ climbingCenter.name }}</h2>
			<button @click="sendData(climbingCenter)">Send Data</button>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { toRaw } from 'vue';

export default {
	data() {
		return {
			climbingCenters: [
				{
					name: '더클라임 서울대점',
					address_road: '서울 관악구 남부순환로 1801 지하1층',
					address_lot: '서울 관악구 봉천동 874-4 지하1층',
					latitude: '37.4818',
					longitude: '126.9503',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFFF00',
						},
						{
							level: '3',
							color: '#FF8000',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#FF0000',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#964B00',
						},
						{
							level: '10',
							color: '#000000',
						},
					],
					logo_url:
						'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FA06C2AE2F241460EAF40CBE478E011EC',
				},
				{
					name: '더클라임 사당점',
					address_road: '서울 관악구 과천대로 939 B201호',
					address_lot: '서울 관악구 남현동 1061-18 B201호',
					latitude: '37.4743',
					longitude: '126.9814',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFFF00',
						},
						{
							level: '3',
							color: '#FF8000',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#FF0000',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#964B00',
						},
						{
							level: '10',
							color: '#000000',
						},
					],
					logo_url:
						'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F7BC87F2BFE7C49C09D355DCB8E0B2C6B',
				},
				{
					name: '더클라임 신사점',
					address_road: '서울 강남구 압구정로2길 6 지하2층',
					address_lot: '서울 강남구 신사동 505-7 지하2층',
					latitude: '37.5210',
					longitude: '127.0191',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFFF00',
						},
						{
							level: '3',
							color: '#FF8000',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#FF0000',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#964B00',
						},
						{
							level: '10',
							color: '#000000',
						},
					],
					logo_url:
						'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F9C6E226AD90F419F9B333F348CB66153',
				},
				{
					name: '더클라임 강남점',
					address_road: '서울 강남구 테헤란로8길 21 강남화인빌딩 지하1층',
					address_lot: '서울 강남구 역삼동 823-14 강남화인빌딩 지하1층',
					latitude: '37.4975',
					longitude: '127.0319',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFFF00',
						},
						{
							level: '3',
							color: '#FF8000',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#FF0000',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#964B00',
						},
						{
							level: '10',
							color: '#000000',
						},
					],
					logo_url:
						'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F725784CFE3484F008EF378576652EFF5',
				},
				{
					name: '더클라임 논현점',
					address_road: '서울 서초구 강남대로 519 도충빌딩 지하1층',
					address_lot: '서울 서초구 반포동 723-1 도충빌딩 지하1층',
					latitude: '37.5082',
					longitude: '127.0222',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFFF00',
						},
						{
							level: '3',
							color: '#FF8000',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#FF0000',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#964B00',
						},
						{
							level: '10',
							color: '#000000',
						},
					],
					logo_url:
						'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FAFEE1370BC6A40EFB92AC9FECB7C24D6',
				},
				{
					name: '더클라임 양재점',
					address_road: '서울 강남구 남부순환로 2615 지하1층',
					address_lot: '서울 강남구 도곡동 957-11 지하1층',
					latitude: '37.4851',
					longitude: '127.0358',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFFF00',
						},
						{
							level: '3',
							color: '#FF8000',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#FF0000',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#964B00',
						},
						{
							level: '10',
							color: '#000000',
						},
					],
					logo_url:
						'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F2629CA4265D344269E3471604D7DAFA5',
				},
				{
					name: '더클라임 일산점',
					address_road: '경기 고양시 일산동구 중앙로 1160 오원프라자 5층',
					address_lot: '경기 고양시 일산동구 마두동 805-1 오원프라자 5층',
					latitude: '37.6507',
					longitude: '126.7788',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFFF00',
						},
						{
							level: '3',
							color: '#FF8000',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#FF0000',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#964B00',
						},
						{
							level: '10',
							color: '#000000',
						},
					],
					logo_url:
						'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FA7B1C38B45154AF7B06B557CF339ECD8',
				},
				{
					name: '서울숲클라이밍 구로점',
					address_road: '서울 구로구 디지털로 300 지하1층',
					address_lot: '서울 구로구 구로동 188-25 지하1층',
					latitude: '37.4848',
					longitude: '126.8965',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#964B00',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240126_145%2F1706245754451ztdn6_PNG%2FTalkMedia_i_4ac58d489ff7.png.png',
				},
				{
					name: '서울숲클라이밍 영등포점',
					address_road: '서울 영등포구 문래로 164 영등포SK리더스뷰 B동 1층',
					address_lot: '서울 영등포구 문래동3가 55-16 영등포SK리더스뷰 B동 1층',
					latitude: '37.5173',
					longitude: '126.8996',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#964B00',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230714_280%2F1689343619976LmDsS_PNG%2F%25BF%25B5%25B5%25EE%25BD%25A3_%25B7%25CE%25B0%25ED.png',
				},
				{
					name: '서울숲클라이밍 종로점',
					address_road: '서울 종로구 수표로 96 국일관드림팰리스 지하1층',
					address_lot: '서울 종로구 관수동 20 국일관드림팰리스 지하1층',
					latitude: '37.5697',
					longitude: '126.9899',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#964B00',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240127_217%2F1706323086285X8NHz_PNG%2F%25C1%25BE%25B7%25CE%25BD%25A3%25B7%25CE%25B0%25ED_%25C8%25F2%25BB%25F6%25B9%25E8%25B0%25E6.png',
				},
				{
					name: '서울숲클라이밍 뚝섬점',
					address_road: '서울 성동구 성수일로 19 유한타워 지하2층',
					address_lot: '서울 성동구 성수동1가 656-54 유한타워 지하2층',
					latitude: '37.5423',
					longitude: '127.0486',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#964B00',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230714_296%2F1689344153465ae65p_PNG%2F%25B6%25D2%25BC%25B6%25BD%25A3_%25B7%25CE%25B0%25ED.png',
				},
				{
					name: '서울숲클라이밍 잠실점',
					address_road: '서울 송파구 백제고분로7길 49 지하1층',
					address_lot: '서울 송파구 잠실동 183-4 지하1층',
					latitude: '37.5108',
					longitude: '127.0844',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#964B00',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230714_100%2F1689344535905hk4jh_PNG%2F%25C0%25E1%25BD%25C7%25BD%25A3_%25B7%25CE%25B0%25ED.png',
				},
				{
					name: '클라이밍파크 신논현점',
					address_road: '서울 강남구 강남대로 468 충림빌딩 지하3층',
					address_lot: '서울 강남구 역삼동 808-4 충림빌딩 지하3층',
					latitude: '37.5041',
					longitude: '127.0251',
					level_list: [
						{
							level: '1',
							color: '#FFFF00',
						},
						{
							level: '2',
							color: '#FFD0FD',
						},
						{
							level: '3',
							color: '#0000FF',
						},
						{
							level: '4',
							color: '#FF0000',
						},
						{
							level: '5',
							color: '#8000FF',
						},
						{
							level: '6',
							color: '#964B00',
						},
						{
							level: '7',
							color: '#C0C0C0',
						},
						{
							level: '8',
							color: '#000000',
						},
						{
							level: '9',
							color: '#FFFFFF',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/e4226927-a552-483c-957e-880efb098b15/image.png',
				},
				{
					name: '클라이밍파크 강남점',
					address_road: '서울 강남구 강남대로 364 미왕빌딩 지하1층',
					address_lot: '서울 강남구 역삼동 826-21 미왕빌딩 지하1층 ',
					latitude: '37.4955',
					longitude: '127.0292',
					level_list: [
						{
							level: '1',
							color: '#FFFF00',
						},
						{
							level: '2',
							color: '#FFD0FD',
						},
						{
							level: '3',
							color: '#0000FF',
						},
						{
							level: '4',
							color: '#FF0000',
						},
						{
							level: '5',
							color: '#8000FF',
						},
						{
							level: '6',
							color: '#964B00',
						},
						{
							level: '7',
							color: '#C0C0C0',
						},
						{
							level: '8',
							color: '#000000',
						},
						{
							level: '9',
							color: '#FFFFFF',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/91171fe2-9505-4355-bf6c-c2c7014926c2/image.png',
				},
				{
					name: '클라이밍파크 종로점',
					address_road: '서울 종로구 종로4가 3',
					address_lot: '서울 종로구 종로 199-1',
					latitude: '37.5714',
					longitude: '126.9998',
					level_list: [
						{
							level: '1',
							color: '#FFFF00',
						},
						{
							level: '2',
							color: '#FFD0FD',
						},
						{
							level: '3',
							color: '#0000FF',
						},
						{
							level: '4',
							color: '#FF0000',
						},
						{
							level: '5',
							color: '#8000FF',
						},
						{
							level: '6',
							color: '#964B00',
						},
						{
							level: '7',
							color: '#C0C0C0',
						},
						{
							level: '8',
							color: '#000000',
						},
						{
							level: '9',
							color: '#FFFFFF',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/41aa385a-9879-4d8c-86ba-149e60ce080b/image.png',
				},
				{
					name: '클라이밍파크 한티점',
					address_road: '서울 강남구 선릉로 324 지하3층',
					address_lot: '서울 강남구 대치동 922-1 지하3층',
					latitude: '37.4985',
					longitude: '127.0520',
					level_list: [
						{
							level: '1',
							color: '#FFFF00',
						},
						{
							level: '2',
							color: '#FFD0FD',
						},
						{
							level: '3',
							color: '#0000FF',
						},
						{
							level: '4',
							color: '#FF0000',
						},
						{
							level: '5',
							color: '#8000FF',
						},
						{
							level: '6',
							color: '#964B00',
						},
						{
							level: '7',
							color: '#C0C0C0',
						},
						{
							level: '8',
							color: '#000000',
						},
						{
							level: '9',
							color: '#FFFFFF',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/5e16e5e9-216e-4e7f-a12d-3b6cddee8849/image.png',
				},
				{
					name: '클라이밍파크 성수점',
					address_road: '서울 성동구 연무장13길 7',
					address_lot: '서울 성동구 성수동2가 273-34',
					latitude: '37.5423',
					longitude: '127.0580',
					level_list: [
						{
							level: '1',
							color: '#FFFF00',
						},
						{
							level: '2',
							color: '#FFD0FD',
						},
						{
							level: '3',
							color: '#0000FF',
						},
						{
							level: '4',
							color: '#FF0000',
						},
						{
							level: '5',
							color: '#8000FF',
						},
						{
							level: '6',
							color: '#964B00',
						},
						{
							level: '7',
							color: '#C0C0C0',
						},
						{
							level: '8',
							color: '#000000',
						},
						{
							level: '9',
							color: '#FFFFFF',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/01893f86-14d9-4a7b-80e9-b2496e42e556/image.png',
				},
				{
					name: '피커스 구로점',
					address_road: '서울 구로구 구로중앙로 152 NC백화점 신구로점 6층',
					address_lot: '서울 구로구 구로동 573 NC백화점 신구로점 6층',
					latitude: '37.5011',
					longitude: '126.8827',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/logo_urls/syo_ee/post/64340ba9-db05-4e93-af7a-50457ccbf0e9/logo_url.jpg',
				},
				{
					name: '피커스 신촌점',
					address_road: '서울 서대문구 신촌로 129 11층',
					address_lot: '서울 서대문구 창천동 20-25 11층',
					latitude: '37.5565',
					longitude: '126.9402',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/logo_urls/syo_ee/post/64340ba9-db05-4e93-af7a-50457ccbf0e9/logo_url.jpg',
				},
				{
					name: '피커스 종로점',
					address_road: '서울 종로구 돈화문로5가길 1 피카디리플러스 지하4층',
					address_lot: '서울 종로구 돈의동 137 피카디리플러스 지하4층',
					latitude: '37.5710',
					longitude: '126.9911',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/logo_urls/syo_ee/post/64340ba9-db05-4e93-af7a-50457ccbf0e9/logo_url.jpg',
				},
				{
					name: '알레클라임 영등포점',
					address_road: '서울 영등포구 영등포로33길 14 스위트빌 B01호',
					address_lot: '서울 영등포구 영등포동6가 148 스위트빌 B01호',
					latitude: '37.5215',
					longitude: '126.9028',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFFF00',
						},
						{
							level: '3',
							color: '#9DD84B',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#FF0000',
						},
						{
							level: '7',
							color: '#C0C0C0',
						},
						{
							level: '8',
							color: '#964B00',
						},
						{
							level: '9',
							color: '#FFD0FD',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/f62b056d-45d0-4528-b118-b89c7e1b0f5a/image.png',
				},
				{
					name: '알레클라이밍 혜화점',
					address_road: '서울 종로구 창경궁로34길 18-5 토가빌딩 지하2층',
					address_lot: '서울 종로구 명륜2가 21-9 토가빌딩 지하2층',
					latitude: '37.5840',
					longitude: '127.0007',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFFF00',
						},
						{
							level: '3',
							color: '#9DD84B',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#FF0000',
						},
						{
							level: '7',
							color: '#C0C0C0',
						},
						{
							level: '8',
							color: '#964B00',
						},
						{
							level: '9',
							color: '#FFD0FD',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/300c2222-e054-4512-b415-d877c0d15dcd/image.png',
				},
				{
					name: '알레클라이밍 강동점',
					address_road: '서울 강동구 천호대로177길 39 지하2층',
					address_lot: '서울 강동구 길동 414-9 지하2층',
					latitude: '37.5363',
					longitude: '127.1378',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFFF00',
						},
						{
							level: '3',
							color: '#9DD84B',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#FF0000',
						},
						{
							level: '7',
							color: '#C0C0C0',
						},
						{
							level: '8',
							color: '#964B00',
						},
						{
							level: '9',
							color: '#FFD0FD',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/9cf45a28-85e8-478f-ad6f-f50a685c8784/image.png',
				},
				{
					name: '손상원 클라이밍짐 을지로점',
					address_road: '서울 서초구 강남대로 331 지하1층',
					address_lot: '서울 서초구 서초동 1337-32 지하1층',
					latitude: '37.4925',
					longitude: '127.0295',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFFF00',
						},
						{
							level: '3',
							color: '#008001',
						},
						{
							level: '4',
							color: '#0000FF',
						},
						{
							level: '5',
							color: '#FF0000',
						},
						{
							level: '6',
							color: '#000000',
						},
						{
							level: '7',
							color: '#C0C0C0',
						},
						{
							level: '8',
							color: '#964B00',
						},
						{
							level: '9',
							color: '#FFD0FD',
						},
					],
					logo_url:
						'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231107_76%2F1699354814307vdydC_JPEG%2F%25C0%25BB%25C1%25F6%25B7%25CE%25C1%25A1.jpg',
				},
				{
					name: '손상원 클라이밍짐 강남점',
					address_road: '서울 중구 남대문로 125 지하1층',
					address_lot: '서울 중구 다동 85 지하1층',
					latitude: '37.5683',
					longitude: '126.9823',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFFF00',
						},
						{
							level: '3',
							color: '#008001',
						},
						{
							level: '4',
							color: '#0000FF',
						},
						{
							level: '5',
							color: '#FF0000',
						},
						{
							level: '6',
							color: '#000000',
						},
						{
							level: '7',
							color: '#C0C0C0',
						},
						{
							level: '8',
							color: '#964B00',
						},
						{
							level: '9',
							color: '#FFD0FD',
						},
					],
					logo_url:
						'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240201_225%2F1706782691255g32zn_PNG%2F%25BC%25D5%25C1%25FC_%25B7%25CE%25B0%25ED-002_%25281%2529.png',
				},
				{
					name: '손상원 클라이밍짐 판교점',
					address_road:
						'경기 성남시 분당구 대왕판교로 670 유스페이스2 B동 지하 1층',
					address_lot: '경기 성남시 분당구 삼평동 682 유스페이스2 B동 지하 1층',
					latitude: '37.4020',
					longitude: '127.1069',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFFF00',
						},
						{
							level: '3',
							color: '#008001',
						},
						{
							level: '4',
							color: '#0000FF',
						},
						{
							level: '5',
							color: '#FF0000',
						},
						{
							level: '6',
							color: '#000000',
						},
						{
							level: '7',
							color: '#C0C0C0',
						},
						{
							level: '8',
							color: '#964B00',
						},
						{
							level: '9',
							color: '#FFD0FD',
						},
					],
					logo_url:
						'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240509_25%2F1715235761782Vwovl_JPEG%2F%25C1%25A6%25B8%25F1%25C0%25BB-%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4_-001_%25286%2529.jpg',
				},
				{
					name: '더플라스틱 클라이밍 문래점',
					address_road: '서울 영등포구 도림로 423',
					address_lot: '서울 영등포구 문래동2가 11-1',
					latitude: '37.5136',
					longitude: '126.8957',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210419_164%2F1618808983725GvOYx_JPEG%2F%25B9%25AB%25C1%25A6-2.jpg',
				},
				{
					name: '더플라스틱클라이밍 염창점',
					address_road: '서울 강서구 공항대로81길 27 1층',
					address_lot: '서울 강서구 염창동 262-1 1층',
					latitude: '37.5484',
					longitude: '126.8762',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/ae6a1ce4-9446-45ba-93cf-7cf84f248253/image.png',
				},
				{
					name: '신촌 담장 클라이밍',
					address_road: '서울 서대문구 신촌역로 10 혜우빌딩 5층',
					address_lot: '서울 서대문구 대현동 101-7 혜우빌딩 5층',
					latitude: '37.5575',
					longitude: '126.9431',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#FFFFFF',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/cb0a337c-41ad-493c-b21d-e3f0b8bcaf24/image.png',
				},
				{
					name: '을지로 담장 클라이밍',
					address_road: '서울 중구 마른내로 63-3 A&D빌딩 2층',
					address_lot: '서울 중구 인현동2가 96-2 A&D빌딩 2층',
					latitude: '37.5643',
					longitude: '126.9950',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#FFFFFF',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/088df00d-4902-41bd-b5be-e18f9765542a/image.png',
				},
				{
					name: '서울볼더스 선유',
					address_road: '서울 영등포구 양평로28마길 7 3층',
					address_lot: '서울 양천구 양평동6가 13-1 2층',
					latitude: '37.5420',
					longitude: '126.8909',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
					],
					logo_url:
						'https://naverbooking-phinf.pstatic.net/20240508_170/1715150857153tTv8c_JPEG/%B5%B5%C0%E5%BF%EB.jpg',
				},
				{
					name: '서울볼더스 목동',
					address_road: '서울 양천구 신목로 53 2층',
					address_lot: '서울 양천구 신정동 88-5 2층',
					latitude: '37.5204',
					longitude: '126.8727',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
					],
					logo_url:
						'https://naverbooking-phinf.pstatic.net/20240508_170/1715150857153tTv8c_JPEG/%B5%B5%C0%E5%BF%EB.jpg',
				},
				{
					name: '클라임 어스 장한평점',
					address_road: '서울 동대문구 장한로2길 63 2층',
					address_lot: '서울 동대문구 장안동 457-2 2층',
					latitude: '37.5618',
					longitude: '127.0688',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#FFFFFF',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/351ededb-7f7e-4c08-a057-d121fdaf05fa/image.png',
				},
				{
					name: '클라임 어스 미사점',
					address_road:
						'경기 하남시 미사강변동로 81 큐브앤타워 13층 1301~1304호',
					address_lot: '경기 하남시 망월동 1116 큐브앤타워 13층 1301~1304호',
					latitude: '37.5622',
					longitude: '127.1927',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#FFFFFF',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/dca7f6d0-ca08-409a-8155-370067feafb5/image.png',
				},
				{
					name: '클라임 어스 모란점',
					address_road: '경기 성남시 중원구 성남대로 1126 601호',
					address_lot: '경기 성남시 중원구 성남동 4123 601호',
					latitude: '37.4302',
					longitude: '127.1298',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#FFFFFF',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/3f55b826-dde2-4384-a494-76461b3cd0c5/image.png',
				},
				{
					name: '클라임잇 클라이밍 목감점',
					address_road: '경기 시흥시 배미골길 24 1층',
					address_lot: '경기 시흥시 목감동 414-2 1층',
					latitude: '37.3846',
					longitude: '126.8640',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
						{
							level: '9',
							color: '#FFFFFF',
						},
					],
					logo_url:
						'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230711_147%2F1689080699467O4o0U_PNG%2F%25B7%25CE%25B0%25ED_%25B8%25F1%25B0%25A8_white.png',
				},
				{
					name: '클라임잇 클라이밍 구로점',
					address_road: '서울 구로구 구로중앙로 215 지하 1층',
					address_lot: '서울 구로구 구로동 612-10 지하 1층',
					latitude: '37.5049',
					longitude: '126.8771',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
						{
							level: '9',
							color: '#FFFFFF',
						},
					],
					logo_url:
						'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F17E55A729337407BBC48939CA9629D50',
				},
				{
					name: '락트리클라이밍 강남',
					address_road: '서울 강남구 강남대로118길 12 부경빌딩 지하 2층',
					address_lot: '서울 강남구 논현동 183 부경빌딩 지하 2층',
					latitude: '37.5062',
					longitude: '127.0247',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#FFFFFF',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/6dc31fa7-fb96-4485-8d07-9a6780c9c2aa/image.png',
				},
				{
					name: '락트리클라이밍 분당',
					address_road:
						'경기 성남시 분당구 황새울로 224 청구블루빌 지하1층 2호',
					address_lot: '경기 성남시 분당구 수내동 11-1 청구블루빌 지하1층 2호',
					latitude: '37.3787',
					longitude: '127.1132',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#FFFFFF',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/d18e3e83-2dd3-4b5a-b41d-d135ea46cf8f/image.png',
				},
				{
					name: '에이스클라이밍센터',
					address_road: '서울 구로구 가마산로27길 14 신원빌딩 지하1층',
					address_lot: '서울 구로구 구로동 106-8 신원빌딩 지하1층',
					latitude: '37.4977',
					longitude: '126.8918',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
					],
					logo_url:
						'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230729_85%2F169061444960764yfR_JPEG%2F2020%25BD%25C5%25B7%25CE%25B0%25ED_%25C0%25FC%25C3%25BC%25BF%25CF%25BC%25BA%25C7%25FC_%25BD%25BA%25C4%25F9%25BE%25EE.jpg',
				},
				{
					name: '스튜디오볼더 클라이밍짐',
					address_road:
						'서울 구로구 디지털로33길 11 에이스테크노타워8차 지하1층 B101호',
					address_lot:
						'서울 구로구 구로동 191-7 에이스테크노타워8차 지하1층 B101호',
					latitude: '37.4854',
					longitude: '126.8955',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/3060f2e2-7ab0-437a-8eb8-54ff0b34c000/image.png',
				},
				{
					name: '캐치스톤 클라이밍짐',
					address_road: '경기 부천시 원미구 부천로 11 잼존프라자 18층',
					address_lot: '경기 부천시 원미구 심곡동 175-6 잼존프라자 18층',
					latitude: '37.4855',
					longitude: '126.7823',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
						{
							level: '9',
							color: '#FFFFFF',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/121da8fb-4cfc-403b-91b3-0b5d5567b3ea/image.png',
				},
				{
					name: '볼더가든',
					address_road:
						'경기 시흥시 은계호수로 49 시흥센트럴 돔 그랑트리 캐슬 3층 3043~3045호',
					address_lot:
						'경기 시흥시 은행동 601-302 시흥센트럴 돔 그랑트리 캐슬 3층 3043~3045호',
					latitude: '37.4458',
					longitude: '126.8019',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/a43715e0-9438-4f34-9a43-22ab225a4622/image.png',
				},
				{
					name: '볼더그라운드',
					address_road: '서울 마포구 잔다리로 31 지하1층',
					address_lot: '서울 마포구 서교동 395-15 지하1층',
					latitude: '37.5512',
					longitude: '126.9196',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/7b9a000a-17e5-464e-9da0-835183090929/image.png',
				},
				{
					name: '볼더프렌즈 클라이밍',
					address_road: '서울 마포구 홍익로 25 지하3층',
					address_lot: '서울 마포구 서교동 356-1 지하3층',
					latitude: '37.5543',
					longitude: '126.9219',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FF0000',
						},
						{
							level: '3',
							color: '#FF8000',
						},
						{
							level: '4',
							color: '#FFFF00',
						},
						{
							level: '5',
							color: '#008001',
						},
						{
							level: '6',
							color: '#0000FF',
						},
						{
							level: '7',
							color: '#000080',
						},
						{
							level: '8',
							color: '#8000FF',
						},
						{
							level: '9',
							color: '#C0C0C0',
						},
						{
							level: '10',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/74244b6a-20e3-467d-8a0f-32e147724fb6/image.png',
				},
				{
					name: '코알라클라이밍짐 상암점',
					address_road:
						'서울 마포구 월드컵북로 396 누리꿈스퀘어 디지털파빌리온 지하1층 B1040호',
					address_lot:
						'서울 마포구 상암동 1605 누리꿈스퀘어 디지털파빌리온 지하1층 B1040호',
					latitude: '37.5793',
					longitude: '126.8913',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFD0FD',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#FF8000',
						},
						{
							level: '7',
							color: '#FF0000',
						},
						{
							level: '8',
							color: '#8000FF',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/e2bc1aa2-df9d-4d17-97bc-1d50598bee0e/image.png',
				},
				{
					name: '코알라클라이밍 킨텍스점',
					address_road:
						'경기 고양시 일산서구 중앙로 1560-34 이마파킹프라자 지하1층',
					address_lot:
						'경기 고양시 일산서구 대화동 2207 이마파킹프라자 지하1층',
					latitude: '37.6767',
					longitude: '126.7476',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFD0FD',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#FF8000',
						},
						{
							level: '7',
							color: '#FF0000',
						},
						{
							level: '8',
							color: '#8000FF',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/0ab0687f-885a-4d43-a0a8-ab708edc684e/image.png',
				},
				{
					name: '치즈클라이밍',
					address_road: '서울 용산구 원효로 134 대교빌딩 지하 102호',
					address_lot: '서울 용산구 원효로3가 56-4 대교빌딩 지하 102호',
					latitude: '37.5336',
					longitude: '126.9581',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/a3463c6f-2703-4f34-bf1d-33ec2bfd917d/image.png',
				},
				{
					name: '스톤즈클라이밍',
					address_road: '서울 관악구 남부순환로 1990-3 닷컴힐즈 102동 B201호',
					address_lot: '서울 관악구 봉천동 1653-1 닷컴힐즈 102동 B201호',
					latitude: '37.4750',
					longitude: '126.9701',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/a6481763-8768-46c9-965c-70737b981e5b/image.png',
				},
				{
					name: '볼더생활',
					address_road: '서울 동작구 동작대로29길 69 7층',
					address_lot: '서울 동작구 사당동 120-1 7층',
					latitude: '37.4884',
					longitude: '126.9781',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/036ffcee-7d7d-401d-86f9-10cfe78468c4/image.png',
				},
				{
					name: '클라이밍줌',
					address_road: '인천 연수구 청능대로 75 7층',
					address_lot: '인천 연수구 청학동 502-2 7층',
					latitude: '37.4155',
					longitude: '126.6746',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#964B00',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/7867a211-65ff-4e1d-8bc0-de92c68e8876/image.png',
				},
				{
					name: '에어즈락 클라이밍 범계점',
					address_road: '경기 안양시 동안구 시민대로 161 안양무역센터 201호',
					address_lot: '경기 안양시 동안구 비산동 1107 안양무역센터 201호',
					latitude: '37.3904',
					longitude: '126.9491',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/146accce-877b-486e-940e-6d5882e71f36/image.png',
				},
				{
					name: '에어즈락 클라이밍 위례점',
					address_road: '서울 송파구 위례광장로 188 아이온스퀘어 12층',
					address_lot: '서울 송파구 장지동 881 아이온스퀘어 12층',
					latitude: '37.4811',
					longitude: '127.1424',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/32aa16e1-9a3f-44f3-a7ad-e027dfef81e0/image.png',
				},
				{
					name: '클라임데이즈',
					address_road:
						'경기 안양시 만안구 덕천로152번길 25 아이에스비즈타워 A동 217호',
					address_lot:
						'경기 안양시 만안구 안양동 1432 아이에스비즈타워 A동 217호',
					latitude: '37.3928',
					longitude: '126.9390',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/daea61fe-6f50-45d4-8d0b-8aad9c73a8e4/image.png',
				},
				{
					name: '온사이트클라이밍',
					address_road: '서울 강남구 테헤란로 505 싹타워 지하1층',
					address_lot: '서울 강남구 삼성동 157-36 싹타워 지하1층',
					latitude: '37.5075',
					longitude: '127.0574',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/c7159f1e-25fa-4881-9b76-e67b155399ee/image.png',
				},
				{
					name: '훅클라이밍 왕십리점',
					address_road: '서울 성동구 고산자로6길 40 2층',
					address_lot: '서울 성동구 행당동 140 2층',
					latitude: '37.5582',
					longitude: '127.0355',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/d8e6aa50-48fd-4ef9-8c95-2fb474be3dc9/image.png',
				},
				{
					name: '훅클라이밍 성수점',
					address_road: '서울 성동구 성수일로12길 34 3층',
					address_lot: '서울 성동구 성수동2가 289-211 3층',
					latitude: '37.5474',
					longitude: '127.0545',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/d8e6aa50-48fd-4ef9-8c95-2fb474be3dc9/image.png',
				},
				{
					name: '허브클라이밍',
					address_road: '인천 남동구 논고개로123번길 17 10층 1001,1006호',
					address_lot: '인천 남동구 논현동 632-2 10층 1001,1006호',
					latitude: '37.4016',
					longitude: '126.7230',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/526cdcaa-2c19-4626-91c3-182195614851/image.png',
				},
				{
					name: '볼더하이웨이 클라이밍짐',
					address_road: '서울 강남구 논현로86길 20 봉강빌딩 지하1층',
					address_lot: '서울 강남구 역삼동 725-9 봉강빌딩 지하1층',
					latitude: '37.5000',
					longitude: '127.0391',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/1652a6ab-fefd-4c47-aef6-5683c6a7542b/image.png',
				},
				{
					name: '웨어하우스 볼더링',
					address_road: '서울 동대문구 경동시장로23길 5 가,나동 1층',
					address_lot: '서울 동대문구 제기동 682-22 가,나동 1층',
					latitude: '37.5854',
					longitude: '127.0399',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/47b22c6c-ad04-4c52-9be6-088f451b5d3c/image.png',
				},
				{
					name: '오프더월클라이밍',
					address_road: '서울 용산구 이태원로 190 mode127 지하2층',
					address_lot: '서울 용산구 이태원동 127-5 mode127 지하2층',
					latitude: '35.8190',
					longitude: '127.8733',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#964B00',
						},
						{
							level: '10',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/843310fa-414d-44fe-9a75-c5c65d525ab3/image.png',
				},
				{
					name: '크래커클라이밍',
					address_road: '서울 중랑구 면목로92길 37-4 지하1층',
					address_lot: '서울 중랑구 상봉동 102 지하1층',
					latitude: '37.5958',
					longitude: '127.0879',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/0279f0e6-e20d-4070-be01-90a9eab19b66/image.png',
				},
				{
					name: '락랜드',
					address_road: '서울 강북구 도봉로 315 에피소드수유838 2층',
					address_lot: '서울 강북구 수유동 740 에피소드수유838 2층',
					latitude: '37.6366',
					longitude: '127.0234',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#964B00',
						},
						{
							level: '10',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/9b6e49fb-6ba6-4c3f-98df-416b060bb770/image.png',
				},
				{
					name: '무중력 클라이밍',
					address_road: '서울 강남구 논현로 563 언주빌딩 지하1층',
					address_lot: '서울 강남구 역삼동 606-33 언주빌딩 지하1층',
					latitude: '37.5063',
					longitude: '127.0339',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/685d819c-e401-483a-bc6d-e21ddab62c4a/image.png',
				},
				{
					name: '클라임투더문',
					address_road: '서울 송파구 백제고분로 224 창대빌딩 지하1층',
					address_lot: '서울 송파구 삼전동 49-1 창대빌딩 지하1층',
					latitude: '37.5031',
					longitude: '127.0913',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#8000FF',
						},
						{
							level: '7',
							color: '#000000',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/4545df9a-9e33-4413-9c83-f021dec77bcc/image.png',
				},
				{
					name: '행클라임 클라이밍짐 구파발점',
					address_road:
						'서울 은평구 통일로 1020 은평뉴타운 신한헤센스마트 M203호',
					address_lot:
						'서울 은평구 진관동 100-2 은평뉴타운 신한헤센스마트 M203호',
					latitude: '37.6334',
					longitude: '126.9177',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#8000FF',
						},
						{
							level: '7',
							color: '#000000',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#FFFFFF',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/49f71442-cf8d-4f1d-ae93-569fb749082f/image.png',
				},
				{
					name: '비블럭클라이밍 송도점',
					address_road:
						'인천 연수구 송도과학로16번길 13-39 엠씨넥스타워 1층 107호',
					address_lot: '인천 연수구 송도동 173-3 엠씨넥스타워 1층 107호',
					latitude: '37.3800',
					longitude: '126.6637',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFFF00',
						},
						{
							level: '3',
							color: '#FF8000',
						},
						{
							level: '4',
							color: '#FFD0FD',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#C0C0C0',
						},
						{
							level: '7',
							color: '#008001',
						},
						{
							level: '8',
							color: '#FF0000',
						},
						{
							level: '9',
							color: '#8000FF',
						},
						{
							level: '10',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/e5ecfc7c-6865-4a50-9fd6-2ff266384042/image.png',
				},
				{
					name: '비블럭클라이밍 영종하늘도시점',
					address_road:
						'인천 중구 하늘중앙로195번길 18 썬앤문브이 6층 601~604호',
					address_lot: '인천 중구 중산동 1884-7 썬앤문브이 6층 601~604호',
					latitude: '37.4888',
					longitude: '126.5611',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFFF00',
						},
						{
							level: '3',
							color: '#FF8000',
						},
						{
							level: '4',
							color: '#FFD0FD',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#C0C0C0',
						},
						{
							level: '7',
							color: '#008001',
						},
						{
							level: '8',
							color: '#FF0000',
						},
						{
							level: '9',
							color: '#8000FF',
						},
						{
							level: '10',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/436de2b5-c627-41a8-9eff-9028bb541e39/image.png',
				},
				{
					name: '페퍼 클라이밍',
					address_road: '경기 고양시 덕양구 권율대로 656 19층',
					address_lot: '경기 고양시 덕양구 원흥동 632-1 19층',
					latitude: '37.6483',
					longitude: '126.8731',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#FFFFFF',
						},
						{
							level: '9',
							color: '#C0C0C0',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/7cfac1c1-46a2-4cd0-85d0-d2de73d6ca3b/image.png',
				},
				{
					name: '온플릭클라이밍',
					address_road:
						'서울 강동구 올림픽로 664 대우한강베네시티 상가동 지하1층 101호(교보문고 옆)',
					address_lot:
						'서울 강동구 천호동 425-5 대우한강베네시티 상가동 지하1층 101호(교보문고 옆)',
					latitude: '37.5406',
					longitude: '127.1245',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/b7f40a2f-5bb3-43d5-a2dc-73f5319959a6/image.png',
				},
				{
					name: '드림캐처클라이밍짐',
					address_road: '서울 노원구 상계로5길 32 금호프라자 7층',
					address_lot: '서울 노원구 상계동 357-2 금호프라자 7층',
					latitude: '37.6570',
					longitude: '127.0628',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/6a6058b0-74b5-4def-92d2-2bf56eb15e97/image.png',
				},
				{
					name: '클라이밍 업더월 일산점',
					address_road: '경기 고양시 일산서구 경의로 805',
					address_lot: '경기 고양시 일산서구 덕이동 219-33',
					latitude: '37.6893',
					longitude: '126.7589',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/4f9c23a9-4717-4835-a845-a9f1da274d18/image.png',
				},
				{
					name: '비숍클라이밍',
					address_road: '서울 노원구 동일로 1393 일신프라자 지하1층 4호',
					address_lot: '서울 노원구 상계동 730-5 일신프라자 지하1층 4호',
					latitude: '37.6529',
					longitude: '127.0605',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/b21222a1-e31e-457d-a30d-88b2cdfb698c/image.png',
				},
				{
					name: '닷클라이밍짐',
					address_road: '서울 송파구 법원로8길 9 청림타워 2층',
					address_lot: '서울 송파구 문정동 324-8 청림타워 2층',
					latitude: '37.4844',
					longitude: '127.1220',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#964B00',
						},
						{
							level: '8',
							color: '#000000',
						},
						{
							level: '9',
							color: '#FFFFFF',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/ac7e043c-6a7d-4c8c-a60e-03a01e32e77f/image.png',
				},
				{
					name: '픽클라이밍',
					address_road:
						'경기 김포시 김포한강4로 507 계림M스퀘어 4층 404, 405호',
					address_lot: '경기 김포시 구래동 6880-2 계림M스퀘어 4층 404, 405호',
					latitude: '37.6460',
					longitude: '126.6276',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/910125ff-319c-44df-b457-5bf28c2a1f90/image.png',
				},
				{
					name: '볼더메이트 클라이밍 수지점',
					address_road: '경기 용인시 수지구 문정로 13 중수프라자 6층 602-2호',
					address_lot:
						'경기 용인시 수지구 풍덕천동 1080-20 중수프라자 6층 602-2호',
					latitude: '37.3219',
					longitude: '127.0960',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
						{
							level: '9',
							color: '#FFFFFF',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/300590af-1938-4be1-92b1-871124efe3f4/image.png',
				},
				{
					name: '볼더메이트 클라이밍 기흥점',
					address_road: '경기 용인시 기흥구 기흥로 58 기흥ICT밸리 B동 B225호',
					address_lot: '경기 용인시 기흥구 구갈동 681 기흥ICT밸리 B동 B225호',
					latitude: '37.2803',
					longitude: '127.1176',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
						{
							level: '9',
							color: '#FFFFFF',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/64ccecda-ff1b-48fd-8ff1-01492cfd634a/image.png',
				},
				{
					name: '언더독클라임',
					address_road: '경기 수원시 팔달구 권광로207번길 39 지산빌딩 4층',
					address_lot: '경기 수원시 팔달구 인계동 1039-1 지산빌딩 4층',
					latitude: '37.2664',
					longitude: '127.0312',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFFF00',
						},
						{
							level: '3',
							color: '#9DD84B',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#FF0000',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#C0C0C0',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/4348a43c-32b6-4f51-9c33-783256937e63/image.png',
				},
				{
					name: '퍼즐클라이밍',
					address_road:
						'경기 남양주시 다산중앙로19번길 15 성수프라자 4층 401~403호',
					address_lot: '경기 남양주시 다산동 6146 성수프라자 4층 401~403호',
					latitude: '37.6144',
					longitude: '127.1540',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/89605546-7195-4ee2-960e-29d0be210932/image.png',
				},
				{
					name: '더볼더',
					address_road:
						'경기 성남시 분당구 미금일로90번길 36-5 더프라자 5층 501호',
					address_lot: '경기 성남시 분당구 구미동 29-1 더프라자 5층 501호',
					latitude: '37.3492',
					longitude: '127.1104',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#8000FF',
						},
						{
							level: '8',
							color: '#000000',
						},
						{
							level: '9',
							color: '#964B00',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/23948765-e72c-4a02-8b4b-3448b9e8a307/image.png',
				},
				{
					name: '그래비티클라이밍 영통점',
					address_road: '경기 수원시 영통구 효원로 400 탑프라자 7층',
					address_lot: '경기 수원시 영통구 매탄동 1276 탑프라자 7층',
					latitude: '37.2581',
					longitude: '127.0453',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#0000FF',
						},
						{
							level: '5',
							color: '#000080',
						},
						{
							level: '6',
							color: '#8000FF',
						},
						{
							level: '7',
							color: '#FFD0FD',
						},
						{
							level: '8',
							color: '#FFFFFF',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/016e512e-aa0f-4cd4-8b5d-594e6a29fe53/image.png',
				},
				{
					name: '그래비티클라이밍 수원점',
					address_road: '경기 수원시 팔달구 갓매산로 31 홍익스포츠프라자 2층',
					address_lot: '경기 수원시 팔달구 매산로2가 66-1 홍익스포츠프라자 2층',
					latitude: '37.2672',
					longitude: '127.0051',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#0000FF',
						},
						{
							level: '5',
							color: '#000080',
						},
						{
							level: '6',
							color: '#8000FF',
						},
						{
							level: '7',
							color: '#FFD0FD',
						},
						{
							level: '8',
							color: '#FFFFFF',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/c1f8d4a5-ab2a-46dd-baa7-2661aad7b0bb/image.png',
				},
				{
					name: '킹콩클라이밍',
					address_road: '경기 수원시 팔달구 경수대로 572 3층',
					address_lot: '경기 수원시 팔달구 인계동 942 3층',
					latitude: '37.2766',
					longitude: '127.0308',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#FFD0FD',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/a4e57654-15db-4959-b0c9-8d927ff6b847/image.png',
				},
				{
					name: '클라임바운스 수원점',
					address_road: '경기 수원시 영통구 덕영대로 1566 더판타지움 3층',
					address_lot: '경기 수원시 영통구 영통동 981-2 더판타지움 3층',
					latitude: '37.2453',
					longitude: '127.0616',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFD0FD',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#FF0000',
						},
						{
							level: '8',
							color: '#964B00',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/17deb68b-3b31-4e4a-9012-53a6abb7badc/image.png',
				},
				{
					name: '클라임바운스 이천점',
					address_road: '경기 이천시 부발읍 경충대로2050번길 59-76',
					address_lot: '경기 이천시 부발읍 부발읍 아미리 678',
					latitude: '37.2518',
					longitude: '127.4933',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFD0FD',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#FF0000',
						},
						{
							level: '8',
							color: '#964B00',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/4e7e9436-5c9a-4b5f-84f3-302aa1402923/image.png',
				},
				{
					name: '클라임바운스 창전점',
					address_road: '경기 이천시 이섭대천로 1229 타워빌딩 9층',
					address_lot: '경기 이천시 창전동 165-1 타워빌딩 9층',
					latitude: '37.2800',
					longitude: '127.4465',
					level_list: [
						{
							level: '1',
							color: '#FFFFFF',
						},
						{
							level: '2',
							color: '#FFD0FD',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#000080',
						},
						{
							level: '7',
							color: '#FF0000',
						},
						{
							level: '8',
							color: '#964B00',
						},
						{
							level: '9',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/7df9e6ff-03d9-40c1-940f-a05b32289564/image.png',
				},
				{
					name: '뀨클라임',
					address_road: '경기 수원시 영통구 청명남로34번길 12 7층',
					address_lot: '경기 수원시 영통구 영통동 1010-3 7층',
					latitude: '37.2522',
					longitude: '127.0761',
					level_list: [
						{
							level: '1',
							color: '#FF0000',
						},
						{
							level: '2',
							color: '#FF8000',
						},
						{
							level: '3',
							color: '#FFFF00',
						},
						{
							level: '4',
							color: '#008001',
						},
						{
							level: '5',
							color: '#0000FF',
						},
						{
							level: '6',
							color: '#8000FF',
						},
						{
							level: '7',
							color: '#964B00',
						},
						{
							level: '8',
							color: '#000000',
						},
					],
					logo_url:
						'https://velog.velcdn.com/images/syo_ee/post/ccb3117b-5b7e-450e-8165-df0170be8625/image.png',
				},
			],
		};
	},
	methods: {
		async sendData(climbingCenter) {
			try {
				const rawData = toRaw(climbingCenter);
				console.log('Sending data:', rawData); // Logs the actual object
				const response = await axios.post(
					`http://125.241.173.9:8080/climbing-info`,
					rawData
				);
				console.log('Data sent successfully:', response.data);
			} catch (error) {
				console.error('Error sending data:', error);
			}
		},
	},
};
</script>
