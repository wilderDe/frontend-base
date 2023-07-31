import Cookies, { CookieAttributes } from 'js-cookie'
import { imprimir } from './imprimir'

export const guardarCookie = (
  key: string,
  value: string,
  options?: CookieAttributes
) => {
  Cookies.set(key, value, options)
  imprimir(`🍪 ✅`, key, value)
}

export const leerCookie = (key: string): string | undefined => {
  return Cookies.get(key)
}

export const eliminarCookie = (key: string) => {
  imprimir(`🍪 🗑`, key)
  return Cookies.remove(key)
}

export const eliminarCookies = () => {
  Object.keys(Cookies.get()).forEach((cookieName) => {
    imprimir(`🍪 🗑`, cookieName)
    Cookies.remove(cookieName)
  })
}
