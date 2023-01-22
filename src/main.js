import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

import Landing from './pages/landing.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            component: Landing
        }
    ]
})


createApp(App)
.use(router)
.mount('#app');
