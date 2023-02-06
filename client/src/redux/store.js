import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: userReducer,
    preloadedState
  })
}
