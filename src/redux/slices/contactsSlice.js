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
    edit(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      )
      state.contacts[index] = action.payload
    },
    delete(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      )
    },
  },
})

export const {
  init,
  add,
  edit,
  ['delete']: deleteContact,
} = contactsSlice.actions

export default contactsSlice.reducer
