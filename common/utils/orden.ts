import { CriterioOrdenType, OrdenEnum } from '../types/ordenTypes'

export const ordenFiltrado = (ordenCriterios: Array<CriterioOrdenType>) =>
  ordenCriterios
    .filter((value) => value.orden)
    .map((value) => (value.orden == 'asc' ? value.campo : `-${value.campo}`))

export const ToggleOrden = (
  ordenAnterior: OrdenEnum | undefined
): OrdenEnum | undefined => {
  switch (ordenAnterior) {
    case OrdenEnum.DESC:
      return OrdenEnum.ASC
    case OrdenEnum.ASC:
      return undefined
    default:
      return OrdenEnum.DESC
  }
}
