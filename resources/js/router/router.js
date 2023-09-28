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
        path: '/register',
        name: 'registration',
        component: () => import("../pages/Registration.vue")
    },
    {
        path: '/video-conference',
        name: 'video-conference',
        component: () => import("../pages/VideoConference.vue")
    },
    {
        path: '/schedule',
        name: 'schedule',
        component: () => import("../pages/Schedule.vue")
    },
    {
        path: '/create-event',
        name: 'create-event',
        component: () => import("../pages/ConferenceEventForm.vue")
    },
    {
        path: '/student-profile',
        name: 'student-profile',
        component: () => import("../pages/StudentProfile.vue")
    },
    {
        path: '/conferences',
        name: 'conferences',
        component: () => import("../pages/Conferences.vue")
    },
    {
        path: '/archive',
        name: 'archive',
        component: () => import("../pages/Archive.vue")
    },
    {
        path: '/tvorcheskie-raboty',
        name: 'tvorcheskie-raboty',
        component: () => import("../pages/TvorcheskieRaboty.vue")
    },
    {
        path: '/attached-works',
        name: 'attached-works',
        component: () => import("../pages/AttachedWorks.vue")
    },
    {
        path: '/events',
        name: 'events',
        component: () => import("../pages/Events.vue")
    },
    {
        path: '/deadlines',
        name: 'deadlines',
        component: () => import("../pages/Deadlines.vue")
    },
    {
        path: '/conference-details',
        name: 'conference-details',
        component: () => import("../pages/ConferenceDetails.vue")
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import("../pages/errors/404.vue")
    }
];

const router = createRouter({
    scrollBehavior(to, fromm, savedPosition) {
        if (to.hash) {
            return {el: to.hash}
        }
    },
    history: createWebHistory(),
    routes,
});

export default router;



