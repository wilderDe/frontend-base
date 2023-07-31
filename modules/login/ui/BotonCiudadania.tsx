import Image from 'next/image'
import { Button, ButtonProps } from '@mui/material'
import { FC, MouseEventHandler, PropsWithChildren } from 'react'
import { styled } from '@mui/system'
import { Constantes } from '../../../config'
import { useThemeContext } from '../../../context/ui/ThemeContext'

export interface BotonCiudadaniaType {
  altText: string
  disabled?: boolean | undefined
  accion: MouseEventHandler<any> | undefined
  fullWidth?: boolean
}

const ColorButton = styled(Button)<ButtonProps>(({}) => {
  const { themeMode } = useThemeContext()
  return {
    backgroundColor: themeMode == 'light' ? '#3C5BA9' : '#B3C5FF',
    '&:hover': {
      backgroundColor: themeMode == 'light' ? '#334c8d' : '#8e9dcc',
    },
  }
})

export const BotonCiudadania: FC<PropsWithChildren<BotonCiudadaniaType>> = ({
  disabled,
  accion,
  children,
  altText,
  fullWidth,
}) => {
  return (
    <ColorButton
      type="button"
      sx={{ borderRadius: 2 }}
      variant="contained"
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={accion}
      color={'primary'}
    >
      <Image
        src={`${Constantes.sitePath}/logo_ciudadania_redondo.png`}
        alt={altText}
        width="35"
        height="35"
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
      {children}
    </ColorButton>
  )
}
