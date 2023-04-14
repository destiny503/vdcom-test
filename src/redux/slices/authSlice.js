import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: '',
  password: '',
  auth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginReducer(state, action) {
      state.login = action.payload.login
      state.password = action.payload.password
      state.auth = action.payload.auth
    },
  },
})

export const { loginReducer } = authSlice.actions
export default authSlice.reducer
