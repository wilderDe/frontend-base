import { Box, Grid } from '@mui/material'
import { FormInputText } from '../../../../common/components/ui/form'
import { useForm } from 'react-hook-form'
import { useDebouncedCallback } from 'use-debounce'
import { useEffect } from 'react'

export interface FiltroType {
    producto: string
}

export interface FiltroProductosType {
    filtroProducto: string
    accionCorrecta: (filtros: FiltroType) => void
    accionCerrar: () => void
}

export const FiltroProductos = ({
    filtroProducto,
    accionCorrecta,
}: FiltroProductosType) => {
    const { control, watch } = useForm<FiltroType>({
        defaultValues: {
            producto: filtroProducto,
        },
    })

    const productoFiltro: string | undefined = watch('producto')

    useEffect(() => {
        actualizacionFiltros({
            producto: productoFiltro,
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productoFiltro])

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
                        id={'producto'}
                        name={'producto'}
                        control={control}
                        label={'Buscar producto'}
                        bgcolor={'background.paper'}
                        clearable
                    />
                </Grid>
            </Grid>
        </Box>
    )
}
