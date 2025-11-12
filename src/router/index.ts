import { createRouter, createWebHistory } from 'vue-router';
import IndexView from '@/views/index.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'index', component: IndexView },
        { path: '/lesson28', name: 'lesson28', component: () => import('@/views/lesson28/index.vue')}
    ],
})

export default router;