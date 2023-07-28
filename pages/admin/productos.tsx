import type { NextPage } from 'next'
import {
    Button,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import { useAuth } from '../../context/auth'
import { LayoutUser } from '../../common/components/layouts'
import React, { ReactNode, useEffect, useState } from 'react'
import { CasbinTypes } from '../../common/types'
import {
    AlertDialog,
    CustomDataTable,
    CustomDialog,
    IconoTooltip,
} from '../../common/components/ui'
import {
    delay,
    InterpreteMensajes,
    siteName,
    titleCase,
} from '../../common/utils'
import { Constantes } from '../../config'

import { Paginacion } from '../../common/components/ui/datatable/Paginacion'
import { useRouter } from 'next/router'
import { useAlerts, useSession } from '../../common/hooks'
import { imprimir } from '../../common/utils/imprimir'

import { BotonBuscar } from '../../common/components/ui/botones/BotonBuscar'
import CustomMensajeEstado from '../../common/components/ui/estados/CustomMensajeEstado'
import { CriterioOrdenType } from '../../common/types/ordenTypes'
import { ordenFiltrado } from '../../common/utils/orden'
import { BotonOrdenar } from '../../common/components/ui/botones/BotonOrdenar'
import { IconoBoton } from '../../common/components/ui/botones/IconoBoton'
import { FiltroProductos, VistaModalProducto } from '../../modules/admin/productos/ui'
import { ProductoCRUDType } from '../../modules/admin/productos/types/productosCRUDTypes'

const Parametros: NextPage = () => {
    const [productosData, setProductosData] = useState<ProductoCRUDType[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    // Hook para mostrar alertas
    const { Alerta } = useAlerts()
    const [errorProductosData, setErrorProductosData] = useState<any>()

    const [modalProducto, setModalProducto] = useState(false)

    /// Indicador para mostrar una vista de alerta de cambio de estado
    const [mostrarAlertaEstadoProducto, setMostrarAlertaEstadoProducto] = useState(false)

    const [productoEdicion, setProductoEdicion] = useState<ProductoCRUDType | undefined | null>()

    // Variables de páginado
    const [limite, setLimite] = useState<number>(10)
    const [pagina, setPagina] = useState<number>(1)
    const [total, setTotal] = useState<number>(0)

    const { sesionPeticion } = useSession()
    const { estaAutenticado, permisoUsuario } = useAuth()

    const [filtroProducto, setFiltroProducto] = useState<string>('')
    const [mostrarFiltroProductos, setMostrarFiltroProductos] = useState(false)
    // Permisos para acciones
    const [permisos, setPermisos] = useState<CasbinTypes>({
        read: false,
        create: false,
        update: false,
        delete: false,
    })

    const theme = useTheme()
    const xs = useMediaQuery(theme.breakpoints.only('xs'))

    /// Método que muestra alerta de cambio de estado

    const editarEstadoProductoModal = async (producto: ProductoCRUDType) => {
        setProductoEdicion(producto) // para mostrar datos de modal en la alerta
        setMostrarAlertaEstadoProducto(true) // para mostrar alerta de parametro
    }

    const cancelarAlertaEstadoProducto = async () => {
        setMostrarAlertaEstadoProducto(false)
        await delay(500) // para no mostrar undefined mientras el modal se cierra
        setProductoEdicion(null)
    }

    /// Método que oculta la alerta de cambio de estado y procede
    const aceptarAlertaEstadoProducto = async () => {
        setMostrarAlertaEstadoProducto(false)
        if (productoEdicion) {
            await cambiarEstadoProductoPeticion(productoEdicion)
        }
        setProductoEdicion(null)
    }

    /// Petición que cambia el estado de un parámetro
    const cambiarEstadoProductoPeticion = async (
        producto: ProductoCRUDType
    ) => {
        try {
            setLoading(true)
            const respuesta = await sesionPeticion({
                url: `${Constantes.baseUrl}/productos/${producto.id}/${producto.estado == 'ACTIVO' ? 'inactivacion' : 'activacion'
                    }`,
                tipo: 'patch',
            })
            imprimir(`respuesta estado parametro: ${respuesta}`)
            Alerta({
                mensaje: InterpreteMensajes(respuesta),
                variant: 'success',
            })
            await obtenerProductosPeticion()
        } catch (e) {
            imprimir(`Error estado producto`, e)
            Alerta({ mensaje: `${InterpreteMensajes(e)}`, variant: 'error' })
        } finally {
            setLoading(false)
        }
    }

    // router para conocer la ruta actual
    const router = useRouter()

    /// Criterios de orden
    const [ordenCriterios, setOrdenCriterios] = useState<
        Array<CriterioOrdenType>
    >([
        { campo: 'id', nombre: 'Id', ordenar: true },
        { campo: 'nombre', nombre: 'Nombre', ordenar: true },
        { campo: 'cantidad', nombre: 'Cantidad', ordenar: true },
        { campo: 'precio', nombre: 'Precio', ordenar: true },
        { campo: 'estado', nombre: 'Estado', ordenar: true },
        { campo: 'acciones', nombre: 'Acciones' },
    ])

    const contenidoTabla: Array<Array<ReactNode>> = productosData.map(
        (productoData, indexProducto) => [
            <Typography
                key={`${productoData.id}-${indexProducto}-id`}
                variant={'body2'}
            >{`${productoData.id}`}</Typography>,
            <Typography
                key={`${productoData.id}-${indexProducto}-nombre`}
                variant={'body2'}
            >
                {`${productoData.nombre}`}
            </Typography>,
            <Typography
                key={`${productoData.id}-${indexProducto}-cantidad`}
                variant={'body2'}
            >{`${productoData.cantidad}`}</Typography>,
            <Typography
                key={`${productoData.id}-${indexProducto}-precio`}
                variant={'body2'}
            >{`${productoData.precio}`}</Typography>,

            <CustomMensajeEstado
                key={`${productoData.id}-${indexProducto}-estado`}
                titulo={productoData.estado}
                descripcion={productoData.estado}
                color={
                    productoData.estado == 'ACTIVO'
                        ? 'success'
                        : productoData.estado == 'INACTIVO'
                            ? 'error'
                            : 'info'
                }
            />,

            <Grid key={`${productoData.id}-${indexProducto}-acciones`}>
                {permisos.update && (
                    <IconoTooltip
                        id={`cambiarEstadoProducto-${productoData.id}`}
                        titulo={productoData.estado == 'ACTIVO' ? 'Inactivar' : 'Activar'}
                        color={productoData.estado == 'ACTIVO' ? 'success' : 'error'}
                        accion={async () => {
                            await editarEstadoProductoModal(productoData)
                        }}
                        desactivado={productoData.estado == 'PENDIENTE'}
                        icono={
                            productoData.estado == 'ACTIVO' ? 'toggle_on' : 'toggle_off'
                        }
                        name={
                            productoData.estado == 'ACTIVO'
                                ? 'Inactivar Producto'
                                : 'Activar Producto'
                        }
                    />
                )}

                {permisos.update && (
                    <IconoTooltip
                        id={`editarProductos-${productoData.id}`}
                        name={'Productos'}
                        titulo={'Editar'}
                        color={'primary'}
                        accion={() => {
                            imprimir(`Editaremos`, productoData)
                            editarProductoModal(productoData)
                        }}
                        icono={'edit'}
                    />
                )}
            </Grid>,
        ]
    )

    const acciones: Array<ReactNode> = [
        <BotonBuscar
            id={'accionFiltrarProductosToggle'}
            key={'accionFiltrarProductosToggle'}
            seleccionado={mostrarFiltroProductos}
            cambiar={setMostrarFiltroProductos}
        />,
        xs && (
            <BotonOrdenar
                id={'ordenarProductos'}
                key={`ordenarProductos`}
                label={'Ordenar productos'}
                criterios={ordenCriterios}
                cambioCriterios={setOrdenCriterios}
            />
        ),
        <IconoTooltip
            id={'actualizarProductos'}
            titulo={'Actualizar'}
            key={`accionActualizarProductos`}
            accion={async () => {
                await obtenerProductosPeticion()
            }}
            icono={'refresh'}
            name={'Actualizar lista de productos'}
        />,
        permisos.create && (
            <IconoBoton
                id={'agregarProducto'}
                key={'agregarProducto'}
                texto={'Agregar'}
                variante={xs ? 'icono' : 'boton'}
                icono={'add_circle_outline'}
                descripcion={'Agregar producto'}
                accion={() => {
                    agregarProductoModal()
                }}
            />
        ),
    ]

    const obtenerProductosPeticion = async () => {
        try {
            setLoading(true)

            const respuesta = await sesionPeticion({
                url: `${Constantes.baseUrl}/productos`,
                params: {
                    pagina: pagina,
                    limite: limite,
                    ...(filtroProducto.length == 0 ? {} : { filtro: filtroProducto }),
                    ...(ordenFiltrado(ordenCriterios).length == 0
                        ? {}
                        : {
                            orden: ordenFiltrado(ordenCriterios).join(','),
                        }),
                },
            })
            setProductosData(respuesta.datos?.filas)
            setTotal(respuesta.datos?.total)
            setErrorProductosData(null)
        } catch (e) {
            imprimir(`Error al obtener productos`, e)
            setErrorProductosData(e)
            Alerta({ mensaje: `${InterpreteMensajes(e)}`, variant: 'error' })
        } finally {
            setLoading(false)
        }
    }

    const agregarProductoModal = () => {
        setProductoEdicion(undefined)
        setModalProducto(true)
    }
    const editarProductoModal = (producto: ProductoCRUDType) => {
        setProductoEdicion(producto)
        setModalProducto(true)
    }

    const cerrarModalProducto = async () => {
        setModalProducto(false)
        await delay(500)
        setProductoEdicion(undefined)
    }

    async function definirPermisos() {
        setPermisos(await permisoUsuario(router.pathname))
    }

    useEffect(() => {
        definirPermisos().finally()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [estaAutenticado])

    useEffect(() => {
        if (estaAutenticado) obtenerProductosPeticion().finally(() => { })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        estaAutenticado,
        pagina,
        limite,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        JSON.stringify(ordenCriterios),
        filtroProducto,
    ])

    useEffect(() => {
        if (!mostrarFiltroProductos) {
            setFiltroProducto('')
        }
    }, [mostrarFiltroProductos])

    const paginacion = (
        <Paginacion
            pagina={pagina}
            limite={limite}
            total={total}
            cambioPagina={setPagina}
            cambioLimite={setLimite}
        />
    )

    return (
        <>
            <AlertDialog
                isOpen={mostrarAlertaEstadoProducto}
                titulo={'Alerta'}
                texto={`¿Está seguro de ${productoEdicion?.estado == 'ACTIVO' ? 'inactivar' : 'activar'
                    } el parámetro: ${titleCase(productoEdicion?.nombre ?? '')} ?`}
            >
                <Button onClick={cancelarAlertaEstadoProducto}>Cancelar</Button>
                <Button onClick={aceptarAlertaEstadoProducto}>Aceptar</Button>
            </AlertDialog>
            <CustomDialog
                isOpen={modalProducto}
                handleClose={cerrarModalProducto}
                title={productoEdicion ? 'Editar producto' : 'Nuevo producto'}
            >
                <VistaModalProducto
                    producto={productoEdicion}
                    accionCorrecta={() => {
                        cerrarModalProducto().finally()
                        obtenerProductosPeticion().finally()
                    }}
                    accionCancelar={cerrarModalProducto}
                />
            </CustomDialog>
            <LayoutUser title={`Productos - ${siteName()}`}>
                <CustomDataTable
                    titulo={'Productos'}
                    error={!!errorProductosData}
                    cargando={loading}
                    acciones={acciones}
                    columnas={ordenCriterios}
                    cambioOrdenCriterios={setOrdenCriterios}
                    paginacion={paginacion}
                    contenidoTabla={contenidoTabla}
                    filtros={
                        mostrarFiltroProductos && (
                            <FiltroProductos
                                filtroProducto={filtroProducto}
                                accionCorrecta={(filtros) => {
                                    setPagina(1)
                                    setLimite(10)
                                    setFiltroProducto(filtros.producto)
                                }}
                                accionCerrar={() => {
                                    imprimir(`👀 cerrar`)
                                }}
                            />
                        )
                    }
                />
            </LayoutUser>
        </>
    )
}
export default Parametros
