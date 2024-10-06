<template>
	<div>
		<canvas ref="MyChart" />
	</div>
</template>

<script>
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
	mounted() {
		this.createChart();
	},
	methods: {
		async createChart() {
			try {
				const response = await axios.get(
					`${process.env.VUE_APP_API_HOST}/dashboards/top-rank`
				);
				const returnData = response.data;

				const dataArray = [];

				// 데이터 배열을 만들면서 name과 hit를 함께 저장
				for (const key in returnData) {
					dataArray.push({
						name: returnData[key].name,
						hit: returnData[key].hit,
					});
				}

				// hit 수에 따라 내림차순 정렬
				dataArray.sort((a, b) => b.hit - a.hit);

				// 정렬된 데이터를 arrLabels와 arrData로 분리
				const arrLabels = dataArray.map((item) => item.name);
				const arrData = dataArray.map((item) => item.hit);

				// 디버깅용 콘솔 로그
				console.log(arrLabels);
				console.log(arrData);

				new Chart(this.$refs.MyChart, {
					type: 'bar',
					data: {
						labels: arrLabels, // 정렬된 x축 데이터
						datasets: [
							{
								label: '검색 조회수',
								data: arrData, // 정렬된 y축 데이터
								borderColor: '#0077ff',
								backgroundColor: '#0077ff',
								borderWidth: 1,
							},
						],
					},
					options: {
						scales: {
							y: {
								beginAtZero: true,
							},
						},
					},
				});
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>
