import { Tooltip } from '@mui/material'
import Box from '@mui/material/Box'

import { useThemeContext } from '../../../../context/ui/ThemeContext'
import { ReactNode } from 'react'

export type ColorType =
  | 'disabled'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning'

export interface CustomMensajeEstadoProps {
  titulo?: string | ReactNode
  descripcion?: string
  fontSize?: number
  letterSpacing?: number
  color?: ColorType
  opacidadFondo?: number
  customColor?: string
  width?: number
  onClick?: () => void
}

const CustomMensajeEstado = ({
  color = 'error',
  titulo = '',
  descripcion = '',
  fontSize = 12,
  onClick,
}: CustomMensajeEstadoProps) => {
  const coloresTextoClaro = {
    primary: '#3d00ba',
    secondary: '#555F71',
    info: '#0288d1',
    warning: '#f1c21b',
    error: '#da1e28',
    success: '#24A148',
    inherit: '#555F71',
    disabled: '#fff',
  }
  const coloresTextoOscuro = {
    primary: '#CABEFF',
    secondary: '#555F71',
    info: '#8DC7FF',
    warning: '#ff832b',
    error: '#fa4d56',
    success: '#42be65',
    inherit: '#555F71',
    disabled: '#fff',
  }
  // const CAMBIO_TONO_COLOR: number = 590085
  const { themeMode } = useThemeContext()

  return (
    <Tooltip title={descripcion}>
      <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
        <Box
          sx={{
            height: 10,
            width: 10,
            bgcolor:
              themeMode === 'dark'
                ? coloresTextoOscuro[color]
                : coloresTextoClaro[color],
            borderRadius: 5,
            display: 'inline-block',
          }}
        />
        <Box width={'5px'} />
        <Box
          component={'span'}
          onClick={onClick}
          sx={{
            color: 'text.primary',
            alignItems: 'flex-end',
            overflow: 'hidden',
            fontWeight: 'medium',
            fontSize: fontSize,
            whiteSpace: 'nowrap',
            opacity: 1,
            // letterSpacing: letterSpacing,
          }}
        >
          {titulo}
        </Box>
      </Box>
    </Tooltip>
  )
}

export default CustomMensajeEstado
