import type { NextPage } from 'next'
import {
  Box,
  Button,
  Card,
  Chip,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useAuth } from '../../context/auth'
import { LayoutUser } from '../../common/components/layouts'
import React, { useState } from 'react'
import { siteName, titleCase } from '../../common/utils'
import { CustomDialog, Icono } from '../../common/components/ui'
import { formatoFecha } from '../../common/utils/fechas'
import { CambioPassModal } from '../../modules/admin/perfil/CambioPassModal'
import { Constantes } from '../../config'
import { BotonCiudadania } from '../../modules/login/ui/BotonCiudadania'

const Perfil: NextPage = () => {
  const { usuario } = useAuth()

  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.only('sm'))
  const xs = useMediaQuery(theme.breakpoints.only('xs'))

  const [modalAyuda, setModalAyuda] = useState(false)

  const abrirModalAyuda = () => {
    setModalAyuda(true)
  }
  const cerrarModalAyuda = () => {
    setModalAyuda(false)
  }

  return (
    <>
      <CustomDialog
        isOpen={modalAyuda}
        handleClose={cerrarModalAyuda}
        title={'Cambio de contraseña'}
      >
        <CambioPassModal
          accionCorrecta={cerrarModalAyuda}
          accionCancelar={cerrarModalAyuda}
        />
      </CustomDialog>
      <LayoutUser
        title={`Perfil - ${titleCase(
          usuario?.persona.nombres ?? ''
        )} - ${siteName()}`}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant={'h5'} sx={{ fontWeight: 'medium' }}>
            Perfil
          </Typography>
        </Grid>
        <Box height={'20px'} />
        <Grid container>
          <Grid item xl={6} md={6} xs={12}>
            <Box>
              <Card sx={{ borderRadius: 3 }}>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  sx={{
                    width: '100%',
                    height: sm || xs ? '' : 370,
                    // backgroundColor: 'primary.main',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.2s ease-out !important',
                    p: 2,
                  }}
                >
                  <Icono
                    sx={{ color: 'text.secondary' }}
                    style={{ fontSize: 100 }}
                  >
                    account_circle
                  </Icono>

                  <Typography variant={'body1'} color="text.secondary">
                    {titleCase(
                      `${usuario?.persona.nombres} ${usuario?.persona.primerApellido} ${usuario?.persona.segundoApellido}`
                    )}
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Grid>
          <Grid
            item
            xl={6}
            md={6}
            xs={12}
            sx={{ pl: sm || xs ? 0 : 6, pr: sm || xs ? 0 : 6 }}
          >
            <Box justifyContent={'center'} alignItems={'center'}>
              <Box justifyContent={'center'} alignItems={'center'}>
                <Grid container direction={'column'}>
                  <Box height={'20px'} />
                  <Grid
                    container
                    justifyContent="space-between"
                    direction={'column'}
                  >
                    <Typography
                      sx={{ fontWeight: 'medium' }}
                      variant={'subtitle2'}
                    >
                      Usuario
                    </Typography>
                    <Typography>{`@${usuario?.usuario}`}</Typography>
                  </Grid>
                  <Box height={'20px'} />
                  <Grid
                    container
                    justifyContent="space-between"
                    direction={'column'}
                  >
                    <Typography
                      sx={{ fontWeight: 'medium' }}
                      variant={'subtitle2'}
                    >
                      Número de documento
                    </Typography>
                    <Typography variant={'body1'}>
                      {`${usuario?.persona.tipoDocumento} ${usuario?.persona.nroDocumento}`}
                    </Typography>
                  </Grid>
                  <Box height={'20px'} />
                  <Grid
                    container
                    justifyContent="space-between"
                    direction={'column'}
                  >
                    {usuario?.persona.fechaNacimiento && (
                      <Typography
                        sx={{ fontWeight: 'medium' }}
                        variant={'subtitle2'}
                      >
                        Fecha de nacimiento
                      </Typography>
                    )}
                    {usuario?.persona.fechaNacimiento && (
                      <Typography variant={'body1'}>
                        {formatoFecha(
                          usuario?.persona.fechaNacimiento,
                          'DD/MM/YYYY'
                        )}
                      </Typography>
                    )}
                  </Grid>
                  <Box height={'20px'} />
                  <Grid
                    container
                    justifyContent="space-between"
                    direction={'column'}
                  >
                    <Typography
                      sx={{ fontWeight: 'medium' }}
                      variant={'subtitle2'}
                    >
                      Roles
                    </Typography>
                    <Grid>
                      {usuario?.roles.map((itemUsuarioRol, index) => (
                        <Chip
                          key={`${index}-idRol`}
                          label={itemUsuarioRol.rol}
                        />
                      ))}
                    </Grid>
                  </Grid>
                  <Box height={'30px'} />
                  {!usuario?.ciudadania_digital && (
                    <Box display={'flex'}>
                      <Button
                        size="large"
                        onClick={() => {
                          abrirModalAyuda()
                        }}
                        color="primary"
                        variant="contained"
                      >
                        <Icono color={'inherit'}>vpn_key</Icono>
                        <Box width={'10px'} />
                        <Typography
                          sx={{ fontWeight: 'medium' }}
                          variant={'body2'}
                        >
                          Cambiar contraseña
                        </Typography>
                      </Button>
                    </Box>
                  )}
                  {usuario?.ciudadania_digital && (
                    <Box display={'flex'}>
                      <BotonCiudadania
                        altText={'Ver perfil en Ciudadanía'}
                        accion={() => {
                          window.open(Constantes.ciudadaniaUrl, '_blank')
                        }}
                      >
                        <Typography
                          variant={'body2'}
                          sx={{ fontWeight: 'medium', pl: 1, pr: 1 }}
                        >
                          Ver perfil en Ciudadanía
                        </Typography>
                        <Box width={'10px'} />
                        <Icono color={'inherit'}>north_east</Icono>
                      </BotonCiudadania>
                    </Box>
                  )}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </LayoutUser>
    </>
  )
}

export default Perfil
