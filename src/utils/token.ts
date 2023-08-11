const ACCESS_TOKEN = "ACCESS_TOKEN"
export const fetachAccessToken = (): string|null => localStorage.getItem(ACCESS_TOKEN)
export const storeAccessToken = (token: string):void => localStorage.setItem(ACCESS_TOKEN, token)
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN)