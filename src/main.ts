import { createApp } from 'vue';
import App from './App.vue';
import router from './router.ts';
import axios from 'axios';
import './assets/tailwind.css';

console.warn = () => {}; // 모든 경고 출력 무시

const app = createApp(App);
app.use(router);
app.config.globalProperties.$axios = axios;
app.mount('#app');
