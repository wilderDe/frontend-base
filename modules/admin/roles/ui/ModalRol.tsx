import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { delay, InterpreteMensajes } from '../../../../common/utils'
import { Constantes } from '../../../../config'

import { Box, Button, DialogActions, DialogContent, Grid } from '@mui/material'
import { FormInputText } from '../../../../common/components/ui/form'
import ProgresoLineal from '../../../../common/components/ui/progreso/ProgresoLineal'
import { useAlerts, useSession } from '../../../../common/hooks'
import { imprimir } from '../../../../common/utils/imprimir'
import { RolCRUDType } from '../types/rolCRUDType'

export interface ModalRolType {
  rol?: RolCRUDType
  accionCorrecta: () => void
  accionCancelar: () => void
}

export const VistaModalRol = ({
  rol,
  accionCorrecta,
  accionCancelar,
}: ModalRolType) => {
  const [loadingModal, setLoadingModal] = useState<boolean>(false)

  // Hook para mostrar alertas
  const { Alerta } = useAlerts()

  // Proveedor de la sesión
  const { sesionPeticion } = useSession()

  const { handleSubmit, control } = useForm<RolCRUDType>({
    defaultValues: {
      id: rol?.id,
      rol: rol?.rol,
      nombre: rol?.nombre,
    },
  })

  const guardarActualizarRol = async (data: RolCRUDType) => {
    await guardarActualizarRolesPeticion(data)
  }

  const guardarActualizarRolesPeticion = async (Rol: RolCRUDType) => {
    try {
      setLoadingModal(true)
      await delay(1000)
      const respuesta = await sesionPeticion({
        url: `${Constantes.baseUrl}/autorizacion/roles${
          Rol.id ? `/${Rol.id}` : ''
        }`,
        tipo: !!Rol.id ? 'patch' : 'post',
        body: Rol,
      })
      Alerta({
        mensaje: InterpreteMensajes(respuesta),
        variant: 'success',
      })
      accionCorrecta()
    } catch (e) {
      imprimir(`Error al crear o actualizar rol`, e)
      Alerta({ mensaje: `${InterpreteMensajes(e)}`, variant: 'error' })
    } finally {
      setLoadingModal(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(guardarActualizarRol)}>
      <DialogContent dividers>
        <Grid container direction={'column'} justifyContent="space-evenly">
          <Grid container direction="row" spacing={{ xs: 2, sm: 1, md: 2 }}>
            <Grid item xs={12} sm={12} md={6}>
              <FormInputText
                id={'rol'}
                control={control}
                name="rol"
                label="Rol"
                disabled={loadingModal}
                rules={{ required: 'Este campo es requerido' }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <FormInputText
                id={'nombre'}
                control={control}
                name="nombre"
                label="Nombre"
                disabled={loadingModal}
                rules={{ required: 'Este campo es requerido' }}
              />
            </Grid>
          </Grid>
          <Box height={'20px'} />
          <ProgresoLineal mostrar={loadingModal} />
        </Grid>
      </DialogContent>
      <DialogActions
        sx={{
          my: 1,
          mx: 2,
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
          Guardar
        </Button>
      </DialogActions>
    </form>
  )
}
