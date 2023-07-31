import { Box, Button, Card, Divider } from '@mui/material'
import { FormInputText } from '../../../common/components/ui/form'
import ProgresoLineal from '../../../common/components/ui/progreso/ProgresoLineal'
import Typography from '@mui/material/Typography'
import { BotonCiudadania } from './BotonCiudadania'
import { Constantes } from '../../../config'
import { useAuth } from '../../../context/auth'
import { useForm } from 'react-hook-form'
import { LoginType } from '../types/loginTypes'

const LoginNormalContainer = () => {
  const { ingresar, progresoLogin } = useAuth()

  const { handleSubmit, control } = useForm<LoginType>({
    defaultValues: {
      usuario: 'ADMINISTRADOR-TECNICO',
      contrasena: '123',
    },
  })

  const iniciarSesion = async ({ usuario, contrasena }: LoginType) => {
    await ingresar({ usuario, contrasena })
  }

  return (
    <Card sx={{ borderRadius: 4, p: 4, maxWidth: '450px' }}>
      <form onSubmit={handleSubmit(iniciarSesion)}>
        <Box
          display={'grid'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ borderRadius: 12 }}
        >
          <Typography
            align={'center'}
            color={'primary'}
            sx={{ flexGrow: 1, fontWeight: 'medium' }}
          >
            Iniciar Sesión
          </Typography>
          <Box sx={{ mt: 1, mb: 1 }}></Box>
          <FormInputText
            id={'usuario'}
            control={control}
            name="usuario"
            label="Usuario"
            size={'medium'}
            labelVariant={'subtitle1'}
            disabled={progresoLogin}
            rules={{ required: 'Este campo es requerido' }}
          />
          <Box sx={{ mt: 1, mb: 1 }}></Box>
          <FormInputText
            id={'contrasena'}
            control={control}
            name="contrasena"
            label="Contraseña"
            size={'medium'}
            labelVariant={'subtitle1'}
            type={'password'}
            disabled={progresoLogin}
            rules={{
              required: 'Este campo es requerido',
              minLength: {
                value: 3,
                message: 'Mínimo 3 caracteres',
              },
            }}
          />
          <Box sx={{ mt: 1, mb: 1 }}>
            <ProgresoLineal mostrar={progresoLogin} />
          </Box>
          <Box sx={{ height: 15 }}></Box>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={progresoLogin}
          >
            <Typography sx={{ fontWeight: 'medium' }}>
              Iniciar sesión
            </Typography>
          </Button>

          <Box sx={{ pt: 1, pb: 2 }}>
            <Divider>
              <Typography color="text.secondary">O</Typography>
            </Divider>
          </Box>
          <BotonCiudadania
            fullWidth
            disabled={progresoLogin}
            altText={'Ingresar con Ciudadanía'}
            accion={() => {
              window.location.href = `${Constantes.baseUrl}/ciudadania-auth`
            }}
          >
            <Typography sx={{ fontWeight: 'medium', pl: 1, pr: 1 }}>
              Ingresa con Ciudadanía
            </Typography>
          </BotonCiudadania>
        </Box>
      </form>
    </Card>
  )
}

export default LoginNormalContainer
