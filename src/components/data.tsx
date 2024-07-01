import React, { useState } from 'react';
import axios from 'axios';

const Data = () => {
	const [responseMessage, setResponseMessage] = useState('');

	const dataToSave = [
		{
			name: '더클라임 마곡점',
			addressRoad: '서울 강서구 마곡동로 62 마곡사이언스타워 7층',
			addressLot: '서울 강서구 마곡동 727-500 마곡사이언스타워 7층',
			latitude: '37.5606',
			longitude: '126.8337',
			levelList: [
				{
					level: 1,
					color: '#FFFFFF',
				},
				{
					level: 2,
					color: '#FFFF00',
				},
				{
					level: 3,
					color: '#FF8000',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#FF0000',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#C0C0C0',
				},
				{
					level: 9,
					color: '#964B00',
				},
				{
					level: 10,
					color: '#000000',
				},
			],
			logoUrl:
				'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FC417FCFD0F6042C69022D17BBE467FCE',
		},
		{
			name: '더클라임 문래점',
			addressRoad: '서울 영등포구 당산로 63',
			addressLot: '서울 영등포구 당산동2가 1',
			latitude: '37.5206',
			longitude: '126.8950',
			levelList: [
				{
					level: 1,
					color: '#FFFFFF',
				},
				{
					level: 2,
					color: '#FFFF00',
				},
				{
					level: 3,
					color: '#FF8000',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#FF0000',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#C0C0C0',
				},
				{
					level: 9,
					color: '#964B00',
				},
				{
					level: 10,
					color: '#000000',
				},
			],
			logoUrl:
				'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240611_133%2F1718061147813YWzU2_PNG%2F%25B9%25AE%25B7%25A1_%25C0%25CC%25B9%25CC%25C1%25F6.png',
		},
		{
			name: '더클라임B 홍대점',
			addressRoad: '서울 마포구 양화로 125 2층',
			addressLot: '서울 마포구 서교동 353-5 2층',
			latitude: '37.5546',
			longitude: '126.9202',
			levelList: [
				{
					level: 1,
					color: '#FFFFFF',
				},
				{
					level: 2,
					color: '#FFFF00',
				},
				{
					level: 3,
					color: '#FF8000',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#FF0000',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#C0C0C0',
				},
				{
					level: 9,
					color: '#964B00',
				},
				{
					level: 10,
					color: '#000000',
				},
			],
			logoUrl:
				'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FA9924AE02FFE4F1489AC8D6E406B515F',
		},
		{
			name: '더클라임 연남점',
			addressRoad: '서울 마포구 양화로 186 3층',
			addressLot: '서울 마포구 동교동 167-2 3층',
			latitude: '37.5576',
			longitude: '126.9257',
			levelList: [
				{
					level: 1,
					color: '#FFFFFF',
				},
				{
					level: 2,
					color: '#FFFF00',
				},
				{
					level: 3,
					color: '#FF8000',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#FF0000',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#C0C0C0',
				},
				{
					level: 9,
					color: '#964B00',
				},
				{
					level: 10,
					color: '#000000',
				},
			],
			logoUrl:
				'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F94C92D9DDD0C413B971CC7A0765F7614',
		},
		{
			name: '더클라임 신림점',
			addressRoad: '서울 관악구 신원로 35 5층',
			addressLot: '서울 관악구 신림동 1638-1 5층',
			latitude: '37.4821',
			longitude: '126.9289',
			levelList: [
				{
					level: 1,
					color: '#FFFFFF',
				},
				{
					level: 2,
					color: '#FFFF00',
				},
				{
					level: 3,
					color: '#FF8000',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#FF0000',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#C0C0C0',
				},
				{
					level: 9,
					color: '#964B00',
				},
				{
					level: 10,
					color: '#000000',
				},
			],
			logoUrl:
				'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F64DF75A758C2485C94EE21090C4288C3',
		},
		{
			name: '더클라임 서울대점',
			addressRoad: '서울 관악구 남부순환로 1801 지하1층',
			addressLot: '서울 관악구 봉천동 874-4 지하1층',
			latitude: '37.4818',
			longitude: '126.9503',
			levelList: [
				{
					level: 1,
					color: '#FFFFFF',
				},
				{
					level: 2,
					color: '#FFFF00',
				},
				{
					level: 3,
					color: '#FF8000',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#FF0000',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#C0C0C0',
				},
				{
					level: 9,
					color: '#964B00',
				},
				{
					level: 10,
					color: '#000000',
				},
			],
			logoUrl:
				'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FA06C2AE2F241460EAF40CBE478E011EC',
		},
		{
			name: '더클라임 사당점',
			addressRoad: '서울 관악구 과천대로 939 B201호',
			addressLot: '서울 관악구 남현동 1061-18 B201호',
			latitude: '37.4743',
			longitude: '126.9814',
			levelList: [
				{
					level: 1,
					color: '#FFFFFF',
				},
				{
					level: 2,
					color: '#FFFF00',
				},
				{
					level: 3,
					color: '#FF8000',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#FF0000',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#C0C0C0',
				},
				{
					level: 9,
					color: '#964B00',
				},
				{
					level: 10,
					color: '#000000',
				},
			],
			logoUrl:
				'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F7BC87F2BFE7C49C09D355DCB8E0B2C6B',
		},
		{
			name: '더클라임 신사점',
			addressRoad: '서울 강남구 압구정로2길 6 지하2층',
			addressLot: '서울 강남구 신사동 505-7 지하2층',
			latitude: '37.5210',
			longitude: '127.0191',
			levelList: [
				{
					level: 1,
					color: '#FFFFFF',
				},
				{
					level: 2,
					color: '#FFFF00',
				},
				{
					level: 3,
					color: '#FF8000',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#FF0000',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#C0C0C0',
				},
				{
					level: 9,
					color: '#964B00',
				},
				{
					level: 10,
					color: '#000000',
				},
			],
			logoUrl:
				'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F9C6E226AD90F419F9B333F348CB66153',
		},
		{
			name: '더클라임 강남점',
			addressRoad: '서울 강남구 테헤란로8길 21 강남화인빌딩 지하1층',
			addressLot: '서울 강남구 역삼동 823-14 강남화인빌딩 지하1층',
			latitude: '37.4975',
			longitude: '127.0319',
			levelList: [
				{
					level: 1,
					color: '#FFFFFF',
				},
				{
					level: 2,
					color: '#FFFF00',
				},
				{
					level: 3,
					color: '#FF8000',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#FF0000',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#C0C0C0',
				},
				{
					level: 9,
					color: '#964B00',
				},
				{
					level: 10,
					color: '#000000',
				},
			],
			logoUrl:
				'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F725784CFE3484F008EF378576652EFF5',
		},
		{
			name: '더클라임 논현점',
			addressRoad: '서울 서초구 강남대로 519 도충빌딩 지하1층',
			addressLot: '서울 서초구 반포동 723-1 도충빌딩 지하1층',
			latitude: '37.5082',
			longitude: '127.0222',
			levelList: [
				{
					level: 1,
					color: '#FFFFFF',
				},
				{
					level: 2,
					color: '#FFFF00',
				},
				{
					level: 3,
					color: '#FF8000',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#FF0000',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#C0C0C0',
				},
				{
					level: 9,
					color: '#964B00',
				},
				{
					level: 10,
					color: '#000000',
				},
			],
			logoUrl:
				'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FAFEE1370BC6A40EFB92AC9FECB7C24D6',
		},
		{
			name: '더클라임 양재점',
			addressRoad: '서울 강남구 남부순환로 2615 지하1층',
			addressLot: '서울 강남구 도곡동 957-11 지하1층',
			latitude: '37.4851',
			longitude: '127.0358',
			levelList: [
				{
					level: 1,
					color: '#FFFFFF',
				},
				{
					level: 2,
					color: '#FFFF00',
				},
				{
					level: 3,
					color: '#FF8000',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#FF0000',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#C0C0C0',
				},
				{
					level: 9,
					color: '#964B00',
				},
				{
					level: 10,
					color: '#000000',
				},
			],
			logoUrl:
				'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F2629CA4265D344269E3471604D7DAFA5',
		},
		{
			name: '더클라임 일산점',
			addressRoad: '경기 고양시 일산동구 중앙로 1160 오원프라자 5층',
			addressLot: '경기 고양시 일산동구 마두동 805-1 오원프라자 5층',
			latitude: '37.6507',
			longitude: '126.7788',
			levelList: [
				{
					level: 1,
					color: '#FFFFFF',
				},
				{
					level: 2,
					color: '#FFFF00',
				},
				{
					level: 3,
					color: '#FF8000',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#FF0000',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#C0C0C0',
				},
				{
					level: 9,
					color: '#964B00',
				},
				{
					level: 10,
					color: '#000000',
				},
			],
			logoUrl:
				'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FA7B1C38B45154AF7B06B557CF339ECD8',
		},
		{
			name: '서울숲클라이밍 구로점',
			addressRoad: '서울 구로구 디지털로 300 지하1층',
			addressLot: '서울 구로구 구로동 188-25 지하1층',
			latitude: '37.4848',
			longitude: '126.8965',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#964B00',
				},
				{
					level: 9,
					color: '#000000',
				},
			],
			logoUrl:
				'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240126_145%2F1706245754451ztdn6_PNG%2FTalkMedia_i_4ac58d489ff7.png.png',
		},
		{
			name: '서울숲클라이밍 영등포점',
			addressRoad: '서울 영등포구 문래로 164 영등포SK리더스뷰 B동 1층',
			addressLot: '서울 영등포구 문래동3가 55-16 영등포SK리더스뷰 B동 1층',
			latitude: '37.5173',
			longitude: '126.8996',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#964B00',
				},
				{
					level: 9,
					color: '#000000',
				},
			],
			logoUrl:
				'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230714_280%2F1689343619976LmDsS_PNG%2F%25BF%25B5%25B5%25EE%25BD%25A3_%25B7%25CE%25B0%25ED.png',
		},
		{
			name: '서울숲클라이밍 종로점',
			addressRoad: '서울 종로구 수표로 96 국일관드림팰리스 지하1층',
			addressLot: '서울 종로구 관수동 20 국일관드림팰리스 지하1층',
			latitude: '37.5697',
			longitude: '126.9899',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#964B00',
				},
				{
					level: 9,
					color: '#000000',
				},
			],
			logoUrl:
				'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240127_217%2F1706323086285X8NHz_PNG%2F%25C1%25BE%25B7%25CE%25BD%25A3%25B7%25CE%25B0%25ED_%25C8%25F2%25BB%25F6%25B9%25E8%25B0%25E6.png',
		},
		{
			name: '서울숲클라이밍 뚝섬점',
			addressRoad: '서울 성동구 성수일로 19 유한타워 지하2층',
			addressLot: '서울 성동구 성수동1가 656-54 유한타워 지하2층',
			latitude: '37.5423',
			longitude: '127.0486',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#964B00',
				},
				{
					level: 9,
					color: '#000000',
				},
			],
			logoUrl:
				'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230714_296%2F1689344153465ae65p_PNG%2F%25B6%25D2%25BC%25B6%25BD%25A3_%25B7%25CE%25B0%25ED.png',
		},
		{
			name: '서울숲클라이밍 잠실점',
			addressRoad: '서울 송파구 백제고분로7길 49 지하1층',
			addressLot: '서울 송파구 잠실동 183-4 지하1층',
			latitude: '37.5108',
			longitude: '127.0844',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#964B00',
				},
				{
					level: 9,
					color: '#000000',
				},
			],
			logoUrl:
				'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230714_100%2F1689344535905hk4jh_PNG%2F%25C0%25E1%25BD%25C7%25BD%25A3_%25B7%25CE%25B0%25ED.png',
		},
		{
			name: '클라이밍파크 신논현점',
			addressRoad: '서울 강남구 강남대로 468 충림빌딩 지하3층',
			addressLot: '서울 강남구 역삼동 808-4 충림빌딩 지하3층',
			latitude: '37.5041',
			longitude: '127.0251',
			levelList: [
				{
					level: 1,
					color: '#FFFF00',
				},
				{
					level: 2,
					color: '#FFD0FD',
				},
				{
					level: 3,
					color: '#0000FF',
				},
				{
					level: 4,
					color: '#FF0000',
				},
				{
					level: 5,
					color: '#8000FF',
				},
				{
					level: 6,
					color: '#964B00',
				},
				{
					level: 7,
					color: '#C0C0C0',
				},
				{
					level: 8,
					color: '#000000',
				},
				{
					level: 9,
					color: '#FFFFFF',
				},
			],
			logoUrl:
				'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/434302534_1146170369901166_7526273964217363492_n.jpg?stp=dst-jpg_e0_s150x150&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=aE48z_TF0b8Q7kNvgGY94Eq&edm=AJYBtmQBAAAA&ccb=7-5&oh=00_AYBJsCz3Q4QPo7uf3jpi62lf3Px2hSKLhJgHK_e7pqKeWQ&oe=6670B478&_nc_sid=cf751b',
		},
		{
			name: '클라이밍파크 강남점',
			addressRoad: '서울 강남구 강남대로 364 미왕빌딩 지하1층',
			addressLot: '서울 강남구 역삼동 826-21 미왕빌딩 지하1층 ',
			latitude: '37.4955',
			longitude: '127.0292',
			levelList: [
				{
					level: 1,
					color: '#FFFF00',
				},
				{
					level: 2,
					color: '#FFD0FD',
				},
				{
					level: 3,
					color: '#0000FF',
				},
				{
					level: 4,
					color: '#FF0000',
				},
				{
					level: 5,
					color: '#8000FF',
				},
				{
					level: 6,
					color: '#964B00',
				},
				{
					level: 7,
					color: '#C0C0C0',
				},
				{
					level: 8,
					color: '#000000',
				},
				{
					level: 9,
					color: '#FFFFFF',
				},
			],
			logoUrl:
				'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/434307389_422382003661349_9201456989788513610_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=F4qVvpdfPzwQ7kNvgGHZkNc&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYBnRpdm4hHWaS0o-MV2KoGq_K8q9rawtci2IEbd5eyKtA&oe=6670CC5A&_nc_sid=cf751b',
		},
		{
			name: '클라이밍파크 종로점',
			addressRoad: '서울 종로구 종로4가 3',
			addressLot: '서울 종로구 종로 199-1',
			latitude: '37.5714',
			longitude: '126.9998',
			levelList: [
				{
					level: 1,
					color: '#FFFF00',
				},
				{
					level: 2,
					color: '#FFD0FD',
				},
				{
					level: 3,
					color: '#0000FF',
				},
				{
					level: 4,
					color: '#FF0000',
				},
				{
					level: 5,
					color: '#8000FF',
				},
				{
					level: 6,
					color: '#964B00',
				},
				{
					level: 7,
					color: '#C0C0C0',
				},
				{
					level: 8,
					color: '#000000',
				},
				{
					level: 9,
					color: '#FFFFFF',
				},
			],
			logoUrl:
				'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/441145594_1795267261003098_2270917591886546409_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=14UoUzKAtQQQ7kNvgFZl6E6&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYB1XfrXQhXVGJvG02toq0OiQQw630JKEgw7opCDeBqtvQ&oe=6670B105&_nc_sid=cf751b',
		},
		{
			name: '클라이밍파크 한티점',
			addressRoad: '서울 강남구 선릉로 324 지하3층',
			addressLot: '서울 강남구 대치동 922-1 지하3층',
			latitude: '37.4985',
			longitude: '127.0520',
			levelList: [
				{
					level: 1,
					color: '#FFFF00',
				},
				{
					level: 2,
					color: '#FFD0FD',
				},
				{
					level: 3,
					color: '#0000FF',
				},
				{
					level: 4,
					color: '#FF0000',
				},
				{
					level: 5,
					color: '#8000FF',
				},
				{
					level: 6,
					color: '#964B00',
				},
				{
					level: 7,
					color: '#C0C0C0',
				},
				{
					level: 8,
					color: '#000000',
				},
				{
					level: 9,
					color: '#FFFFFF',
				},
			],
			logoUrl:
				'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/444153854_470578312041863_5148456955015591438_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=02pD3EJJrDUQ7kNvgH1qLM3&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYAbI8XW9Yf7mE42oIkxOei1k2IOcWjL0oOcA2DtZS52YA&oe=6670DDFE&_nc_sid=cf751b',
		},
		{
			name: '클라이밍파크 성수점',
			addressRoad: '서울 성동구 연무장13길 7',
			addressLot: '서울 성동구 성수동2가 273-34',
			latitude: '37.5423',
			longitude: '127.0580',
			levelList: [
				{
					level: 1,
					color: '#FFFF00',
				},
				{
					level: 2,
					color: '#FFD0FD',
				},
				{
					level: 3,
					color: '#0000FF',
				},
				{
					level: 4,
					color: '#FF0000',
				},
				{
					level: 5,
					color: '#8000FF',
				},
				{
					level: 6,
					color: '#964B00',
				},
				{
					level: 7,
					color: '#C0C0C0',
				},
				{
					level: 8,
					color: '#000000',
				},
				{
					level: 9,
					color: '#FFFFFF',
				},
			],
			logoUrl:
				'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/434294365_408500021782399_7442866730515302993_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=4AerEW2mlg4Q7kNvgEKxuaX&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYCGbE5bPIyDEJ-EUQr1vwsmrA-BhpDHrxlKjqj8cMpQIA&oe=6670BB1F&_nc_sid=cf751b',
		},
		{
			name: '피커스 구로점',
			addressRoad: '서울 구로구 구로중앙로 152 NC백화점 신구로점 6층',
			addressLot: '서울 구로구 구로동 573 NC백화점 신구로점 6층',
			latitude: '37.5011',
			longitude: '126.8827',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#C0C0C0',
				},
				{
					level: 9,
					color: '#000000',
				},
			],
			logoUrl:
				'https://velog.velcdn.com/logo_urls/syo_ee/post/64340ba9-db05-4e93-af7a-50457ccbf0e9/logo_url.jpg',
		},
		{
			name: '피커스 신촌점',
			addressRoad: '서울 서대문구 신촌로 129 11층',
			addressLot: '서울 서대문구 창천동 20-25 11층',
			latitude: '37.5565',
			longitude: '126.9402',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#C0C0C0',
				},
				{
					level: 9,
					color: '#000000',
				},
			],
			logoUrl:
				'https://velog.velcdn.com/logo_urls/syo_ee/post/64340ba9-db05-4e93-af7a-50457ccbf0e9/logo_url.jpg',
		},
		{
			name: '피커스 종로점',
			addressRoad: '서울 종로구 돈화문로5가길 1 피카디리플러스 지하4층',
			addressLot: '서울 종로구 돈의동 137 피카디리플러스 지하4층',
			latitude: '37.5710',
			longitude: '126.9911',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#C0C0C0',
				},
				{
					level: 9,
					color: '#000000',
				},
			],
			logoUrl:
				'https://velog.velcdn.com/logo_urls/syo_ee/post/64340ba9-db05-4e93-af7a-50457ccbf0e9/logo_url.jpg',
		},
		{
			name: '알레클라이밍 영등포점',
			addressRoad: '서울 영등포구 영등포로33길 14 스위트빌 B01호',
			addressLot: '서울 영등포구 영등포동6가 148 스위트빌 B01호',
			latitude: '37.5215',
			longitude: '126.9028',
			levelList: [
				{
					level: 1,
					color: '#FFFFFF',
				},
				{
					level: 2,
					color: '#FFFF00',
				},
				{
					level: 3,
					color: '#9DD84B',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#FF0000',
				},
				{
					level: 7,
					color: '#C0C0C0',
				},
				{
					level: 8,
					color: '#964B00',
				},
				{
					level: 9,
					color: '#FFD0FD',
				},
			],
			logoUrl:
				'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/366221779_765032775632944_3411033362423231632_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=Tfia4O60p6cQ7kNvgFtLmeQ&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYDo39EhhL-0BrWcdKeNcWdcJDyuKP_P6tzPOuzelqA_UA&oe=6670D49C&_nc_sid=cf751b',
		},
		{
			name: '알레클라이밍 혜화점',
			addressRoad: '서울 종로구 창경궁로34길 18-5 토가빌딩 지하2층',
			addressLot: '서울 종로구 명륜2가 21-9 토가빌딩 지하2층',
			latitude: '37.5840',
			longitude: '127.0007',
			levelList: [
				{
					level: 1,
					color: '#FFFFFF',
				},
				{
					level: 2,
					color: '#FFFF00',
				},
				{
					level: 3,
					color: '#9DD84B',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#FF0000',
				},
				{
					level: 7,
					color: '#C0C0C0',
				},
				{
					level: 8,
					color: '#964B00',
				},
				{
					level: 9,
					color: '#FFD0FD',
				},
			],
			logoUrl:
				'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/366444151_674132487894292_7070846258514613164_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=RbwpZWfhtIsQ7kNvgFtc9B7&edm=AHFUoAoBAAAA&ccb=7-5&oh=00_AYAg5jRQ3yrx4Ylw3ppW44dCR-6SeW0djX9zia5ydC0cdQ&oe=6670DA09&_nc_sid=cf751b',
		},
		{
			name: '알레클라이밍 강동점',
			addressRoad: '서울 강동구 천호대로177길 39 지하2층',
			addressLot: '서울 강동구 길동 414-9 지하2층',
			latitude: '37.5363',
			longitude: '127.1378',
			levelList: [
				{
					level: 1,
					color: '#FFFFFF',
				},
				{
					level: 2,
					color: '#FFFF00',
				},
				{
					level: 3,
					color: '#9DD84B',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#FF0000',
				},
				{
					level: 7,
					color: '#C0C0C0',
				},
				{
					level: 8,
					color: '#964B00',
				},
				{
					level: 9,
					color: '#FFD0FD',
				},
			],
			logoUrl:
				'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/366451895_830080818522649_436744859918922809_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=QGm5IqlbpeoQ7kNvgFCJVov&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYAlrPgckbbwt11fX7HGyUTd7nS46jjoaRnNrFqsBtMkmw&oe=6670DFA2&_nc_sid=cf751b',
		},
		{
			name: '손상원 클라이밍짐 을지로점',
			addressRoad: '서울 서초구 강남대로 331 지하1층',
			addressLot: '서울 서초구 서초동 1337-32 지하1층',
			latitude: '37.4925',
			longitude: '127.0295',
			levelList: [
				{
					level: 1,
					color: '#FFFFFF',
				},
				{
					level: 2,
					color: '#FFFF00',
				},
				{
					level: 3,
					color: '#008001',
				},
				{
					level: 4,
					color: '#0000FF',
				},
				{
					level: 5,
					color: '#FF0000',
				},
				{
					level: 6,
					color: '#000000',
				},
				{
					level: 7,
					color: '#C0C0C0',
				},
				{
					level: 8,
					color: '#964B00',
				},
				{
					level: 9,
					color: '#FFD0FD',
				},
			],
			logoUrl:
				'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231107_76%2F1699354814307vdydC_JPEG%2F%25C0%25BB%25C1%25F6%25B7%25CE%25C1%25A1.jpg',
		},
		{
			name: '손상원 클라이밍짐 강남점',
			addressRoad: '서울 중구 남대문로 125 지하1층',
			addressLot: '서울 중구 다동 85 지하1층',
			latitude: '37.5683',
			longitude: '126.9823',
			levelList: [
				{
					level: 1,
					color: '#FFFFFF',
				},
				{
					level: 2,
					color: '#FFFF00',
				},
				{
					level: 3,
					color: '#008001',
				},
				{
					level: 4,
					color: '#0000FF',
				},
				{
					level: 5,
					color: '#FF0000',
				},
				{
					level: 6,
					color: '#000000',
				},
				{
					level: 7,
					color: '#C0C0C0',
				},
				{
					level: 8,
					color: '#964B00',
				},
				{
					level: 9,
					color: '#FFD0FD',
				},
			],
			logoUrl:
				'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240201_225%2F1706782691255g32zn_PNG%2F%25BC%25D5%25C1%25FC_%25B7%25CE%25B0%25ED-002_%25281%2529.png',
		},
		{
			name: '손상원 클라이밍짐 판교점',
			addressRoad: '경기 성남시 분당구 대왕판교로 670 유스페이스2 B동 지하 1층',
			addressLot: '경기 성남시 분당구 삼평동 682 유스페이스2 B동 지하 1층',
			latitude: '37.4020',
			longitude: '127.1069',
			levelList: [
				{
					level: 1,
					color: '#FFFFFF',
				},
				{
					level: 2,
					color: '#FFFF00',
				},
				{
					level: 3,
					color: '#008001',
				},
				{
					level: 4,
					color: '#0000FF',
				},
				{
					level: 5,
					color: '#FF0000',
				},
				{
					level: 6,
					color: '#000000',
				},
				{
					level: 7,
					color: '#C0C0C0',
				},
				{
					level: 8,
					color: '#964B00',
				},
				{
					level: 9,
					color: '#FFD0FD',
				},
			],
			logoUrl:
				'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240509_25%2F1715235761782Vwovl_JPEG%2F%25C1%25A6%25B8%25F1%25C0%25BB-%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4_-001_%25286%2529.jpg',
		},
		{
			name: '더플라스틱 클라이밍 문래점',
			addressRoad: '서울 영등포구 도림로 423',
			addressLot: '서울 영등포구 문래동2가 11-1',
			latitude: '37.5136',
			longitude: '126.8957',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#C0C0C0',
				},
				{
					level: 9,
					color: '#000000',
				},
			],
			logoUrl:
				'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210419_164%2F1618808983725GvOYx_JPEG%2F%25B9%25AB%25C1%25A6-2.jpg',
		},
		{
			name: '더플라스틱클라이밍 염창점',
			addressRoad: '서울 강서구 공항대로81길 27 1층',
			addressLot: '서울 강서구 염창동 262-1 1층',
			latitude: '37.5484',
			longitude: '126.8762',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#C0C0C0',
				},
				{
					level: 9,
					color: '#000000',
				},
			],
			logoUrl:
				'https://velog.velcdn.com/logo_urls/syo_ee/post/9d799fe9-8acf-487e-8d66-2f9f6e3ca1fe/logo_url.jpg',
		},
		{
			name: '신촌 담장 클라이밍',
			addressRoad: '서울 서대문구 신촌역로 10 혜우빌딩 5층',
			addressLot: '서울 서대문구 대현동 101-7 혜우빌딩 5층',
			latitude: '37.5575',
			longitude: '126.9431',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#FFFFFF',
				},
				{
					level: 9,
					color: '#000000',
				},
			],
			logoUrl:
				'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/405499573_394258536266363_6800632134479469000_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=44UFJK7yV1MQ7kNvgE47PC-&edm=AHFUoAoBAAAA&ccb=7-5&oh=00_AYDsjdYMMKuyRbvgVWxh7wSRI8-EzYMsCfId2Grm-FBo8g&oe=6670C8E9&_nc_sid=cf751b',
		},
		{
			name: '을지로 담장 클라이밍',
			addressRoad: '서울 중구 마른내로 63-3 A&D빌딩 2층',
			addressLot: '서울 중구 인현동2가 96-2 A&D빌딩 2층',
			latitude: '37.5643',
			longitude: '126.9950',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#FFFFFF',
				},
				{
					level: 9,
					color: '#000000',
				},
			],
			logoUrl:
				'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/404566151_703569494842350_5065256372454634949_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=lq5dUePYI2MQ7kNvgE1F3cf&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYAuSABYFMv3j0r7Sldn8QO3pioZdMT4ifQ1Lg0JrFc4vQ&oe=6670CAC7&_nc_sid=cf751b',
		},
		{
			name: '서울볼더스 선유',
			addressRoad: '서울 영등포구 양평로28마길 7 3층',
			addressLot: '서울 양천구 양평동6가 13-1 2층',
			latitude: '37.5420',
			longitude: '126.8909',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
			],
			logoUrl:
				'https://naverbooking-phinf.pstatic.net/20240508_170/1715150857153tTv8c_JPEG/%B5%B5%C0%E5%BF%EB.jpg',
		},
		{
			name: '서울볼더스 목동',
			addressRoad: '서울 양천구 신목로 53 2층',
			addressLot: '서울 양천구 신정동 88-5 2층',
			latitude: '37.5204',
			longitude: '126.8727',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
			],
			logoUrl:
				'https://naverbooking-phinf.pstatic.net/20240508_170/1715150857153tTv8c_JPEG/%B5%B5%C0%E5%BF%EB.jpg',
		},
		{
			name: '클라임 어스 장한평점',
			addressRoad: '서울 동대문구 장한로2길 63 2층',
			addressLot: '서울 동대문구 장안동 457-2 2층',
			latitude: '37.5618',
			longitude: '127.0688',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#FFFFFF',
				},
				{
					level: 9,
					color: '#000000',
				},
			],
			logoUrl:
				'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/437689244_281348551728944_521121520920915082_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=RxuOT5JsT3EQ7kNvgFIv1dA&edm=AFg4Q8wBAAAA&ccb=7-5&oh=00_AYBI4pS4gSF5ZIpMBN6Pv2sl8FzqIir9wROtYBLOaPjkWg&oe=6670EB84&_nc_sid=cf751b',
		},
		{
			name: '클라임 어스 미사점',
			addressRoad: '경기 하남시 미사강변동로 81 큐브앤타워 13층 1301~1304호',
			addressLot: '경기 하남시 망월동 1116 큐브앤타워 13층 1301~1304호',
			latitude: '37.5622',
			longitude: '127.1927',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#FFFFFF',
				},
				{
					level: 9,
					color: '#000000',
				},
			],
			logoUrl:
				'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/437746548_422433483812270_216737228832940257_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=Rh1CDdb79T0Q7kNvgGMjcye&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYBPOSF_ITab_EZhSPEdFL1v_fzDKDlYvkPrPtmKurmlVQ&oe=6670C65E&_nc_sid=cf751b',
		},
		{
			name: '클라임 어스 모란점',
			addressRoad: '경기 성남시 중원구 성남대로 1126 601호',
			addressLot: '경기 성남시 중원구 성남동 4123 601호',
			latitude: '37.4302',
			longitude: '127.1298',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#FFFFFF',
				},
				{
					level: 9,
					color: '#000000',
				},
			],
			logoUrl:
				'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/273904339_635798311024464_4562295884426640331_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=4q5cpiTlScQQ7kNvgFUC9eR&edm=AHFUoAoBAAAA&ccb=7-5&oh=00_AYDNG4QrnZQfWd2XRUFpILRgaNHz3r5N2u4WD_vRJGk5-Q&oe=6670C55A&_nc_sid=cf751b',
		},
		{
			name: '클라임잇 클라이밍 목감점',
			addressRoad: '경기 시흥시 배미골길 24 1층',
			addressLot: '경기 시흥시 목감동 414-2 1층',
			latitude: '37.3846',
			longitude: '126.8640',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#000000',
				},
				{
					level: 9,
					color: '#FFFFFF',
				},
			],
			logoUrl:
				'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230711_147%2F1689080699467O4o0U_PNG%2F%25B7%25CE%25B0%25ED_%25B8%25F1%25B0%25A8_white.png',
		},
		{
			name: '클라임잇 클라이밍 구로점',
			addressRoad: '서울 구로구 구로중앙로 215 지하 1층',
			addressLot: '서울 구로구 구로동 612-10 지하 1층',
			latitude: '37.5049',
			longitude: '126.8771',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#000000',
				},
				{
					level: 9,
					color: '#FFFFFF',
				},
			],
			logoUrl:
				'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F17E55A729337407BBC48939CA9629D50',
		},
		{
			name: '락트리클라이밍 강남',
			addressRoad: '서울 강남구 강남대로118길 12 부경빌딩 지하 2층',
			addressLot: '서울 강남구 논현동 183 부경빌딩 지하 2층',
			latitude: '37.5062',
			longitude: '127.0247',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#FFD0FD',
				},
				{
					level: 9,
					color: '#964B00',
				},
				{
					level: 10,
					color: '#FFFFFF',
				},
				{
					level: 11,
					color: '#C0C0C0',
				},
				{
					level: 12,
					color: '#000000',
				},
			],
			logoUrl:
				'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/107413481_2347696825534079_6539284319612347496_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=CoSGAkU0MtcQ7kNvgFd6cCz&edm=AHFUoAoBAAAA&ccb=7-5&oh=00_AYAl0uJuNuH_66gbHh3MbH2pqkNYepThSAG8hjcTlN9iVg&oe=6670ECE4&_nc_sid=cf751b',
		},
		{
			name: '락트리클라이밍 분당',
			addressRoad: '경기 성남시 분당구 황새울로 224 청구블루빌 지하1층 2호',
			addressLot: '경기 성남시 분당구 수내동 11-1 청구블루빌 지하1층 2호',
			latitude: '37.3787',
			longitude: '127.1132',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
				{
					level: 8,
					color: '#FFD0FD',
				},
				{
					level: 9,
					color: '#964B00',
				},
				{
					level: 10,
					color: '#FFFFFF',
				},
				{
					level: 11,
					color: '#C0C0C0',
				},
				{
					level: 12,
					color: '#000000',
				},
			],
			logoUrl:
				'https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/301581763_743090707046877_3279623633529498949_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=17qmKDnJjVQQ7kNvgHLij0v&_nc_ht=scontent-ssn1-1.xx&oh=00_AYDHPF9q6NDGrNFTFTVXZi8Fiy960CoL0aQ4S10HO8wePQ&oe=6670DACE',
		},
		{
			name: '에이스클라이밍센터',
			addressRoad: '서울 구로구 가마산로27길 14 신원빌딩 지하1층',
			addressLot: '서울 구로구 구로동 106-8 신원빌딩 지하1층',
			latitude: '37.4977',
			longitude: '126.8918',
			levelList: [
				{
					level: 1,
					color: '#FF0000',
				},
				{
					level: 2,
					color: '#FF8000',
				},
				{
					level: 3,
					color: '#FFFF00',
				},
				{
					level: 4,
					color: '#008001',
				},
				{
					level: 5,
					color: '#0000FF',
				},
				{
					level: 6,
					color: '#000080',
				},
				{
					level: 7,
					color: '#8000FF',
				},
			],
			logoUrl:
				'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230729_85%2F169061444960764yfR_JPEG%2F2020%25BD%25C5%25B7%25CE%25B0%25ED_%25C0%25FC%25C3%25BC%25BF%25CF%25BC%25BA%25C7%25FC_%25BD%25BA%25C4%25F9%25BE%25EE.jpg',
		},
	];

	const saveDataToServer = async () => {
		try {
			const serverUrl = 'https://your-server.com/api/save-data';
			const response = await axios.post(serverUrl, dataToSave);
			setResponseMessage(`데이터 저장 성공: ${response.data}`);
		} catch (error) {
			console.error('데이터 저장 실패:', error);
			setResponseMessage('데이터 저장에 실패했습니다.');
		}
	};

	return (
		<div className="Data">
			<h1>데이터 저장 예시</h1>
			<button type="button" onClick={saveDataToServer}>
				데이터 저장하기
			</button>
			<p>{responseMessage}</p>
		</div>
	);
};

export default Data;

// serverUrl을 실제 서버의 엔드포인트로 변경하세요.
// dataToSave 객체에 저장할 데이터를 추가하세요.
// saveDataToServer 함수는 데이터를 서버에 저장하는 역할을 합니다.
