import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material'
import { FC, PropsWithChildren } from 'react'
import { TransitionZoom } from './Animations'
import { PortalProps } from '@mui/base/Portal'

interface Props {
  isOpen: boolean
  titulo: string
  texto: string
  disablePortal?: PortalProps['disablePortal']
  disableScrollLock?: boolean
}

export const AlertDialog: FC<PropsWithChildren<Props>> = ({
  isOpen,
  titulo,
  texto,
  children,
  disablePortal,
  disableScrollLock,
}) => {
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={TransitionZoom}
      disablePortal={disablePortal}
      disableScrollLock={disableScrollLock}
    >
      <DialogTitle sx={{ m: 1, p: 2 }}>{titulo}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography component={'span'}>{texto}</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>{children}</DialogActions>
    </Dialog>
  )
}
