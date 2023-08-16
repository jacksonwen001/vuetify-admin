import { fetachAccessToken } from '@/utils/token'
import router from '.'
import { getAsyncRoutes } from '@/apis/login'
import { generateRoutes } from '@/utils/routes'
import { useLayoutStore } from '@/stores/layout'

let loaded = false

router.beforeEach(async (to) => {
  const store = useLayoutStore()
  const token = fetachAccessToken()
  if (token) {
    if (!loaded) {
      const routes = await getAsyncRoutes()
      const asyncRoutes = generateRoutes(routes)
      asyncRoutes.forEach((route) => {
        router.addRoute(route)
      })
      store.setAsyncRoutes(asyncRoutes)
      loaded = true
      return { ...to, replace: true }
    }

    if (to.name === 'Login') return { path: '/', replace: true }
  } else {
    if (to.name !== 'Login') return { name: 'Login', replace: true }
  }
})
