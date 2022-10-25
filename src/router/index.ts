import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../views/layout/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/list',
    beforeEnter: (to, from, next) => {
      const pikpakLogin = JSON.parse(window.localStorage.getItem('pikpakLogin') || '{}')
      if((!pikpakLogin || !pikpakLogin.access_token) && to.name !== 'setting') {
       next('/login')
      } else {
        next()
      }
    },
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('../views/redirect.vue'),
      },
      {
        path: 'list/:id?',
        name: 'list',
        component: () => import('../views/list.vue')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('../views/list.vue')
      },
      {
        path: 'image',
        name: 'image',
        component: () => import('../views/list.vue')
      },
      {
        path: 'trash',
        name: 'trash',
        component: () => import('../views/trash.vue')
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('../views/setting.vue')
      },
      {
        path: 'invited',
        name: 'invited',
        component: () => import('../views/invited.vue')
      },
    ]
  },
  {
    path: '/upload/:id?',
    name: 'upload',
    component: () => import('../views/upload.vue')
  },
  {
    path: '/s/:id/:password?',
    name: 'shareInfo',
    component: () => import('../views/shareInfo.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/sms',
    name: 'sms',
    component: () => import('../views/sms.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
