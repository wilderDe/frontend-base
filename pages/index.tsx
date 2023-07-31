import type { NextPage } from 'next'
import { Grid, Typography } from '@mui/material'
import { siteName } from '../common/utils'

const Inicio: NextPage = () => {
  const nombreSitio: string = siteName()

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Typography variant={'h4'} component="h1">
        {nombreSitio}
      </Typography>
    </Grid>
  )
}

export default Inicio
