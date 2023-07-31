import { ModuloCRUDType } from './CrearEditarModulosType'

export interface ModalModuloType {
  modulo?: ModuloCRUDType | undefined | null
  accionCorrecta: () => void
  accionCancelar: () => void
  modulos: ModuloCRUDType[]
}
