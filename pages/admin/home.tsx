import type { NextPage } from 'next'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'
import { useAuth } from '../../context/auth'
import { LayoutUser } from '../../common/components/layouts'
import { Icono } from '../../common/components/ui'
import { useRouter } from 'next/router'
import { siteName, titleCase } from '../../common/utils'

const Home: NextPage = () => {
  const { usuario, rolUsuario } = useAuth()

  const router = useRouter()

  return (
    <LayoutUser title={`Home - ${siteName()}`}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid>
          <Typography
            variant={'h5'}
            component="h1"
            sx={{ flexGrow: 1, fontWeight: 'medium' }}
          >
            Bienvenid@ {titleCase(usuario?.persona?.nombres ?? '')}{' '}
            {titleCase(
              usuario?.persona?.primerApellido ??
                usuario?.persona?.segundoApellido ??
                ''
            )}
          </Typography>
          <Typography variant={'subtitle2'}>{rolUsuario?.nombre}</Typography>
        </Grid>
      </Grid>
      <Grid>
        <Box height={'20px'} />
        <Typography sx={{ fontSize: 14 }}>
          Puedes ver los siguientes módulos:
        </Typography>
        <Box height={'5px'} />
      </Grid>

      <Grid container direction="row" alignItems="center">
        <Grid container direction="row">
          {usuario?.roles
            .filter((ur) => ur.idRol == rolUsuario?.idRol)
            .map((rolUsuario, index) => (
              <div key={`usuario-${index}`}>
                {rolUsuario.modulos.map((modulo, index1) => (
                  <Grid
                    container
                    direction="row"
                    key={`rolUsuario-${index}-${index1}`}
                  >
                    <Grid>
                      <Box height={'20px'} />
                      <Typography sx={{ fontSize: 14, fontWeight: 'medium' }}>
                        {modulo.label}
                      </Typography>
                      <Box height={'20px'} />
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 2, sm: 8, md: 12, xl: 12 }}
                    >
                      {modulo.subModulo.map((subModulo, index2) => (
                        <Grid
                          item
                          xs={2}
                          sm={4}
                          md={4}
                          key={`$subModulo-${index}-${index1}-${index2}`}
                        >
                          <CardActionArea
                            sx={{
                              borderRadius: 3,
                            }}
                            onClick={async () => {
                              await router.push(subModulo.url)
                            }}
                          >
                            <Card
                              variant={'outlined'}
                              sx={{
                                borderRadius: 3,
                              }}
                            >
                              <CardContent>
                                <Grid container direction="row">
                                  <Icono>{subModulo.propiedades.icono}</Icono>
                                  <Box height={'30px'} width={'10px'} />
                                  <Typography
                                    variant="caption"
                                    sx={{ fontSize: 14, fontWeight: 'medium' }}
                                  >
                                    {`${subModulo.label}`}
                                  </Typography>
                                </Grid>
                                <Typography
                                  variant="body2"
                                  sx={{ fontSize: 14 }}
                                >
                                  {`${subModulo.propiedades.descripcion}`}
                                </Typography>
                              </CardContent>
                            </Card>
                          </CardActionArea>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                ))}
              </div>
            ))}
        </Grid>
      </Grid>
      <Box height={'100px'} />
    </LayoutUser>
  )
}
export default Home
