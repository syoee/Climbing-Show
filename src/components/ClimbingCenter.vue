<template>
	<div class="climbing-center">
		<!-- 센터 로고 -->
		<img :src="center.logoUrl" alt="Climbing Center Logo" class="logo" />

		<!-- 센터 이름 -->
		<h1>{{ center.name }}</h1>

		<!-- 주소 -->
		<p><strong>도로명 주소:</strong> {{ center.addressRoad }}</p>
		<p><strong>지번 주소:</strong> {{ center.addressLot }}</p>

		<!-- 위치 정보 -->
		<p>
			<strong>위도:</strong> {{ center.latitude }}, <strong>경도:</strong>
			{{ center.longitude }}
		</p>

		<!-- 레벨 리스트 -->
		<ul>
			<li
				v-for="level in center.levelList"
				:key="level.level"
				:style="{ color: level.color }"
			>
				레벨 {{ level.level }}: {{ level.color }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			center: {
				name: '에이스클라이밍센터',
				addressRoad: '서울 구로구 가마산로27길 14 신원빌딩 지하1층',
				addressLot: '서울 구로구 구로동 106-8 신원빌딩 지하1층',
				latitude: '37.4977',
				longitude: '126.8918',
				levelList: [
					{ level: 1, color: '#FF0000' },
					{ level: 2, color: '#FF8000' },
					{ level: 3, color: '#FFFF00' },
					{ level: 4, color: '#008001' },
					{ level: 5, color: '#0000FF' },
					{ level: 6, color: '#000080' },
					{ level: 7, color: '#8000FF' },
				],
				logoUrl:
					'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230729_85%2F169061444960764yfR_JPEG%2F2020%25BD%25C5%25B7%25CE%25B0%25ED_%25C0%25FC%25C3%25BC%25BF%25CF%25BC%25BA%25C7%25FC_%25BD%25BA%25C4%25F9%25BE%25EE.jpg',
			},
		};
	},
};
</script>

<style scoped>
.climbing-center {
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
	text-align: center;
	border: 1px solid #ddd;
	border-radius: 8px;
	background-color: #f9f9f9;
}

.logo {
	width: 100px;
	height: 100px;
	object-fit: cover;
	margin-bottom: 20px;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	margin: 5px 0;
	font-weight: bold;
}
</style>
