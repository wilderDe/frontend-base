/// CRUD de políticas

import { optionType } from '../../../common/components/ui/form/FormInputAutocomplete'

export interface PoliticaCRUDType {
  sujeto: string
  objeto: string
  accion: string
  app: string
}

export interface CrearEditarPoliticaCRUDType {
  sujeto: string
  objeto: string
  accion: optionType[]
  app: string
}

export interface guardarPoliticaCRUDType {
  sujeto: string
  objeto: string
  accion: string
  app: string
}
