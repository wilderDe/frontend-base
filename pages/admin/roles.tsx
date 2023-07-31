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
import { RolCRUDType } from '../../modules/admin/roles/types/rolCRUDType'
import CustomMensajeEstado from '../../common/components/ui/estados/CustomMensajeEstado'
import { VistaModalRol } from '../../modules/admin/roles/ui/ModalRol'
import { FiltroRol } from '../../modules/admin/roles/ui/FiltroRol'
import { BotonBuscar } from '../../common/components/ui/botones/BotonBuscar'
import { CriterioOrdenType } from '../../common/types/ordenTypes'
import { BotonOrdenar } from '../../common/components/ui/botones/BotonOrdenar'
import { ordenFiltrado } from '../../common/utils/orden'
import { IconoBoton } from '../../common/components/ui/botones/IconoBoton'

const Roles: NextPage = () => {
  const [rolesData, setRolesData] = useState<RolCRUDType[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  // Hook para mostrar alertas
  const { Alerta } = useAlerts()
  const [errorRolData, setErrorRolData] = useState<any>()

  const [modalRol, setModalRol] = useState(false)

  const [rolEdicion, setRolEdicion] = useState<RolCRUDType | undefined>()

  // Variables de páginado
  const [limite, setLimite] = useState<number>(10)
  const [pagina, setPagina] = useState<number>(1)
  const [total, setTotal] = useState<number>(0)

  //filtros

  const [filtroRol, setFiltroRol] = useState<string>('')
  const [mostrarFiltroRol, setMostrarFiltroRol] = useState(false)

  const { sesionPeticion } = useSession()
  const { estaAutenticado, permisoUsuario } = useAuth()

  // Permisos para acciones
  const [permisos, setPermisos] = useState<CasbinTypes>({
    read: false,
    create: false,
    update: false,
    delete: false,
  })

  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.only('xs'))

  const [mostrarAlertaEstadoRol, setMostrarAlertaEstadoRol] = useState(false)

  const editarEstadoRolModal = async (rol: RolCRUDType) => {
    setRolEdicion(rol) // para mostrar datos de Rol en la alerta
    setMostrarAlertaEstadoRol(true) // para mostrar alerta de Roles
  }

  const cancelarAlertaEstadoRol = async () => {
    setMostrarAlertaEstadoRol(false)
    await delay(500)
    setRolEdicion(undefined)
  }

  const aceptarAlertaEstadoRol = async () => {
    setMostrarAlertaEstadoRol(false)
    if (rolEdicion) {
      await cambiarEstadoRolPeticion(rolEdicion)
    }
    setRolEdicion(undefined)
  }

  // router para conocer la ruta actual
  const router = useRouter()

  /// Criterios de orden
  const [ordenCriterios, setOrdenCriterios] = useState<
    Array<CriterioOrdenType>
  >([
    { campo: 'rol', nombre: 'Rol', ordenar: true },
    { campo: 'nombre', nombre: 'Nombre', ordenar: true },
    { campo: 'estado', nombre: 'Estado', ordenar: true },
    { campo: 'acciones', nombre: 'Acciones' },
  ])

  const contenidoTabla: Array<Array<ReactNode>> = rolesData.map(
    (rolData, indexRol) => [
      <Typography key={`${rolData.id}-${indexRol}-rol`} variant={'body2'}>
        {`${rolData.rol}`}
      </Typography>,
      <Typography
        key={`${rolData.id}-${indexRol}-nombre`}
        variant={'body2'}
      >{`${rolData.nombre}`}</Typography>,
      <Typography key={`${rolData.id}-${indexRol}-estado`} component={'div'}>
        <CustomMensajeEstado
          titulo={rolData.estado}
          descripcion={rolData.estado}
          color={
            rolData.estado == 'ACTIVO'
              ? 'success'
              : rolData.estado == 'INACTIVO'
              ? 'error'
              : 'info'
          }
        />
      </Typography>,
      <Grid key={`${rolData.id}-${indexRol}-accion`}>
        {permisos.update && (
          <IconoTooltip
            id={`cambiarEstadoRol-${rolData.id}`}
            titulo={rolData.estado == 'ACTIVO' ? 'Inactivar' : 'Activar'}
            color={rolData.estado == 'ACTIVO' ? 'success' : 'error'}
            accion={async () => {
              await editarEstadoRolModal(rolData)
            }}
            desactivado={rolData.estado == 'PENDIENTE'}
            icono={rolData.estado == 'ACTIVO' ? 'toggle_on' : 'toggle_off'}
            name={rolData.estado == 'ACTIVO' ? 'Inactivar Rol' : 'Activar Rol'}
          />
        )}
        {permisos.update && (
          <IconoTooltip
            id={`editarRol-${rolData.id}`}
            titulo={'Editar'}
            color={'primary'}
            accion={() => {
              imprimir(`Editaremos`, rolData)
              editarRolModal(rolData)
            }}
            icono={'edit'}
            name={'Roles'}
          />
        )}
      </Grid>,
    ]
  )

  const acciones: Array<ReactNode> = [
    <BotonBuscar
      id={'accionFiltrarRolToggle'}
      key={'accionFiltrarRolToggle'}
      seleccionado={mostrarFiltroRol}
      cambiar={setMostrarFiltroRol}
    />,
    xs && (
      <BotonOrdenar
        id={'ordenarRoles'}
        key={`ordenarRoles`}
        label={'Ordenar roles'}
        criterios={ordenCriterios}
        cambioCriterios={setOrdenCriterios}
      />
    ),
    <IconoTooltip
      id={'actualizarRol'}
      titulo={'Actualizar'}
      key={`accionActualizarRol`}
      accion={async () => {
        await obtenerRolesPeticion()
      }}
      icono={'refresh'}
      name={'Actualizar lista de roles'}
    />,
    permisos.create && (
      <IconoBoton
        id={'agregarRol'}
        key={'agregarRol'}
        texto={'Agregar'}
        variante={xs ? 'icono' : 'boton'}
        icono={'add_circle_outline'}
        descripcion={'Agregar rol'}
        accion={() => {
          agregarRolModal()
        }}
      />
    ),
  ]

  const cambiarEstadoRolPeticion = async (rol: RolCRUDType) => {
    try {
      setLoading(true)
      const respuesta = await sesionPeticion({
        url: `${Constantes.baseUrl}/autorizacion/roles/${rol.id}/${
          rol.estado == 'ACTIVO' ? 'inactivacion' : 'activacion'
        }`,
        tipo: 'patch',
      })
      imprimir(`respuesta inactivar rol: ${respuesta}`)
      Alerta({
        mensaje: InterpreteMensajes(respuesta),
        variant: 'success',
      })
      await obtenerRolesPeticion()
    } catch (e) {
      imprimir(`Error al inactivar rol`, e)
      Alerta({ mensaje: `${InterpreteMensajes(e)}`, variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const obtenerRolesPeticion = async () => {
    try {
      setLoading(true)

      const respuesta = await sesionPeticion({
        url: `${Constantes.baseUrl}/autorizacion/roles/todos`,
        params: {
          pagina: pagina,
          limite: limite,
          ...(filtroRol.length == 0 ? {} : { filtro: filtroRol }),
          ...(ordenFiltrado(ordenCriterios).length == 0
            ? {}
            : {
                orden: ordenFiltrado(ordenCriterios).join(','),
              }),
        },
      })
      setRolesData(respuesta.datos?.filas)
      setTotal(respuesta.datos?.total)
      setErrorRolData(null)
    } catch (e) {
      imprimir(`Error al obtener Roles`, e)
      setErrorRolData(e)
      Alerta({ mensaje: `${InterpreteMensajes(e)}`, variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const agregarRolModal = () => {
    setRolEdicion(undefined)
    setModalRol(true)
  }
  const editarRolModal = (Rol: RolCRUDType) => {
    setRolEdicion(Rol)
    setModalRol(true)
  }

  const cerrarModalRol = async () => {
    setModalRol(false)
    await delay(500)
    setRolEdicion(undefined)
  }

  async function definirPermisos() {
    setPermisos(await permisoUsuario(router.pathname))
  }

  useEffect(() => {
    definirPermisos().finally()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estaAutenticado])

  useEffect(() => {
    if (estaAutenticado) obtenerRolesPeticion().finally(() => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    estaAutenticado,
    pagina,
    limite,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(ordenCriterios),
    filtroRol,
  ])

  useEffect(() => {
    if (!mostrarFiltroRol) {
      setFiltroRol('')
    }
  }, [mostrarFiltroRol])

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
        isOpen={mostrarAlertaEstadoRol}
        titulo={'Alerta'}
        texto={`¿Está seguro de ${
          rolEdicion?.estado == 'ACTIVO' ? 'inactivar' : 'activar'
        } a ${titleCase(rolEdicion?.nombre ?? '')} ?`}
      >
        <Button onClick={cancelarAlertaEstadoRol}>Cancelar</Button>
        <Button onClick={aceptarAlertaEstadoRol}>Aceptar</Button>
      </AlertDialog>
      <CustomDialog
        isOpen={modalRol}
        handleClose={cerrarModalRol}
        title={rolEdicion ? 'Editar rol' : 'Nuevo rol'}
      >
        <VistaModalRol
          rol={rolEdicion}
          accionCorrecta={() => {
            cerrarModalRol().finally()
            obtenerRolesPeticion().finally()
          }}
          accionCancelar={cerrarModalRol}
        />
      </CustomDialog>
      <LayoutUser title={`Rol - ${siteName()}`}>
        <CustomDataTable
          titulo={'Roles'}
          error={!!errorRolData}
          cargando={loading}
          acciones={acciones}
          columnas={ordenCriterios}
          cambioOrdenCriterios={setOrdenCriterios}
          paginacion={paginacion}
          contenidoTabla={contenidoTabla}
          filtros={
            mostrarFiltroRol && (
              <FiltroRol
                filtroRol={filtroRol}
                accionCorrecta={(filtros) => {
                  setPagina(1)
                  setLimite(10)
                  setFiltroRol(filtros.rol)
                }}
                accionCerrar={() => {}}
              />
            )
          }
        />
      </LayoutUser>
    </>
  )
}
export default Roles
