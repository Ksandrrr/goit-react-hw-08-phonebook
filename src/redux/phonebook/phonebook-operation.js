import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shered/api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);

const isDublicate = (contact, { name, number }) => {
  const normalizedName = name.toLowerCase();
  const normalizedPhone = number.toLowerCase();
  const dublicate = contact.find(contact => {
    return (
      contact.name.toLowerCase() === normalizedName &&
      contact.number.toLowerCase() === normalizedPhone
    );
  });
  return Boolean(dublicate);
};

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.addContacts(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDublicate(contacts.items, data)) {
        alert(`${data.name} is already in contacts`);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContacts(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

