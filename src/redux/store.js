import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import contactsReducer from './slices/contactsSlice'

const rootReducer = combineReducers({
  authReducer,
  contactsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
