import { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../common/utils/createEmotionCache'
import DebugBanner from '../common/components/ui/utils/DebugBanner'
import { FullScreenLoadingProvider, SideBarProvider } from '../context/ui'
import { imprimir } from '../common/utils/imprimir'
import { ThemeProvider } from '../context/ui/ThemeContext'
import { AuthProvider } from '../context/auth'
import { Sidebar } from '../common/components/ui'
import { Constantes } from '../config'
import { SnackbarProvider } from 'notistack'
import { init } from '@socialgouv/matomo-next'
import { useEffect } from 'react'

import 'material-icons/iconfont/outlined.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const entorno = Constantes.appEnv
  imprimir(`🚀 iniciando en modo ${entorno}`)

  useEffect(() => {
    if (
      MATOMO_URL &&
      MATOMO_SITE_ID &&
      MATOMO_URL != '' &&
      MATOMO_SITE_ID != ''
    )
      init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID })
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <FullScreenLoadingProvider>
        <SnackbarProvider maxSnack={1}>
          <DebugBanner />
          <AuthProvider>
            <SideBarProvider>
              <ThemeProvider>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Sidebar />
                <Component {...pageProps} />
              </ThemeProvider>
            </SideBarProvider>
          </AuthProvider>
        </SnackbarProvider>
      </FullScreenLoadingProvider>
    </CacheProvider>
  )
}
