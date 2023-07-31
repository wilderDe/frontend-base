import { useSnackbar, VariantType } from 'notistack'
import { IconButton } from '@mui/material'
import { Icono } from '../components/ui'

export interface AlertType {
  mensaje: string
  variant?: VariantType
}

export const useAlerts = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const Alerta = ({ mensaje, variant = 'info' }: AlertType) => {
    enqueueSnackbar(mensaje, {
      variant,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      action: (key) => (
        <IconButton
          color="inherit"
          onClick={() => {
            closeSnackbar(key)
          }}
        >
          <Icono color={'inherit'}>close</Icono>
        </IconButton>
      ),
    })
  }
  return { Alerta }
}
