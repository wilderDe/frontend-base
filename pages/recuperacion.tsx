import type { NextPage } from 'next'
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { delay, InterpreteMensajes, siteName } from '../common/utils'
import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { Servicios } from '../common/services'
import { Constantes } from '../config'
import { useFullScreenLoading } from '../context/ui'
import { Icono } from '../common/components/ui'
import { imprimir } from '../common/utils/imprimir'
import { FormInputText } from '../common/components/ui/form'
import { useForm } from 'react-hook-form'
import ProgresoLineal from '../common/components/ui/progreso/ProgresoLineal'
import { useAlerts } from '../common/hooks'
import { CambioPass } from '../modules/login/ui/CambioPass'
import { LayoutLogin } from '../common/components/layouts'
import { isValidEmail } from '../common/utils/validations'

export interface correoRecuperarType {
  correo: string
}

export interface codigoRecuperarType {
  codigo: string
}

const Recuperacion: NextPage = () => {
  const [mensaje, setMensaje] = useState<string>('')
  const [code, setCode] = useState<string | undefined>()

  const { mostrarFullScreen, ocultarFullScreen } = useFullScreenLoading()

  const [indicadorCarga, setIndicadorCarga] = useState<boolean>(false)

  const [indicadorTareaRealizada, setIndicadorTareaRealizada] =
    useState<boolean>(false)

  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return
    const params = router.query
    imprimir(`queryParams`, params)

    const codigoDesbloqueo = Array.isArray(params.q) ? params.q[0] : params.q

    if (codigoDesbloqueo)
      validarRecuperarPeticion({ codigo: codigoDesbloqueo ?? '' }).finally()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, router.query])

  // Hook para mostrar alertas
  const { Alerta } = useAlerts()
  const { handleSubmit, control } = useForm<correoRecuperarType>({})

  const recuperarPeticion = async ({ correo }: correoRecuperarType) => {
    try {
      setIndicadorCarga(true)
      await delay(1000)

      const respuesta = await Servicios.post({
        url: `${Constantes.baseUrl}/usuarios/recuperar`,
        body: {
          correoElectronico: correo,
        },
      })
      setMensaje(InterpreteMensajes(respuesta))
      setIndicadorTareaRealizada(true)
      imprimir(InterpreteMensajes(respuesta))
    } catch (e) {
      setMensaje(InterpreteMensajes(e))
      Alerta({ mensaje: InterpreteMensajes(e), variant: 'error' })
      imprimir(`Error al desbloquear usuario: `, e)
    } finally {
      setIndicadorCarga(false)
    }
  }

  const validarRecuperarPeticion = async ({ codigo }: codigoRecuperarType) => {
    try {
      setIndicadorCarga(true)
      await delay(1000)

      const respuesta = await Servicios.post({
        url: `${Constantes.baseUrl}/usuarios/validar-recuperar`,
        body: {
          codigo: codigo,
        },
      })
      setCode(respuesta?.datos?.code)
      setMensaje(InterpreteMensajes(respuesta))
      setIndicadorTareaRealizada(true)
      imprimir(InterpreteMensajes(respuesta))
    } catch (e) {
      setMensaje(InterpreteMensajes(e))
      Alerta({ mensaje: InterpreteMensajes(e), variant: 'error' })
      imprimir(`Error al validar código de recuperación: `, e)
      await redireccionarInicio()
    } finally {
      setIndicadorCarga(false)
    }
  }

  const redireccionarInicio = async () => {
    mostrarFullScreen()
    await delay(500)
    await router.replace({
      pathname: '/login',
    })
    ocultarFullScreen()
  }

  return (
    <LayoutLogin title={`Recupera tu cuenta - ${siteName()}`}>
      <Grid
        container
        justifyContent="center"
        alignItems={'center'}
        style={{ minHeight: '90vh' }}
      >
        <Card
          sx={{
            borderRadius: 4,
            m: 3,
            p: 3,
            maxWidth: '450px',
          }}
        >
          {!code && (
            <Box>
              {indicadorTareaRealizada && (
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <Icono fontSize={'large'}> mark_email_unread</Icono>
                  <Box height={'20px'} />
                  <Typography sx={{ fontWeight: 'medium' }}>
                    ¡Mensaje enviado!
                  </Typography>
                  <Box height={'20px'} />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    {mensaje}
                  </Typography>
                  <Box height={'25px'} />
                  <Button
                    type="button"
                    variant="contained"
                    disabled={indicadorCarga}
                    onClick={redireccionarInicio}
                  >
                    <Typography sx={{ fontWeight: 'medium' }}>
                      Ir al inicio
                    </Typography>
                  </Button>
                </Box>
              )}
              {!indicadorTareaRealizada && (
                <form onSubmit={handleSubmit(recuperarPeticion)}>
                  <Box display={'flex'} flexDirection={'column'}>
                    <Box
                      display={'flex'}
                      flexDirection={'column'}
                      alignItems={'center'}
                    >
                      <Icono fontSize={'large'}> manage_search</Icono>
                      <Box height={'20px'} />
                      <Typography
                        sx={{ fontWeight: 'medium' }}
                        variant={'subtitle2'}
                      >
                        Recupera tu cuenta
                      </Typography>
                    </Box>
                    <Box height={'20px'} />
                    <Typography variant="body2" color="text.secondary">
                      Ingresa tu correo electrónico, enviaremos un enlace para
                      que puedas recuperar tu cuenta
                    </Typography>
                    <Box height={'20px'} />
                    <FormInputText
                      id={'correo'}
                      control={control}
                      name="correo"
                      type={'email'}
                      label="Correo"
                      size={'small'}
                      labelVariant={'subtitle1'}
                      disabled={indicadorCarga}
                      rules={{
                        required: 'Este campo es requerido',
                        validate: (value) => {
                          if (!isValidEmail(value))
                            return 'No es un correo válido'
                        },
                      }}
                    />
                    <Box height={'15px'} />
                    <ProgresoLineal mostrar={indicadorCarga} />
                    <Box height={'15px'} />
                    <Grid
                      container
                      justifyContent="space-evenly"
                      alignItems={'center'}
                    >
                      <Button
                        type="button"
                        variant="text"
                        disabled={indicadorCarga}
                        onClick={redireccionarInicio}
                      >
                        <Typography sx={{ fontWeight: 'medium' }}>
                          Cancelar
                        </Typography>
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={indicadorCarga}
                      >
                        <Typography>Enviar enlace</Typography>
                      </Button>
                    </Grid>
                  </Box>
                </form>
              )}
            </Box>
          )}
          {code && (
            <Box>
              <CambioPass code={code} />
            </Box>
          )}
        </Card>
      </Grid>
    </LayoutLogin>
  )
}

export default Recuperacion
