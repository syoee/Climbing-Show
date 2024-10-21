import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import ErrorPage from './views/ErrorPage.vue';
import SearchPage from './views/SearchPage.vue';
import DetailPage from './views/DetailPage.vue';
import LoginPage from './views/LoginPage.vue';
import TokenPage from './views/TokenPage.vue';
import CrewListPage from './views/CrewListPage.vue';

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
	},
	{
		path: '/search',
		name: 'SearchPage',
		component: SearchPage,
	},
	{
		path: '/detail/:id',
		name: 'DetailPage',
		component: DetailPage,
	},
	{
		path: '/crew-infos',
		name: 'CrewListPage',
		component: CrewListPage,
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
