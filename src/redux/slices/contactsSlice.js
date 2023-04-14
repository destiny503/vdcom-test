import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  contacts: [],
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    init(state, action) {
      state.contacts = action.payload
    },
    add(state, action) {
      state.contacts.push(action.payload)
    },
    delete(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      )
    },
  },
})

export default contactsSlice.reducer
