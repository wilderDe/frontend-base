import { Button } from '@mui/material'
import { IconoTooltip } from './IconoTooltip'

interface IconoBotonParams {
  id: string
  variante?: 'icono' | 'boton'
  texto: string
  icono: string
  descripcion: string
  accion: () => void
}

export const IconoBoton = ({
  id,
  texto,
  icono,
  variante = 'boton',
  descripcion,
  accion,
}: IconoBotonParams) => {
  return variante == 'boton' ? (
    <Button
      id={id}
      variant={'contained'}
      sx={{ ml: 1, mr: 1 }}
      size={'small'}
      onClick={() => {
        accion()
      }}
    >
      {texto}
    </Button>
  ) : (
    <IconoTooltip
      id={id}
      titulo={descripcion}
      accion={() => {
        accion()
      }}
      icono={icono}
      name={texto}
    />
  )
}
