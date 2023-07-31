import { Box, Grid } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDebouncedCallback } from 'use-debounce'
import {
  FormInputDropdown,
  FormInputText,
} from '../../../../common/components/ui/form'
import { useEffect } from 'react'

export interface FiltroType {
  buscar: string
  app: string
}

export interface FiltroModalPoliticasType {
  filtroPolitica: string
  filtroApp: string
  accionCorrecta: (filtros: FiltroType) => void
  accionCerrar: () => void
}

export const FiltroPolitica = ({
  filtroPolitica,
  filtroApp,
  accionCorrecta,
}: FiltroModalPoliticasType) => {
  const { control, watch } = useForm<FiltroType>({
    defaultValues: {
      buscar: filtroPolitica,
      app: filtroApp,
    },
  })
  const filtroBuscarWatch: string = watch('buscar')
  const filtroAppWatch: string = watch('app')

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
  const lapp: string[] = ['frontend', 'backend']

  useEffect(() => {
    actualizacionFiltros({
      buscar: filtroBuscarWatch,
      app: filtroAppWatch,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtroBuscarWatch, filtroAppWatch])

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
        <Grid item xs={12} sm={12} md={4}>
          <FormInputDropdown
            id={'apps'}
            name="app"
            control={control}
            label="App"
            options={lapp.map((la) => ({
              key: la,
              value: la,
              label: la,
            }))}
            bgcolor={'background.paper'}
            clearable
          />
        </Grid>
      </Grid>
    </Box>
  )
}
