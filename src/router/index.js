import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/search',
		name: 'Search',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "search" */ '../views/Search.vue'),
		beforeEnter: (to, from, next) => {
			const query = to.query.q;

			if (query && query.trim() !== '') {
				next();
			} else {
				next('/');
			}
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	linkActiveClass: '',
	linkExactActiveClass: '',
});

export default router;
