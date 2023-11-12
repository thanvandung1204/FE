// import authApi, { authReducer } from '@/api/auth';
import imageProductApi, { imageProductReducer } from '@/api/imageProduct';
import productApi, { productReducer } from '@/api/product';
import sizeApi, { sizeReducer } from '@/api/sizes';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'auths']
}
const rootReducer = combineReducers({
    [productApi.reducerPath]: productReducer,
    [sizeApi.reducerPath]: sizeReducer,
    [imageProductApi.reducerPath]: imageProductReducer,

    // [authApi.reducerPath]: authReducer
})
const middleware = [productApi.middleware, sizeApi.middleware ,imageProductApi.middleware]


const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(...middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default persistStore(store);
