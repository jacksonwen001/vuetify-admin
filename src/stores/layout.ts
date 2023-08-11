import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    collapse: true
  }),
  actions: {
    toggleCollapse() {
      this.collapse = !this.collapse
    }
  }
})
