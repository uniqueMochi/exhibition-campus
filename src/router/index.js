import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/view/Layout/index.vue'
import Home from '@/view/Home/index.vue'

import StudentManagement from '@/view/StudentManagement/index.vue'
import TecaherManagement from '@/view/TecaherManagement/index.vue'
import PersonalDetails from '@/view/PersonalDetails/index.vue'

import Login from '@/view/Login/index.vue'
import Aapplication from '@/view/Aapplication/index.vue'

import Test from '@/view/Test/index.vue'
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
        },
        {
          path: '/studentManagement',
          component: StudentManagement
        },
        {
          path: '/tecaherManagement',
          component: TecaherManagement
        },
        {
          path: '/application',
          component: Aapplication
        },
        {
          path: '/details',
          component: PersonalDetails
        }
      ]
    },
    { path: '/login', component: Login },
    { path: '/test', component: Test }
  ]
})

export default router
