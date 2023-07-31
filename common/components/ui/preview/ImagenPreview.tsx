import {
  CardActionArea,
  Dialog,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Image, { ImageProps } from 'next/image'
import React, { useState } from 'react'
import { Icono } from '../Icono'
import { TransitionSlide, TransitionZoom } from '../modales/Animations'

interface ImagenProp extends ImageProps {
  // Props adicionales
}

const ImagenPreview: React.FC<ImagenProp> = (props) => {
  const theme = useTheme()
  let dsm = useMediaQuery(theme.breakpoints.down('sm'))

  const [mostrar, setMostrar] = useState<boolean>(false)

  const cerrarModalImagen = () => {
    setMostrar(false)
  }
  return (
    <>
      <Dialog
        fullScreen={dsm}
        open={mostrar}
        onClose={cerrarModalImagen}
        // maxWidth={'xl'}
        title={'Cerrar'}
        TransitionComponent={dsm ? TransitionSlide : TransitionZoom}
      >
        <DialogTitle sx={{ display: 'contents' }}>
          {props.alt && (
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              sx={{ p: 0.4, pl: 2 }}
            >
              <Typography
                sx={{ fontSize: 12 }}
                variant="caption"
                color={'text.secondary'}
              >
                {props.alt}
              </Typography>
              <IconButton
                onClick={() => {
                  setMostrar(false)
                }}
                color={'primary'}
              >
                <Icono fontSize="small">close</Icono>
              </IconButton>
            </Stack>
          )}
        </DialogTitle>
        <Image {...props} alt={props.alt} />
      </Dialog>

      <CardActionArea
        onClick={() => {
          setMostrar(true)
        }}
        sx={{ cursor: 'zoom-in' }}
      >
        <Image {...props} alt={props.alt} />
      </CardActionArea>
    </>
  )
}

export default ImagenPreview
