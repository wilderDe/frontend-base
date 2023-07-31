import type { NextPage } from 'next'
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { delay, InterpreteMensajes } from '../common/utils'
import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { Servicios } from '../common/services'
import { Constantes } from '../config'
import { useFullScreenLoading } from '../context/ui'
import { Icono } from '../common/components/ui'
import { imprimir } from '../common/utils/imprimir'
import ProgresoLineal from '../common/components/ui/progreso/ProgresoLineal'

const Activacion: NextPage = () => {
  const [error, setError] = useState<boolean>(false)
  const [mensaje, setMensaje] = useState<string>('false')

  const { mostrarFullScreen, ocultarFullScreen } = useFullScreenLoading()
  const [loading, setLoading] = useState<boolean>(true)

  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return
    const params = router.query
    imprimir(`queryParams`, params)

    const codigoActivar = `${params.q}`

    activarPeticion(codigoActivar ?? '').finally()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, router.query])

  const activarPeticion = async (codigoActivar: string) => {
    try {
      mostrarFullScreen()
      setLoading(true)
      await delay(1000)

      const respuesta = await Servicios.patch({
        url: `${Constantes.baseUrl}/usuarios/cuenta/activacion`,
        body: {
          codigo: codigoActivar,
        },
      })
      setMensaje(InterpreteMensajes(respuesta))
      imprimir(InterpreteMensajes(respuesta))
    } catch (e) {
      setError(true)
      setMensaje(InterpreteMensajes(e))
      imprimir(`Error al desbloquear usuario: `, e)
    } finally {
      setLoading(false)
      ocultarFullScreen()
    }
  }

  const redireccionarInicio = async () => {
    mostrarFullScreen()
    await delay(1000)
    await router.replace({
      pathname: '/login',
    })
    ocultarFullScreen()
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems={'center'}
      style={{ minHeight: '100vh' }}
    >
      <Card
        sx={{
          borderRadius: 4,
          p: 4,
          maxWidth: '450px',
        }}
      >
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          {!error && !loading && (
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Icono fontSize={'large'} color={'success'}>
                check_circle
              </Icono>
              <Box height={'20px'} />
              <Typography sx={{ fontWeight: 'medium' }} variant={'subtitle2'}>
                Cuenta Activa
              </Typography>
              <Box height={'20px'} />
              <Typography variant="body2" color="text.secondary" align="center">
                {mensaje}
              </Typography>
              <Box height={'20px'} />
            </Box>
          )}
          {error && !loading && (
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Icono fontSize={'large'} color={'error'}>
                cancel
              </Icono>
              <Box height={'20px'} />
              <Typography sx={{ fontWeight: 'medium' }} variant={'subtitle2'}>
                Error al activar cuenta
              </Typography>
              <Box height={'20px'} />
              <Typography variant="body2" color="text.secondary" align="center">
                {mensaje}
              </Typography>
              <Box height={'20px'} />
            </Box>
          )}
          {loading && (
            <Box>
              <Typography>procesando..</Typography>
              <Box height={'20px'} />
              <ProgresoLineal mostrar={loading} />
            </Box>
          )}
          {!loading && (
            <Button
              type="submit"
              variant="contained"
              onClick={() => {
                redireccionarInicio().finally()
              }}
            >
              <Typography>Ir al inicio</Typography>
            </Button>
          )}
        </Box>
      </Card>
    </Grid>
  )
}

export default Activacion
