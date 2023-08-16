import type { RouteType } from '@/router/routes'
import Layout from '@/layouts/index.vue'

const modules = import.meta.glob('@/views/**')

export function generateRoutes(routes: any[]): RouteType[] {  
  const newRoutes: RouteType[] = []
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i]
    const newRoute: RouteType = {
      path: route.path,
      name: route.name,
      meta: route.meta,
      component: route.component ? modules[route.component] : Layout,
      children: []
    }
    if (route.redirect) newRoute.redirect = route.redirect

    if (route.children && route.children.length > 0) {
      newRoute.children = generateRoutes(route.children)
    }
    newRoutes.push(newRoute)
  }
  return newRoutes
}
