import { Icono } from '../Icono'
import { ToggleButton } from '@mui/material'

interface BotonFiltroParams {
  id: string
  seleccionado: boolean
  cambiar: (mostrar: boolean) => void
}

export const BotonBuscar = ({
  id,
  seleccionado,
  cambiar,
}: BotonFiltroParams) => {
  return (
    <ToggleButton
      id={id}
      value="check"
      sx={{
        '&.MuiToggleButton-root': {
          borderRadius: '4px !important',
          border: '0px solid lightgrey !important',
        },
      }}
      size={'small'}
      selected={seleccionado}
      onChange={() => {
        cambiar(!seleccionado)
      }}
      aria-label="search"
    >
      <Icono>search</Icono>
    </ToggleButton>
  )
}
