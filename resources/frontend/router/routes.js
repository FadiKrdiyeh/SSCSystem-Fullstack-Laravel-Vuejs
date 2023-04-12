import home from '../pages/home.vue';
import test from '../pages/test.vue';

const userRoutes = [
    {
        path: '/',
        component: home,
        name: '/'
    },
    {
        path: '/home',
        component: home,
        name: 'home'
    },
    {
        path: '/test',
        component: test,
        name: 'test'
    },
];

// ==============================================================================

import dashboard from '../admin/pages/dashboard.vue'

const adminRoutes = [
    {
        path: '/admin',
        children: [
            { path: 'dashboard', component: dashboard },
            { path: 'test', component: test },
        ],
        meta: { layout: 'Admin' },
    },
];

const routes = [...userRoutes, ...adminRoutes];

export default routes;
