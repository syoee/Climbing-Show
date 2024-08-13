import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import ErrorPage from './views/ErrorPage.vue';
import LoginPage from './views/LoginPage.vue';

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
	},
	{
		path: '/login',
		name: 'LoginPage',
		component: LoginPage,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'ErrorPage',
		component: ErrorPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
