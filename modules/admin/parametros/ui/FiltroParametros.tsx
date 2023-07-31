import { Box, Grid } from '@mui/material'
import { FormInputText } from '../../../../common/components/ui/form'
import { useForm } from 'react-hook-form'
import { useDebouncedCallback } from 'use-debounce'
import { useEffect } from 'react'

export interface FiltroType {
  parametro: string
}

export interface FiltroParametrosType {
  filtroParametro: string
  accionCorrecta: (filtros: FiltroType) => void
  accionCerrar: () => void
}

export const FiltroParametros = ({
  filtroParametro,
  accionCorrecta,
}: FiltroParametrosType) => {
  const { control, watch } = useForm<FiltroType>({
    defaultValues: {
      parametro: filtroParametro,
    },
  })

  const parametroFiltro: string | undefined = watch('parametro')

  useEffect(() => {
    actualizacionFiltros({
      parametro: parametroFiltro,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parametroFiltro])

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
            id={'parametro'}
            name={'parametro'}
            control={control}
            label={'Buscar parámetro'}
            bgcolor={'background.paper'}
            clearable
          />
        </Grid>
      </Grid>
    </Box>
  )
}
