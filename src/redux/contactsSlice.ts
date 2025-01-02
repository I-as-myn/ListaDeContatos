import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Contact = {
  id: number
  name: string
  email: string
  phone: string
}

const initialState: Contact[] = []

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.push(action.payload)
    },
    removeContact: (state, action: PayloadAction<number>) => {
      return state.filter((contact) => contact.id !== action.payload)
    },
    editContact: (
      state,
      action: PayloadAction<{ id: number; uptadeContact: Partial<Contact> }>
    ) => {
      const { id, uptadeContact } = action.payload
      const contact = state.find((contact) => contact.id === id)
      if (contact) {
        Object.assign(contact, uptadeContact)
      }
    }
  }
})

export const { addContact, removeContact, editContact } = contactsSlice.actions
export default contactsSlice.reducer
