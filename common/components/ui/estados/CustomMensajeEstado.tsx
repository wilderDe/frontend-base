import { Tooltip } from '@mui/material'
import Box from '@mui/material/Box'

import { useThemeContext } from '../../../../context/ui/ThemeContext'
import { alpha } from '@mui/material/styles'

export interface MensajeEstadoProps {
  titulo?: string
  descripcion?: string
  fontSize?: number
  letterSpacing?: number
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'

  opacidadFondo?: number
  customColor?: string
}

const CustomMensajeEstado = ({
  color = 'error',
  titulo = '',
  descripcion = '',
  fontSize = 12,
  letterSpacing = 0,
  opacidadFondo = 1,
}: MensajeEstadoProps) => {
  const coloresFondoClaro = {
    primary: '#cce1df',
    secondary: '#dbe0df',
    info: '#EBF5FF',
    warning: '#FEF7E6',
    error: '#FDF4F6',
    success: '#EAF8F4',
    inherit: '#f1d1d1',
  }
  const coloresFondoOscuro = {
    primary: '#001513',
    secondary: '#0f1413',
    info: '#1B2A43',
    warning: '#2f1600',
    error: '#392127',
    success: '#283b39',
    inherit: '#f1d1d1',
  }

  const coloresTextoClaro = {
    primary: '#cce1df',
    secondary: '#555F71',
    info: '#0288d1',
    warning: '#FFAF01',
    error: '#DE486C',
    success: '#30B082',
    inherit: '#555F71',
  }
  const coloresTextoOscuro = {
    primary: '#001513',
    secondary: '#555F71',
    info: '#8DC7FF',
    warning: '#ed6c02',
    error: '#FF7F8D',
    success: '#a1f7cf',
    inherit: '#555F71',
  }
  // const CAMBIO_TONO_COLOR: number = 590085
  const { themeMode } = useThemeContext()

  return (
    <Tooltip title={descripcion}>
      <Box
        sx={{
          bgcolor:
            themeMode === 'dark'
              ? alpha(coloresFondoOscuro[color], opacidadFondo)
              : alpha(coloresFondoClaro[color], opacidadFondo),
          textAlign: 'center',
          borderRadius: 2,
          pt: 0.1,
          pr: 1,
          pl: 1,
          pb: 0.1,
          border: 0,
          borderColor:
            themeMode === 'dark'
              ? coloresTextoOscuro[color]
              : coloresTextoClaro[color],
          maxWidth: '100px',
          width: 'auto',
        }}
      >
        <Box
          component={'span'}
          sx={{
            color:
              themeMode === 'dark'
                ? coloresTextoOscuro[color]
                : coloresTextoClaro[color],
            overflow: 'hidden',
            fontWeight: '600',
            fontSize: fontSize,
            opacity: 1,
            letterSpacing: letterSpacing,
          }}
        >
          {titulo}
        </Box>
      </Box>
    </Tooltip>
  )
}

export default CustomMensajeEstado
