import { createTheme } from '@mui/material'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#21201F',
      paper: '#373635',
    },
    primary: {
      main: '#A7C8FF',
    },
    secondary: {
      main: '#BDC7DC',
    },
    error: {
      main: '#FFB4A9',
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#373635',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#302F2E',
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#373635',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        margin: 'dense',
        size: 'small',
      },
    },
    MuiDialog: {
      defaultProps: {
        PaperProps: {
          sx: {
            backgroundColor: '#131313',
          },
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        fontSizeInherit: () => ({
          fontSize: 'inherit !important',
        }),
        fontSizeSmall: ({ theme }) => ({
          fontSize: `${theme.typography.pxToRem(20)} !important`,
        }),
        fontSizeLarge: ({ theme }) => ({
          fontSize: `${theme.typography.pxToRem(36)} !important`,
        }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
})
