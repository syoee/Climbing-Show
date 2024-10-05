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
	data: () => ({
		type: 'bar',
		data: {
			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [
				{
					label: '# of Votes',
					data: [12, 19, 3, 5, 2, 3],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)',
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
					],
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
	}),
	mounted() {
		this.createChart();
	},
	methods: {
		async createChart() {
			try {
				const response = await axios.get(
					`${process.env.VUE_APP_API_HOST}/dashboards/top-rank`
				);
				var returnData = response.data;

				const arrLabels = [];
				const arrData = [];

				for (var key in returnData) {
					//배열에서 추출하고자 하는값(1)
					arrLabels.push(returnData[key].this.name);
					//배열에서 추출하고자 하는값(2)
					arrData.push(returnData[key].this.hit);
				}

				console.log(this.name);
				console.log(this.hit);

				new Chart(this.$refs.MyChart, {
					type: 'bar',
					data: {
						//배열에서 추출하고자 하는값(1)
						labels: arrLabels,
						datasets: [
							{
								label: '실내 클라이밍장 조회수',
								//배열에서 추출하고자 하는값(2)
								data: arrData,
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
