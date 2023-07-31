import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

interface ProgresoLinealType {
  mostrar?: boolean
}

export default function ProgresoLineal({ mostrar = true }: ProgresoLinealType) {
  return mostrar ? (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  ) : null
}
