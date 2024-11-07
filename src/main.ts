import { createApp } from 'vue';
import App from './App.vue';
import router from './router.ts';
import axios from 'axios';
import './assets/tailwind.css';

const app = createApp(App);
app.use(router);
app.config.globalProperties.$axios = axios;
app.mount('#app');

let alertShown = false;

axios.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response.status === 401 && !alertShown) {
			alertShown = true;
			alert('일정시간이 지나 로그인이 만료되었습니다. 다시 로그인해주세요.');
			router.push('/login'); // 로그인 페이지로 이동

			// 일정 시간(500ms) 후 플래그를 초기화하여 경고창이 재호출될 수 있도록 설정
			setTimeout(() => {
				alertShown = false;
			}, 500);
		}
		return Promise.reject(error);
	}
);
