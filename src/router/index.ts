import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Views
import Login1View from '@/views/Login1View.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login1'
    },
    {
        path: '/login1',
        name: 'Login1',
        component: Login1View,
        meta: {
            title: 'Seferi - Giriş',
            layout: 'auth'
        }
    },
    {
        path: '/login2',
        name: 'Login2',
        component: () => import('@/views/Login2View.vue'),
        meta: {
            title: 'Login 2',
            layout: 'auth'
        }
    },
    {
        path: '/login3',
        name: 'Login3',
        component: () => import('@/views/Login3View.vue'),
        meta: {
            title: 'Login 3',
            layout: 'auth'
        }
    },
    {
        path: '/login4',
        name: 'Login4',
        component: () => import('@/views/Login4View.vue'),
        meta: {
            title: 'Login 4',
            layout: 'auth'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Update document title on route change
router.beforeEach((to, _from, next) => {
    document.title = (to.meta.title as string) || 'Login Pages'
    next()
})

export default router
