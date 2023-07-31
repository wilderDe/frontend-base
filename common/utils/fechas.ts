import dayjs, { ManipulateType } from 'dayjs'
import { imprimir } from './imprimir'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/es'

const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

// Agregar el plugin relativeTime a Dayjs
dayjs.extend(relativeTime)

// Configurar el idioma español como idioma predeterminado de Dayjs
dayjs.locale('es')

export const stringToDate = (fecha: string, formatoInicial: string): Date => {
  return dayjs(fecha, formatoInicial, true).toDate()
}

export const validarFechaFormato = (date: string, format: string) => {
  imprimir(`${date} -> ${dayjs(date).format(format)}`)
  return dayjs(dayjs(date).format(format), format, true).isValid()
}

export const formatoFecha = (fecha: string, formatoNuevo: string): string => {
  imprimir(`${fecha} -> ${formatoNuevo}:${dayjs(fecha).format(formatoNuevo)}`)
  return dayjs(fecha).format(formatoNuevo)
}

export const formatoLiteral = (fecha: Date) => {
  // Crear un objeto Date para representar una fecha
  // Convertir el objeto Date a un objeto Dayjs
  const fechaDayjs = dayjs(fecha)

  if (!fechaDayjs.isValid()) {
    return 'Fecha inválida'
  }

  // Obtener la diferencia relativa al tiempo actual
  return fechaDayjs.fromNow()
}

// función que genera fecha con un formato
export const generarFechaAnterior = (
  value: number,
  unit: ManipulateType,
  formato: string
): string => dayjs().subtract(value, unit).format(formato)
