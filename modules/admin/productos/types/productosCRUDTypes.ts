/// CRUD de productos

export interface ProductoCRUDType {
    id: string
    nombre: string
    cantidad: number
    precio: number
    estado: string
}

export interface CrearEditarProductoCRUDType {
    id?: string
    nombre: string
    cantidad: number
    precio: number
    estado: string
}
