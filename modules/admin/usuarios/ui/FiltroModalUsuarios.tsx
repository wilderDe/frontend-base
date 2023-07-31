/// Vista modal de filtro de usuarios
import React from 'react'
import { useForm } from 'react-hook-form'

import { Box, Button, DialogActions, DialogContent, Grid } from '@mui/material'
import { FormInputDropdownMultiple } from '../../../../common/components/ui/form'
import { FiltroModalUsuarioType, FiltroType } from './FiltroUsuarios'

export const FiltroModalUsuarios = ({
  rolesDisponibles,
  filtroRoles,
  accionCorrecta,
}: FiltroModalUsuarioType) => {
  const { handleSubmit, control } = useForm<FiltroType>({
    defaultValues: {
      roles: filtroRoles,
    },
  })

  return (
    <form onSubmit={handleSubmit(accionCorrecta)}>
      <DialogContent>
        <Grid container direction={'column'} justifyContent="space-evenly">
          <Box height={'10px'} />
          <Grid container direction="row" spacing={{ xs: 2, sm: 1, md: 2 }}>
            <Grid item xs={12} sm={12} md={12}>
              <FormInputDropdownMultiple
                id={'roles'}
                name="roles"
                control={control}
                label="Roles"
                options={rolesDisponibles.map((rol) => ({
                  key: rol.id,
                  value: rol.id,
                  label: rol.nombre,
                }))}
                rules={{ required: 'Este campo es requerido' }}
              />
            </Grid>
          </Grid>
          <Box height={'30px'} />
        </Grid>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: {
            xs: 'center',
          },
        }}
      >
        <Button variant={'contained'} type={'submit'}>
          Aplicar
        </Button>
      </DialogActions>
    </form>
  )
}
