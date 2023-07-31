import { Box, Grid } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDebouncedCallback } from 'use-debounce'
import { FormInputText } from '../../../../common/components/ui/form'
import { useEffect } from 'react'

export interface FiltroType {
  buscar: string
}

export interface FiltroModalModuloType {
  filtroModulo: string
  accionCorrecta: (filtros: FiltroType) => void
  accionCerrar: () => void
}

export const FiltroModulos = ({
  filtroModulo,
  accionCorrecta,
}: FiltroModalModuloType) => {
  const { control, watch } = useForm<FiltroType>({
    defaultValues: {
      buscar: filtroModulo,
    },
  })

  const filtroBuscarWatch: string = watch('buscar')

  const debounced = useDebouncedCallback(
    // function
    (filtros: FiltroType) => {
      accionCorrecta(filtros)
    },
    // delay in ms
    1000
  )

  const actualizacionFiltros = (filtros: FiltroType) => {
    debounced(filtros)
  }

  useEffect(() => {
    actualizacionFiltros({ buscar: filtroBuscarWatch })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtroBuscarWatch])

  return (
    <Box sx={{ pl: 1, pr: 1, pt: 1 }}>
      <Grid container direction="row" spacing={{ xs: 2, sm: 1, md: 2 }}>
        <Grid item xs={12} sm={12} md={4}>
          <FormInputText
            id={'buscar'}
            name={'buscar'}
            control={control}
            label={'Filtro'}
            bgcolor={'background.paper'}
            clearable
          />
        </Grid>
      </Grid>
    </Box>
  )
}
