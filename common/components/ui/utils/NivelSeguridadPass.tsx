import React, { useEffect, useState } from 'react'
import { Box, LinearProgress } from '@mui/material'
import { IZXCVBNResult } from 'zxcvbn-typescript'
import Typography from '@mui/material/Typography'
import { seguridadPass } from '../../../utils'

export interface LinearColorType {
  progress: number
  color:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'inherit'
}

export const LinearColor = ({ progress, color }: LinearColorType) => (
  <LinearProgress color={color} variant="determinate" value={progress} />
)

export interface NivelSeguridadPassType {
  pass: string
}

export const NivelSeguridadPass = ({ pass }: NivelSeguridadPassType) => {
  const [resultado, setResultado] = useState<IZXCVBNResult | undefined>(
    undefined
  )

  useEffect(() => {
    seguridadPass(pass).then((value) => setResultado(value))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pass])

  let color:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'inherit'

  switch (resultado?.score) {
    case 0: {
      color = 'error'
      break
    }
    case 1: {
      color = 'error'
      break
    }
    case 2: {
      color = 'warning'
      break
    }
    case 3: {
      color = 'warning'
      break
    }
    case 4: {
      color = 'success'
      break
    }
    default: {
      color = 'info'
      break
    }
  }

  return (
    <Box>
      <Typography
        variant={'caption'}
        sx={{ fontWeight: 'fontWeightMedium', pt: 1, pb: 3 }}
      >
        Nivel de seguridad
      </Typography>
      <LinearColor color={color} progress={(resultado?.score ?? 0) * 25} />
    </Box>
  )
}
