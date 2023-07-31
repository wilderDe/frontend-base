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

const Desbloqueo: NextPage = () => {
  const [mensaje, setMensaje] = useState<string>('')

  const { mostrarFullScreen, ocultarFullScreen } = useFullScreenLoading()

  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return
    const params = router.query
    imprimir(`queryParams`, params)

    const codigoDesbloqueo = Array.isArray(params.q) ? params.q[0] : params.q

    desbloquearPeticion(codigoDesbloqueo ?? '').finally()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, router.query])

  const desbloquearPeticion = async (codigoDesbloqueo: string) => {
    try {
      mostrarFullScreen()
      await delay(1000)

      const respuesta = await Servicios.get({
        url: `${Constantes.baseUrl}/usuarios/cuenta/desbloqueo`,
        params: {
          id: codigoDesbloqueo,
        },
      })
      setMensaje(InterpreteMensajes(respuesta))
      imprimir(InterpreteMensajes(respuesta))
    } catch (e) {
      await router.replace({
        pathname: '/login',
      })
      setMensaje(InterpreteMensajes(e))
      imprimir(`Error al desbloquear usuario: `, e)
    } finally {
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
          <Icono fontSize={'large'}> lock_open</Icono>
          <Box height={'20px'} />
          <Typography sx={{ fontWeight: 'medium' }} variant={'subtitle2'}>
            Cuenta desbloqueada
          </Typography>
          <Box height={'20px'} />
          <Typography variant="body2" color="text.secondary" align="center">
            {mensaje}
          </Typography>
          <Box height={'20px'} />
          <Button
            type="submit"
            variant="contained"
            onClick={() => {
              redireccionarInicio().finally()
            }}
          >
            <Typography>Ir al inicio</Typography>
          </Button>
        </Box>
      </Card>
    </Grid>
  )
}

export default Desbloqueo
