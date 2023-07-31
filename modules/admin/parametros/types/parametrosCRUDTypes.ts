/// CRUD de parametros

export interface ParametroCRUDType {
  id: string
  codigo: string
  nombre: string
  grupo: string
  descripcion: string
  estado: string
}

export interface CrearEditarParametroCRUDType {
  id?: string
  codigo: string
  nombre: string
  grupo: string
  descripcion: string
}
