import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import { NavbarUser } from '../ui'
import Toolbar from '@mui/material/Toolbar'
import { useSidebar } from '../../../context/ui'
import { siteName } from '../../utils'

interface Props {
  title?: string
}

export const LayoutUser: FC<PropsWithChildren<Props>> = ({
  title = siteName(),
  children,
}) => {
  const { sideMenuOpen } = useSidebar()

  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.only('sm'))
  const xs = useMediaQuery(theme.breakpoints.only('xs'))
  const md = useMediaQuery(theme.breakpoints.only('md'))

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      justifyItems={'center'}
    >
      <Box sx={{ display: 'flex' }}>
        <Head>
          <title>{title}</title>
        </Head>
        <NavbarUser />
      </Box>
      <Box
        component="main"
        sx={{
          width: sm || xs || md ? '100%' : sideMenuOpen ? '78%' : '100%',
          // backgroundColor: 'primary.main',
          display: 'flex',
          flexDirection: 'column',
          ml: sm || xs || md ? '0%' : sideMenuOpen ? '240px' : '0%',
          transition: 'all 0.2s ease-out !important',
        }}
      >
        <Toolbar />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="initial"
          justifyItems={'center'}
          style={{ minHeight: '80vh' }}
        >
          <div
            style={{
              height: '75vh',
              width: xs || sm ? '90%' : '95%',
            }}
          >
            <Box height={'30px'} />
            {children}
          </div>
        </Grid>
      </Box>
    </Grid>
  )
}
