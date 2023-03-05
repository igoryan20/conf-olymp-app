import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/HomePage.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("../pages/Login.vue")
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import("../pages/errors/404.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;



