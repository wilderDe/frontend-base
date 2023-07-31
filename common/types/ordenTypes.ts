export enum OrdenEnum {
  ASC = 'asc',
  DESC = 'desc',
}

export interface CriterioOrdenType {
  campo: string
  nombre: string
  orden?: OrdenEnum
  ordenar?: boolean
}
