import { ReactNode } from 'react'

export interface IBitacoraAcciones {
  titulo: string
  items: Array<IBitacoraItems>
}

export interface IBitacoraItems {
  color_icono: ColorIconoType
  descripcion: string
  titulo?: string
  fecha: string
  icono?: string
  componente?: ReactNode
}

export type ColorIconoType = 'success' | 'error' | 'info' | 'warning'
