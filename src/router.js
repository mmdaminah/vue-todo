import { createRouter, createWebHistory } from 'vue-router';

import TodoPage from './pages/TodoPage.vue';
import TodoSingle from './pages/TodoSingle.vue';
import NotFound from './pages/NotFound.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: TodoPage },
        { path: '/todo/:id', component: TodoSingle },
        { path: '/:pathMatch(.*)*', component: NotFound },
    ],
});
