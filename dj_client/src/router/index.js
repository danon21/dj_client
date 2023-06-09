import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import UserPage from "@/views/UserPage.vue";
import Login from "@/views/Login.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: `Home`,
            component: Home
        },
        {
            path: '/user',
            name: 'userPage',
            component: UserPage
        },
        {
            path: '/login',
            name: 'sign_in',
            component: Login
        }
    ]
})

export default router