import type { NextPage } from 'next'
import { LayoutLogin } from '../../common/components/layouts'
import Grid from '@mui/material/Grid'
import { Box, Divider, useMediaQuery, useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'
import { delay, InterpreteMensajes, siteName } from '../../common/utils'
import { Constantes } from '../../config'
import { Servicios } from '../../common/services'
import { useFullScreenLoading } from '../../context/ui'
import { useEffect } from 'react'
import { useAlerts } from '../../common/hooks'
import { imprimir } from '../../common/utils/imprimir'
import LoginRegistroTabContainer from '../../modules/login/ui/LoginRegistroContainer'

const Index: NextPage = () => {
  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.only('sm'))
  const xs = useMediaQuery(theme.breakpoints.only('xs'))

  const { Alerta } = useAlerts()
  const { mostrarFullScreen, ocultarFullScreen } = useFullScreenLoading()

  const obtenerEstado = async () => {
    try {
      mostrarFullScreen()
      await delay(1000)
      const respuesta = await Servicios.get({
        url: `${Constantes.baseUrl}/estado`,
        body: {},
        headers: {
          accept: 'application/json',
        },
      })
      imprimir(`Se obtuvo el estado 🙌`, respuesta)
    } catch (e) {
      imprimir(`Error al obtener estado`, e)
      Alerta({ mensaje: `${InterpreteMensajes(e)}`, variant: 'error' })
    } finally {
      ocultarFullScreen()
    }
  }

  useEffect(() => {
    obtenerEstado().then(() => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LayoutLogin title={siteName()}>
      <Grid container justifyContent="space-evenly" alignItems={'center'}>
        <Grid item xl={6} md={5} xs={12}>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            minHeight={sm || xs ? '30vh' : '80vh'}
            color={'primary'}
          >
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Typography
                variant={'h4'}
                component="h1"
                align={sm || xs ? 'center' : 'left'}
              >
                Frontend base - Modulo Productos - con Next.js, MUI v5 y TypeScript
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            display: {
              sm: 'none',
              xs: 'none',
              md: 'block',
              xl: 'block',
            },
          }}
        >
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            minHeight={'80vh'}
          >
            <Divider
              variant={'middle'}
              sx={{ marginTop: '60px', marginBottom: '60px' }}
              orientation="vertical"
              flexItem
            />
          </Box>
        </Grid>
        <Grid item xl={4} md={5} xs={12}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              color={'primary'}
            >
              {/*<LoginNormalContainer />*/}
              <LoginRegistroTabContainer />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </LayoutLogin>
  )
}

export default Index
