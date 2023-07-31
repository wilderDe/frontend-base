import { Box, Grid } from '@mui/material'
import { FormInputText } from '../../../../common/components/ui/form'
import { useForm } from 'react-hook-form'
import { useDebouncedCallback } from 'use-debounce'
import { useEffect } from 'react'

export interface FiltroType {
  rol: string
}

export interface FiltroRolType {
  filtroRol: string
  accionCorrecta: (filtros: FiltroType) => void
  accionCerrar: () => void
}

export const FiltroRol = ({ filtroRol, accionCorrecta }: FiltroRolType) => {
  const { control, watch } = useForm<FiltroType>({
    defaultValues: {
      rol: filtroRol,
    },
  })

  const rolFiltro: string | undefined = watch('rol')

  useEffect(() => {
    actualizacionFiltros({
      rol: rolFiltro,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rolFiltro])

  const debounced = useDebouncedCallback((filtros: FiltroType) => {
    accionCorrecta(filtros)
  }, 1000)

  const actualizacionFiltros = (filtros: FiltroType) => {
    debounced(filtros)
  }

  return (
    <Box sx={{ pl: 1, pr: 1, pt: 1 }}>
      <Grid container direction="row" spacing={{ xs: 2, sm: 1, md: 2 }}>
        <Grid item xs={12} sm={12} md={6}>
          <FormInputText
            id={'filtroRol'}
            name={'rol'}
            control={control}
            label={'Buscar rol'}
            bgcolor={'background.paper'}
            clearable
          />
        </Grid>
      </Grid>
    </Box>
  )
}
