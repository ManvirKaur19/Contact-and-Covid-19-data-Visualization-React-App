// features/contacts/contactSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the interface for a contact
export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: 'active' | 'inactive';
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Omit<Contact, 'id'>>) {
      const newContact: Contact = {
        id: state.contacts.length + 1, // Generate ID based on length of existing contacts array
        ...action.payload,
      };
      state.contacts.push(newContact);
      console.log("Here is the new contact")
      console.log(newContact);
    },
    updateContact(state, action: PayloadAction<Contact>) {
      const updatedContact = action.payload;
      const index = state.contacts.findIndex(contact => contact.id === updatedContact.id);
      if (index !== -1) {
        state.contacts[index] = updatedContact;
      }
    },
    deleteContact(state, action: PayloadAction<number>) {
      console.log("Attempting to delete contact with ID:", action.payload);
      const idToDelete = action.payload;
      state.contacts = state.contacts.filter(contact => contact.id !== idToDelete);
    },
    // Add other reducers for editing and deleting contacts
  },
});

export const { addContact, updateContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
