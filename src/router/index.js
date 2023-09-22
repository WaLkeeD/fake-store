import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
export const routers  = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'homepage', component: HomePage},
        {path: '/category', name: 'category', component: () => import('@/pages/Category.vue')},
        {path: '/products/:id', name: 'Item', component: (id) => import('@/pages/Item.vue')},
    ],
})

