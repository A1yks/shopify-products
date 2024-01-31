import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './api';

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
