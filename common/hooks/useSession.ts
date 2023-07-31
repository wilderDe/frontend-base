import { delay, eliminarCookie, guardarCookie, leerCookie } from '../utils'
import { imprimir } from '../utils/imprimir'
import {
  estadosSinPermiso,
  peticionFormatoMetodo,
  Servicios,
} from '../services'
import { verificarToken } from '../utils/token'
import { Constantes } from '../../config'
import { useFullScreenLoading } from '../../context/ui'
import { useRouter } from 'next/router'

export const useSession = () => {
  const router = useRouter()

  const { mostrarFullScreen, ocultarFullScreen } = useFullScreenLoading()

  const sesionPeticion = async ({
    url,
    tipo = 'get',
    body,
    headers,
    params,
    responseType,
    withCredentials,
  }: peticionFormatoMetodo) => {
    try {
      if (!verificarToken(leerCookie('token') ?? '')) {
        imprimir(`Token caducado ⏳`)
        await actualizarSesion()
      }

      const cabeceras = {
        accept: 'application/json',
        Authorization: `Bearer ${leerCookie('token') ?? ''}`,
        ...headers,
      }

      imprimir(`enviando 🔐🌍`, body, tipo, url, cabeceras)
      const response = await Servicios.peticionHTTP({
        url,
        tipo,
        headers: cabeceras,
        body,
        params,
        responseType,
        withCredentials,
      })
      imprimir('respuesta 🔐📡', body, tipo, url, response)
      return response.data
    } catch (e: import('axios').AxiosError | any) {
      if (e.code === 'ECONNABORTED') {
        throw new Error('La petición está tardando demasiado')
      }

      if (Servicios.isNetworkError(e)) {
        throw new Error('Error en la conexión 🌎')
      }

      if (estadosSinPermiso.includes(e.response?.status)) {
        mostrarFullScreen()
        await cerrarSesion()
        ocultarFullScreen()
        return
      }

      throw e.response?.data || 'Ocurrio un error desconocido'
    }
  }

  const borrarCookiesSesion = () => {
    eliminarCookie('token') // Eliminando access_token
    eliminarCookie('jid') // Eliminando refresh token
  }

  const cerrarSesion = async () => {
    try {
      mostrarFullScreen()
      await delay(1000)
      const token = leerCookie('token')
      borrarCookiesSesion()

      const respuesta = await Servicios.get({
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        url: `${Constantes.baseUrl}/logout`,
      })
      imprimir(`finalizando con respuesta`, respuesta)

      if (respuesta?.url) {
        window.location.href = respuesta?.url
      } else {
        router.reload()
      }
    } catch (e) {
      imprimir(`Error al cerrar sesión: `, e)
      router.reload()
    } finally {
      ocultarFullScreen()
    }
  }

  const actualizarSesion = async () => {
    imprimir(`Actualizando token 🚨`)

    try {
      const respuesta = await Servicios.post({
        url: `${Constantes.baseUrl}/token`,
        body: {
          token: leerCookie('token'),
        },
      })

      guardarCookie('token', respuesta.datos?.access_token)

      await delay(500)
    } catch (e) {
      await cerrarSesion()
    }
  }

  return { sesionPeticion, cerrarSesion, borrarCookiesSesion }
}
