import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: '',
  reducers: {
    addFilter(_, action) {
      return action.payload;
    },
  },
});

export const { addFilter } = filterSlice.actions;
