import { Action, ThunkAction, combineReducers, configureStore  } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userApi, { userReducer } from "../api/user";
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
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import customerApi, { customerReducer } from "../api/customer";
import roleApi, { roleReducer } from "../api/role";

// Cấu hình persist ( lưu localStorage )
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
const rootReducer = combineReducers({
    [userApi.reducerPath]: userReducer,
    [customerApi.reducerPath]: customerReducer,
    [roleApi.reducerPath]: roleReducer,
})
const middleware = [userApi.middleware, customerApi.middleware, roleApi.middleware]

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

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export default persistStore(store)