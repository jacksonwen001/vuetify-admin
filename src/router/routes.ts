import { type RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/index.vue'

interface MetaType {
  title: string
  icon: string
  affix: boolean
}
export type RouteType = RouteRecordRaw & { children?: RouteType[]; meta: MetaType }

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: {
      hidden: true
    }
  }
]

