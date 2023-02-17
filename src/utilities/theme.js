import { createTheme } from '@mui/material/styles'

export const Colors = {
  // primary: '#00768E',
  primary: '#000',
  secondary: '#0000FF',
}

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
      // dark: '#141110',
      // contrastText: '#CCD6DC',
    },
    secondary: {
      main: Colors.secondary,
      dark: '',
    },
    text: {
      primary: Colors.primary,
      secondary: Colors.primary,
    },
    background: {
      paper: Colors.white,
      default: Colors.white,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 250,
          background: Colors.primary,
          color: Colors.white,
          borderRadius: '0px 100px 100px 0px',
          borderRight: `1px solid ${Colors.primary}`,
          //   height: '50vh',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: Colors.white,
        },
      },
    },
  },
  typography: {
    body1: {
      fontSize: '15px',
    },
    body2: {
      fontSize: '12px',
    },
    button: {
      textTransform: 'initial',
      fontSize: '15px',
    },
  },
})
export default theme
