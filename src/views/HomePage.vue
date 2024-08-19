<template>
	<div
		class="flex justify-center text-[#0077ff] text-4xl font-semibold sm:text-xl md:text-2xl lg:text-6xl"
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
					name: '더클라임 마곡점',
					address_road: '서울 강서구 마곡동로 62 마곡사이언스타워 7층',
					address_lot: '서울 강서구 마곡동 727-500 마곡사이언스타워 7층',
					latitude: '37.5606',
					longitude: '126.8337',
					logo_url:
						'https://img1.kakaocdn.net/cthumb/local/R0x420.q50/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FC417FCFD0F6042C69022D17BBE467FCE',
				},
				{
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
					name: '더클라임 문래점',
					address_road: '서울 영등포구 당산로 63',
					address_lot: '서울 영등포구 당산동2가 1',
					latitude: '37.5206',
					longitude: '126.8950',
					logo_url:
						'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240611_133%2F1718061147813YWzU2_PNG%2F%25B9%25AE%25B7%25A1_%25C0%25CC%25B9%25CC%25C1%25F6.png',
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
