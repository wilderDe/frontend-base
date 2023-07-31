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
import { VistaModalParametro } from '../../modules/admin/parametros/ui'
import { useAlerts, useSession } from '../../common/hooks'
import { imprimir } from '../../common/utils/imprimir'
import { ParametroCRUDType } from '../../modules/admin/parametros/types/parametrosCRUDTypes'
import { FiltroParametros } from '../../modules/admin/parametros/ui/FiltroParametros'
import { BotonBuscar } from '../../common/components/ui/botones/BotonBuscar'
import CustomMensajeEstado from '../../common/components/ui/estados/CustomMensajeEstado'
import { CriterioOrdenType } from '../../common/types/ordenTypes'
import { ordenFiltrado } from '../../common/utils/orden'
import { BotonOrdenar } from '../../common/components/ui/botones/BotonOrdenar'
import { IconoBoton } from '../../common/components/ui/botones/IconoBoton'

const Parametros: NextPage = () => {
  const [parametrosData, setParametrosData] = useState<ParametroCRUDType[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  // Hook para mostrar alertas
  const { Alerta } = useAlerts()
  const [errorParametrosData, setErrorParametrosData] = useState<any>()

  const [modalParametro, setModalParametro] = useState(false)

  /// Indicador para mostrar una vista de alerta de cambio de estado
  const [mostrarAlertaEstadoParametro, setMostrarAlertaEstadoParametro] =
    useState(false)

  const [parametroEdicion, setParametroEdicion] = useState<
    ParametroCRUDType | undefined | null
  >()

  // Variables de páginado
  const [limite, setLimite] = useState<number>(10)
  const [pagina, setPagina] = useState<number>(1)
  const [total, setTotal] = useState<number>(0)

  const { sesionPeticion } = useSession()
  const { estaAutenticado, permisoUsuario } = useAuth()

  const [filtroParametro, setFiltroParametro] = useState<string>('')
  const [mostrarFiltroParametros, setMostrarFiltroParametros] = useState(false)
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

  const editarEstadoParametroModal = async (parametro: ParametroCRUDType) => {
    setParametroEdicion(parametro) // para mostrar datos de modal en la alerta
    setMostrarAlertaEstadoParametro(true) // para mostrar alerta de parametro
  }

  const cancelarAlertaEstadoParametro = async () => {
    setMostrarAlertaEstadoParametro(false)
    await delay(500) // para no mostrar undefined mientras el modal se cierra
    setParametroEdicion(null)
  }

  /// Método que oculta la alerta de cambio de estado y procede
  const aceptarAlertaEstadoParametro = async () => {
    setMostrarAlertaEstadoParametro(false)
    if (parametroEdicion) {
      await cambiarEstadoParametroPeticion(parametroEdicion)
    }
    setParametroEdicion(null)
  }

  /// Petición que cambia el estado de un parámetro
  const cambiarEstadoParametroPeticion = async (
    parametro: ParametroCRUDType
  ) => {
    try {
      setLoading(true)
      const respuesta = await sesionPeticion({
        url: `${Constantes.baseUrl}/parametros/${parametro.id}/${
          parametro.estado == 'ACTIVO' ? 'inactivacion' : 'activacion'
        }`,
        tipo: 'patch',
      })
      imprimir(`respuesta estado parametro: ${respuesta}`)
      Alerta({
        mensaje: InterpreteMensajes(respuesta),
        variant: 'success',
      })
      await obtenerParametrosPeticion()
    } catch (e) {
      imprimir(`Error estado parametro`, e)
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
    { campo: 'codigo', nombre: 'Código', ordenar: true },
    { campo: 'nombre', nombre: 'Nombre', ordenar: true },
    { campo: 'descripcion', nombre: 'Descripción', ordenar: true },
    { campo: 'grupo', nombre: 'Grupo', ordenar: true },
    { campo: 'estado', nombre: 'Estado', ordenar: true },
    { campo: 'acciones', nombre: 'Acciones' },
  ])

  const contenidoTabla: Array<Array<ReactNode>> = parametrosData.map(
    (parametroData, indexParametro) => [
      <Typography
        key={`${parametroData.id}-${indexParametro}-codigo`}
        variant={'body2'}
      >{`${parametroData.codigo}`}</Typography>,
      <Typography
        key={`${parametroData.id}-${indexParametro}-nombre`}
        variant={'body2'}
      >
        {`${parametroData.nombre}`}
      </Typography>,
      <Typography
        key={`${parametroData.id}-${indexParametro}-descripcion`}
        variant={'body2'}
      >{`${parametroData.descripcion}`}</Typography>,
      <Typography
        key={`${parametroData.id}-${indexParametro}-grupo`}
        variant={'body2'}
      >{`${parametroData.grupo}`}</Typography>,

      <CustomMensajeEstado
        key={`${parametroData.id}-${indexParametro}-estado`}
        titulo={parametroData.estado}
        descripcion={parametroData.estado}
        color={
          parametroData.estado == 'ACTIVO'
            ? 'success'
            : parametroData.estado == 'INACTIVO'
            ? 'error'
            : 'info'
        }
      />,

      <Grid key={`${parametroData.id}-${indexParametro}-acciones`}>
        {permisos.update && (
          <IconoTooltip
            id={`cambiarEstadoParametro-${parametroData.id}`}
            titulo={parametroData.estado == 'ACTIVO' ? 'Inactivar' : 'Activar'}
            color={parametroData.estado == 'ACTIVO' ? 'success' : 'error'}
            accion={async () => {
              await editarEstadoParametroModal(parametroData)
            }}
            desactivado={parametroData.estado == 'PENDIENTE'}
            icono={
              parametroData.estado == 'ACTIVO' ? 'toggle_on' : 'toggle_off'
            }
            name={
              parametroData.estado == 'ACTIVO'
                ? 'Inactivar Parámetro'
                : 'Activar Parámetro'
            }
          />
        )}

        {permisos.update && (
          <IconoTooltip
            id={`editarParametros-${parametroData.id}`}
            name={'Parámetros'}
            titulo={'Editar'}
            color={'primary'}
            accion={() => {
              imprimir(`Editaremos`, parametroData)
              editarParametroModal(parametroData)
            }}
            icono={'edit'}
          />
        )}
      </Grid>,
    ]
  )

  const acciones: Array<ReactNode> = [
    <BotonBuscar
      id={'accionFiltrarParametrosToggle'}
      key={'accionFiltrarParametrosToggle'}
      seleccionado={mostrarFiltroParametros}
      cambiar={setMostrarFiltroParametros}
    />,
    xs && (
      <BotonOrdenar
        id={'ordenarParametros'}
        key={`ordenarParametros`}
        label={'Ordenar parámetros'}
        criterios={ordenCriterios}
        cambioCriterios={setOrdenCriterios}
      />
    ),
    <IconoTooltip
      id={'actualizarParametro'}
      titulo={'Actualizar'}
      key={`accionActualizarParametro`}
      accion={async () => {
        await obtenerParametrosPeticion()
      }}
      icono={'refresh'}
      name={'Actualizar lista de parámetros'}
    />,
    permisos.create && (
      <IconoBoton
        id={'agregarParametro'}
        key={'agregarParametro'}
        texto={'Agregar'}
        variante={xs ? 'icono' : 'boton'}
        icono={'add_circle_outline'}
        descripcion={'Agregar parámetro'}
        accion={() => {
          agregarParametroModal()
        }}
      />
    ),
  ]

  const obtenerParametrosPeticion = async () => {
    try {
      setLoading(true)

      const respuesta = await sesionPeticion({
        url: `${Constantes.baseUrl}/parametros`,
        params: {
          pagina: pagina,
          limite: limite,
          ...(filtroParametro.length == 0 ? {} : { filtro: filtroParametro }),
          ...(ordenFiltrado(ordenCriterios).length == 0
            ? {}
            : {
                orden: ordenFiltrado(ordenCriterios).join(','),
              }),
        },
      })
      setParametrosData(respuesta.datos?.filas)
      setTotal(respuesta.datos?.total)
      setErrorParametrosData(null)
    } catch (e) {
      imprimir(`Error al obtener parametros`, e)
      setErrorParametrosData(e)
      Alerta({ mensaje: `${InterpreteMensajes(e)}`, variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const agregarParametroModal = () => {
    setParametroEdicion(undefined)
    setModalParametro(true)
  }
  const editarParametroModal = (parametro: ParametroCRUDType) => {
    setParametroEdicion(parametro)
    setModalParametro(true)
  }

  const cerrarModalParametro = async () => {
    setModalParametro(false)
    await delay(500)
    setParametroEdicion(undefined)
  }

  async function definirPermisos() {
    setPermisos(await permisoUsuario(router.pathname))
  }

  useEffect(() => {
    definirPermisos().finally()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estaAutenticado])

  useEffect(() => {
    if (estaAutenticado) obtenerParametrosPeticion().finally(() => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    estaAutenticado,
    pagina,
    limite,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(ordenCriterios),
    filtroParametro,
  ])

  useEffect(() => {
    if (!mostrarFiltroParametros) {
      setFiltroParametro('')
    }
  }, [mostrarFiltroParametros])

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
        isOpen={mostrarAlertaEstadoParametro}
        titulo={'Alerta'}
        texto={`¿Está seguro de ${
          parametroEdicion?.estado == 'ACTIVO' ? 'inactivar' : 'activar'
        } el parámetro: ${titleCase(parametroEdicion?.nombre ?? '')} ?`}
      >
        <Button onClick={cancelarAlertaEstadoParametro}>Cancelar</Button>
        <Button onClick={aceptarAlertaEstadoParametro}>Aceptar</Button>
      </AlertDialog>
      <CustomDialog
        isOpen={modalParametro}
        handleClose={cerrarModalParametro}
        title={parametroEdicion ? 'Editar parámetro' : 'Nuevo parámetro'}
      >
        <VistaModalParametro
          parametro={parametroEdicion}
          accionCorrecta={() => {
            cerrarModalParametro().finally()
            obtenerParametrosPeticion().finally()
          }}
          accionCancelar={cerrarModalParametro}
        />
      </CustomDialog>
      <LayoutUser title={`Parámetros - ${siteName()}`}>
        <CustomDataTable
          titulo={'Parámetros'}
          error={!!errorParametrosData}
          cargando={loading}
          acciones={acciones}
          columnas={ordenCriterios}
          cambioOrdenCriterios={setOrdenCriterios}
          paginacion={paginacion}
          contenidoTabla={contenidoTabla}
          filtros={
            mostrarFiltroParametros && (
              <FiltroParametros
                filtroParametro={filtroParametro}
                accionCorrecta={(filtros) => {
                  setPagina(1)
                  setLimite(10)
                  setFiltroParametro(filtros.parametro)
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
