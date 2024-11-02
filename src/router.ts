import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import GymListPage from './views/GymListPage.vue';
import GymPage from './views/GymPage.vue';
import CrewListPage from './views/CrewListPage.vue';
import CrewPage from './views/CrewPage.vue';
import ApplyListPage from './views/ApplyListPage.vue';
import LoginPage from './views/LoginPage.vue';
import TokenPage from './views/TokenPage.vue';
import ErrorPage from './views/ErrorPage.vue';

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
	},
	{
		path: '/gymList',
		name: 'GymListPage',
		component: GymListPage,
	},
	{
		path: '/gym/:id',
		name: 'GymPage',
		component: GymPage,
	},
	{
		path: '/crew-infos',
		name: 'CrewListPage',
		component: CrewListPage,
	},
	{
		path: '/crew-infos/:id',
		name: 'CrewPage',
		component: CrewPage,
	},
	{
		path: '/crew/receptions/manages/:id',
		name: 'ApplyListPage',
		component: ApplyListPage,
	},
	{
		path: '/login',
		name: 'loginPage',
		component: LoginPage,
	},
	{
		path: '/token',
		name: 'TokenPage',
		component: TokenPage,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'ErrorPage',
		component: ErrorPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
