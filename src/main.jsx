import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider, createTheme } from '@mui/material';

import './index.css';

import App from './components/App';

const theme = createTheme({ palette: { primary: { main: '#61dafb' }, secondary: { main: '#da61bf' } } });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
