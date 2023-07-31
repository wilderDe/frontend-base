import { decodeToken } from 'react-jwt'
import { imprimir } from './imprimir'

export const verificarToken = (token: string): boolean => {
  const myDecodedToken: any = decodeToken(token)
  const caducidad = new Date(myDecodedToken.exp * 1000)

  imprimir(`Token 🔐 : expira en ${caducidad}`)

  return new Date().getTime() - caducidad.getTime() < 0
}
