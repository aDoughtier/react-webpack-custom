import Cookies from 'js-cookie'

const tokenKey = "ZXTOKEN"

export const getToken = () => Cookies.get(tokenKey)
export const setToken = (token, expires) => Cookies.set(tokenKey, token, { expires })
export const removeToken = () => Cookies.remove(tokenKey)