import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material'
import { Icono } from '../Icono'
import React, { MouseEventHandler, ReactNode, useState } from 'react'

interface TipoAccion {
  color?:
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
  titulo: string
  icono: ReactNode
  accion: MouseEventHandler<any> | undefined
  desactivado?: boolean
  mostrar?: boolean
  name: string
  id: string
}

interface BotonAccionesParams {
  desactivado?: false
  color?:
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
  variante?: 'icono' | 'boton'
  texto?: string
  acciones: Array<TipoAccion>
  icono?: ReactNode
  label: string
  id: string
}

export const BotonAcciones = ({
  desactivado = false,
  color = 'primary',
  acciones = [],
  icono = 'more_horiz',
  variante = 'icono',
  texto = 'acciones',
  label,
  id,
}: BotonAccionesParams) => {
  const [botonAccionesAnchorEl, setBotonAccionesAnchorEl] =
    useState<null | HTMLElement>(null)

  const desplegarMenu = (event: React.MouseEvent<HTMLElement>) => {
    setBotonAccionesAnchorEl(event.currentTarget)
  }

  const cerrarMenu = () => {
    setBotonAccionesAnchorEl(null)
  }

  const [openTooltip, setOpenTooltip] = useState(false)

  const handleTooltipClose = () => {
    setOpenTooltip(false)
  }

  const handleTooltipOpen = () => {
    setOpenTooltip(true)
  }

  return (
    <Tooltip
      title={label}
      onClose={handleTooltipClose}
      open={openTooltip}
      onMouseOver={() => {
        if (!botonAccionesAnchorEl) handleTooltipOpen()
      }}
    >
      <span>
        {variante == 'boton' && (
          <Button
            id={id}
            aria-label={label}
            variant={'contained'}
            sx={{ ml: 1, mr: 1 }}
            size={'small'}
            onClick={(event) => {
              handleTooltipClose()
              desplegarMenu(event)
            }}
            color="primary"
          >
            {texto}
          </Button>
        )}
        {variante == 'icono' && (
          <IconButton
            id={id}
            aria-label={label}
            size="small"
            onClick={(event) => {
              handleTooltipClose()
              desplegarMenu(event)
            }}
            color="primary"
          >
            <Icono color={desactivado ? 'disabled' : color}>{icono}</Icono>
          </IconButton>
        )}
        <Menu
          id="menu-acciones"
          anchorEl={botonAccionesAnchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(botonAccionesAnchorEl)}
          onClose={cerrarMenu}
          autoFocus={false}
        >
          {acciones
            .filter((value) => value.mostrar)
            .map((accion, index) => (
              <MenuItem
                sx={{ px: 2, py: 1.5, m: 0 }}
                id={accion.id}
                key={`${index}-accion`}
                onClick={(event) => {
                  cerrarMenu()
                  if (accion.accion) return accion.accion(event)
                }}
                disabled={accion.desactivado}
              >
                <Icono color={accion.color}>{accion.icono}</Icono>
                <Box width={'11px'} />
                <Typography variant={'body2'}>{accion.titulo}</Typography>
              </MenuItem>
            ))}
        </Menu>
      </span>
    </Tooltip>
  )
}
