import { Box, Grid, Typography } from '@mui/material'
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from '@mui/lab'

import { Icono } from '../Icono'
import {
  ColorIconoType,
  IBitacoraAcciones,
  IBitacoraItems,
} from './bitacoraTypes'

type IconoSizeType = 'small' | 'medium' | 'large' | 'inherit'

export interface IBitacoraProps {
  titulo: string
  acciones: Array<IBitacoraAcciones>
  onClick?: (item: IBitacoraItems) => void
  iconSize?: IconoSizeType
}

export const Bitacora = ({
  titulo = '',
  acciones = [],
  onClick,
  iconSize,
}: IBitacoraProps) => {
  return (
    <>
      {acciones.length > 0 ? (
        <>
          <Grid container direction={'row'} justifyContent={'space-between'}>
            <Typography textAlign={'center'} pb={1} px={1}>
              {titulo}
            </Typography>
          </Grid>
          {acciones.map((accion, index) => (
            <Box
              key={`id-accion-item-${index}`}
              sx={{
                px: 1,
                py: 0,
                ...(index === 0
                  ? { borderRadius: '12px 12px 0px 0px' }
                  : index === acciones.length - 1
                  ? { borderRadius: '0px 0px 12px 12px' }
                  : {}),
              }}
            >
              <Typography
                color="text.secondary"
                variant={'subtitle2'}
                sx={{ pb: 1, pt: 1 }}
              >
                {accion.titulo}
              </Typography>
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                  m: 0,
                  py: 0,
                  pr: 0,
                }}
              >
                {accion.items.map((item, index) => (
                  <TimelineItem key={`accion-${index}`} sx={{ py: 0 }}>
                    <TimelineSeparator>
                      <TimelineDot
                        color={item.color_icono as ColorIconoType}
                        sx={{
                          boxShadow: 'none',
                        }}
                        variant={item.icono ? 'filled' : 'filled'}
                      >
                        {item.icono && (
                          <Icono
                            color={'inherit'}
                            fontSize={iconSize ? iconSize : 'small'}
                          >
                            {item.icono}
                          </Icono>
                        )}
                      </TimelineDot>
                      {index < accion.items.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{ py: 1 }}
                      onClick={() => {
                        if (onClick) {
                          onClick(item)
                        }
                      }}
                    >
                      {item.titulo && (
                        <Typography variant="subtitle2" fontWeight={'medium'}>
                          {`${item.titulo}`}
                        </Typography>
                      )}
                      <Typography
                        variant="subtitle2"
                        display={'inline'}
                        fontWeight={'regular'}
                      >
                        {item.descripcion}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        variant="subtitle2"
                        fontWeight={'light'}
                      >
                        {item.fecha}
                      </Typography>
                      {item.componente}
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Box>
          ))}
        </>
      ) : (
        <Typography
          textAlign={'center'}
          variant="subtitle1"
          color={'text.secondary'}
        >
          No realizaste ninguna acción
        </Typography>
      )}
    </>
  )
}
