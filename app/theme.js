'use client'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0070f3',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#red',
    },
  },
});

export default theme;
