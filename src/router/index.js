import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/view/Layout/index.vue'
import Home from '@/view/Home/index.vue'

import Login from '@/view/Login/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        }
      ]
    },
    { path: '/login', component: Login }
  ]
})

export default router
