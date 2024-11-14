import { createTheme } from '@mui/material/styles';

// material ui custom theme
const theme = createTheme({
  palette: {
    primary: {
      50: '#fef4ee',
      100: '#fde5d7',
      200: '#fac8ae',
      300: '#f6a17b',
      400: '#f0693c',
      500: '#ed4c22',
      600: '#de3418',
      700: '#b82516',
      800: '#932019',
      900: '#761d18',
      950: '#400b0a',
      main: '#ed4c22', // main color for primary 500
      contrastText: '#ffffff', // text color(white) against primary color
    },
    secondary: {
      50: '#f7f8f8',
      100: '#edeef1',
      200: '#d8dbdf',
      300: '#b6bac3',
      400: '#8e95a2',
      500: '#6b7280',
      600: '#5b616e',
      700: '#4a4e5a',
      800: '#40444c',
      900: '#383a42',
      950: '#25272c',
      main: '#6b7280', // main color for secondary 500
      contrastText: '#ffffff', // text color(white) against secondary color
    },
    error: {
      main: '#f44336',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ffa726',
      contrastText: '#000000',
    },
    success: {
      main: '#4caf50',
      contrastText: '#ffffff',
    },
    danger: {
      main: '#e11d3f', // Similar to primary[600]
      contrastText: '#ffffff',
    },
    background: {
      default: '#f6f7f9',
      paper: '#ffffff',
    },
  },
  typography: {
    // You can customize typography here if needed
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
});

export default theme;