import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppLanguageProvider } from './contexts/AppLanguageProvider';
import './i18n';

ReactDOM.render(
    <BrowserRouter>
        <AppLanguageProvider>
            <App />
        </AppLanguageProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
