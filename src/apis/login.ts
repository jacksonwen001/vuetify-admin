import api from '@/utils/request'

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
