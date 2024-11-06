import { createApp } from 'vue';
import App from './App.vue';
import router from './router.ts';
import axios from 'axios';
import './assets/tailwind.css';

const app = createApp(App);
app.use(router);
app.config.globalProperties.$axios = axios;
app.mount('#app');

axios.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response && error.response.status === 401) {
			alert('토큰이 만료되었습니다. 다시 로그인해주세요.');
			router.push('/login'); // 로그인 페이지로 이동
		}
		return Promise.reject(error);
	}
);
