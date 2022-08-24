import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { profileSlice } from './profile'

import { modalsSlice } from 'features/Modals/slice'
import { catalogApi } from 'services/catalog'

const rootReducer = combineReducers({
  [profileSlice.name]: profileSlice.reducer,

  [modalsSlice.name]: modalsSlice.reducer,

  [catalogApi.reducerPath]: catalogApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catalogApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
