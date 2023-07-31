import Icon from '@mui/material/Icon'

import { FC, PropsWithChildren } from 'react'
import { OverridableStringUnion } from '@mui/types'
import {
  IconPropsColorOverrides,
  IconPropsSizeOverrides,
} from '@mui/material/Icon/Icon'
import { SxProps, Theme } from '@mui/material'

interface Props {
  color?: OverridableStringUnion<
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning',
    IconPropsColorOverrides
  >
  fontSize?: OverridableStringUnion<
    'inherit' | 'large' | 'medium' | 'small',
    IconPropsSizeOverrides
  >
  sx?: SxProps<Theme>
  style?: React.CSSProperties
}

export const Icono: FC<PropsWithChildren<Props>> = ({
  color = 'primary',
  fontSize = 'medium',
  children,
  sx,
  style,
}) => {
  return (
    <Icon
      sx={{ ...sx }}
      style={{ ...style }}
      fontSize={fontSize}
      color={`${color}`}
      className={'material-icons-outlined'}
    >
      {children}
    </Icon>
  )
}
