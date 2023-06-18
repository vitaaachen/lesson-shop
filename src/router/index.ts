import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '/src/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
	// {
	//   path: '/',
	//   name: 'home',
	//   component: Home
	// },
	{
		path: '/',
		name: 'lessonList',
		component: () => import('/src/views/LessonList.vue')
	},
	{
		path: '/cart',
		name: 'shoppingCart',
		component: () => import('/src/views/ShoppingCart.vue')
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
