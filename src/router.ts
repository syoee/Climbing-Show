import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import ErrorPage from './views/ErrorPage.vue';

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
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
