'use client';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material/styles';
import { cyan, pink } from '@mui/material/colors';

// Create a theme instance.
let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: cyan,
    secondary: pink,
    error: {
      main: '#ff6358',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          html {
            scroll-behavior: smooth;
          }
        `,
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
