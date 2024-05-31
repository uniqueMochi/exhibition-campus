import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/view/Layout/index.vue'
// 首页
import Home from '@/view/Home/index.vue'
// 学生管理
import StudentManagement from '@/view/StudentManagement/index.vue'
// 教师管理
import TecaherManagement from '@/view/TecaherManagement/index.vue'
// 个人详情
import PersonalDetails from '@/view/PersonalDetails/index.vue'
// 登录页
import Login from '@/view/Login/index.vue'
// 应用管理
import Aapplication from '@/view/Aapplication/index.vue'

import Attendance from '@/view/Attendance/index.vue'

// TODO 测试页
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
        },
        {
          path: '/attendance',
          component: Attendance
        }
      ]
    },
    { path: '/login', component: Login },
    { path: '/test', component: Test }
  ]
})

export default router
