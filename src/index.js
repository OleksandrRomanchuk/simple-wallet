import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from 'App';
import { theme } from 'theme/theme';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/simple-wallet">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
