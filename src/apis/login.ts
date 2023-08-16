import type { RouteType } from '@/router/routes'
import api from '@/utils/request'
import Layout from '@/layouts/index.vue'

export interface LgoinRequest {
  username: string
  password: string
}

export interface LoginResponse {
  access_token: string
  avatar: string
}

export const login = async (request: LgoinRequest): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>('/login', request)
  return data
}

export const message = async () => {
  const { data } = await api.get('/message')
  return data
}

export const getChartData = async () => {
  const { data } = await api.get('/charts')
  return data
}

export const getAsyncRoutes = async (): Promise<any[]> => {
  const { data } = await api.get('/menus')
  return data
}


