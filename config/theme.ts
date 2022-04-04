import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff3b61',
    },
    secondary: {
      main: '#00e975',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px',
    'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
    'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
    'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
    'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
  spacing: 8,
  typography: {
    fontFamily: '"Source Sans Pro", sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
        },
      },
      defaultProps: {
        color: 'transparent'
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      }
    },
  },
});
