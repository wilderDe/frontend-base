import { Box, Button, DialogActions, DialogContent, Grid } from '@mui/material'
import React, { useState } from 'react'
import { FormInputText } from '../../../common/components/ui/form'
import { useForm } from 'react-hook-form'
import { cambioPassForm, cambioPassPeticion } from './perfilTypes'
import ProgresoLineal from '../../../common/components/ui/progreso/ProgresoLineal'
import { NivelSeguridadPass } from '../../../common/components/ui/utils/NivelSeguridadPass'
import {
  encodeBase64,
  InterpreteMensajes,
  seguridadPass,
} from '../../../common/utils'
import { useAlerts, useSession } from '../../../common/hooks'
import { Constantes } from '../../../config'
import Typography from '@mui/material/Typography'

export interface CambioPassModalType {
  accionCorrecta: () => void
  accionCancelar: () => void
}

export const CambioPassModal = ({
  accionCorrecta,
  accionCancelar,
}: CambioPassModalType) => {
  const { Alerta } = useAlerts()
  const [loadingModal, setLoadingModal] = useState<boolean>(false)
  const { handleSubmit, control, watch } = useForm<cambioPassForm>({
    defaultValues: {
      oldPassword: '',
      newPassword1: '',
      newPassword2: '',
    },
  })

  const { sesionPeticion } = useSession()

  const validarPass = async ({
    oldPassword,
    newPassword1,
    newPassword2,
  }: cambioPassForm) => {
    if (oldPassword.length == 0) {
      Alerta({
        mensaje: 'Debe ingresar su contraseña anterior',
        variant: 'error',
      })
      return
    }
    if ((await seguridadPass(newPassword1)).score != 4) {
      Alerta({ mensaje: 'La contraseña no es muy segura', variant: 'error' })
      return
    }
    if (newPassword1 != newPassword2) {
      Alerta({
        mensaje: 'La contraseña repetida no coincide',
        variant: 'error',
      })
      return
    }
    await cambiarPassPeticion({
      contrasenaActual: encodeBase64(encodeURI(oldPassword)),
      contrasenaNueva: encodeBase64(encodeURI(newPassword1)),
    })
  }

  const cambiarPassPeticion = async (params: cambioPassPeticion) => {
    try {
      setLoadingModal(true)
      const respuesta = await sesionPeticion({
        url: `${Constantes.baseUrl}/usuarios/cuenta/contrasena`,
        tipo: 'patch',
        body: params,
      })
      Alerta({ mensaje: InterpreteMensajes(respuesta), variant: 'success' })
      accionCorrecta()
    } catch (e) {
      Alerta({ mensaje: InterpreteMensajes(e), variant: 'error' })
    } finally {
      setLoadingModal(false)
    }
  }

  const newPassword1Watch = watch('newPassword1')

  return (
    <form onSubmit={handleSubmit(validarPass)}>
      <DialogContent dividers>
        <Grid container direction={'column'} justifyContent="space-evenly">
          <Typography variant="body2" color="text.secondary" align="inherit">
            <li>Las contraseñas deben tener 8 caracteres o más.</li>
            <li>
              Las buenas contraseñas son dificiles de adivinar y usan palabras,
              números, símbolos y letras mayúsculas poco comunes.
            </li>
          </Typography>

          <Box height={'20px'} />
          <Grid container direction="row" spacing={{ xs: 2, sm: 1, md: 2 }}>
            <Grid item xs={12} sm={12} md={12}>
              <FormInputText
                id={'oldPassword'}
                control={control}
                name="oldPassword"
                label="Contraseña actual"
                disabled={loadingModal}
                type={'password'}
                rules={{ required: 'Este campo es requerido' }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <FormInputText
                id={'newPassword1'}
                control={control}
                name="newPassword1"
                label="Nueva contraseña"
                disabled={loadingModal}
                type={'password'}
                rules={{ required: 'Este campo es requerido' }}
              />
            </Grid>

            {watch('newPassword1') && (
              <Grid item xs={12} sm={12} md={12}>
                <NivelSeguridadPass pass={newPassword1Watch} />
              </Grid>
            )}
            <Grid item xs={12} sm={12} md={12}>
              <FormInputText
                id={'newPassword2'}
                control={control}
                name="newPassword2"
                label="Repita su nueva contraseña"
                disabled={loadingModal}
                type={'password'}
                rules={{
                  required: 'Este campo es requerido',
                  validate: (value: string) => {
                    if (value != newPassword1Watch)
                      return 'La contraseña no coincide'
                  },
                }}
              />
            </Grid>
          </Grid>
          <Box height={'20px'} />
          <ProgresoLineal mostrar={loadingModal} />
        </Grid>
      </DialogContent>
      <DialogActions
        sx={{
          m: 1,
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
          onClick={accionCancelar}
        >
          Cancelar
        </Button>
        <Button variant={'contained'} disabled={loadingModal} type={'submit'}>
          Modificar
        </Button>
      </DialogActions>
    </form>
  )
}
