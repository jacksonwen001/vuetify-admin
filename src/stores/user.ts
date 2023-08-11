import { fetachAccessToken, storeAccessToken } from '@/utils/token'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    access_token: fetachAccessToken(),
    username: '',
    avatar: ''
  }),
  getters: {
    
  },
  actions: {
    setAccessToken(token: string) {
      storeAccessToken(token)
    },
    setUsername(username: string) {
      this.username = username
    },
    setAvatar(avatar: string) {
      this.avatar = avatar
    }
  }
})
