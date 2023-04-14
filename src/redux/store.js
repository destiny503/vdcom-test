import { combineReducers, configureStore } from '@reduxjs/toolkit'

import contactsReducer from './slices/contactsSlice'

const rootReducer = combineReducers({
  contactsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
