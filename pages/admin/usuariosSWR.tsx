import type { NextPage } from 'next'
import { Box } from '@mui/material'
import React from 'react'

const UsuariosSWR: NextPage = () => {
  return <Box></Box>
}

/*const UsuariosSWR: NextPage = () => {
  // Flag que indica que hay un proceso cargando visualmente
  const [loading, setLoading] = useState<boolean>(true)

  /// Indicador para mostrar una ventana modal de usuario
  const [modalUsuario, setModalUsuario] = useState(false)

  /// Indicador para mostrar una vista de alerta
  const [mostrarAlertaEstadoUsuario, setMostrarAlertaEstadoUsuario] =
    useState(false)

  /// Variable que contiene el estado del usuario que se esta editando
  const [usuarioEdicion, setUsuarioEdicion] = useState<
    UsuarioCRUDType | undefined | null
  >()

  // Roles de usuario
  const [rolesData, setRolesData] = useState<RolType[]>([])

  // Variables de páginado
  const [limite, setLimite] = useState<number>(10)
  const [pagina, setPagina] = useState<number>(1)
  const [total, setTotal] = useState<number>(0)

  // Proveedor de la sesión
  const { sesionPeticion, estaAutenticado, interpretarPermiso } = useAuth()

  // Permisos para acciones
  const [permisos, setPermisos] = useState<CasbinTypes>({
    create: false,
    update: false,
    delete: false,
  })

  // router para conocer la ruta actual
  const router = useRouter()

  /// Columnas para data table
  const columnas: Array<ColumnaType> = [
    { campo: 'nro_documento', nombre: 'Nro. Documento' },
    { campo: 'persona', nombre: 'Persona' },
    { campo: 'usuario', nombre: 'Usuario' },
    { campo: 'rol', nombre: 'Roles' },
    { campo: 'estado', nombre: 'Estado' },
    { campo: 'acciones', nombre: 'Acciones' },
  ]

  const address = `${Constantes.baseUrl}/usuarios`
  const fetcher: Fetcher<UsuarioCRUDType[]> = async (url: string) => {
    setLoading(true)
    await obtenerRolesPeticion()
    return await sesionPeticion({
      url: url,
      params: {
        pagina: pagina,
        limite: limite,
      },
    })
      .then((respuesta) => {
        setTotal(respuesta.datos?.total)
        return respuesta.datos?.filas
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const revalidationOptions: SWRConfiguration = {
    dedupingInterval: 3600000,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  }

  const { data, mutate, error } = useSWR<UsuarioCRUDType[]>(
    address,
    fetcher,
    revalidationOptions
  )

  const contenidoTabla: () => Array<Array<ReactNode>> = () => {
    return (
      data?.map((usuarioData, indexUsuario) => [
        <Typography
          key={`${usuarioData.id}-${indexUsuario}-tipoDoc`}
          variant={'body2'}
        >
          {`${usuarioData.persona.tipoDocumento} ${usuarioData.persona.nroDocumento}`}
        </Typography>,
        <div key={`${usuarioData.id}-${indexUsuario}-nombres`}>
          <Typography variant={'body2'}>
            {`${usuarioData.persona.nombres} ${usuarioData.persona.primerApellido} ${usuarioData.persona.segundoApellido}`}
          </Typography>
          <Typography variant={'body2'}>
            {`${usuarioData.persona.fechaNacimiento}`}
          </Typography>
        </div>,
        <Typography
          key={`${usuarioData.id}-${indexUsuario}-usuario`}
          variant={'body2'}
        >
          {usuarioData.usuario}
        </Typography>,
        <Grid key={`${usuarioData.id}-${indexUsuario}-roles`}>
          {usuarioData.usuarioRol.map((itemUsuarioRol, indexUsuarioRol) => (
            <Chip
              key={`usuario-rol-${indexUsuarioRol}`}
              label={itemUsuarioRol.rol.rol}
            />
          ))}
        </Grid>,
        <Typography key={`${usuarioData.id}-${indexUsuario}-estado`}>
          <Button
            variant="outlined"
            sx={{ borderRadius: 12 }}
            color={
              usuarioData.estado == 'ACTIVO'
                ? 'success'
                : usuarioData.estado == 'INACTIVO'
                ? 'error'
                : 'info'
            }
          >
            {usuarioData.estado}
          </Button>
        </Typography>,
        <Grid key={`${usuarioData.id}-${indexUsuario}-acciones`}>
          {permisos.update && (
            <IconoTooltip
              titulo={usuarioData.estado == 'ACTIVO' ? 'Inactivar' : 'Activar'}
              color={usuarioData.estado == 'ACTIVO' ? 'success' : 'error'}
              accion={async () => {
                imprimir(`estado: ${usuarioData.estado}`)
                await editarEstadoUsuarioModal(usuarioData)
              }}
              desactivado={usuarioData.estado == 'PENDIENTE'}
              icono={
                usuarioData.estado == 'ACTIVO' ? 'toggle_on' : 'toggle_off'
              }
              name={
                usuarioData.estado == 'ACTIVO'
                  ? 'Inactivar Usuario'
                  : 'Activar Usuario'
              }
            />
          )}
          <IconoTooltip
            titulo={'Restablecer contraseña'}
            color={'info'}
            accion={() => {
              imprimir(`Restablecer`, usuarioData)
            }}
            icono={'vpn_key'}
            name={'Restablecer contraseña'}
          />
          {permisos.update && (
            <IconoTooltip
              titulo={'Editar'}
              color={'success'}
              accion={() => {
                imprimir(`Editaremos`, usuarioData)
                editarUsuarioModal(usuarioData)
              }}
              icono={'edit'}
              name={'Editar usuario'}
            />
          )}
        </Grid>,
      ]) ?? []
    )
  }

  const acciones: Array<ReactNode> = [
    permisos.create && (
      <IconoTooltip
        titulo={'Agregar usuario'}
        key={`accionAgregarUsuario`}
        accion={() => {
          agregarUsuarioModal()
        }}
        icono={'add_circle_outline'}
        name={'Agregar usuario'}
      />
    ),
    <IconoTooltip
      titulo={'Actualizar'}
      key={`accionActualizarUsuario`}
      accion={async () => {
        await mutate()
      }}
      icono={'refresh'}
      name={'Actualizar lista de usuario'}
    />,
  ]

  const obtenerRolesPeticion = async () => {
    try {
      const respuesta = await sesionPeticion({
        url: `${Constantes.baseUrl}/autorizacion/roles`,
      })
      setRolesData(respuesta.datos)
    } catch (e) {
      imprimir(`Error al obtener roles`, e)
      Alerta({ mensaje: `${InterpreteMensajes(e)}`, variant: 'error' })
    } finally {
    }
  }

  useEffect(() => {
    definirPermisos().finally()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estaAutenticado])

  const cambiarEstadoUsuarioPeticion = async (usuario: UsuarioCRUDType) => {
    try {
      setLoading(true)
      const respuesta = await sesionPeticion({
        url: `${Constantes.baseUrl}/usuarios/${usuario.id}/${
          usuario.estado == 'ACTIVO' ? 'inactivacion' : 'activacion'
        }`,
        tipo: 'patch',
      })
      imprimir(`respuesta inactivar usuario: ${respuesta}`)
      Alerta({
        mensaje: InterpreteMensajes(respuesta),
        variant: 'success',
      })
      await mutate()
    } catch (e) {
      imprimir(`Error al inactivar usuarios`, e)
      Alerta({ mensaje: `${InterpreteMensajes(e)}`, variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const VistaModalUsuario = ({ usuario }: ModalUsuarioType) => {
    // Flag que indica que hay un proceso en ventana modal cargando visualmente
    const [loadingModal, setLoadingModal] = useState<boolean>(false)

    const { handleSubmit, control } = useForm<CrearEditarUsuarioType>({
      defaultValues: {
        id: usuario?.id,
        usuario: usuario?.usuario,
        roles: usuario?.usuarioRol.map((rol) => rol.rol.id),
        estado: usuario?.estado,
        correoElectronico: usuario?.correoElectronico,
        persona: usuario?.persona,
        ciudadaniaDigital: usuario?.ciudadaniaDigital,
      },
    })

    const guardarActualizarUsuario = async (data: CrearEditarUsuarioType) => {
      await guardarActualizarUsuariosPeticion(data)
    }

    const guardarActualizarUsuariosPeticion = async (
      usuario: CrearEditarUsuarioType
    ) => {
      try {
        setLoadingModal(true)
        await delay(1000)
        const respuesta = await sesionPeticion({
          url: `${Constantes.baseUrl}/usuarios/${usuario.id ?? ''}`,
          tipo: !!usuario.id ? 'patch' : 'post',
          body: usuario,
        })
        Alerta({
        mensaje: InterpreteMensajes(respuesta),
        variant: 'success',
      })
        cerrarModalUsuario()
        await mutate()
      } catch (e) {
        imprimir(`Error al crear o actualizar usuario`, e)
        Alerta({ mensaje: `${InterpreteMensajes(e)}`, variant: 'error' })
      } finally {
        setLoadingModal(false)
      }
    }

    return (
      <Grid container direction={'column'} justifyContent="space-evenly">
        <Box height={'10px'} />
        <Typography
          color="text.secondary"
          sx={{ fontSize: 14, fontWeight: 'medium' }}
        >
          Datos personales
        </Typography>
        <Box height={'10px'} />
        <Grid container direction="row" spacing={{ xs: 2, sm: 1, md: 2 }}>
          <Grid item xs={12} sm={12} md={4}>
            <FormInputText
              id={'nroDocumento'}
              control={control}
              name="persona.nroDocumento"
              label="Nro. Documento"
              disabled={loadingModal}
              rules={{ required: 'Este campo es requerido' }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInputText
              id={'nroDocumento'}
              control={control}
              name="persona.nombres"
              label="Nombre"
              disabled={loadingModal}
              rules={{ required: 'Este campo es requerido' }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInputText
              id={'primerApellido'}
              control={control}
              name="persona.primerApellido"
              label="Primer Apellido"
              disabled={loadingModal}
              rules={{ required: 'Este campo es requerido' }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInputText
              id={'segundoApellido'}
              control={control}
              name="persona.segundoApellido"
              label="Segundo apellido"
              disabled={loadingModal}
              rules={{ required: 'Este campo es requerido' }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <FormInputDate
              id={'fechaNacimiento'}
              control={control}
              name="persona.fechaNacimiento"
              label="Fecha de nacimiento"
              disabled={loadingModal}
              rules={{ required: 'Este campo es requerido' }}
            />
          </Grid>
        </Grid>
        <Grid>
          <Box height={'10px'} />
          <CampoNombre name={'Datos de usuario'} />
          <Box height={'10px'} />
          <Grid container direction="row" spacing={{ xs: 2, sm: 1, md: 2 }}>
            <Grid item xs={12} sm={12} md={4}>
              <FormInputDropdownMultiple
                id={'roles'}
                name="roles"
                control={control}
                label="Roles"
                disabled={loadingModal}
                options={rolesData.map((rol) => ({
                  key: rol.id,
                  value: rol.id,
                  label: rol.nombre,
                }))}
                rules={{ required: 'Este campo es requerido' }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <FormInputText
                id={'correoElectronico'}
                control={control}
                name="correoElectronico"
                label="Correo electrónico"
                disabled={loadingModal}
                rules={{
                  required: 'Este campo es requerido',
                  validate: (value) => {
                    if (!isValidEmail(value)) return 'No es un correo válido'
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Box height={'10px'} />
        <ProgresoLineal mostrar={loadingModal} />
        <Box height={'5px'} />
        <DialogActions
          sx={{
            justifyContent: {
              lg: 'flex-end',
              md: 'flex-end',
              xs: 'center',
              sm: 'center',
            },
          }}
        >
          <Button
            variant={'outlined'}
            disabled={loadingModal}
            onClick={cerrarModalUsuario}
          >
            Cancelar
          </Button>
          <Button
            variant={'contained'}
            disabled={loadingModal}
            onClick={handleSubmit(guardarActualizarUsuario)}
          >
            Guardar
          </Button>
        </DialogActions>
      </Grid>
    )
  }

  /// Métodos para agregar, editar usuarios

  const agregarUsuarioModal = () => {
    setUsuarioEdicion(null)
    setModalUsuario(true)
  }
  const editarUsuarioModal = (usuario: UsuarioCRUDType) => {
    setUsuarioEdicion(usuario)
    setModalUsuario(true)
  }

  /// Método que cierra una ventana modal
  const cerrarModalUsuario = async () => {
    setModalUsuario(false)
    await delay(500)
    setUsuarioEdicion(null)
  }

  /// Métodos para alerta de cambiar de estado

  const editarEstadoUsuarioModal = async (usuario: UsuarioCRUDType) => {
    setUsuarioEdicion(usuario) // para mostrar datos de usuario en la alerta
    setMostrarAlertaEstadoUsuario(true) // para mostrar alerta de usuarios
  }

  const cancelarAlertaEstadoUsuario = () => {
    setMostrarAlertaEstadoUsuario(false)
    setUsuarioEdicion(null)
  }

  async function definirPermisos() {
    setPermisos(await interpretarPermiso('/admin/usuarios'))
  }

  useEffect(() => {
    definirPermisos().finally()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estaAutenticado])

  const aceptarAlertaEstadoUsuario = async () => {
    setMostrarAlertaEstadoUsuario(false)
    if (usuarioEdicion) {
      await cambiarEstadoUsuarioPeticion(usuarioEdicion)
    }
  }

  const paginacion = () => (
    <Paginacion
      pagina={pagina}
      limite={limite}
      total={total}
      cambioPagina={setPagina}
      cambioLimite={setLimite}
    />
  )

  useEffect(() => {
    imprimir(`cambio en página`)
  }, [])

  return (
    <>
      <AlertDialog
        isOpen={mostrarAlertaEstadoUsuario}
        titulo={'Alerta'}
        texto={`¿Está seguro de ${
          usuarioEdicion?.estado == 'ACTIVO' ? 'inactivar' : 'activar'
        } a ${titleCase(usuarioEdicion?.persona.nombres ?? '')} ?`}
      >
        <Button onClick={cancelarAlertaEstadoUsuario}>Cancelar</Button>
        <Button onClick={aceptarAlertaEstadoUsuario}>Aceptar</Button>
      </AlertDialog>
      <CustomDialog
        isOpen={modalUsuario}
        handleClose={cerrarModalUsuario}
        title={usuarioEdicion ? 'Editar usuario' : 'Nuevo usuario'}
      >
        <VistaModalUsuario usuario={usuarioEdicion} />
      </CustomDialog>
      <LayoutUser title={`Usuarios - ${siteName()}`}>
        <CustomDataTable
          titulo={'Usuarios'}
          error={!!error}
          cargando={loading}
          acciones={acciones}
          columnas={columnas}
          contenidoTabla={contenidoTabla()}
          paginacion={paginacion()}
        />
      </LayoutUser>
    </>
  )
}*/

export default UsuariosSWR
