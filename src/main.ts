import { createApp } from 'vue';
import App from './App.vue';
import router from './router.ts';
import axios from 'axios';
import './assets/tailwind.css';

const app = createApp(App);
app.use(router);
app.config.globalProperties.$axios = axios;
app.mount('#app');
