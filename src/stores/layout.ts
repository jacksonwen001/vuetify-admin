import { defineStore } from 'pinia'
import { type RouteType } from '@/router/routes'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    collapse: true,
    asyncRoutes: [] as RouteType[]
  }),
  actions: {
    toggleCollapse() {
      this.collapse = !this.collapse
    },
    setAsyncRoutes(routes: RouteType[]) {
      this.asyncRoutes = routes
    }
  }
})
