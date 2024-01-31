import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import enTranslations from '@shopify/polaris/locales/en.json';
import { setupStore } from '../store';
import type { AppStore, RootState } from '../store';
import { AppProvider } from '@shopify/polaris';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>;
    store?: AppStore;
}

export function renderWithProviders(
    ui: React.ReactElement,
    { preloadedState = {}, store = setupStore(preloadedState), ...renderOptions }: ExtendedRenderOptions = {}
) {
    function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
        return (
            <Provider store={store}>
                <AppProvider i18n={enTranslations}>{children}</AppProvider>
            </Provider>
        );
    }
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
