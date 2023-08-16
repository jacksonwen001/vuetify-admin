import { createRouter, createWebHistory } from 'vue-router'
import { constantRoutes } from './routes'
import { fetachAccessToken } from '@/utils/token'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

router.beforeEach(async (to) => {
  const token = fetachAccessToken()
  if (token) {
    if (to.name === 'Login') return { path: '/', replace: true }
  } else {
    if (to.name !== 'Login') return { name: 'Login', replace: true }
  }
})

export default router
