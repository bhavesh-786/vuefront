import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import Dashboard from '@/components/Dashboard.vue'
import DashboardHome from '@/pages/Home.vue'

const routes = [
    {
        path: '/',
        redirect: {
            name: 'DashboardHome'
        }
    },
    {
        path: '/dashboard',
        component: Dashboard,
        children: [
            {
                path: '/',
                redirect: {
                    name: 'DashboardHome'
                }
            },
            {
                path: 'home',
                name: 'DashboardHome',
                component: DashboardHome
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        // always scroll to top
        return { top: 0 }
    },
})

export default router