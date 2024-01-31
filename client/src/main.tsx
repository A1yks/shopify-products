import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import '@shopify/polaris/build/esm/styles.css';
import '@/styles/index.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <AppProvider i18n={enTranslations}>
                <App />
            </AppProvider>
        </Provider>
    </React.StrictMode>
);
