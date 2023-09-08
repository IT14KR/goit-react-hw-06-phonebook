import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items = [...state.items, action.payload];
      },
    },
    removeContact(state, action) {
      state.items = state.items.filter(
        item => item.nameInputId !== action.payload
      );
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
